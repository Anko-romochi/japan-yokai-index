# Evidence Pack v001 — 藤原定家 (Source Deepening 100, #18)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `fujiwara_no_teika`; canonical name: 藤原定家（現行kana: ふじわらのていか）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0083` (`source_fact`): 能楽協会の『定家』解説では、式子内親王の墓にまとわりつく蔦葛として定家の恋の執心が描かれる。 Locator: `source_0058` 「解説」第1段落中盤
- Current sources:
- `source_0058` 定家（演目解説） / `institutional_explanation` / registered date `None` / https://www.nohgaku.or.jp/encyclopedia/program_db/teika
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 能楽協会『定家』の現代解説は式子内親王の墓に絡む蔦を定家の恋の執心として説明。
- **Layer B — original publication / direct source:** 古い謡本の書誌は確認できるが、能『定家』の原詞章の版・巻・該当丁は今回未読。 [確認先](https://www.wul.waseda.ac.jp/kotenseki/html/bunko01/bunko01_01764/index.html)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 定家本人の和歌・日記を、後代の恋愛・蔦の霊像の証拠へ自動転用しない。独立の先行伝承は未確認。 [確認先](https://www.nohgaku.or.jp/encyclopedia/program_db/teika)。
- **Layer D — later explanation / reuse:** 能楽協会の現代解説にある執心の表象。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 歴史上の定家の生没・作品時期と能の成立・謡本の写刊年は分離。該当古謡本の刊写年は未確定。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「藤原定家」／読み「ふじわらのていか」。『定家』は曲名でもある。蔦は人格名ではなく能の表象。
- **Geographic wording:** 能の墓の場面は出典の地名文言を原詞章で未確認。現行region欄は未記入。
- **Entity grain assessment:** 歴史人物／能の恋の執心を示す蔦の表象。蔦を別の名付けられた妖怪とみなさない。
- **Identity conflicts / same-name conflicts:** 式子内親王の霊と定家の執心が同じ曲に出るが、二者を統合しない。
- **Persona formation evidence:** 歴史人物から能の執心表象への比較候補だが中間資料未確認。Formation Trace Candidateは保留。
- **Unresolved questions:** 能の原詞章、定家・式子関係を語る最初の資料、蔦の象徴の成立時点。
- **Recommended corpus action:** 現行claimは協会解説の範囲で維持候補。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
