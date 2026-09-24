"""Constrained Local LLM helper. It extracts surface forms and locators only.

All returned strings must occur verbatim in the supplied snippet. The caller,
not the model, decides entity identity, work identity, aliases, claim layer,
and Corpus admission. A failed gate never writes to data/*.jsonl.
"""

import argparse
import json
import re
import urllib.error
import urllib.request
from pathlib import Path


ENDPOINT = "http://localhost:1234/api/v1/chat"
MODEL = "google/gemma-4-12b"
PROMPT = """資料から文字列を抜き出すだけの作業です。意味を判断しないでください。
出力は次の4キーだけのJSON object。各値は文字列の配列です。
{"name_mentions":[],"record_ids":[],"page_locators":[],"section_headings":[]}
name_mentions: 資料中に実際にある怪異名・人名・地名・作品名などの表記をそのまま列挙。作品か妖怪か、同一人物か、別名かを判断しない。数字だけのIDは入れない。
record_ids: 「■ 番号」の値のみ。page_locators: 「■ 掲載箇所・開始頁」の値のみ。section_headings: 「###」で始まる節番号・見出しのみ。
値を補わない。説明文・分類・要約・推測・引用先の紐付けを出さない。```で囲まずJSONだけを返す。"""
KEYS = ("name_mentions", "record_ids", "page_locators", "section_headings")


def extract(snippet):
    payload = {
        "model": MODEL,
        "system_prompt": PROMPT,
        "input": "この資料に現れる表記を抽出してください。\n" + snippet,
        "temperature": 0,
        "max_output_tokens": 700,
        "reasoning": "off",
        "store": False,
        "stream": False,
    }
    request = urllib.request.Request(
        ENDPOINT,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
    )
    try:
        with urllib.request.urlopen(request, timeout=120) as response:
            body = json.load(response)
    except urllib.error.HTTPError as exc:
        raise RuntimeError(f"local API HTTP {exc.code}: {exc.read(500).decode('utf-8', errors='replace')}") from exc
    raw = "".join(item.get("content", "") for item in body.get("output", []) if item.get("type") == "message")
    if not raw:
        raise RuntimeError("empty local response")
    return raw


def parse(raw):
    value = raw.strip()
    normalized_fence = False
    if value.startswith("```json") and value.endswith("```"):
        value = value[7:-3].strip()
        normalized_fence = True
    return json.loads(value), normalized_fence


def check(output, snippet, accepted_names=()):
    errors = []
    if not isinstance(output, dict) or set(output) != set(KEYS):
        return ["wrong JSON shape"]
    for key in KEYS:
        items = output[key]
        if not isinstance(items, list) or any(not isinstance(item, str) for item in items):
            errors.append(f"{key}: not a string array")
            continue
        for item in items:
            if not item or item not in snippet:
                errors.append(f"{key}: absent from input: {item!r}")
            if key == "name_mentions" and item.isdecimal():
                errors.append(f"{key}: numeric ID as name: {item!r}")
    if errors:
        return errors
    expected_records = re.findall(r"■ 番号\s+([A-Za-z0-9-]+)", snippet)
    expected_pages = re.findall(r"■ 掲載箇所・開始頁\s+([^\n]+)", snippet)
    if output["record_ids"] != expected_records:
        errors.append("record_ids: mismatch against labelled source field")
    if output["page_locators"] != expected_pages:
        errors.append("page_locators: mismatch against labelled source field")
    source_headings = re.findall(r"^### (.+)$", snippet, flags=re.MULTILINE)
    normalized_headings = [item.removeprefix("### ") for item in output["section_headings"]]
    if normalized_headings != source_headings:
        errors.append("section_headings: mismatch against source headings")
    if accepted_names and not any(name in mention for name in accepted_names for mention in output["name_mentions"]):
        errors.append("target surface form omitted")
    return errors


def warnings_for(output):
    if not output:
        return []
    return [f"non-name candidate requires Sol filtering: {item}" for item in output["name_mentions"] if re.search(r"\d+(年|巻|号)|^通巻", item)]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--fixtures", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--audit-existing", type=Path, help="Recheck saved Local outputs without rerunning the model")
    args = parser.parse_args()
    fixtures = json.loads(args.fixtures.read_text(encoding="utf-8"))
    saved = {}
    if args.audit_existing:
        saved = {item["case"]: item for item in json.loads(args.audit_existing.read_text(encoding="utf-8"))}
    results = []
    for fixture in fixtures:
        try:
            if args.audit_existing:
                prior = saved[fixture["case"]]
                output, normalized_fence = prior["output"], prior["markdown_fence_normalized"]
            else:
                raw = extract(fixture["snippet"])
                output, normalized_fence = parse(raw)
            errors = check(output, fixture["snippet"], fixture.get("accepted_entity_names", ()))
            results.append({"case": fixture["case"], "source_url": fixture["source_url"], "output": output, "machine_errors": errors, "machine_warnings": warnings_for(output), "markdown_fence_normalized": normalized_fence})
        except Exception as exc:
            results.append({"case": fixture["case"], "source_url": fixture["source_url"], "output": None, "machine_errors": [f"request/parse: {type(exc).__name__}: {exc}"], "machine_warnings": [], "markdown_fence_normalized": False})
        print(f"{fixture['case']}: {results[-1]['machine_errors'] or 'machine PASS'}", flush=True)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    if any(item["machine_errors"] for item in results):
        raise SystemExit(1)


if __name__ == "__main__":
    main()
