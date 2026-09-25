# Evidence Pack: お岩 (`oiwa`)

調査日: 2026-09-25。基準レビュー: `947091fbbc2b8f031dfd9b1b4c2f7f8a6e8dfea5`。

## 現行索引と参照違い

`oiwa` は「お岩／おいわ」、`named_supernatural_entity`。`claim_0020` は盆にお岩家跡の家の精霊棚へ来る蛇をお岩の霊と信じた事例の**DB要約**を述べる `source_fact`。固定レビュー時点の `source_0010` のURL・外部IDは `1610128` で、[その個別カード](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1610128)は**沖縄の牛マジムン**だった。これは明白な参照不整合であり、本スプリントで正しいIDへ訂正した。

| 階層 | 出典・locator | 照合結果 |
| --- | --- | --- |
| `database_record` | **正しい[日文研カード0640143](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0640143)**、呼称・書誌・地域・要約欄。 | 呼称「お岩の霊，蛇」／読み「オイワノレイ，ヘビ」。要約は家跡、盆、精霊棚、蛇、お岩の霊への信念を一つの事例として述べる。カード地域は東京都。**お岩という実在人物や芝居の同一性はここだけでは確定しない。** |
| `original_publication` | 山中笑「四谷旧事談」『郷土研究』**3巻7号、1915-09-01、pp.33–38、該当p.35**。同誌[CiNii所蔵情報](https://ci.nii.ac.jp/ncid/AN00406024)・[NDLのマイクロ／復刻書誌](https://ndlsearch.ndl.go.jp/search?cs=bib&f-doc_style=digital&f-doc_style=micro&f-doc_style=paper&f-mt=magazine&q-title=%E9%83%B7%E5%9C%9F%E7%A0%94%E7%A9%B6&r-year=1915%2C1915)。 | **p.35の原掲載本文未到達**。精霊棚の蛇が誰の発話・観察・引用か、前後文脈、芝居との言及有無は未確認。 |
| `later_institutional_explanation` | [歌舞伎演目案内「東海道四谷怪談」](https://enmokudb.kabuki.ne.jp/repertoire/725/?tab=before)。 | 舞台のお岩と蛇を含む後世の演出を説明するが、1915年の家跡伝承が芝居から直接派生した根拠にはしない。 |
| `later_reuse` | 同上、後世上演史の説明 | 1915年採録・江戸期芝居・後世上演は別の資料段階。 |

## 判定

- **Level 1 — Indexed**。正しいカードと原論文のp.35は固定できたが、原掲載本文は `source_not_accessible`。Level 2未到達。
- **実施した最小修正**: `source_0010` のURL・外部ID・書誌・locatorと `claim_0020` のカードID・locatorを0640143へ訂正した。claimの実質的な内容、layer、confidenceは維持。既存1610128をお岩の根拠として残していない。
- 未解決: お岩家跡の人物、蛇を霊とする信念の話者、1915年事例と『東海道四谷怪談』の直接の関係。刊行年1915は伝承の成立年ではない。東京都という地域欄は発祥地ではない。
