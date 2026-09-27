# Evidence Pack v001 — 佐倉惣五郎 (Source Deepening 100, #21)

調査日: 2026-09-28 JST。基準: public main `c3d96e28456e3c19f4245f795486d08f099d40d5`。研究成果物のみ。Local LLM（Gemma 4 12B）の限定的な抽出メモを作成し、固有名詞・年代・出典深度は下記公開資料と凍結Corpusで再照合した。生成文を証拠として数えない。

## 凍結Corpus

- Target entity ID: `sakura_sogo`; canonical name: 佐倉惣五郎（現行kana: さくらそうごろう）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: 佐倉宗吾, 木内惣五郎。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0094`: 宗吾霊堂の縁起は、佐倉宗吾の本名を木内惣五郎とし、宝暦二年の百回忌に宗吾道閑居士の法号を贈られたと記す。 Evidence locator: source_0065 本文「我が国の代表的義民」から「以来、惣五郎様は宗吾様と」
- `claim_0095`: 村田竜道は、木内惣五郎の実在と刑死に関する資料と比べ、直訴事件との関係を史実として確定する資料は乏しいと論じる。 Evidence locator: source_0064 印刷頁1–2（PDF頁2–3）冒頭の史実と伝説の区別
- Current sources:
- `source_0064` 佐倉惣五郎の怨霊 / research_article / registered date: 2007-10 / https://da.lib.kobe-u.ac.jp/da/kernel/81001556/81001556.pdf
- `source_0065` 宗吾霊堂緑起 / institutional_explanation / registered date: 未記入 / https://sougoreidou.or.jp/sougoreidou/engi/
- Current evidence depth (research assessment): **Level 1**。原掲載本文・原物を未確認。

## Source chain / original publication / locator

- **Layer A — index or explanation:** 宗吾霊堂の現代縁起と村田竜道の2007年研究論文を区別。
- **Layer B — direct or original source:** 村田論文は木内惣五郎の実在・刑死に関する資料と直訴譚の史実性を分けて論じるが、そこで引用された古資料の原本文は今回未読。 [資料リンク](https://da.lib.kobe-u.ac.jp/da/kernel/81001556/81001556.pdf)。
- **Original source locator:** 原本文locator未確定。目録の頁・号は本文閲覧と区別。
- **Layer C — earlier or independent evidence:** 宗吾霊堂は百回忌1752年の法号「宗吾道閑居士」と1791年の院号を説明。これらの原証書・碑文は未確認。
- **Layer D — later explanation / reuse:** 義民・霊堂の祭祀・怨霊物語・芸能上の姿の関係は村田論文により追跡候補だが古資料の確認が必要。
- **Source independence:** DB要約・再掲・翻刻と対応原本を別々の独立証拠に数えない。別作品の関係も原文比較までは未確定。

## Identity / name / chronology / geography

- **Source publication date, alleged event date, earliest confirmed appearance, later reuse date:** 論文2007-10。霊堂説明中の出来事は1752年百回忌、1791年院号。刑死・直訴の史実性と後の刊行年を分離。最古の怨霊表象は未確定。
- **Observed names / observed readings:** 現行「佐倉惣五郎」、alias「佐倉宗吾」「木内惣五郎」。霊堂は本名を木内惣五郎、後の呼称を宗吾様と説明。資料ごとの綴り・読みは原本未確認。
- **Geographic wording:** 霊堂所在地は千葉県成田市宗吾。祭祀地を物語の発祥地とはしない。
- **Entity grain assessment:** 歴史人物／義民の人物像／祭祀対象／怨霊物語上の人格。
- **Identity conflicts / same-name conflicts:** 直訴譚を実在・刑死と同等の史実として扱わない。
- **Persona formation evidence:** Formation Trace Candidate。名・役割の変化を論文が論じるが、原資料連鎖は未検証。
- **Unresolved questions:** 直訴と刑死の同時代資料、1752年の法号付与の直接記録、怨霊像の最初の文献は何か。
- **Recommended corpus action:** 現行claimは霊堂由緒と論文の見解に帰属させて保持候補。古資料原文へ遡る。 本バッチではCorpusの修正、merge、split、alias追加を実行しない。

## Depth decision

Level 1。Level 2+は未認定。Level 3は認定しない。原文の長文転載なし。
