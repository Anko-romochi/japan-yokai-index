# Evidence Pack v001 — 宗像市一覧6件

調査日: 2026-09-28 JST。固定基準: `8a80e80a28de38215e9729331b144c2b09674eb7`、1000 entities / 744 sources / 1052 claims。SD-1研究記録のみ。
先行調査: [`source_deepening/munakata-six/evidence-pack.md`](../../source_deepening/munakata-six/evidence-pack.md)。先行packの個別URL・頁・資料別考察を再利用し、今回の1000件状態と再結合した。

## 現行Corpus（凍結スナップショット）

| target entity ID | canonical name | current entity_type | current aliases | current region | current period fields |
| --- | --- | --- | --- | --- | --- |
| `kukihime_onryo_munakata` | 菊姫の怨霊（読み未記入） | `named_supernatural_entity` | なし | 福岡県 | 未記入 |
| `chinkokuji_no_shirohebi` | 鎮国寺の白蛇（読み未記入） | `folklore_being` | なし | 福岡県 | 未記入 |
| `tsurigawa_no_chotaro_kappa` | 釣川の長太郎河童（読み未記入） | `named_supernatural_entity` | なし | 福岡県 | 未記入 |
| `tarumitouge_no_kappa` | 樽見峠の河童（読み未記入） | `folklore_being` | なし | 福岡県 | 未記入 |
| `ryuoike_no_kinryu` | 龍王池の金色の龍（読み未記入） | `named_supernatural_entity` | なし | 福岡県 | 未記入 |
| `tsuwase_no_yureisen` | 津和瀬の幽霊船（読み未記入） | `supernatural_phenomenon` | なし | 福岡県 | 未記入 |

### Current claims

| claim ID | target | 現行claim（source_fact / established_view） | source ID / evidence locator |
| --- | --- | --- | --- |
| `claim_0336` | `kukihime_onryo_munakata` | 宗像市の歴史文化遺産リストは「菊姫の怨霊」を、宗像大宮司家の相続を巡る内紛に起因する話として掲げる。（`source_fact`） | source_0247; source_0247: 「こと（伝承・説話）」印刷p.53／PDF p.55、番号4 |
| `claim_0337` | `chinkokuji_no_shirohebi` | 宗像市の歴史文化遺産リストは「鎮国寺の白蛇」を、奥の院に住む神の使いの白蛇伝説として掲げる。（`source_fact`） | source_0247; source_0247: 「こと（伝承・説話）」印刷p.53／PDF p.55、番号13 |
| `claim_0338` | `tsurigawa_no_chotaro_kappa` | 宗像市の歴史文化遺産リストは「釣川の長太郎河童」を、河童の元締め長太郎が悪い河童を懲らしめる話として掲げる。（`source_fact`） | source_0247; source_0247: 「こと（伝承・説話）」印刷p.53／PDF p.55、番号15 |
| `claim_0339` | `tarumitouge_no_kappa` | 宗像市の歴史文化遺産リストは「樽見峠の河童」を、峠で樽を運ぶよう頼む河童の話として掲げる。（`source_fact`） | source_0247; source_0247: 「こと（伝承・説話）」印刷p.53／PDF p.55、番号18 |
| `claim_0341` | `ryuoike_no_kinryu` | 宗像市の歴史文化遺産リストは「龍王神社と龍王池」に、暴風雨の夜に池へ沈んだ金色の龍の伝説を掲げる。（`source_fact`） | source_0247; source_0247: 「こと（伝承・説話）」印刷p.53／PDF p.55、番号19「龍王神社と龍王池」 |
| `claim_0340` | `tsuwase_no_yureisen` | 宗像市の歴史文化遺産リストは「津和瀬の幽霊船」を、壱岐へ逃れる安部一族の末裔を水先案内した幽霊船の伝説として掲げる。（`source_fact`） | source_0247; source_0247: 「こと（伝承・説話）」印刷p.53／PDF p.55、番号27 |

### Current sources

| source ID | 現行title / source_type | source publication date（登録値） | URL |
| --- | --- | --- | --- |
| `source_0247` | 宗像市 歴史文化遺産リスト / `institutional_catalog` | 未記入 | https://www.city.munakata.lg.jp/kiji0038944/3_8944_7262_up_qchwpugx.pdf |

## 資料層と確認水準

**Current evidence depth: Level 1（6件とも）**。Layer A–Dは資料間の役割であり、書誌発見を本文確認へ昇格させない。

A: 宗像市歴史文化遺産リスト印刷p.53／PDF p.55、番号4/13/15/18/19/27を今回再照合。B: 一覧参考番号29『宗像市史 通史編4』、30『郷土のものがたり』、31上妻国雄『宗像伝説風土記〈下〉』。番号29の刊年は市内資料間で1995/1996の不一致。各該当本文・頁未到達。C: 原話間の独立性未確認。D: 海の道むなかた館「河童を探せ！」と宗像大社の解説は後世層。

