#!/usr/bin/env python3
"""Validate this small JSONL corpus with Python's standard library only."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
KINDS = ("entity", "source", "claim")


def check_schema(value: object, schema: dict, where: str, errors: list[str]) -> None:
    """Apply the JSON Schema keywords used by this repository's three schemas."""
    allowed_types = schema.get("type")
    if allowed_types is not None:
        if isinstance(allowed_types, str):
            allowed_types = [allowed_types]
        matches = {
            "object": isinstance(value, dict),
            "array": isinstance(value, list),
            "string": isinstance(value, str),
            "null": value is None,
        }
        if not any(matches.get(t, False) for t in allowed_types):
            errors.append(f"{where}: expected {allowed_types}, got {type(value).__name__}")
            return
    if "enum" in schema and value not in schema["enum"]:
        errors.append(f"{where}: invalid value {value!r}")
    if isinstance(value, str):
        if len(value) < schema.get("minLength", 0):
            errors.append(f"{where}: empty string")
        if "pattern" in schema and not re.fullmatch(schema["pattern"], value):
            errors.append(f"{where}: invalid ID {value!r}")
        if schema.get("format") == "uri" and not (urlparse(value).scheme in ("https", "http") and urlparse(value).netloc):
            errors.append(f"{where}: invalid URL {value!r}")
        if schema.get("format") == "date" and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
            errors.append(f"{where}: invalid date {value!r}")
    if isinstance(value, list):
        if schema.get("uniqueItems") and len(set(map(json.dumps, value))) != len(value):
            errors.append(f"{where}: duplicate array item")
        for i, item in enumerate(value):
            check_schema(item, schema.get("items", {}), f"{where}[{i}]", errors)
    if isinstance(value, dict):
        required = set(schema.get("required", []))
        for key in sorted(required - value.keys()):
            errors.append(f"{where}: missing {key}")
        properties = schema.get("properties", {})
        for key, item in value.items():
            child_schema = properties.get(key)
            if child_schema is None:
                extra = schema.get("additionalProperties", True)
                if extra is False:
                    errors.append(f"{where}: unexpected {key}")
                    continue
                child_schema = extra if isinstance(extra, dict) else {}
            check_schema(item, child_schema, f"{where}.{key}", errors)
        if "anyOf" in schema:
            if not any(_branch_valid(value, branch) for branch in schema["anyOf"]):
                errors.append(f"{where}: at least one locator (URL or external ID) is required")


def _branch_valid(value: dict, branch: dict) -> bool:
    branch_errors: list[str] = []
    check_schema(value, branch, "branch", branch_errors)
    return not branch_errors


def read_jsonl(kind: str, errors: list[str]) -> dict[str, dict]:
    filename = {"entity": "entities.jsonl", "source": "sources.jsonl", "claim": "claims.jsonl"}[kind]
    path = ROOT / "data" / filename
    schema_path = ROOT / "schemas" / f"{kind}.schema.json"
    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8-sig"))
        lines = path.read_text(encoding="utf-8-sig").splitlines()
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        errors.append(f"{path}: {exc}")
        return {}
    records: dict[str, dict] = {}
    for line_no, line in enumerate(lines, 1):
        where = f"{path.relative_to(ROOT)}:{line_no}"
        if not line.strip():
            errors.append(f"{where}: blank JSONL line")
            continue
        try:
            record = json.loads(line)
        except json.JSONDecodeError as exc:
            errors.append(f"{where}: invalid JSON: {exc.msg}")
            continue
        check_schema(record, schema, where, errors)
        if not isinstance(record, dict):
            continue
        record_id = record.get("id")
        if not isinstance(record_id, str):
            continue
        if record_id in records:
            errors.append(f"{where}: duplicate ID {record_id}")
        else:
            records[record_id] = record
    return records


def main() -> int:
    errors: list[str] = []
    entities, sources, claims = (read_jsonl(kind, errors) for kind in KINDS)
    for entity in entities.values():
        for source_id in entity.get("source_ids", []) if isinstance(entity.get("source_ids"), list) else []:
            if not isinstance(source_id, str) or source_id not in sources:
                errors.append(f"entity {entity.get('id')}: missing source {source_id}")
    for claim in claims.values():
        claim_id = claim.get("id")
        entity_id = claim.get("entity_id")
        if not isinstance(entity_id, str) or entity_id not in entities:
            errors.append(f"claim {claim_id}: missing entity {claim.get('entity_id')}")
        refs = claim.get("evidence_source_ids", [])
        refs = refs if isinstance(refs, list) else []
        if claim.get("layer") == "source_fact" and not refs:
            errors.append(f"claim {claim_id}: source_fact requires evidence_source_ids")
        for source_id in refs:
            if not isinstance(source_id, str) or source_id not in sources:
                errors.append(f"claim {claim_id}: missing source {source_id}")
        locations = claim.get("evidence_locations", {})
        if isinstance(locations, dict):
            for source_id in locations:
                if source_id not in refs:
                    errors.append(f"claim {claim_id}: location has unlisted source {source_id}")
            if claim.get("layer") == "source_fact" and any(
                not isinstance(source_id, str) or source_id not in locations for source_id in refs
            ):
                errors.append(f"claim {claim_id}: source_fact requires locations for all evidence")
    if errors:
        for error in errors:
            print(f"FAIL {error}", file=sys.stderr)
        print(f"FAIL: {len(errors)} error(s)", file=sys.stderr)
        return 1
    print(f"PASS: {len(entities)} entities, {len(sources)} sources, {len(claims)} claims")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
