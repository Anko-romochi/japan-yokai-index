# Priority-1 corpus correction decision packet — v001

Prepared 2026-09-28 against frozen public `main` `b8228227f57ccc6905185c9562bd77f8daf4d9af`. This is a **research-only human-review packet**, not an approved corpus patch. The nine items are the priority-1 rows of `open-claim-source-queue-v009.csv`. Proposed Japanese text below is intentionally limited to what the cited registered layer says. It does not establish a story's historical truth, original-publication wording, earliest attestation, or entity identity beyond the passage. No `data/`, schema, validator, or theory edit is authorized here.

The sources were directly read in source-check batches [018](source-check-batch-018-notes-v001.md), [027](source-check-batch-027-notes-v001.md), [030](source-check-batch-030-notes-v001.md), [034](source-check-batch-034-notes-v001.md), [035](source-check-batch-035-notes-v001.md), [056](source-check-batch-056-notes-v001.md), and [063](source-check-batch-063-notes-v001.md). This packet cross-checks their recorded observations against the current claim text. Some source endpoints did not load in the present web reader; a prior direct read is explicitly identified rather than passed off as a new retrieval. Short phrases are quoted only where the wording itself is at issue.

## Proposed decisions

### 1. `claim_0209` — `daikairyuu_ookami` — revise event sequence

- **Current claim:** 「日文研カードは、小佐の浜に上がった亀が夢で老人として現れ、大海龍大神を名乗ったという話を要約する。」
- **Direct locator:** [Nichibun card 2130010](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2130010), 「要約」; 磯部宅成「小佐の亀さん」『みなみ』60 (1995), cited pp.43–45, **original unread**. The card was also accessible during this packet review.
- **Observed:** The monk 亀岳鶴翁 first dreams of a white-haired man asking to be worshiped. Separately, 谷村佐助 dreams of a white-haired man naming himself 大海龍大神; the turtle is then released and later washes ashore. The burial name 大龍神大菩薩 is a further distinct name. 明治42年9月10日 is an alleged narrative event date, not the 1995 publication date.
- **Minimal proposed claim:** 「日文研カードは、小佐の浜に上がった亀について、浄土寺の和尚と谷村佐助がそれぞれ白髪の老人の夢を見たと要約する。大海龍大神を名乗るのは佐助の夢である。」
- **Decision requested:** Approve the separation of dream actors; leave canonical name, aliases, reading, and period unchanged until the original article is checked.

### 2. `claim_0215` — `imida` — revise causal wording

- **Current claim:** 「日文研カードは、所有者に不吉な出来事が続いたため地蔵や石碑が建てられた板倉町の忌田の話を要約する。」
- **Direct locator:** [Nichibun card 1420069](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1420069), 「要約」; 『利根川中流水場のムラの民俗』6 (1968), cited p.108, **original unread**. The card was directly read in batch 018; the present web reader returned a cache miss.
- **Observed:** One owner erects a Jizō for memorial rites; the card does not give subsequent misfortune as its reason. A different owner erects a 樺山大神 stele and suffers misfortunes. 忌田 is a field/place designation, not an agent.
- **Minimal proposed claim:** 「日文研カードは、板倉町の忌田について、ある所有者が供養のため地蔵を建て、別の所有者が樺山大神の石碑を建てたのち不吉な出来事に遭ったと要約する。」
- **Decision requested:** Approve removal of the shared causal link; review whether the entity's place grain is expressed elsewhere, without changing type automatically.

### 3. `claim_0335` — `ohikari_osato` — revise actor and chronology; resolve research-note pagination

