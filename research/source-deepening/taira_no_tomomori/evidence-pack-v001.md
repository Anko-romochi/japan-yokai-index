# Evidence Pack v001 — 平知盛 (Source Deepening 100, #20)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `taira_no_tomomori`; canonical name: 平知盛（現行kana: たいらのとももり）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0089` (`source_fact`): 能楽協会の『船弁慶』解説では、荒波とともに平知盛の亡霊が義経の船へ現れ、弁慶の祈祷により退く。 Locator: `source_0060` 「解説」第1段落後半
- Current sources:
- `source_0060` 船辨慶・船弁慶（演目解説） / `institutional_explanation` / registered date `None` / https://www.nohgaku.or.jp/encyclopedia/program_db/funabenkei
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 能楽協会『船弁慶』の現代解説は知盛の亡霊が義経の船に現れ、弁慶の祈祷で退くと述べる。
- **Layer B — original publication / direct source:** 京都大学所蔵の1629年刊観世流謡本に『舟弁慶』を確認。神戸女子大学は1716年京都山本長兵衛刊『船弁慶』の短い詞章を掲載するが、抜粋は霊の登場前。知盛の場面の原本文は未読。 [確認先](https://rmda.kulib.kyoto-u.ac.jp/item/rb00010851)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 1629年版と1716年版の関係・異同は未照合。書誌2件を独立した知盛霊の本文証拠として数えない。 [確認先](https://www.yg.kobe-wu.ac.jp/geinou/07-exhibition1/2002a.html)。
- **Layer D — later explanation / reuse:** 能楽協会の現在の解説。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 京都大学目録の版年1629年、神戸女子大学展示本1716年。海上の物語内事件と写刊年を混同しない。初出は未確定。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「平知盛」／読み「たいらのとももり」。曲名には「舟弁慶」「船弁慶」の表記差があるが人物の別名ではない。
- **Geographic wording:** 能の舞台「大物浦」海上。地域の発祥の証明ではない。
- **Entity grain assessment:** 歴史人物／能『船弁慶』で海上に現れる霊。
- **Identity conflicts / same-name conflicts:** 表記差「舟／船」は作品名。知盛本人の名前の異同と混同しない。
- **Persona formation evidence:** 1629年・1716年の版の比較余地はあるが該当場面未読。Formation Trace Candidateは保留。
- **Unresolved questions:** 1629年版・1716年版の知盛登場箇所と異同、先行軍記との関係。
- **Recommended corpus action:** 現行claimは協会解説の範囲で維持候補。謡本原文確認後に深度再判定。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
