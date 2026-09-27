# Evidence Pack v001 — 夜泣き布団 (Source Deepening 100, #28)

調査日: 2026-09-28 JST。基準: public main `c3d96e28456e3c19f4245f795486d08f099d40d5`。研究成果物のみ。Local LLM（Gemma 4 12B）の限定的な抽出メモを作成し、固有名詞・年代・出典深度は下記公開資料と凍結Corpusで再照合した。生成文を証拠として数えない。

## 凍結Corpus

- Target entity ID: `yonaki_buton_ani`; canonical name: 夜泣き布団（現行kana: よなきぶとん）; current entity_type: `object_spirit`。
- Current aliases: なし。Current region: 秋田県。Current period fields: 未記入。
- Current claims:
- `claim_0434`: 秋田県立博物館の「夜泣き布団」カードは、買い求めた布団から夜に泣き声が聞こえ、裾から髪と爪が見つかった話を要約する。 Evidence locator: source_0309 個別カード「あらすじ」・番号 6531（原掲載 阿仁町の伝承・民話 pp.97–98 は未照合）
- Current sources:
- `source_0309` 秋田の昔話・伝説・世間話: 夜泣き布団 / database_record / registered date: 未記入 / https://www.akihaku.jp/monogatari/show_detail.php?serial_no=6537
- Current evidence depth (research assessment): **Level 1**。原掲載本文・原物を未確認。

## Source chain / original publication / locator

- **Layer A — index or explanation:** 秋田県立博物館の口承文芸カード6537は、書誌・頁・話者・原文地名とあらすじを示す。
- **Layer B — direct or original source:** 『阿仁町の伝承・民話』第二集、阿仁町教育委員会、1973-03-31、pp.97–98。話者は戸島行年、文体は方言。原掲載本文は未読。 [資料リンク](https://www.akihaku.jp/monogatari/show_detail.php?serial_no=6537)。
- **Original source locator:** 原本文locator未確定。目録の頁・号は本文閲覧と区別。
- **Layer C — earlier or independent evidence:** カードには独立する先行採録はない。類似話リンクは類型比較への入口であり独立同一entityとは数えない。
- **Layer D — later explanation / reuse:** 博物館の索引と要約。
- **Source independence:** DB要約・再掲・翻刻と対応原本を別々の独立証拠に数えない。別作品の関係も原文比較までは未確定。

## Identity / name / chronology / geography

- **Source publication date, alleged event date, earliest confirmed appearance, later reuse date:** 1973-03-31は原書刊行日。出来事年代・採話日・最古の伝承は未確定。
- **Observed names / observed readings:** 現行「夜泣き布団」。カード「夜泣き布団（よなきぶとん）」。「阿仁」は索引IDの区別で本文題ではない。
- **Geographic wording:** カード原文地域「三枚」、現地名「北秋田市」。現行entity地域欄「秋田県」。原表記を保存。
- **Entity grain assessment:** 物品の布団／髪・爪の残る死者の願望／泣き声の世間話。布団に独立した人格があるとは未確認。
- **Identity conflicts / same-name conflicts:** object_spirit型と幽霊・遺物の境界。
- **Persona formation evidence:** 一つの採録しか本文候補なし、形成変化は不明。
- **Unresolved questions:** 1973年原書pp.97–98の方言表現は何か。物品と死者の願望をどう区別するか。
- **Recommended corpus action:** 原書pp.97–98の方言表現を確認。entity type correction candidateとして人間レビュー。 本バッチではCorpusの修正、merge、split、alias追加を実行しない。

## Depth decision

Level 1。Level 2+は未認定。Level 3は認定しない。原文の長文転載なし。
