# Evidence Pack v001 — 花子さん

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/hanako-san/evidence-pack.md`](../../source_deepening/hanako-san/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `hanako_san` | 花子さん（はなこさん） | `urban_legend_figure` | トイレの花子さん | 未記入 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0031` | `hanako_san` | 日文研DB record 1140615 は、1992年山形県の花子さんの呼びかけ譚を記録し、類似事例として1999年栃木県の呼び出し方など異なる語りも併記する。（`source_fact`） | source_0019; source_0019: DB record 1140615; 検索対象事例および類似事例 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0019` | ハナコサン (怪異・妖怪伝承データベース record 1140615) / `database_record` | 1992 | https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/simsearch.cgi?ID=1140615 |

## 資料層と確認水準

**Current evidence depth: Level 1**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 日文研個別カード1140574/575（山形1990）、1140615（山形1992）、0970079/80/81（栃木1999）、2610018（島根2001）を先行調査で固定。現行source_0019は1140615の類似検索URL。B: 高橋敏弘『西郊民俗』132号p.31・139号p.32、久野俊彦『下野民俗』39号pp.43–44、降井直人『山陰民俗研究』6号p.59。各原掲載本文未到達。C: 個別カード間の伝播・独立性未判定。D: 全国的学校怪談personaの成立を各カードから逆算しない。

## 観察、identity、grain、chronology

カードの「花子さん／ハナコサン」と島根カードの「トイレの花子さん／トイレノハナコサン」を資料別に保持。山形1992は学校西側左二番目、栃木石橋は三階三番目、栃木宇都宮には戸の応答型・手の出現型があり、山形1990にはトカゲ形もある。地域はカード記載の山形県、栃木県、島根県等で発祥地ではない。1990/1992/1999/2001は掲載年で成立年ではない。

## 出典間関係・未解決・推奨Corpus action

学校・話者・掲載本文の同一性、全国的personaへの接続が未解決。現行広い呼称単位と個別学校伝承のsplit検討、source_0019の個別URL化、claim_0031の個別カード化は候補のみ。Formation Trace Candidate: no（変異は見えるが変化の方向が未証明）。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://www.seikouminzoku.net/sub4.html。Layer Bの書誌・到達状態を参照。
- **locator**: 『西郊民俗』132 p.31・139 p.32、『下野民俗』39 pp.43–44、『山陰民俗研究』6 p.59（カードのlocator、本文未確認）
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 不明。1990/1992/1999/2001は掲載年。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 一つの個体より広い呼称単位／学校別説話の可能性。
- **identity conflicts / same-name conflicts**: 同名カードの学校・語り手・伝播関係が不明。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。学校・話者・掲載本文の同一性、全国的personaへの接続が未解決。現行広い呼称単位と個別学校伝承のsplit検討、source_0019の個別URL化、claim_0031の個別カード化は候補のみ。Formation Trace Candidate: no（変異は見えるが変化の方向が未証明）。
