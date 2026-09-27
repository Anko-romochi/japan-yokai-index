# Evidence Pack v001 — 式子内親王 (Source Deepening 100, #19)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `shokushi_naishinno`; canonical name: 式子内親王（現行kana: しょくしないしんのう）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0084` (`source_fact`): 能楽協会の『定家』解説では、式子内親王の霊が旅僧を墓に案内し、回向の後に舞って消える。 Locator: `source_0058` 「解説」第1段落冒頭・末尾
- Current sources:
- `source_0058` 定家（演目解説） / `institutional_explanation` / registered date `None` / https://www.nohgaku.or.jp/encyclopedia/program_db/teika
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 能楽協会『定家』の現代解説は、式子内親王の霊が旅僧を墓へ導き回向後に舞って消えるとする。
- **Layer B — original publication / direct source:** 能『定家』古謡本の原詞章と該当丁は未読。 [確認先](https://www.wul.waseda.ac.jp/kotenseki/html/bunko01/bunko01_01764/index.html)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 歴史上の式子内親王の和歌・伝記と能の霊像の直接の成立関係は未確認。 [確認先](https://www.nohgaku.or.jp/encyclopedia/program_db/teika)。
- **Layer D — later explanation / reuse:** 能楽協会の現代解説。定家の蔦の執心と式子の霊の行動は異なる。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 歴史人物の時期と能の成立・謡本刊写年は分離。能の初出年は未確定。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「式子内親王」／現行読み「しょくしないしんのう」。資料での読み・別表記は今回未確認。
- **Geographic wording:** 協会解説は墓を場面とするが、地名の原表記は原詞章未読。地域欄の補完なし。
- **Entity grain assessment:** 歴史人物／能の亡霊。同じ能の定家の執心とは別の役。
- **Identity conflicts / same-name conflicts:** 定家と式子の二者を同一personaにしない。同名別人は今回未確認。
- **Persona formation evidence:** 能の役割は確認したが多時点比較が足りずFormation Trace Candidateは保留。
- **Unresolved questions:** 詞章の該当丁、史料上の式子像と能の関係。
- **Recommended corpus action:** 現行claimは協会解説の範囲で維持候補。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
