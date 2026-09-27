# Evidence Pack v001 — お岩

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/oiwa/evidence-pack.md`](../../source_deepening/oiwa/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `oiwa` | お岩（おいわ） | `named_supernatural_entity` | なし | 未記入 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0020` | `oiwa` | 日文研DB card 0640143 は、1915年の東京都の記録として、お岩の家跡に住む家へ盆に蛇が来て、お岩の霊と信じられたという事例を要約する。（`source_fact`） | source_0010; source_0010: DB card 0640143「要約」；原掲載『郷土研究』3巻7号p.35は未照合 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0010` | 「お岩の霊，蛇」事例（山中笑「四谷旧事談」） / `database_record` | 1915-09-01 | https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0640143 |

## 資料層と確認水準

**Current evidence depth: Level 1**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 正しい日文研カード0640143（旧1610128は牛マジムンで先行スプリントで修正済み）。B: 山中笑「四谷旧事談」『郷土研究』3(7)、1915-09-01、pp.33–38、該当p.35。本文未到達。C: 1915の家跡譚と実在人物・芝居の独立性未確認。D: 歌舞伎演目案内の『東海道四谷怪談』は芝居・後世上演の別層。

## 観察、identity、grain、chronology

カードの呼称は「お岩の霊，蛇／オイワノレイ，ヘビ」。現行canonical「お岩／おいわ」は人物・霊・芝居役のいずれも含み得る。カード地域は東京都。盆に家跡の精霊棚へ来る蛇を霊とみたというDB要約から、お岩の実在・蛇への変身・芝居の起源を結論しない。

## 出典間関係・未解決・推奨Corpus action

p.35の話者・前後文脈、史的人物・怪談・芝居の接続は未解決。source_0010とclaim_0020の旧URL誤りは修正済みでSD-1の本体修正はしない。entity grainの人物／霊／文学的人格の分離をレビュー候補にする。Formation Trace Candidate: no。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://ci.nii.ac.jp/ncid/AN00406024。Layer Bの書誌・到達状態を参照。
- **locator**: 山中1915『郷土研究』3(7) p.35（カードlocator、本文未確認）
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 盆という年中時期。特定年・伝承初出は不明。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 人物・霊・蛇モチーフ・芝居上の人格を分離。
- **identity conflicts / same-name conflicts**: 芝居のお岩とカードの家跡伝承の因果／identityは未証明。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。p.35の話者・前後文脈、史的人物・怪談・芝居の接続は未解決。source_0010とclaim_0020の旧URL誤りは修正済みでSD-1の本体修正はしない。entity grainの人物／霊／文学的人格の分離をレビュー候補にする。Formation Trace Candidate: no。
