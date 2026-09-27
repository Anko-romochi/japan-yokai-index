# Evidence Pack v001 — オテンパクサマ (Source Deepening 100, #57)

調査日: 2026-09-28 JST。基準: public main `260e84fa45018423887a604a74093aaec48c2daa`。Local LLM（Gemma 4 12B）の短い抽出案を出典・Corpusで点検し、生成文を証拠にしない。研究成果物のみ。

## 凍結Corpus

- Target entity ID: `otenpakusama`; canonical name: オテンパクサマ（現行kana: おてんぱくさま）; current entity_type: `named_supernatural_entity`。
- Current aliases: なし。Current region: 静岡県。Current period fields: 未記入。
- Current claims:
- `claim_0812`: 下田市公開の『民話と伝説』第2集は、吉佐美上条の祠をオテンパクサマと呼び、何者か分からない武士の霊を祀った由来と、森の木を伐らない禁忌を記す。 Locator: `source_0575` 伝説21『オテンパクサ』、吉佐美上条の祠・無名の武士の死・禁伐の段
- Current sources:
- `source_0575` 下田市の民話と伝説 第2集 伝説21『オテンパクサ』 / primary_or_early_source / registered date 1979-03-01 / https://www.city.shimoda.shizuoka.jp/category/050201densetsu/111229.html
- Current evidence depth (working model): **Level 2**。

## Source chain / original publication / locator

- **Layer A — index / explanation:** 現行登録は上記。DBや後の解説と原掲載を区別。
- **Layer B — original publication / direct source:** [下田市「オテンパクサ」全文](https://www.city.shimoda.shizuoka.jp/category/050201densetsu/111229.html)は『下田市の民話と伝説 第2集』の再掲で、祠・名無しの武士・禁伐を含む本文に到達。原刊の頁は未確認。
- **Original publication locator:** 現行claimのlocatorを上記に保持。本文到達がない場合はLayer Bにその旨明記。
- **Layer C — earlier / independent evidence:** 落武者の史料、祠の現物・建立日と独立の採話は未確認。
- **Layer D — later explanation / reuse:** 市ウェブ更新2023-03-05。
- **Source independence:** 同一話の原掲載・転記・ウェブ再掲は独立の採話として重複計数しない。

## Identity / chronology / geography

- **Source publication date / alleged event date / earliest confirmed appearance / later reuse date:** 現行source登録は1979-03-01、ウェブ更新は2023-03-05。話中の武士の死や祠建立年は不明。
- **Observed names / observed readings:** 市ページ題「オテンパクサ」、本文の村人呼称「オテンパクサマ」。現行名は後者、読みは現行kana「おてんぱくさま」。
- **Geographic wording:** 本文「吉佐美上条の大屋の裏山」。下田市全域や武士の出身地へ拡張しない。
- **Entity grain assessment:** 祠・小さな武士彫刻・名無しの武士の霊／その場所への敬称。
- **Identity conflicts / same-name conflicts:** 「オテンパクサマ」を実在武士の名前としない。禁伐の対象は森の木。
- **Persona formation evidence:** 事件→祀り→禁伐は一話の筋。異時点の独立証拠はない。
- **Unresolved questions:** 原刊頁・本文異同、祠と彫刻の現物、武士の史料。
- **Recommended corpus action:** 再掲本文を原掲載相当としてLevel 2。entity grainは祠/霊/物体の関係としてレビュー。 Corpus・schema・validatorは編集しない。

## Depth decision

Level 2。Level 2+およびLevel 3は認定しない。短いlocatorと独自要約のみで、原文長文転載なし。
