# Source Deepening 100 — units 11–20 progress v001

調査日: 2026-09-28 JST。SD-1の人間レビュー通過後、候補queueの11–20番を調査した。Corpusの1000 entities / 744 sources / 1052 claimsは凍結。

| queue | research unit | 判定 | 主な課題 |
| --- | --- | --- | --- |
| 11 | [`sugawara_no_michizane`](sugawara_no_michizane/evidence-pack-v001.md) | Level 1 | 歴史人物→怨霊→天神の時点別原資料未読。8世紀経典の道真筆は後世付託。 |
| 12 | [`taira_no_masakado`](taira_no_masakado/evidence-pack-v001.md) | Level 1 | 940年没・1307年鎮魂・1309年合祀を分離。中世原資料未読。 |
| 13 | [`sutoku_in`](sutoku_in/evidence-pack-v001.md) | Level 1 | 1868年儀礼の直接資料が展示目録にあるが本文未読。 |
| 14 | [`fujiwara_no_sanekata`](fujiwara_no_sanekata/evidence-pack-v001.md) | Level 1 | 歴史人物・能の霊・明治の雀図を分離。作品現物未読。 |
| 15 | [`sakanoue_no_tamuramaro`](sakanoue_no_tamuramaro/evidence-pack-v001.md) | Level 1 | 甲賀市旧URLがエラー。田村市は当地の史実を示す文献なしと明記。 |
| 16 | [`taira_no_atsumori`](taira_no_atsumori/evidence-pack-v001.md) | Level 1 | 同名「敦盛」に異なる筋の謡本。曲・場面の自動統合禁止。 |
| 17 | [`taira_no_kiyotsune`](taira_no_kiyotsune/evidence-pack-v001.md) | Level 1 | 『清経』原詞章未読。物語内入水と刊年を分離。 |
| 18 | [`fujiwara_no_teika`](fujiwara_no_teika/evidence-pack-v001.md) | Level 1 | 定家の歴史人物像と能の蔦の執心表現を分離。 |
| 19 | [`shokushi_naishinno`](shokushi_naishinno/evidence-pack-v001.md) | Level 1 | 式子の霊と定家の蔦を同一曲でも別の役として扱う。 |
| 20 | [`taira_no_tomomori`](taira_no_tomomori/evidence-pack-v001.md) | Level 1 | 1629年刊・1716年刊の書誌は発見。知盛霊の該当本文未読。 |

## 横断判定

- 10 units / 10 entities のEvidence Pack v001を作成。Level 2到達0、Level 2+到達0。最初の10件と同じ閾値を厳守し、目録・現代解説を原本確認へ昇格させていない。
- Formation Trace Candidate: 菅原道真、平将門、崇徳院、藤原実方の4件。いずれもLevel 3ではない。残り6件は資料時点不足のため保留。
- Original publicationの書誌または具体的な直接資料候補へ到達: 10件。対象の表象を示す原本文まで到達: 0件。最古出現の認定: 0件。
- Same-name conflict: 平敦盛の同名別筋『敦盛』。Name/reading issue: 「天神」は祭神呼称、「舟／船」は作品表記であり人物のaliasではない。現行kanaを変更する証拠なし。
- Entity-grain issue: 11–15の歴史人物と神格・霊・英雄像、16–20の歴史人物と能の霊を分離。特に能『定家』の定家／式子は別役。
- Region issue: 現行regionは全10件未記入。資料内の地名は伝承・儀礼・舞台の場所として記録し、発祥地や分布へ拡張しない。
- Chronology issue: 事件・儀礼・物語内時代・原本刊写年・現代解説の公開年を分離。没年や刊年をpersona成立年にしない。
- Source URL problem: `source_0041`（甲賀市旧URL）。更新候補のみ。Source追加候補: 各PackのLayer B。Claim correction candidate: `claim_0061`のリンク到達性と原書locator再確認。Alias/entity type correction candidate: 原本未確認のため確定提案なし。Merge禁止候補: 異なる『敦盛』の同名曲と『定家』の二人。Split候補: 現時点で未提案。
- Local LLMは資料から短い論点を抽出した。最初の広いプロンプトでは固有名詞誤りが出たため破棄し、10件の狭いプロンプトを再実行した。最終packの事実は公開資料・凍結Corpusに照らして点検し、Local LLM文は出典としない。

## 次の作業

原本文アクセスと該当locatorの確定を優先する。特に甲賀市URLの代替、観世流謡本の該当丁、1868年の宣命・見聞記録、道真・将門の古記録を追う。Corpus修正は別フェーズの人間レビュー対象とし、今回の研究バッチで実行しない。
