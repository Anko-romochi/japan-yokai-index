# Evidence Pack v001 — 平清経 (Source Deepening 100, #17)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `taira_no_kiyotsune`; canonical name: 平清経（現行kana: たいらのきよつね）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0082` (`source_fact`): 能楽協会の『清経』解説では、平清経が柳が浦で入水し、妻の夢に生前の姿で現れて死に至る経緯を語る。 Locator: `source_0057` 「解説」第1段落
- Current sources:
- `source_0057` 清経（演目解説） / `institutional_explanation` / registered date `None` / https://www.nohgaku.or.jp/encyclopedia/program_db/kiyotsune
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 能楽協会の『清経』現代解説は柳が浦での入水と妻の夢に現れる霊を説明。
- **Layer B — original publication / direct source:** CiNii Researchに『大成喜多流謠曲定本』第21巻の『清経』の書誌があるが、原詞章・版・該当丁は未読。 [確認先](https://cir.nii.ac.jp/crid/1971993809717900459)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 入水を記す別の軍記・史料と能の構成の独立性は未検証。 [確認先](https://www.nohgaku.or.jp/encyclopedia/program_db/kiyotsune)。
- **Layer D — later explanation / reuse:** 能楽協会の現在の筋解説。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 入水の物語内時期、能成立年、定本刊年はそれぞれ未確定。目録だけから初出年を設定しない。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「平清経」／読み「たいらのきよつね」。曲名「清経」と歴史人物名を区別。
- **Geographic wording:** 能楽協会が示す「柳が浦」と妻のいる都は物語上の場面。起源地への拡張なし。
- **Entity grain assessment:** 歴史人物／能で妻の夢に現れる霊。
- **Identity conflicts / same-name conflicts:** 史実としての入水と能の物語内容の一致・差は原資料比較待ち。同名別人は今回未確認。
- **Persona formation evidence:** 夢の霊という能の役割は確認。時点比較が足りずFormation Trace Candidateは保留。
- **Unresolved questions:** 古謡本の該当詞章と成立年代、軍記の清経記述。
- **Recommended corpus action:** 現行claimは協会解説の範囲で維持候補。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
