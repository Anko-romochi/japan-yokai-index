# Evidence Pack v001 — 汗かき地蔵 (Source Deepening 100, #29)

調査日: 2026-09-28 JST。基準: public main `c3d96e28456e3c19f4245f795486d08f099d40d5`。研究成果物のみ。Local LLM（Gemma 4 12B）の限定的な抽出メモを作成し、固有名詞・年代・出典深度は下記公開資料と凍結Corpusで再照合した。生成文を証拠として数えない。

## 凍結Corpus

- Target entity ID: `asekaki_jizo_nakajima`; canonical name: 汗かき地蔵（現行kana: あせかきじぞう）; current entity_type: `object_spirit`。
- Current aliases: 奥州汗かき地蔵。Current region: 福島県中島村代畑地区。Current period fields: 未記入。
- Current claims:
- `claim_0868`: 中島村の解説は、代畑地区の地蔵堂にある石仏について、災厄に先立って体に汗を流すという伝承と『奥州汗かき地蔵尊』の呼称を紹介する。 Evidence locator: source_0617 『汗かき地蔵』見出し直下、石仏の所在地・発汗伝承・呼称の段
- `claim_0869`: 福島県教育委員会の個別項目は、この石仏の読みを『あせかきじぞう』と示し、背面に建武2年の建立年が記され、1975年3月に村文化財に指定されたと説明する。 Evidence locator: source_0618 項目見出し『汗かき地蔵（あせかきじぞう）』および『紹介説明』第1段
- Current sources:
- `source_0617` 村の歴史と文化 / institutional_explanation / registered date: 2016-03-10 / https://www.vill-nakajima.jp/page/page000197.html
- `source_0618` うつくしま電子事典『汗かき地蔵（あせかきじぞう）』 / institutional_catalog / registered date: 未記入 / https://www.gimu.fks.ed.jp/plugin/databases/detail/2/18/17
- Current evidence depth (research assessment): **Level 1**。原掲載本文・原物を未確認。

## Source chain / original publication / locator

- **Layer A — index or explanation:** 中島村と福島県教育委員会の現代解説が同じ代畑地区の石仏を説明する。
- **Layer B — direct or original source:** 石仏背面の建武2年銘（1335年）が直接物証候補。写真・拓本・銘文全体は今回未確認。汗の伝承をその年へ遡らせない。 [資料リンク](https://www.gimu.fks.ed.jp/plugin/databases/detail/2/18/17)。
- **Original source locator:** 原本文locator未確定。目録の頁・号は本文閲覧と区別。
- **Layer C — earlier or independent evidence:** 江戸末期までの参詣という両機関の説明に対応する寺社記録は未読。二ページの類似説明を独立古記録と数えない。
- **Layer D — later explanation / reuse:** 村は2016年に、県は公開日不明の教材で汗を流す伝承を紹介。
- **Source independence:** DB要約・再掲・翻刻と対応原本を別々の独立証拠に数えない。別作品の関係も原文比較までは未確定。

## Identity / name / chronology / geography

- **Source publication date, alleged event date, earliest confirmed appearance, later reuse date:** 1335年は建立銘、1975年3月は文化財指定、2016-03-10は村ページ更新日。奇跡伝承の初出は未確定。
- **Observed names / observed readings:** 現行「汗かき地蔵」、alias「奥州汗かき地蔵」。県の読み「あせかきじぞう」。銘文中の原名は未確認。
- **Geographic wording:** 両機関とも福島県中島村代畑地区の地蔵堂。地域を起源地へ拡張しない。
- **Entity grain assessment:** 現存石仏／災厄を汗で知らせる伝承の対象／祭祀対象。
- **Identity conflicts / same-name conflicts:** 物体の建立と人格化・予兆伝承は別の年代。
- **Persona formation evidence:** 祭祀・予兆の役割は説明されるが異なる時点の原資料が不足。
- **Unresolved questions:** 背面銘文画像と汗の伝承の早期記録はどこにあるか。
- **Recommended corpus action:** 背面銘文画像と江戸期記録の調査候補。現行年を伝承初出へ流用しない。 本バッチではCorpusの修正、merge、split、alias追加を実行しない。

## Depth decision

Level 1。Level 2+は未認定。Level 3は認定しない。原文の長文転載なし。
