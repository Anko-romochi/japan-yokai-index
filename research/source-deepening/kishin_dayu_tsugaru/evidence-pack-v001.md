# Evidence Pack v001 — 鬼神太夫 (Source Deepening 100, #56)

調査日: 2026-09-28 JST。基準: public main `260e84fa45018423887a604a74093aaec48c2daa`。Local LLM（Gemma 4 12B）の短い抽出案を出典・Corpusで点検し、生成文を証拠にしない。研究成果物のみ。

## 凍結Corpus

- Target entity ID: `kishin_dayu_tsugaru`; canonical name: 鬼神太夫（現行kana: 未記入）; current entity_type: `named_supernatural_entity`。
- Current aliases: なし。Current region: 青森県。Current period fields: 未記入。
- Current claims:
- `claim_0658`: 青森ねぶた祭の2007年作品解説は、鬼神太夫を刀鍛冶の娘との結婚を望む若者として描き、鍛冶場で龍の姿で刀を鍛えると語る。 Locator: `source_0465` 見出し『鬼神太夫』下、若者の来訪から龍が刀を鍛える場面
- `claim_0659`: 『青森県史民俗編資料津軽』は、弘前市十腰内の地名に関わる伝説として『鬼神太夫と刀鍛冶』に言及する。 Locator: `source_0466` pp.410–411 第8章第2節『2 津軽の伝説（1）文化叙事伝説』［巨人］の十腰内に言及する段落
- Current sources:
- `source_0465` 鬼神太夫（2007年青森菱友会ねぶた） / institutional_explanation / registered date 未記入 / https://www.nebuta.jp/archive/nebuta/2007ryouyuukai.html
- `source_0466` 青森県史民俗編資料津軽 第8章 口承文芸 第2節 伝説 / research_article / registered date 2014 / https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MT1_820210
- Current evidence depth (working model): **Level 1**。

## Source chain / original publication / locator

- **Layer A — index / explanation:** 現行登録は上記。DBや後の解説と原掲載を区別。
- **Layer B — original publication / direct source:** [2007年ねぶた作品解説](https://www.nebuta.jp/archive/nebuta/2007ryouyuukai.html)は龍に変じ刀を鍛える若者の筋を直接掲載するが後世の作品説明。[青森県史](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MT1_820210)2014年pp.410–411は同題の伝説を地名説明として短く言及し、採話原文ではない。
- **Original publication locator:** 現行claimのlocatorを上記に保持。本文到達がない場合はLayer Bにその旨明記。
- **Layer C — earlier / independent evidence:** 両資料の共通する地名伝説の原採録・依存関係は未確認。独立の二採録としない。
- **Layer D — later explanation / reuse:** 2007年青森菱友会ねぶた「鬼神太夫」は具体的な視覚・物語の再利用。
- **Source independence:** 同一話の原掲載・転記・ウェブ再掲は独立の採話として重複計数しない。

## Identity / chronology / geography

- **Source publication date / alleged event date / earliest confirmed appearance / later reuse date:** 2007年はねぶた作品年、2014年は県史刊年。刀鍛冶の出来事や十腰内の命名年ではない。
- **Observed names / observed readings:** ねぶた作品題「鬼神太夫」。県史は「鬼神太夫と刀鍛冶」と記す。
- **Geographic wording:** ねぶた解説は鳴沢小屋敷（鰺ヶ沢町）を舞台にし、県史は弘前市十腰内の地名伝説として説明。場所差を保存。
- **Entity grain assessment:** 龍に変じる若者／刀鍛冶の婿候補／地名由来説話の登場者。
- **Identity conflicts / same-name conflicts:** 2007年の造形を古い採話の姿と断定しない。鰺ヶ沢町と弘前市を単一地へ丸めない。
- **Persona formation evidence:** ねぶたへの再利用は確認できるが原採話の差分未確認でFormation Trace Candidateは保留。
- **Unresolved questions:** ねぶた解説と県史の元本、龍という姿の先行例、地名の史料。
- **Recommended corpus action:** 原採録未確認のためLevel 1。地理・造形差を修正候補として記録。 Corpus・schema・validatorは編集しない。

## Depth decision

Level 1。Level 2+およびLevel 3は認定しない。短いlocatorと独自要約のみで、原文長文転載なし。
