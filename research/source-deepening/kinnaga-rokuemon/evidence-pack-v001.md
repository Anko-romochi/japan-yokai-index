# Evidence Pack v001 — 金長・六右衛門

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/kinnaga-rokuemon/evidence-pack.md`](../../source_deepening/kinnaga-rokuemon/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `kinnaga` | 金長（きんちょう） | `named_supernatural_entity` | なし | 未記入 | 未記入 |
| `rokuemon` | 六右衛門（ろくえもん） | `named_supernatural_entity` | なし | 未記入 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0024` | `kinnaga` | 後藤捷一論文のDB要約は、日開野村の狸・金長を、天保年間に語られた狸合戦の一方の頭目として記す。（`source_fact`） | source_0014; source_0014: DB record 2400113; 掲載箇所 pp. 281–282 |
| `claim_0025` | `rokuemon` | 後藤捷一論文のDB要約は、津田浦の狸・六右衛門を、金長と争ったもう一方の頭目として記す。（`source_fact`） | source_0014; source_0014: DB record 2400113; 掲載箇所 pp. 281–282 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0014` | 阿波に於ける狸傳説十八則―附「外道」について― / `database_record` | 1922-07-01 | https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2400113 |

## 資料層と確認水準

**Current evidence depth: Level 1**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 日文研2400113、pp.281–282への索引。B: 後藤捷一「阿波に於ける狸傳説十八則」『民族と歴史』8(1)、1922-07-01、pp.281–292、該当pp.281–282。NDL誌目録・マイクロ資料YA5-1190まで特定、本文未到達。C: 森脇佳代子2023、pp.129–138の写本比較・写真・表2を確認。写本の本文全体・年代順・相互依存は未確認。D: 小松島市の現代解説、1910講談・1939映画は再利用として別扱い。

## 観察、identity、grain、chronology

資料中表記はカード「金長／カネナガ」「六右衛門／ロクエモン」。比較論文の写本には「禁長／金長」。現行読み「きんちょう」は後世の用例もあるが1922本文の振り仮名では未確認。地域原文はカード要約「日開野村」「津田浦」、カード地域欄は徳島県。天保年間は物語内時代。初代／二代目金長と六右衛門の子を一個体へ畳まない。

## 出典間関係・未解決・推奨Corpus action

原論文の振り仮名と世代の区切り、写本の刊写年代、読みによる別個体性を未解決とする。読み・alias・世代分割・DBと原論文のsource分離はいずれも人間レビュー用候補。Formation Trace Candidate: yes（写本比較の属性差があるが系譜未確定）。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://ndlsearch.ndl.go.jp/books/R100000002-I000000022897。Layer Bの書誌・到達状態を参照。
- **locator**: pp.281–282（カードから得たlocator、本文未確認）
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 天保年間（物語内、カード要約）
- **earliest confirmed appearance**: 金長・六右衛門の最古出現は未確定。1922年原論文は書誌のみ、森脇2023の写本図版は写本の成立順を確定しない。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 金長の初代／二代目と六右衛門は別の人物関係。
- **identity conflicts / same-name conflicts**: 「金長／禁長」と「カネナガ／きんちょう」の出典別衝突。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。原論文の振り仮名と世代の区切り、写本の刊写年代、読みによる別個体性を未解決とする。読み・alias・世代分割・DBと原論文のsource分離はいずれも人間レビュー用候補。Formation Trace Candidate: yes（写本比較の属性差があるが系譜未確定）。
