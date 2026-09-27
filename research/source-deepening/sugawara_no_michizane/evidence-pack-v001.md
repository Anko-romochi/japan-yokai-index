# Evidence Pack v001 — 菅原道真 (Source Deepening 100, #11)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `sugawara_no_michizane`; canonical name: 菅原道真（現行kana: すがわらのみちざね）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0010` (`source_fact`): 九州国立博物館は、菅原道真が死後に怨霊として恐れられ、天神として祀られた伝承を解説する。 Locator: `source_0004` 本文「天神様とは」
- Current sources:
- `source_0004` 天神様とは / `institutional_explanation` / registered date `None` / https://www.kyuhaku.jp/museum/museum_info04-03.html
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 九州国立博物館の現代解説は、死後の怨霊、天神への奉斎、後の慈悲・学問神像を説明する。8世紀の経典を「天神御筆」とする伝承は後世の付託と明記され、経典の制作年は道真人格の成立年ではない。
- **Layer B — original publication / direct source:** 『日本紀略』と『北野天神縁起絵巻』承久本を確認経路に置くが、今回、該当原文・画面と巻・段を直接確認していない。京都国立博物館2026展は903年没、947年北野創建、959年以降の呼称を説明する。 [確認先](https://www.kyohaku.go.jp/jp/exhibitions/special/2026_kitano/)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 北野天満宮の承久本紹介と三の丸尚蔵館の16世紀模本目録を確認。原画面と本文は未読で、複数の説明記事を独立の古記録と数えない。 [確認先](https://kitanotenmangu.or.jp/story/)。
- **Layer D — later explanation / reuse:** 九州国立博物館の「天神御筆」伝承と2026年京都国立博物館展の現代解説。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 刊行・公開: 九州国博記事は日付不明、京博展は2026年。説明中の出来事: 903年没、947年北野創建、959年以降の天満宮天神。最古の同一人格表現は未確定。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「菅原道真」／読み「すがわらのみちざね」。説明資料の「天神様」「天満宮天神」は祭神呼称。各時点の原表記・読みは原資料未確認。
- **Geographic wording:** 九州国博記事は「太宰府天満宮」「北野天満宮」、京博展は北野を扱う。信仰の広がりへの言及を発祥地の証明としない。
- **Entity grain assessment:** 歴史人物／怨霊として語られる人物／天神として祀られる神格。資料ごとに表現が異なる。
- **Identity conflicts / same-name conflicts:** 8世紀経典の「天神御筆」は道真の生前作ではあり得ず、後世の付託。固有の同名別人は未確認。
- **Persona formation evidence:** 怨霊→祭神→学問神という変化は機関解説が提示するためFormation Trace Candidate。原時点の資料間連鎖は未検証。
- **Unresolved questions:** 日本紀略の該当条文、承久本の巻・場面・制作年と学問神像の早期例。
- **Recommended corpus action:** 現行claimは説明記事の要約として維持候補。歴史人物と神格の関係は別レビュー項目。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
