# Evidence Pack v001 — 崇徳院 (Source Deepening 100, #13)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `sutoku_in`; canonical name: 崇徳院（現行kana: すとくいん）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0012` (`source_fact`): 香川県の展示案内は、1868年に崇徳院の神霊を讃岐から京都へ遷す儀式が行われたと記す。 Locator: `source_0006` 展示概要第1段落
- Current sources:
- `source_0006` テーマ展「崇徳院神霊、京都へかえる」 / `institutional_explanation` / registered date `2018` / https://www.pref.kagawa.lg.jp/kmuseum/setorekishi/exhib/pro201809022.html
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 香川県の2018年テーマ展案内（ウェブ公開2020-12-10）。1868年の神霊遷座を解説し、展示資料を列挙する。
- **Layer B — original publication / direct source:** 展示リストの「明治天皇宣命」（金刀比羅宮蔵）と『崇徳天皇御還幸記見聞記録』（資料館蔵）が1868年儀式の直接資料候補。実物・翻刻・該当箇所は未読。 [確認先](https://www.pref.kagawa.lg.jp/kmuseum/setorekishi/exhib/pro201809022.html)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 直島三宅家伝来の伝説資料を展示するとの説明はあるが、個々の成立年と原文・独立性は未確認。 [確認先](https://www.pref.kagawa.lg.jp/kmuseum/setorekishi/exhib/pro201809022.html)。
- **Layer D — later explanation / reuse:** 展示には『雨月物語』『椿説弓張月』も並ぶ。1868年の儀礼史料と文学上の崇徳院像を同列にしない。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 儀礼: 1868-08-27讃岐国白峯陵、09-06京都白峯宮到着。展示: 2018-09-22～11-25。ウェブ公開: 2020-12-10。最初の怨霊像は未確定。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「崇徳院」／読み「すとくいん」。展示には「崇徳院神霊」「崇徳天皇」。時代別原表記・読みは未確定。
- **Geographic wording:** 「讃岐国白峯陵」から「京都白峯宮」への移動という儀礼上の場所。発祥地の主張ではない。
- **Entity grain assessment:** 歴史上の院／神霊・祭祀対象／文学作品の人格を区別。
- **Identity conflicts / same-name conflicts:** 儀礼上の神霊と文学の怨霊像の関係は未検証。同名別人の証拠は今回なし。
- **Persona formation evidence:** 近世文学と明治の儀礼という異なる役割が見えるためFormation Trace Candidate。ただし原文未読で経路は未証明。
- **Unresolved questions:** 宣命・見聞記録の刊写年と該当文言、近世文学との資料間関係。
- **Recommended corpus action:** 現行claimは展示案内の要約として維持候補。儀礼資料の原本確認後に深度再判定。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