- **Current claim:** 「いちき串木野市の史料集は、お光の死後に霊が髪を引きずる話と、供養の行事を載せる。」
- **Direct locator:** [いちき串木野市『郷土史料集1』](https://www.city.ichikikushikino.lg.jp/bunka1/documents/kyoudo1.pdf), 民話編27「お光ものがたり」, **printed pp.63–65 / PDF pp.66–68 (one-based)**. This packet visually rechecked all three PDF pages: p.66 begins item 27 and bears printed p.63; p.67 bears printed p.64; p.68 bears printed p.65. The registered claim locator is correct; batch 027's printed pp.64–66 / PDF pp.65–67 is an off-by-one research-note error, not a corpus locator correction candidate.
- **Observed:** The murdered itinerant saddle-maker's ghost drags **living お光** by her hair. She dies later; the account then describes memorial rites for both. The current sentence reverses the actor and places her death too early.
- **Minimal proposed claim:** 「いちき串木野市の史料集は、殺された鞍作りの霊が生前のお光の髪を引きずり、後にお光も亡くなって両者が供養されたという話を載せる。」
- **Decision requested:** Approve actor/sequence correction. Assess お光 as narrated person versus ghost separately; do not infer a historical person's existence from this story.

### 4. `claim_0381` — `hata_no_osangitsune` — narrow transformation attribution

- **Current claim:** 「1985年に智頭町波多で採集された『かみそり狐』の語りは、おさん狐が娘や僧に化け、若者の頭髪を食いちぎったと語る。三朝町大谷の同名狐との同一性は未確認。」
- **Direct locator:** [鳥取県立博物館「かみそり狐」](https://www.pref.tottori.lg.jp/265927.htm), 「語り」, opening daughter transformation and final monk/shaving sequence; collection date 1985-08-15, 智頭町波多. The passage was accessible again during this review.
- **Observed:** おさん狐 visibly becomes a daughter. A monk later appears and shaves the youth within the deception, but the text does not explicitly say the fox transformed into the monk. The youth's hair is found bitten by a fox. The separately collected [三朝町大谷 account](https://www.pref.tottori.lg.jp/266696.htm) does not prove the same individual.
- **Minimal proposed claim:** 「1985年に智頭町波多で採集された『かみそり狐』の語りは、おさん狐が娘に化け、後に現れた僧に若者が剃髪され、目覚めると狐に頭髪を食いちぎられていたと語る。三朝町大谷の同名狐との同一性は未確認。」
- **Decision requested:** Remove only the unsupported monk transformation; retain the same-name non-merge warning. Collection date is not tale-origin date.

### 5. `claim_0440` — `akubyo_no_kami_sawaguchi` — clarify two figures

- **Current claim:** 「秋田県立博物館の『悪病の神』カードは、病をもたらす神を坊主姿の男と少女の二姿で語る話を要約する。」
- **Direct locator:** [秋田県立博物館「悪病の神」](https://www.akihaku.jp/monogatari/show_detail.php?serial_no=1731), displayed record **1721**, 「あらすじ」; cited 『山村民俗誌』(1980), p.96, **original unread**. Direct reading was logged in batch 034; this review's web reader returned a cache miss. URL serial and displayed record number must be kept distinct.
- **Observed:** The card describes a monk-like man and a girl as **two disease gods**. 「二姿」 risks presenting them as one being with two guises.
- **Minimal proposed claim:** 「秋田県立博物館の『悪病の神』カードは、坊主姿の男と少女という二人の悪病の神を語る話を要約する。」
- **Decision requested:** Approve plural wording; independently review whether the current single entity should represent a tale unit or one of the two figures. No automatic split.

### 6. `claim_0458` — `mizue_kappa` — retain neutral sequence; forbid identity inference

- **Current claim:** 「東北文教大学公開翻刻の『水江河童の怪物』は、娘のもとへ通う若衆の姿が川に消え、後に水江で河童の死骸が見つかったと記す。」
- **Direct locator:** [東北文教大学『つゆふじの伝説』第二部・第78話](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/78.html), full text. It was directly read in batch 035; present web reader returned a cache miss. University transcription is the checked layer; underlying collection history is unverified.
- **Observed:** The male visitor disappears into the river and a dead kappa is found later. The text invites an association but does not explicitly identify the visitor and corpse as one being. The current claim **states the sequence without an explicit equation**.
- **Proposed action:** **No claim rewrite on present evidence.** Add this identity caveat to the human decision record; review entity grain before any stronger kappa-persona statement. Keep the current claim open for source-chain review, without treating an implied identity as direct evidence.

### 7. `claim_0462` — `oyonegitsune_nukanome` — preserve collective naming

- **Current claim:** 「東北文教大学公開翻刻の『およね狐』は、糠野目藤野の狐が若い女に化けるので人々がこの名で呼んだと記す。」
- **Direct locator:** [東北文教大学『つゆふじの伝説』第二部・第87話](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/87.html), opening paragraph and later encounter. Direct read in batch 035; present web reader returned a cache miss.
- **Observed:** The opening speaks of **many foxes** around 糠野目藤野 and a collective label for female disguises. A later apparent woman is one encounter, not proof of a single stable named fox. 「七十年ばかり以前」 is a relative narrative period.
- **Minimal proposed claim:** 「東北文教大学公開翻刻の『およね狐』は、糠野目藤野に多くいた狐が若い女に化けるため、人々がそのような狐をおよね狐と呼んだと記す。」
- **Decision requested:** Approve plural/collective wording; review whether entity grain is a regional fox label rather than a named individual. Do not merge with other およね狐 uses.

### 8. `claim_0761` — `fujioka_no_samurai_ni_baketa_kitsune` — revise action and evidence locator

- **Current claim:** 「栃木市教育研究所の民話PDFは、狐が侍に化けて酒を取り上げ、翌朝、葉をかぶって死んでいたと語る。」
- **Direct locator:** [栃木市教育研究所「さむらいに化けた狐」PDF](https://tm2.tcn.ed.jp/kyouken/wysiwyg/file/download/1/1096), PDF p.1, demand/bottle throw and next-morning paragraphs. Direct read in batch 056; present web reader returned a cache miss.
- **Observed:** The disguised fox demands the farmer's sake and bundle; the farmer throws the sake bottle at it. The text does not say the fox took the sake. It is found dead under a taro leaf the next morning. The registered evidence locator repeats the mistaken 「酒を取り上げる段」 and should be corrected along with claim text after approval.
- **Minimal proposed claim:** 「栃木市教育研究所の民話PDFは、侍に化けた狐が百姓に酒を要求し、百姓が酒どっくりを投げつけると、翌朝その狐が芋の葉をかぶって死んでいたと語る。」
- **Decision requested:** Approve action and evidence-location correction together, conditional on a page-image spot check.

### 9. `claim_0837` — `kurokamiyama_no_daija` — replace unsupported role

- **Current claim:** 「日本山岳会の黒髪山解説は、ふもとの池にすむ七本角の大蛇が田畑や村人を害し、万寿姫をおとりとして源為朝らに退治される伝説を紹介する。」
- **Direct locator:** [日本山岳会「黒髪山」](https://www.jac.or.jp/oyako/f15/d504010.html), quiz answer 3 and immediately following explanation. Rechecked during this packet review.
- **Observed:** The explanation uses 「生け贄」 for 万寿姫. It does not call her a decoy. The page is a later institutional explanation, not an early legend witness.
- **Minimal proposed claim:** 「日本山岳会の黒髪山解説は、ふもとの池にすむ七本角の大蛇が田畑や村人を害し、万寿姫を生け贄にして源為朝らに退治される伝説を紹介する。」
- **Decision requested:** Approve the one-word role correction, while keeping legend and history distinct.

## Cross-cutting decisions and source limits

| Decision class | Claims | Current recommendation |
| --- | --- | --- |
| Narrative actor, event, or role correction | 0209, 0215, 0335, 0761, 0837 | Five claim rewrites proposed for human review; 0761 also needs evidence-locator correction. Claim 0335's registered locator is visually confirmed. |
| Unwarranted transformation or singular grain | 0381, 0440, 0462 | Three narrower claim rewrites proposed; entity grain remains a separate human decision. |
| Identity inference already avoided by current claim | 0458 | Retain claim wording, document the visitor/corpse uncertainty. |

No name, reading, era, geographic origin, entity merge/split, source-depth promotion, or confidence change follows from this packet. `claim_0209`, `claim_0215`, and `claim_0440` are checked **database-card summaries** whose cited original pages remain unread; no Level 2 claim is made. The university texts are checked transcriptions with unverified underlying transmission. The other municipal and association publications support only their own presented wording.

The separate [cross-review](full-corpus-claim-source-cross-review-v001.md) identifies uncited `source_0197` ([戸田市「かっぱの子」](https://www.city.toda.saitama.jp/soshiki/377/hakubustu-legend5.html)). It is one registered source with zero linked claims and zero linked entities. Its page was read, but whether this is unused registration or an omitted claim is **undecided**. No claim or entity should be added from it without a human corpus decision.

**Human review gate:** decide each proposed wording and `claim_0761`'s evidence-locator correction against the cited pages; separately decide the grain questions. Keep the frozen 1000/744/1052 corpus untouched until that review. The 32 open source-depth items remain open in [queue v010](open-claim-source-queue-v010.csv); this packet resolves none of them by itself.
