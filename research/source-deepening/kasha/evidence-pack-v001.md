# Evidence Pack v001 — 火車

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/kasha/evidence-pack.md`](../../source_deepening/kasha/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `kasha` | 火車（かしゃ） | `folklore_being` | なし | 未記入 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0046` | `kasha` | 勝田至は、仏教説話の地獄へ運ぶ火車と死体をさらう妖怪の火車を区別し、近世に猫などを正体とする語りが広がったと論じる。（`established_view`） | source_0029; source_0029: NDLサーチ「要約等」日本語抄録 |
| `claim_0047` | `kasha` | 国立歴史民俗博物館の目録は、近世後期の『化物絵巻』に描かれた二十四種の化物の一つとして火車を挙げる。（`source_fact`） | source_0028; source_0028: F-320-6「説明」二十四種の名称列挙 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0028` | 化物絵巻 / `institutional_catalog` | 未記入 | https://khirin.rekihaku.ac.jp/pid/nmjh_collection/F-320-6.html |
| `source_0029` | 火車の誕生 / `research_article` | 2012-03 | https://ndlsearch.ndl.go.jp/books/R000000004-I023802220 |

## 資料層と確認水準

**Current evidence depth: Level 2**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: NDL論文書誌・抄録と歴博絵巻目録F-320-6。B: 勝田至「火車の誕生」『国立歴史民俗博物館研究報告』174、2012、pp.7–30、機関PDF本文を先行調査で直接確認。C: 論文が挙げる中世・近世の個々の原典は未照合。D: 後世の猫妖怪・絵巻図像を本文が論じるが独立した成立系列として再検証が必要。

## 観察、identity、grain、chronology

現行「火車／かしゃ」。仏教の悪人を地獄へ運ぶ車、葬儀の死体をさらう怪異、雷・猫等の同定、絵巻の姿を同一個体と扱わない。論文の室町・16世紀・17世紀は著者が扱う資料時代で、2012は論文刊年。地域の統一起源を作らない。

## 出典間関係・未解決・推奨Corpus action

仏教概念→死体奪取→車図像→猫人格化の単線的系譜は未確定。source_0029の現行URLはNDL抄録なので機関PDF・印刷頁への更新候補。Formation Trace Candidate: yes（論文内に異時点の属性比較があるが原典照合待ち）。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://rekihaku.repo.nii.ac.jp/record/2043/files/kenkyuhokoku_174_02.pdf。Layer Bの書誌・到達状態を参照。
- **locator**: 勝田2012印刷pp.7–30、特に7/14/19/24/30。研究本文確認。
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 各説話の物語内事件年は未確定。
- **earliest confirmed appearance**: 勝田2012論文は中世資料を遡及的に論じるが、引用原典の個別本文は未照合。火車というentityの最古出現は本packで認定しない。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 仏教的車／死体奪取怪異／図像／猫等の同定を別記。
- **identity conflicts / same-name conflicts**: 論文内の説話・図像を単一個体の同一性で結ばない。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。仏教概念→死体奪取→車図像→猫人格化の単線的系譜は未確定。source_0029の現行URLはNDL抄録なので機関PDF・印刷頁への更新候補。Formation Trace Candidate: yes（論文内に異時点の属性比較があるが原典照合待ち）。
