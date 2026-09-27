# Evidence Pack v001 — 藤原実方 (Source Deepening 100, #14)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `fujiwara_no_sanekata`; canonical name: 藤原実方（現行kana: ふじわらのさねかた）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0050` (`source_fact`): 能楽協会の曲目解説は、能『実方』で藤原実方の霊が西行の前に現れ、過去の姿に見入る場面を紹介する。 Locator: `source_0031` 「解説」全文
- `claim_0051` (`source_fact`): 国立国会図書館の『新形三十六怪撰』資料リストには「藤原実方の執心雀となるの図」が掲載されている。 Locator: `source_0024` 資料リスト「藤原実方の執心雀となるの図」
- `claim_0052` (`source_fact`): 兵庫県立美術館の人物解説は、藤原実方を陸奥守を務めて任地に没した歌人として紹介し、その赴任について複数の説話が残ると記す。 Locator: `source_0032` 「PROFILE／略歴」
- Current sources:
- `source_0024` 新形三十六怪撰 / `institutional_catalog` / registered date `1889-1892` / https://www.ndl.go.jp/imagebank/theme/shinkei36kaisen
- `source_0031` 実方（さねかた） / `institutional_explanation` / registered date `None` / https://www.nohgaku.or.jp/encyclopedia/program_db/sanekata
- `source_0032` 藤原実方 / `institutional_explanation` / registered date `None` / https://www.artm.pref.hyogo.jp/bungaku/jousetsu/authors/a2091/
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 能楽協会の『実方』解説、NDLイメージバンクの作品リスト、兵庫文学館の人物解説を別資料として確認。
- **Layer B — original publication / direct source:** 能『実方』の詞章原本と芳年「藤原実方の執心雀となるの図」の原画像は今回未確認。NDLリストは『新形三十六怪撰』を1889–1892年の作品群として記す。 [確認先](https://www.ndl.go.jp/imagebank/theme/shinkei36kaisen)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 歌人の史料と能・錦絵の成立順および依拠関係は未確認。古い歌人伝を雀の姿の早期証拠にしない。 [確認先](https://www.artm.pref.hyogo.jp/bungaku/jousetsu/authors/a2091/)。
- **Layer D — later explanation / reuse:** 能の亡霊表現と明治の執心雀の錦絵は異なる媒体の後世表象。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** NDLが示す錦絵シリーズ1889–1892年。能の成立・初演・現存写本年代と実方の生没年を一つの年代に畳まない。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「藤原実方」／読み「ふじわらのさねかた」。『実方』は曲名、錦絵題は「藤原実方の執心雀となるの図」。雀を実方の別名にしない。
- **Geographic wording:** 能解説の場面と兵庫文学館の人物略歴にある陸奥の任地を区別。地域欄の追加は原資料確認待ち。
- **Entity grain assessment:** 歴史人物／能の霊／錦絵の執心雀という表現。作品上の姿が同一の生物学的個体を証明しない。
- **Identity conflicts / same-name conflicts:** 雀という姿が能の実方霊と同一系列か未検証。
- **Persona formation evidence:** 能の霊と明治錦絵の雀像を比較できる可能性がありFormation Trace Candidate。独立性・先後関係は未確定。
- **Unresolved questions:** 『実方』詞章の版・段、錦絵現物と刊行日、雀説の最初の資料。
- **Recommended corpus action:** 現行の3 claimは各機関が述べる範囲で維持候補。姿の統合は保留。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
