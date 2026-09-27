# Evidence Pack v001 — 付喪神 (Source Deepening 100, #24)

調査日: 2026-09-28 JST。基準: public main `c3d96e28456e3c19f4245f795486d08f099d40d5`。研究成果物のみ。Local LLM（Gemma 4 12B）の限定的な抽出メモを作成し、固有名詞・年代・出典深度は下記公開資料と凍結Corpusで再照合した。生成文を証拠として数えない。

## 凍結Corpus

- Target entity ID: `tsukumogami`; canonical name: 付喪神（現行kana: つくもがみ）; current entity_type: `object_spirit`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0009`: 国立国会図書館の解説は、石燕『百器徒然袋』に道具が妖怪化した図が登場すると記す。 Evidence locator: source_0002 見出し「付喪神」
- Current sources:
- `source_0002` 鳥山石燕の妖怪図鑑でみる妖怪の世界 / institutional_explanation / registered date: 未記入 / https://www.ndl.go.jp/imagebank/column/sekienyokai
- Current evidence depth (research assessment): **Level 1**。原掲載本文・原物を未確認。

## Source chain / original publication / locator

- **Layer A — index or explanation:** NDL現代コラムは石燕『百器徒然袋』の琵琶・琴・釜等の道具妖怪と、別の『百鬼夜行絵巻』写本を比較する。
- **Layer B — direct or original source:** 『百器徒然袋』は1784年刊とNDLが説明。NDLから原画像へリンクがあるが、個別の図像・丁・付随文字は今回未確認。 [資料リンク](https://www.ndl.go.jp/imagebank/column/sekienyokai)。
- **Original source locator:** 原本文locator未確定。目録の頁・号は本文閲覧と区別。
- **Layer C — earlier or independent evidence:** 『百鬼夜行絵巻』写本は別作品。制作・書写年、石燕との影響関係を原画面で未検証。
- **Layer D — later explanation / reuse:** NDLが両作品を「付喪神」概念で説明する現代分類。
- **Source independence:** DB要約・再掲・翻刻と対応原本を別々の独立証拠に数えない。別作品の関係も原文比較までは未確定。

## Identity / name / chronology / geography

- **Source publication date, alleged event date, earliest confirmed appearance, later reuse date:** 1784年は『百器徒然袋』刊年であり「付喪神」概念の起源年ではない。写本の制作年と個別図像初出は未確定。
- **Observed names / observed readings:** 現行「付喪神」。NDLは「付喪神（つくもがみ）」という見出しを用いる。個々の楽器・釜の名と集合名を混同しない。
- **Geographic wording:** NDL記事から地域起源は確定できない。
- **Entity grain assessment:** 集合的概念／個別の道具妖怪／絵巻・版本中の図像。
- **Identity conflicts / same-name conflicts:** 個別図像を単一の命名個体「付喪神」に自動統合しない。
- **Persona formation evidence:** 絵巻と1784年版本の比較候補。原画像と先後関係未検証のため候補認定は保留。
- **Unresolved questions:** 『百器徒然袋』と『百鬼夜行絵巻』の該当丁・個別名称・影響の先後は確認できるか。
- **Recommended corpus action:** 個別丁と名称・絵巻系統を確認するまでは現行claimをNDL解説の要約に留める。 本バッチではCorpusの修正、merge、split、alias追加を実行しない。

## Depth decision

Level 1。Level 2+は未認定。Level 3は認定しない。原文の長文転載なし。
