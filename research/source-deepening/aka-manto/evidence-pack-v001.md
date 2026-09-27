# Evidence Pack v001 — 赤マント

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/aka-manto/evidence-pack.md`](../../source_deepening/aka-manto/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `aka_manto_child_snatcher` | 赤マント（読み未記入） | `folklore_being` | なし | 未記入 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0110` | `aka_manto_child_snatcher` | 日文研『異界の杜』第42回は、赤マントの怪人を夕暮れ時に子供を連れ去る存在の一つとして挙げる。（`source_fact`） | source_0079; source_0079: 第42回「夕暮れ、子供にせまる影」本文第2段落 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0079` | 異界の杜 第42回「夕暮れ、子供にせまる影」 / `institutional_explanation` | 未記入 | https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html |

## 資料層と確認水準

**Current evidence depth: Level 1**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 現行は日文研「異界の杜」第42回の一節のみで個別カードなし。B: 大宅壮一「『赤マント』社会学」『中央公論』54(4)/通巻619、1939-04、pp.422–427は誌目録で特定、本文未到達。C: 小柳花音2025論文pp.79–92は名瀬の実在人物を扱う直接本文だが現行子取り怪人とのidentity未接続。D: 学校トイレの色選択型、名瀬の歌・商品、後世のpersonaを別層に置く。

## 観察、identity、grain、chronology

現行canonical「赤マント」は読みnull。日文研は夕暮れの子取り怪人、1939索引は帝都の流言、名瀬論文は実在人物への通称、学校怪談はトイレの選択型。衣装名の一致だけで統合しない。現行entityの地域・初期採録・成立時期は不明。

## 出典間関係・未解決・推奨Corpus action

日文研第42回が依拠した個別採録、大宅1939本文、学校怪談との接続が未解決。名瀬系・学校系とのmerge禁止候補。別系統資料の直接本文を現行entityのLevel 2として算入しない。Formation Trace Candidate: no。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://search.showakan.go.jp/search/magazine/detail.php?material_cord=100009716。Layer Bの書誌・到達状態を参照。
- **locator**: 大宅1939『中央公論』54(4) pp.422–427（目録、本文未確認）。日文研第42回第2段落。
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 帝都流言は1939年の記事対象。現行子取り怪人の出来事・発生年は不明。
- **earliest confirmed appearance**: 現行の子取り怪人に限ると最古出現は未確定。1939年記事の索引は同名流言でidentity未接続。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 子取り怪人／実在人物への通称／学校の色選択型を別grainに置く。
- **identity conflicts / same-name conflicts**: 名瀬2025本文は同名別系統で現行entityのLevel 2へ算入しない。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。日文研第42回が依拠した個別採録、大宅1939本文、学校怪談との接続が未解決。名瀬系・学校系とのmerge禁止候補。別系統資料の直接本文を現行entityのLevel 2として算入しない。Formation Trace Candidate: no。
