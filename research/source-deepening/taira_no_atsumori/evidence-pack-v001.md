# Evidence Pack v001 — 平敦盛 (Source Deepening 100, #16)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `taira_no_atsumori`; canonical name: 平敦盛（現行kana: たいらのあつもり）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0081` (`source_fact`): 能楽協会の『敦盛』解説では、敦盛の亡霊が草刈男の一人として現れた後、夜には甲冑姿で一ノ谷の戦いを語る。 Locator: `source_0056` 「解説」第1段落
- Current sources:
- `source_0056` 敦盛（演目解説） / `institutional_explanation` / registered date `None` / https://www.nohgaku.or.jp/encyclopedia/program_db/atsumori
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 能楽協会の『敦盛』解説は草刈男としての登場と甲冑姿の霊を説明。
- **Layer B — original publication / direct source:** 東京大学観世文庫の江戸期写本『謡本敦盛』整理番号123/2/31を目録で確認。11丁の本文画像は未読。 [確認先](https://da.dl.itc.u-tokyo.ac.jp/portal/assets/f9ee805e-974b-20e4-6235-48eb122b7ba0)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 神戸女子大学展示の1716年刊『敦盛』は敦盛の子が生田で父の霊と会う筋。能楽協会の曲目と筋が異なるため、同名でも同一曲・同一場面の証拠と数えない。 [確認先](https://www.yg.kobe-wu.ac.jp/geinou/07-exhibition1/2002a.html)。
- **Layer D — later explanation / reuse:** 能楽協会の現代曲目解説。異なる『敦盛』の再録・改作関係は未確認。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 東京大学目録は江戸期写本。神戸女子大は1716年刊。能の物語内一ノ谷合戦の時期を写刊年代と混同しない。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「平敦盛」／読み「たいらのあつもり」。能楽協会曲名「敦盛」と1716年刊同名謡本は内容が異なる。
- **Geographic wording:** 能楽協会は一ノ谷、1716年刊の展示解説は摂津国生田。場所を同じ伝承の原点と見なさない。
- **Entity grain assessment:** 歴史人物／能『敦盛』の亡霊／別曲に登場する父の霊。登場媒体と役を分離。
- **Identity conflicts / same-name conflicts:** 同名曲の筋の差が明確。安易な「敦盛」資料の統合を禁止する候補。
- **Persona formation evidence:** 複数の能の亡霊表現の比較候補だが同曲の版差ではない。Formation Trace Candidateは保留。
- **Unresolved questions:** 能楽協会曲目に対応する古謡本の詞章と写刊年代、1716年刊曲の正式曲名・関係。
- **Recommended corpus action:** 現行claimは能楽協会曲目に限定して維持候補。同名異曲のsource誤接続を防ぐ。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