### 六行の個別identity判定

| ID | 市一覧の項目名・番号・原所在地・参照資料 | nameの性質 | 暫定grain・照合待ち |
| --- | --- | --- | --- |
| `kukihime_onryo_munakata` | 「菊姫の怨霊」4、河東・山田、29 | 一覧見出し。菊姫は人名だが怨霊の単独性は不明 | 人物／単独霊／集合的慰霊を原資料29で分ける |
| `chinkokuji_no_shirohebi` | 「鎮国寺の白蛇」13、玄海・吉田、31 | 寺名＋白蛇の説明的見出しの可能性 | 神使・白蛇類型／名付けられた個体を原資料31で分ける |
| `tsurigawa_no_chotaro_kappa` | 「釣川の長太郎河童」15、玄海・江口、31 | 長太郎は個体名候補。読み「ちょうたろう」は後世の市記事 | 名付けられた河童頭領かを原資料31で確認 |
| `tarumitouge_no_kappa` | 「樽見峠の河童」18、池野・池田、30・31 | 地名＋類型の見出し。市後世記事は「垂水峠」 | 場所説話／固有個体を原資料30と31の両方で比較 |
| `ryuoike_no_kinryu` | **「龍王神社と龍王池」**19、池野・大王寺、31 | 現行「龍王池の金色の龍」は説明文からの記述的索引名 | 龍の個体性／神格／場所伝承を原資料31で確認 |
| `tsuwase_no_yureisen` | 「津和瀬の幽霊船」27、大島・大島、31 | 場所＋幽霊船の見出し | 反復する個体／一回的な船現象・説話を原資料31で確認 |

六行とも一覧の短文であり、安定した固有名・独立したentityの歴史を確認したとは扱わない。参考番号は一覧内の書誌番号で、原話の頁番号ではない。

## 観察、identity、grain、chronology

6行は個別の一覧項目。番号4 菊姫の怨霊＝河東・山田／29、13 鎮国寺の白蛇＝玄海・吉田／31、15 釣川の長太郎河童＝玄海・江口／31、18 樽見峠の河童＝池野・池田／30・31、19 見出し「龍王神社と龍王池」＝池野・大王寺／31、27 津和瀬の幽霊船＝大島・大島／31。読みは一覧にない。市の後世解説は長太郎を「ちょうたろう」、峠を「垂水峠」とするが原資料の読みに転用しない。

## 出典間関係・未解決・推奨Corpus action

菊姫は単独霊か集合的慰霊か、鎮国寺は個体か白蛇類型か、長太郎は名付けられた頭領か、峠は場所説話か、龍王池は説明的索引名か神格か、幽霊船は一回的現象かを各別に保留。特にryuoike_no_kinryuのnamed typeは再判定候補。Formation Trace Candidate: no（市記事に依存の可能性）。

資料間の独立性は、上記で明記した別作品・別原本文の範囲に限る。転載、DB要約、後世解説の反復を独立証拠として数えない。最古確認例は本packで直接確認した資料の範囲に限定し、「発祥」「創作初発」には読み替えない。Level 3認定なし。修正候補はCorpus本体に反映しない。

## 必須項目の明示

- **original publication / direct source**: https://www.city.munakata.lg.jp/kiji0038944/3_8944_7262_up_qchwpugx.pdf。Layer Bの書誌・到達状態を参照。
- **locator**: 一覧印刷p.53／PDF p.55、番号4/13/15/18/19/27。参考29–31の各本文頁は不明。
- **source publication date**: Current sources表の登録値とLayer Bの書誌を分けて記載。空欄は不明。
- **alleged event date**: 一覧が扱う出来事時期は未確定。
- **earliest confirmed appearance**: 各entityとも市一覧の行を確認しただけで、原話初出は未確定。参考資料31の1978年などは未読の書誌年。
- **observed names / observed readings**: 上記「観察」節の資料別原表記と読み。原資料未読の読みは未確認。
- **geographic wording**: 上記「観察」節の原記載。現行region欄とは別扱いで、発祥地へ拡張しない。
- **entity grain assessment**: 6件それぞれ単独霊／白蛇類型／名付けられた河童／場所説話／記述的龍名／船現象の候補。
- **identity conflicts / same-name conflicts**: 同じ一覧・参考31に載るだけで相互identity・独立性は証明されない。
- **source independence / earlier evidence / later reuse**: Layer C・Dを参照。DBから原掲載への派生を独立資料と数えない。
- **persona formation evidence / unresolved questions / recommended corpus action**: 上記「出典間関係」節。菊姫は単独霊か集合的慰霊か、鎮国寺は個体か白蛇類型か、長太郎は名付けられた頭領か、峠は場所説話か、龍王池は説明的索引名か神格か、幽霊船は一回的現象かを各別に保留。特にryuoike_no_kinryuのnamed typeは再判定候補。Formation Trace Candidate: no（市記事に依存の可能性）。
