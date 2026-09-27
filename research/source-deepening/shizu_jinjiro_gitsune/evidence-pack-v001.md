# Evidence Pack v001 — 甚二郎 (Source Deepening 100, #60)

調査日: 2026-09-28 JST。基準: public main `260e84fa45018423887a604a74093aaec48c2daa`。Local LLM（Gemma 4 12B）の短い抽出案を出典・Corpusで点検し、生成文を証拠にしない。研究成果物のみ。

## 凍結Corpus

- Target entity ID: `shizu_jinjiro_gitsune`; canonical name: 甚二郎（現行kana: 未記入）; current entity_type: `named_supernatural_entity`。
- Current aliases: なし。Current region: 茨城県那珂市・米崎城（物語内）。Current period fields: heisei。
- Current claims:
- `claim_0928`: 茨城県公開の「静神社の四匹の狐」は、兄弟狐の甚二郎が野を守り、のち米崎城にまつられたと語る。 Locator: `source_0656` 個別レコード0800100012「原文」冒頭の兄弟名、甚二郎の野と米崎城の段；原掲載p.12
- Current sources:
- `source_0656` 茨城の民話Webアーカイブ「静神社の四匹の狐」 / database_record / registered date 2000-10-31 / https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1
- Current evidence depth (working model): **Level 2**。

## Source chain / original publication / locator

- **Layer A — index / explanation:** 現行登録は上記。DBや後の解説と原掲載を区別。
- **Layer B — original publication / direct source:** 同じ[茨城県民話Web原文](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1)は2000-10-31刊『ふるさとの昔ばなし』p.12を全文掲載。甚二郎は野を守り、米崎城に祀られる。
- **Original publication locator:** 現行claimのlocatorを上記に保持。本文到達がない場合はLayer Bにその旨明記。
- **Layer C — earlier / independent evidence:** 源太郎Packと同じ一篇に由来する。兄弟の別人格と資料の独立性を混同しない。
- **Layer D — later explanation / reuse:** 県Webアーカイブの公開日未確認。
- **Source independence:** 同一話の原掲載・転記・ウェブ再掲は独立の採話として重複計数しない。

## Identity / chronology / geography

- **Source publication date / alleged event date / earliest confirmed appearance / later reuse date:** 2000-10-31は原掲載刊年。祭祀の開始年・初出は不明。
- **Observed names / observed readings:** 本文「甚二郎」。現行kana未記入なので推測しない。
- **Geographic wording:** 静神社の森と米崎城（本文「那珂町」）を区別。現行地域の那珂市表記は行政上の現在名。
- **Entity grain assessment:** 四兄弟中の次兄として名付けられた狐、野の守り役。
- **Identity conflicts / same-name conflicts:** 源太郎や他兄弟と名前・役割を統合しない。
- **Persona formation evidence:** 単一篇内の役割展開で時系列形成史は未確認。
- **Unresolved questions:** 原掲載p.12画像、採話元、米崎城の祭祀記録。
- **Recommended corpus action:** 原文直接確認でLevel 2。兄弟別entityを保持。 Corpus・schema・validatorは編集しない。

## Depth decision

Level 2。Level 2+およびLevel 3は認定しない。短いlocatorと独自要約のみで、原文長文転載なし。
