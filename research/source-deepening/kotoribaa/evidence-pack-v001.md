# Evidence Pack v001 — 子取婆

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/kotoribaa/evidence-pack.md`](../../source_deepening/kotoribaa/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `kotoribaa` | 子取婆（ことりばあ） | `folklore_being` | なし | 香川県三豊市 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0108` | `kotoribaa` | 日文研の『竹槍騒擾記』カードは、香川県三豊市の事例で、子取婆が子供を殺して生血をしぼるという話が、同カードに記された女性ノブをめぐる騒動より前からあったと要約する。（`source_fact`） | source_0077; source_0077: カード1231229「呼称」「地域」「要約」；原掲載頁65–75 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0077` | 竹槍騒擾記（日文研怪異・妖怪伝承DBカード） / `database_record` | 1942-12-01 | https://www.nichibun.ac.jp/YoukaiCard/1231229.html |

## 資料層と確認水準

**Current evidence depth: Level 1**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 日文研1231229の呼称・要約・書誌。B: 三木春露「竹槍騒擾記」『旅と伝説』15(12)/通巻180、1942-12-01、pp.65–75。復刻所蔵は確認、該当本文未到達。C: 先行する噂とノブの事件を独立史料で未照合。D: 日文研「異界の杜」第42回は後世の警告譚解説。

## 観察、identity、grain、chronology

カード呼称「子取婆／コトリバア」。カード地域は香川県・三豊市。明治6年6月26日（旧暦）はカード内の事件日時で、噂の初出・資料の刊年ではない。ノブという実在女性と怪異呼称を同一個体にしない。

## 出典間関係・未解決・推奨Corpus action

事件、村人の暴力、噂の先後、語り手は原論文で未確認。現行claim_0108はDB要約として維持。実在人物と俗信／脅し文句の分離をレビューし、原論文確認後にclaim追加を検討。Formation Trace Candidate: no。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://ndlsearch.ndl.go.jp/books/R100000001-I01211001000337666。Layer Bの書誌・到達状態を参照。
- **locator**: 三木1942 pp.65–75（カードlocator、本文未確認）
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 明治6年6月26日旧暦（カード中の事件日時）
- **earliest confirmed appearance**: 1942年原論文を指すDBカードが確認層。1942年を噂の初出とは認定しない。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 子取婆の噂／実在女性ノブ／社会事件を分離。
- **identity conflicts / same-name conflicts**: ノブと怪異名の同一視を禁じる。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。事件、村人の暴力、噂の先後、語り手は原論文で未確認。現行claim_0108はDB要約として維持。実在人物と俗信／脅し文句の分離をレビューし、原論文確認後にclaim追加を検討。Formation Trace Candidate: no。
