# Evidence Pack v001 — 平将門 (Source Deepening 100, #12)

調査日: 2026-09-28 JST。基準: public main `2efe76c4b7290938a0f9f9113b752b57080fba11`。本稿は研究記録のみでCorpus本体を変更しない。Local LLM（Gemma 4 12B、推論無効）の短い整理案を、公開資料と凍結Corpusに照らして人手で再構成した。モデルの原文未確認・固有名詞誤りの可能性を監査し、生成文を証拠とは数えない。

## 現行Corpus（凍結）

- Target entity ID: `taira_no_masakado`; canonical name: 平将門（現行kana: たいらのまさかど）; current entity_type: `historical_person_in_supernatural_tradition`。
- Current aliases: なし。Current region: 未記入。Current period fields: 未記入。
- Current claims:
- `claim_0011` (`source_fact`): 神田明神の由緒は、平将門の御霊を慰め、1309年に神田明神へ奉祀したと記す。 Locator: `source_0005` 平将門公の説明
- Current sources:
- `source_0005` 神田明神とは / `institutional_explanation` / registered date `None` / https://www.kandamyoujin.or.jp/profile/
- Current evidence depth: **Level 1 — Indexed / institutional explanation**。後述のLayer B候補の書誌発見だけではLevel 2へ昇格しない。

## Source chain と資料層

- **Layer A — Index / explanation:** 神田明神の現代由緒と1300年年表。940年没、1307年鎮魂、1309年合祀、1874年仮遷座、1878年別殿奉斎を別の出来事として記す。
- **Layer B — original publication / direct source:** 『将門記』は同年表で940年頃の一代記として言及されるが、生前の武将の記述を後代の霊・祭神像の直接証拠にしない。中世社伝・碑文の原本を未確認。 [確認先](https://1300th.kandamyoujin.or.jp/history/)。原本文のlocator: **未確認**（書誌・目録のlocatorは本文locatorではない）。
- **Layer C — earlier / independent evidence:** 1307年の真教上人の鎮魂・板碑は年表経由のみ。一次記録と年代の独立確認は未了。 [確認先](https://1300th.kandamyoujin.or.jp/history/)。
- **Layer D — later explanation / reuse:** 同社の現代年表は1874年と1878年の奉斎形態変更も記す。
- **Source independence:** 現行機関解説とその参照先・同一作品の別版を独立の直接証拠として重複計数しない。上記で別作品が挙がる場合も、原文・依拠関係の未確認部分は独立性未確定。

## Identity・時空間・形成

- **Chronology separation:** 年表掲載の事件: 940年没、1307年鎮魂、1309年合祀、1874年仮遷座、1878年別殿。年表の公開年は未確認。最初の怨霊記述は未確定。
- **Source publication date:** 現行source登録値は上記のCurrent sources表に保持。Layer B資料の確認済み書誌年・展示年・記事公開年はChronology separation欄に限定して記す。資料に年がない場合は未確定。
- **Alleged event date:** Chronology separation欄に出来事として示した年だけを採用。記載がなければ未確定。刊写年から逆算しない。
- **Earliest confirmed appearance:** 同一の霊・祭神・表象の最古確認例は未確定。原本の存在を目録で知るだけでは表象の本文確認にならない。
- **Later reuse date:** Chronology separation欄で個別に確認できた展示・出版・儀礼の年のみ。その他の再利用時期は未確定。
- **Observed names / observed readings:** 現行名「平将門」／読み「たいらのまさかど」。年表「平将門公」「将門公」。霊神・祭神の称号と歴史人物名を分ける。
- **Geographic wording:** 神田明神年表は武蔵国豊島郡、将門塚・芝崎道場・神田神社を述べる。由緒地と人物の起源を混同しない。
- **Entity grain assessment:** 歴史人物／鎮魂対象の霊／神田明神の祭神。三つの時点の対象関係を示すが同時代資料で未確認。
- **Identity conflicts / same-name conflicts:** 『将門記』と神田明神の後代祭神像は資料目的が違う。同名別人は今回未確認。
- **Persona formation evidence:** 1307年鎮魂→1309年合祀→明治の祭祀変更という社側の年表があるためFormation Trace Candidate。一次資料の系列未確認。
- **Unresolved questions:** 1307年板碑・中世社伝の所在と文言、祭神化の同時代証拠。
- **Recommended corpus action:** 現行claimは神社の由緒説明に限定して維持候補。原資料到達後にsource追加を検討。 このフェーズでは修正・alias追加・source追加・merge・splitを実行しない。

## 深度判定

Level 1。Level 2 / Level 2+ は未認定。Level 3は今回認定しない。原文の長文転載は行わない。
