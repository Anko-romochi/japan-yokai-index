# Evidence Pack v001 — 豆腐小僧

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/tofu-kozo/evidence-pack.md`](../../source_deepening/tofu-kozo/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `tofu_kozo` | 豆腐小僧（とうふこぞう） | `named_supernatural_entity` | なし | 未記入 | edo, heisei |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0119` | `tofu_kozo` | 国立国会図書館が1779年刊とする『妖怪仕内評判記』のコマ7左丁には、盆に豆腐を載せて差し出す小僧の図がある。（`source_fact`） | source_0088; source_0088: PID 10301827、コマ7左丁の挿絵 |
| `claim_0120` | `tofu_kozo` | 国立国会図書館の展示解説は、『妖怪仕内評判記』のコマ7の人物を豆腐小僧として紹介する。（`source_fact`） | source_0090; source_0090: 「妖怪『豆腐小僧』」節・『妖怪仕内評判記』図版説明（原資料コマ7へのリンク） |
| `claim_0121` | `tofu_kozo` | 京伝作『怪物つれつれ草』のコマ13右丁には、豆腐を落とした小僧の図があり、国立国会図書館の展示解説も豆腐小僧として紹介する。（`source_fact`） | source_0089, source_0090; source_0089: PID 9892727、コマ13右丁の挿絵; source_0090: 「妖怪『豆腐小僧』」節・『怪物つれつれ草』図版説明（原資料コマ13へのリンク） |
| `claim_0122` | `tofu_kozo` | JFDBは、盆に載せた豆腐を持つ豆富小僧が登場するアニメーション映画『豆富小僧』の公開日を2011年4月29日と記録する。（`source_fact`） | source_0091; source_0091: 作品レコード2874「公開日」「ジャンル」「解説」 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0088` | 妖怪仕内評判記 / `primary_or_early_source` | [1779] | https://dl.ndl.go.jp/pid/10301827/1/7 |
| `source_0089` | 怪物つれつれ草 : 2巻 / `primary_or_early_source` | [1792] | https://dl.ndl.go.jp/pid/9892727/1/13 |
| `source_0090` | 第2章 食文化にみる大豆こばなし / `institutional_explanation` | 未記入 | https://www.ndl.go.jp/kaleido/entry/21/2.html#anchor1 |
| `source_0091` | 豆富小僧（JFDB作品レコード） / `database_record` | 未記入 | https://jfdb.jp/title/2874 |

## 資料層と確認水準

**Current evidence depth: Level 2+**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: NDL展示「妖怪『豆腐小僧』」とJFDB映画レコード。B: NDL『妖怪仕内評判記』PID10301827コマ7左丁、同『怪物つれつれ草』PID9892727コマ13右丁の別作品原画像を先行調査で直接確認。NDL書誌刊年[1779]・[1792]は推定。C: 二作品の相互依存、口承との関係は未確認だが別時点の二作品として比較できる。D: NDL解説は「大あたまこぞう」表記・一つ目小僧との混同を述べ、JFDBは2011年『豆富小僧』の映画作品を記録。

## 観察、identity、grain、chronology

現行「豆腐小僧／とうふこぞう」。原画像で小僧と豆腐に関わる図は確認、図中のくずし字の原表記を確定していない。NDL解説が「豆腐小僧」と同定し別黄表紙の「大あたまこぞう」を挙げる。盆、豆腐、気弱な性格は各作品・解説で段階が異なる。江戸の出版物での確認は創作初発や民俗起源の証明ではない。

## 出典間関係・未解決・推奨Corpus action

二作品の版・依存、豆腐という属性の定着、現代作品への直接継承は未解決。Level 2+は異時点の二作品原画像が確認済みという限定。Formation Trace Candidate: yes。新たなalias・periodの補完は人間レビュー後まで保留。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://dl.ndl.go.jp/pid/10301827/1/7 ; https://dl.ndl.go.jp/pid/9892727/1/13。Layer Bの書誌・到達状態を参照。
- **locator**: NDL PID10301827コマ7左丁、PID9892727コマ13右丁（先行調査で原画像確認）。
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 不明。[1779]/[1792]はNDLの推定刊年。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 黄表紙図像・NDL同定・2011映画personaを別資料層に置く。
- **identity conflicts / same-name conflicts**: 二作品の小僧が完全同一個体、または口承から直接生まれたとは未証明。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。二作品の版・依存、豆腐という属性の定着、現代作品への直接継承は未解決。Level 2+は異時点の二作品原画像が確認済みという限定。Formation Trace Candidate: yes。新たなalias・periodの補完は人間レビュー後まで保留。
