# Evidence Pack v001 — 坂上田村麻呂 (Source Deepening 100, #15)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `sakanoue_no_tamuramaro`; canonical name: 坂上田村麻呂（現行kana: さかのうえのたむらまろ）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: 田村麻呂。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0061` (`source_fact`): 甲賀市は、『東海道名所図会』に田村麻呂の鈴鹿峠での鬼神退治譚があり、江戸時代には峠と近江側の土山に田村麻呂を祀る社があったと説明する。 Locator: `source_0041` 「鈴鹿峠と田村麻呂信仰」『東海道名所図会』と田村社を説明する段落
- `claim_0062` (`source_fact`): 田村市は、当地の田村麻呂・大多鬼丸伝説を紹介する一方、田村麻呂が当地に実際に来て大多鬼丸を討ったことを示す文献はないと明記する。 Locator: `source_0043` 本文末尾『多くの伝説が残る田村麻呂ですが』以降の段落
- Current sources:
- `source_0041` 鈴鹿峠と田村麻呂信仰 / `institutional_explanation` / registered date `None` / https://www.city.koka.lg.jp/4772.htm
- `source_0043` 坂上田村麻呂③ 令和6年3月号掲載 / `institutional_explanation` / registered date `2024-03-01` / https://www.city.tamura.lg.jp/soshiki/30/bunkazai_tamuramaro3.html
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 現行source_0041の甲賀市旧URLは現在エラー。市の目次に記事題名は残る。田村市2024年記事は大多鬼丸退治の地元伝説を紹介し、史実を示す文献はないと明記。
- **Layer B — original publication / direct source:** 『東海道名所図会』の該当巻・丁を旧記事検索断片から探索中。国立公文書館の目録に同書の画像資料はあるが、該当本文は未読。 [確認先](https://www.digital.archives.go.jp/DAS/meta/listPhoto?BID=F1000000000000003051&ID=&LANG=default&TYPE=dljpeg)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 古い田村麻呂史料がそのまま鈴鹿峠・大多鬼丸伝説を示すとは限らない。独立の先行資料は未確定。 [確認先](https://www.city.tamura.lg.jp/soshiki/30/bunkazai_tamuramaro3.html)。
- **Layer D — later explanation / reuse:** 甲賀・田村両市の現代の地域解説。地名と鬼名は地域別に保持。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 『東海道名所図会』の版年・巻丁は未確定。田村市記事は2024-03-01。伝説内年代と田村麻呂本人の活動年代を同一視しない。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「坂上田村麻呂」／読み「さかのうえのたむらまろ」／alias「田村麻呂」。資料ごとの鬼名と人物名を分ける。
- **Geographic wording:** 甲賀市の「鈴鹿峠」「土山」と田村市の当地・大多鬼丸伝説を別の場所伝承として扱う。発祥地は未認定。
- **Entity grain assessment:** 歴史人物／鬼退治の説話主人公／祀られる人物。地域伝承を自動統合しない。
- **Identity conflicts / same-name conflicts:** 田村市は当地での実際の討伐を示す文献なしと明記。甲賀市旧URLは到達不能でclaim_0061の再検証に障害。
- **Persona formation evidence:** 地域ごとの英雄像の比較候補。ただし原本文と資料年代が未確定でFormation Trace Candidateは保留。
- **Unresolved questions:** 甲賀市記事の現行URL、『東海道名所図会』巻・丁、地域別鬼名の原表記。
- **Recommended corpus action:** source_0041のURL更新候補とclaim_0061の再確認候補を人間レビューへ。claim_0062は市の説明範囲で維持候補。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
