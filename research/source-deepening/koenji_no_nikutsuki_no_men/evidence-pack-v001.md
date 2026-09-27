# Evidence Pack v001 — 香園寺の肉付きの面 (Source Deepening 100, #27)

調査日: 2026-09-28 JST。基準: public main `c3d96e28456e3c19f4245f795486d08f099d40d5`。研究成果物のみ。Local LLM（Gemma 4 12B）の限定的な抽出メモを作成し、固有名詞・年代・出典深度は下記公開資料と凍結Corpusで再照合した。生成文を証拠として数えない。

## 凍結Corpus

- Target entity ID: `koenji_no_nikutsuki_no_men`; canonical name: 香園寺の肉付きの面（現行kana: 未記入）; current entity_type: `object_spirit`。
- Current aliases: なし。Current region: 愛媛県。Current period fields: 未記入。
- Current claims:
- `claim_0707`: 西条市の民話掲載文は、嫁を脅かそうとした姑の面が顔に張り付き、香園寺で祈りを受けると外れたと語る。 Evidence locator: source_0500 個別本文「子安大師の肉付きの面」第1–3段落
- Current sources:
- `source_0500` 西条市「民話 子安大師の肉付きの面」 / institutional_explanation / registered date: 2015-01-15 / https://www.city.saijo.ehime.jp/soshiki/syakaikyoiku/minwa0015.html
- Current evidence depth (research assessment): **Level 1**。原掲載本文・原物を未確認。

## Source chain / original publication / locator

- **Layer A — index or explanation:** 西条市は2015年ページで「子安大師の肉付きの面」の民話本文を掲載。
- **Layer B — direct or original source:** 市の文章は完結した一篇の伝承だが採話者・原掲載・採話日を示さない。初回の原掲載ないし現物調査まで遡れていない。 [資料リンク](https://www.city.saijo.ehime.jp/soshiki/syakaikyoiku/minwa0015.html)。
- **Original source locator:** 原本文locator未確定。目録の頁・号は本文閲覧と区別。
- **Layer C — earlier or independent evidence:** 他地域に同名「肉付きの面」があっても、姑・嫁・香園寺の筋を照合せず統合しない。
- **Layer D — later explanation / reuse:** 2015年自治体掲載文と写真。
- **Source independence:** DB要約・再掲・翻刻と対応原本を別々の独立証拠に数えない。別作品の関係も原文比較までは未確定。

## Identity / name / chronology / geography

- **Source publication date, alleged event date, earliest confirmed appearance, later reuse date:** 市ページ更新2015-01-15。姑の物語内年代、採話・初出年代は未確定。
- **Observed names / observed readings:** 現行「香園寺の肉付きの面」。市記事の題名「子安大師の肉付きの面」、本文中の物の名「肉付きの面」。題名と物体名を区別。
- **Geographic wording:** 物語では姑が四国へ来て「小松の香園寺」に参る。来歴の地域は不明。
- **Entity grain assessment:** 面という物品／姑の罰と赦しの説話／香園寺にあると語られる展示物。面そのものが人格を持つとは記されない。
- **Identity conflicts / same-name conflicts:** 現行entity_type object_spirit と本文の物品・因果譚の粒度が合うかレビュー候補。
- **Persona formation evidence:** 道徳説話の役割は確認、資料時点が一つで変化不明。
- **Unresolved questions:** 市掲載文の採話者・旧刊本・面現物の所在と、他地域の同名話との関係は何か。
- **Recommended corpus action:** entity type correction candidate。現物と古採録を確認後に判断。 本バッチではCorpusの修正、merge、split、alias追加を実行しない。

## Depth decision

Level 1。Level 2+は未認定。Level 3は認定しない。原文の長文転載なし。
