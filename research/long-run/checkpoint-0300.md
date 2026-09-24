# Long run checkpoint 0300

## Scope and result

- Base: public main `ca5e04ce1918b4d891d55a950fd00214742a559e` (275 entities).
- Current: **300 entities, 247 sources, 341 claims**. This checkpoint added 25 entities, 11 source records, and 25 `source_fact` claims. No earlier Corpus record, schema, methodology, or theory file was changed.
- Validator: `PASS: 300 entities, 247 sources, 341 claims`.
- Admission level: Level 1 (indexed). The claims describe what the cited source records or retells; they do not establish an origin date, a historical event, or a supernatural occurrence.

## Sources and admission

- Full or substantial text: [遠賀町「遠賀のむかしばなし」](https://www.town.onga.lg.jp/soshiki/17/1476.html) (4 separate stories), [兵庫県立歴史博物館「ひょうご伝説紀行」](https://rekihaku.pref.hyogo.lg.jp/digital_museum/legend3/) (3 separate stories), [青森県史デジタルアーカイブス](https://kenshi-archives.pref.aomori.lg.jp/) (2 records), and [いちき串木野市郷土史料集1](https://www.city.ichikikushikino.lg.jp/bunka1/documents/kyoudo1.pdf) (10 bounded passages in one municipal volume).
- Index only: [宗像市「歴史文化遺産リスト」](https://www.city.munakata.lg.jp/kiji0038944/3_8944_7262_up_qchwpugx.pdf), printed p.53 / PDF p.55, numbered items 4, 13, 15, 18, 19, and 27. These six claims attest only to the list entries and their one-line descriptions. They require source-deepening for narrative or chronology.
- Two names are descriptive index labels assembled from a source's place and being: `水神の薮の竜` and `龍王池の金色の龍`. `洗濯女` is the book's story heading, with a location-specific ID. These are not asserted as stable folk names or aliases. `日本さいごの鬼` denotes the two-oni group in the page's story, not a separate taxon. `冠岳のウヘッ` indexes a locally grouped set of snake accounts, not one proven individual.
- The 25 new claims each have a bounded heading, printed/PDF page, page ID, or numbered-list locator. Source URLs were reused by URL where already present; no new duplicate URL was registered. Earlier source records `source_0079` and `source_0087` share a generic Nichibun landing URL while describing different articles; this predates this checkpoint and remains for cross-review.

## Sol/Codex review and spot audit

- All 25 candidates were checked against existing names, source identity, source wording, and locator. No Local LLM extraction entered this checkpoint.
- Spot audit (7): `ハガクレ天狗` / 遠賀町十四話; `水神の薮の竜` / 遠賀町十一話; `ソランジン` / 兵庫県立歴史博物館「鷲の地主神」; `しうりのカン子` / 青森県史資料番号253「首切り場とカン子の話」; `洗濯女` / いちき串木野市史料集印刷pp.71–72; `釣川の長太郎河童` / 宗像市リスト番号15; `龍王池の金色の龍` / 同番号19. Each short claim is within its cited source passage or row. Major errors: **0**.
- The municipal book's `洗濯女` is an experience report; the source does not identify the seen figure as a confirmed ghost. `しうりのカン子` has a human-ghost account and a separate speaker's fox interpretation; the Corpus claim records only the former account and makes no identity merger.

## Rejected and deferred

- Rejected (4): `おきよ地蔵` is a memorial to an ordinary person in the inspected passage; `底井野姥さん` and `まてじい` concern ordinary people; `神盗人` does not establish a distinct supernatural referent on its page.
- Deferred (2): `ネコガン` requires a clearer unit between cat-spirit class and local cult; the printed `稲庭化` list label requires literal-name and referent confirmation before indexing.
- `candidate-queue.csv` records these decisions and the 25 admissions. A difficult item or missing early source was deferred rather than treated as a stop condition.

## Coverage and bias at 300

- Checkpoint cohort: 福岡県10, 鹿児島県10, 兵庫県3, 青森県2. The two Kyushu municipal collections produce a **cohort bias**; this is digital source selection, not an occurrence estimate.
- Across 300 entities, `attested_regions` is empty for 97. The most frequent literal labels are 東京都19, 兵庫県16, 鹿児島県15, 福岡県14, 神奈川県10. Region strings also mix prefecture and smaller-place granularity; do not aggregate them as comparable prevalence measures without normalization.
- Entity types: folklore beings 121; named supernatural entities 107; phenomena 53; historical people in supernatural traditions 12; object spirits 5; urban legend figures 2. These are schema record types, **not** assignments to the three-origin hypothesis.
- Source types: database records 122; institutional explanations 88; institutional catalogs 27; research articles 5; primary or early sources 5. The 122 database cards are often mediated abstracts. Their original publications were generally not checked in the long run.

## Long run quality and workflow (81 → 300)

- Checkpoints saved: 0100, 0125, 0150, 0175, 0200, 0225, 0250, 0275, 0300 (9). Each was validated and prepared for a public-main checkpoint commit. The final push and remote verification are recorded by the Git history, not inferred from this draft log.
- Queue decisions since 81: **219 admitted, 16 deferred, 10 rejected**. Duplicate prevention relied on pre-admission name and scope checks, source URL reuse, and deferring unresolved identities. No new aliases were invented for this checkpoint.
- Spot audit: **57 records** across checkpoints (10 at 100, 10 at 200, 7 at 300, and 5 at each of the other six). Major errors after draft corrections: **0**. Earlier corrections include a catalog spelling mismatch at 150, metadata spacing at 175, and a claim wording tightening at 250; all were made before those commits.
- Local LLM processed: **0** during this long run. Literal-name accuracy, record-ID accuracy, locator accuracy, and usable rate: **N/A** (no outputs). Unusable outputs: **0**. Runtime/preflight failures: **1 initial busy-queue condition**, not one new failure per checkpoint. The ComfyUI job was not stopped or unloaded.
- Sol/Codex admission review: **219 new records**; spot review **57 sampled records**; 25 additional direct-card metadata checks at checkpoint 175. These are review actions, not independent second-source verification for every entry.

## Research signals for the post-300 cross-review

The following are **questions and comparison cases**, not new fact or theory claims in `data/`.

### Important boundary cases (10)

1. 宇治の橋姫 — poetic woman, fierce figure, and cultic reading should not be connected by name alone.
2. 火車 — a religious term and a later creature image may be distinct analytical units.
3. 守鶴 — named monk/tanuki and tea-kettle image need separate identity tracing.
4. おさかべ姫 — castle deity, place, and literary personality need a documented sequence.
5. 金長 — tanuki type and a named leader's persona are different layers.
6. しうりのカン子 — a ghost narrative and fox interpretation coexist in the same recorded discussion.
7. ソランジン — localized deity and predatory-eagle persona coexist in a later retelling; earlier attestation is needed.
8. アブンサマ — a stirrup, attributed spirit power, and worship may require different record grains.
9. 黒坊 — the cited card leaves a possible kappa relationship as a question.
10. 洗濯女 — an attributed uncanny experience need not identify an independent supernatural individual.

### Counterexample candidates against a simple origin trichotomy (10)

1. ぬらりひょん — media persona change does not by itself prove an urban origin.
2. 山本五郎左衛門 — a literary attestation does not prove invention or lack of prior tradition.
3. 口裂け女 — a circulated persona can have multiple incompatible origin narratives.
4. 花子さん — repeated school legend labels need not point to one historical person.
5. 日本さいごの鬼 — the local tale explicitly reuses the 桃太郎 narrative frame, but its independent circulation is not established here.
6. ハガクレ天狗 — one local narrative can give a familiar tengu type an individual name and transformation.
7. 釣川の長太郎河童 — a named leader sits within a pre-existing kappa type; the list alone cannot date the persona.
8. 冠岳のウヘッ — multiple local giant-snake accounts share a regional label; one name need not mean one individual.
9. 田中どんのもれんのひ — a death-attributed fire is indexed as an event motif rather than the supposed deceased people.
10. 津和瀬の幽霊船 — a supernatural conveyance does not fit a person-centered definition of “new yokai.”

- Origin unclear or not verified from the available digital sources: ぬらりひょん, 山本五郎左衛門, ハガクレ天狗, and many card-level regional beings.
- Persona formation worth tracing with dated sources: 金長, お岩, お菊, おさかべ姫, ぬらりひょん, and 釣川の長太郎河童.
- Creation-to-reuse questions: 豆腐小僧, 山本五郎左衛門, 神野悪五郎, and 日本さいごの鬼. This long-run index does **not** yet prove independent reuse or a transition from authored character to shared folklore for each.

## Unresolved and verdict

- Post-300 review should prioritize the mediated Nichibun abstracts, the six list-only 宗像 entries, regional name collisions, mixed entity grain, the two descriptive labels, and inconsistent region-string granularity. It should then choose primary-text deepening targets. No immediate schema change is justified by this checkpoint.
- No data-safety, research-quality, architecture, or external stop condition arose in this checkpoint. The 300-entity target is reached and collection stops here pending the requested cross-review.
- Verdict: **`LONG_RUN_300_PASS`** for the Level-1 indexed corpus and validator gate, with the above review limitations explicit.
