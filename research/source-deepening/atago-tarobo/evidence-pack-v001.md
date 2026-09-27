# Evidence Pack v001 — 太郎坊（愛宕山）

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/atago-tarobo/evidence-pack.md`](../../source_deepening/atago-tarobo/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `atago_tarobo` | 太郎坊（愛宕山）（たろうぼう） | `named_supernatural_entity` | なし | 未記入 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0065` | `atago_tarobo` | 京都市の愛宕信仰解説は、愛宕山の修験と神仏習合の文脈で、愛宕権現太郎坊と呼ばれる天狗について説明する。（`source_fact`） | source_0044; source_0044: コラム「愛宕山と愛宕信仰」中世の修験者と太郎坊を説明する段落 |
| `claim_0066` | `atago_tarobo` | 国際日本文化研究センターの1972年論文抄録には、愛宕山奥の院を舞台に太郎坊天狗の目に釘を打つ呪詛の話が記録されている。（`source_fact`） | source_0045; source_0045: カード1140355「要約」；原論文 p.9 は未照合 |
| `claim_0078` | `atago_tarobo` | 公開校訂本文の『源平盛衰記』巻八「法皇三井の灌頂の事」では、住吉明神が柿本の紀僧正の天狗化を語り、これを愛宕山の太郎坊と呼ぶ。（`source_fact`） | source_0053; source_0053: 「法皇三井の灌頂の事」後白河法皇の天狗に関する問いへの住吉明神の返答 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0044` | 世代を越えて受け継がれる火の信仰と祭り / `institutional_explanation` | 未記入 | https://kyoto-bunkaisan.city.kyoto.lg.jp/kyotoisan/nintei-theme/hinoshinkou.html |
| `source_0045` | 怪異・妖怪伝承データベース 1140355（中村節「蛇骨寺の由来について」抄録） / `database_record` | 1972-02-20 | https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1140355 |
| `source_0053` | 校訂源平盛衰記 巻8-4 法皇三井の灌頂 / `primary_or_early_source` | 2024-06-28 | https://ohta-masakazu.blog.jp/archives/24302805.html |

## 資料層と確認水準

**Current evidence depth: Level 2**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 日文研1140355は中村節1972 p.9のDB要約。B: 中村節「蛇骨寺の由来について」『西郊民俗』59、1972-02-20、pp.7–10、該当p.9未到達。一方『源平盛衰記』巻8「法皇三井の灌頂」の公開校訂本文は名前・山・天狗化の直接資料に準ずるが、底本画像は未照合。C: 国立国会図書館レファレンス協同DBの書誌探索は他の古典候補を示すが原本確認ではない。D: 京都市の愛宕信仰解説は現代の別層。

## 観察、identity、grain、chronology

古典校訂本文は「愛宕山の太郎坊」と記す。カードは「太郎坊天狗／タロウボウテング」。愛宕山と赤神山阿賀神社の太郎坊は同名であっても同一視しない。後白河法皇・近衛天皇は物語／参照史料内の時点で、1972刊年や2024公開日とは別。

## 出典間関係・未解決・推奨Corpus action

1972 p.9と校訂底本、赤神山との関係が未解決。source_0053の翻刻版情報の精密化、claim_0066の原文確認は候補。merge禁止候補: akagamiyama_tarobo。Formation Trace Candidate: no（同一属性の変化を追う経路不足）。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://ohta-masakazu.blog.jp/archives/24302805.html。Layer Bの書誌・到達状態を参照。
- **locator**: 『源平盛衰記』巻8「法皇三井の灌頂」住吉明神の返答。中村1972 p.9未確認。
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 後白河法皇・近衛天皇の作中時点。事件史実としては未認定。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 愛宕山の名付けられた天狗／愛宕権現との関係を区別。
- **identity conflicts / same-name conflicts**: 赤神山太郎坊とは同名別entityとして維持。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。1972 p.9と校訂底本、赤神山との関係が未解決。source_0053の翻刻版情報の精密化、claim_0066の原文確認は候補。merge禁止候補: akagamiyama_tarobo。Formation Trace Candidate: no（同一属性の変化を追う経路不足）。
