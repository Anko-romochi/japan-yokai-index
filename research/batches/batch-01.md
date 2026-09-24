# Batch 01 — 前近代の伝播連鎖

実施日: 2026-09-24

基準: public main `258abed5ec8a3f9ef3e2b223042a47b0e078a90e`

範囲: `okiku_bancho` の根拠補完と新規10 entities。Corpus の schema・methodology・theory は変更しない。

## 目的と方法

Batch A を選択した。既存30件には、初期記録と後世の図像・芸能を区別できない例が残るため、異なる時点の資料を比較できる候補を優先した。Local LLM（LM Studio の `google/gemma-4-12b`）に取得済み資料の短いメモを渡して候補を抽出させ、Sol が対象名、出典位置、主張の層、別系統との混同を全件監査した。公開機関・図書館・専門団体のページを原資料の代わりに要約する場合は、その機関の説明内容として `source_fact` を記した。最古・発祥・史実性は、この資料群からは断定しない。

## 先行修正: 番町皿屋敷のお菊

[国立国会図書館「肝試し：百物語の世界」](https://www.ndl.go.jp/imagebank/column/kimodameshi) の「葛飾北斎の百物語」は、「番町皿屋敷」のお菊を幽霊と明記し、歌舞伎での若い女性像と北斎図像の老女像を区別する。`source_0020` と `claim_0032` を追加して怪異としての根拠を補った。同ページが展示する図版は明治再版で、北斎の制作年代や伝承の発祥と同一視しない。既存 `claim_0030` が扱う作品内の殺害と、幽霊の図像は別の主張のまま残した。

## 追加10件と主要資料

| entity | 確認した資料・位置 | Sol の判定と残る境界 |
| --- | --- | --- |
| `shuten_doji` 酒呑童子 | [NDL 絵巻展示](https://www.ndl.go.jp/d_exhibitions/emaki/22)「大江山酒吞童子絵巻」資料42、「伊吹とうし」資料44 | 江戸写本の二つの筋を記録。物語の平安時代は発祥年代ではない。鬼・鬼童丸との同一視を避けた。 |
| `tsuchigumo` 土蜘蛛 | [歴博展示](https://www.rekihaku.ac.jp/news/20230619.html)資料3、[歴博目録 F-320-43](https://khirin.rekihaku.ac.jp/pid/nmjh_collection/F-320-43.html) | 中世の物語を汲む1799年絵巻と1843年錦絵。土蜘蛛という集合・類型と頼光譚の個体は未分離。 |
| `nue` 鵺 | [相模原市立橋本図書館のレファレンス](https://crd.ndl.go.jp/reference/detail?page=ref_view&id=1000036304)「回答プロセス」、[NDL 錦絵リスト](https://www.ndl.go.jp/imagebank/theme/shinkei36kaisen) | 『平家物語』巻第4の所在は図書館が確認した版の頁で追跡。本文や最初の成立時期を直接検証したわけではない。 |
| `uji_no_hashihime` 宇治の橋姫 | [宇治市広報 p.16「橋姫水社」](https://www.city.uji.kyoto.jp/dayori/190715/HTML/index16.html) | 和歌の女性、物語の鬼女、江戸の屋敷神を同一の原人物・単一の起源とは判定しない。 |
| `takiyasha_hime` 滝夜叉姫 | [NDL 百物語解説](https://www.ndl.go.jp/imagebank/column/kimodameshi)「月岡芳年の百物語」 | 1865年の図像と京伝作品の関係を記録。将門の実在の娘であるとは主張しない。 |
| `kasane` 累 | [常総市「累の墓」](https://www.city.joso.lg.jp/kurashi_gyousei/kurashi/gakkou_kyouiku/isan/cityregi_bunka/historic_site/kasanenohaka.html) | 墓・取り憑く死霊の伝説と、1821年上演が普及の契機という市の説明を分離。伝説上の殺害を史実とはしない。 |
| `seigen` 清玄 | [歌舞伎演目案内](https://enmokudb.kabuki.ne.jp/phraseology/3443/)「清玄桜姫の世界」、[NDL 錦絵リスト](https://www.ndl.go.jp/imagebank/theme/shinkei36kaisen) | 1673年古浄瑠璃、後世の舞台・錦絵に幽霊像がある。解説自体が「実説は不明」とするため実在人物にしない。 |
| `kasha` 火車 | [勝田至「火車の誕生」](https://ndlsearch.ndl.go.jp/books/R000000004-I023802220)「要約等」、[歴博目録 F-320-6](https://khirin.rekihaku.ac.jp/pid/nmjh_collection/F-320-6.html) | 仏教の車から死体をさらう怪異への変化は論文の見解として `established_view`。化物絵巻への掲載は別の `source_fact`。非人格の対照例。 |
| `shukaku` 守鶴 | [NDL「化け狸」](https://www.ndl.go.jp/imagebank/column/sekienyokai) | 狸という類型と僧守鶴という固有名の関係、石燕と芳年で異なる図像を記録。茶釜自身の変化と僧の変化を混同しない。 |
| `fujiwara_no_sanekata` 藤原実方 | [兵庫文学館の略歴](https://www.artm.pref.hyogo.jp/bungaku/jousetsu/authors/a2091/)、[能楽協会「実方」](https://www.nohgaku.or.jp/encyclopedia/program_db/sanekata)、[NDL 錦絵リスト](https://www.ndl.go.jp/imagebank/theme/shinkei36kaisen) | 歌人としての経歴、能の霊、明治の「執心雀」の題名を別の資料事実とした。両表象の成立順序・同一起源は未確認。 |

新規 source は `source_0021`–`source_0032`。既存 `source_0002` とお菊補完用 `source_0020` を再利用した。新規 claim は `claim_0033`–`claim_0052`。どの追加 entity にも少なくとも1件の根拠付き claim がある。

## Review queue と反証候補

10件すべてを Sol が確認した。Local LLM の `requires_sol_review` が false でも、既存類型との重複、作品人物の実在性、複数資料の意味差、`source_fact` と研究見解の境界があるため監査対象とした。結論は上表の通りで、alias の自動統合はしない。`nue` の「鵼」はこの batch の登録資料だけでは追跡できず alias 候補から除外した。`shuten_doji` の別表記と `tsuchigumo` の「土蜘」は登録資料の表記に限った。

特に橋姫は「土地神 → 物語上の鬼女」という単線モデルを支持しない。現在の出典では和歌・鬼女譚・屋敷神が並存することまでが確認範囲で、各系統の継承関係は不明。火車は、同一名で宗教的な車と死体を奪う妖怪が研究上区別され、名前だけでは entity 粒度を決められない反例である。清玄は前近代の作品・芸能による幽霊像だが、伝承としての独立性はまだ確認できず、「物語に出たら新妖怪」という条件を採れない。守鶴は狸類型、僧の個体名、茶釜の図像が別の分析単位になる。

## Local LLM の問題点と Sol 判断

Local LLM はお菊の試行1件と batch 10件を処理した。初回のお菊抽出では寺院・博物館まで entity 候補に含め、誤字も生じた。Batch の候補では `累の墓（色彩間苅豆）` や `清玄（清玄桜姫）` と資料・組み合わせ名を entity 名に混ぜ、酒呑童子・橋姫・滝夜叉姫など本来の review 条件を false とした。指定された全キーで再抽出すると、10件中ほとんどの出典位置と主張層が `unknown` のままで、滝夜叉姫の説明に誤字、清玄の資料名に誤記が残った。Sol は対象名を個別の索引単位に戻し、出典を直接照合し、古い物語の舞台と資料の書写・刊行年代を分けた。現状の Local LLM は候補探索の補助として有用だが、単独で commit gate を通せない。

## Unresolved と次 batch への引継ぎ

- 一次資料本文を直接見られた例は限られ、資料案内・目録・抄録を通す例が多い。特に鵺の『平家物語』本文と滝夜叉姫の京伝作品本文は次回以降に直接照合する。
- 橋姫の和歌の女性、鬼女、神格がどこで接続したかは未解決。現 entity は同名表象の索引であり、同一個体の証明ではない。
- 累の伝説上の人物の実在性、清玄の「実説」、藤原実方の霊と雀の関係は未解決。
- `attested_periods` と `attested_regions` は今回も保守的に空配列とした。根拠がある時代は claim に資料年代・物語年代を分けて記し、発祥年代・本来の地域として entity に転記していない。

次は Batch B（土地信仰と文学的人格）を候補とする。おさかべ姫や橋姫で表れた複数系統の接続を、一次資料に近い証拠で比較する。

## 検証

`python scripts/validate_corpus.py` → `PASS: 40 entities, 32 sources, 52 claims`。全追加 `source_fact` に資料 ID と出典位置を付与。Corpus の schema、methodology、theory、validator は変更していない。
