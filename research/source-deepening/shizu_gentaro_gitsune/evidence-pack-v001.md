# Evidence Pack v001 — 源太郎 (Source Deepening 100, #59)

調査日: 2026-09-28 JST。基準: public main `260e84fa45018423887a604a74093aaec48c2daa`。Local LLM（Gemma 4 12B）の短い抽出案を出典・Corpusで点検し、生成文を証拠にしない。研究成果物のみ。

## 凍結Corpus

- Target entity ID: `shizu_gentaro_gitsune`; canonical name: 源太郎（現行kana: 未記入）; current entity_type: `named_supernatural_entity`。
- Current aliases: なし。Current region: 茨城県那珂市・静／瓜連城（物語内）。Current period fields: heisei。
- Current claims:
- `claim_0927`: 茨城県公開の「静神社の四匹の狐」は、兄弟狐の源太郎が静に残って川を守り、のち瓜連城にまつられたと語る。 Locator: `source_0656` 個別レコード0800100012「原文」冒頭の兄弟名、源太郎の川と瓜連城の段；原掲載p.12
- Current sources:
- `source_0656` 茨城の民話Webアーカイブ「静神社の四匹の狐」 / database_record / registered date 2000-10-31 / https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1
- Current evidence depth (working model): **Level 2**。

## Source chain / original publication / locator

- **Layer A — index / explanation:** 現行登録は上記。DBや後の解説と原掲載を区別。
- **Layer B — original publication / direct source:** [茨城県民話Web「静神社の四匹の狐」原文](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1)は染谷萬千子『ふるさとの昔ばなし』2000-10-31、p.12の公開本文。四兄弟の源太郎が川を守り、瓜連城に祀られると記す。
- **Original publication locator:** 現行claimのlocatorを上記に保持。本文到達がない場合はLayer Bにその旨明記。
- **Layer C — earlier / independent evidence:** 四兄弟は同一篇の別個体。甚二郎Packと同じ原掲載であり独立資料として重複計数しない。
- **Layer D — later explanation / reuse:** 県Webアーカイブの公開日未確認。
- **Source independence:** 同一話の原掲載・転記・ウェブ再掲は独立の採話として重複計数しない。

## Identity / chronology / geography

- **Source publication date / alleged event date / earliest confirmed appearance / later reuse date:** 2000-10-31は原掲載刊年。狐の行動・祭祀開始年と最初の出現は未確定。
- **Observed names / observed readings:** 本文「源太郎」。個体識別は兄弟順と川・瓜連城の役割の組合せで確認。
- **Geographic wording:** 本文の静神社の森、静、瓜連城。現在の行政範囲と話中の場所を分ける。
- **Entity grain assessment:** 四兄弟中の長兄として名付けられた狐、後に守り神として語られる。
- **Identity conflicts / same-name conflicts:** 甚二郎、紋三郎、四郎介をaliasにしない。
- **Persona formation evidence:** 一話内の開拓と祭祀への役割変化。異時点形成史ではない。
- **Unresolved questions:** 原掲載p.12画像、採話元、祭祀の現物・開始年。
- **Recommended corpus action:** 原文直接確認でLevel 2。兄弟別entityを保持。 Corpus・schema・validatorは編集しない。

## Depth decision

Level 2。Level 2+およびLevel 3は認定しない。短いlocatorと独自要約のみで、原文長文転載なし。
