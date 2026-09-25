# Checkpoint 0450 — direct-text regional and object traditions

Date: 2026-09-25. Base public commit: `b4fdf6ee787c0445e22ee147bc86735ac5536830` (400 entities).

## Counts and admission

- Corpus: **450 entities / 340 sources / 492 claims**.
- This checkpoint adds 50 entities, 23 sources, and 50 `source_fact` claims. Each new claim has a source ID and an individual story, printed-page, or item locator.
- [Candidate queue](candidate-queue-0450.csv): **82 screened / 50 admitted / 11 deferred / 21 rejected**. The queue records each decision and its evidence URL.
- Validator: `PASS: 450 entities, 340 sources, 492 claims`.
- The data and claim schemas and theory were unchanged. All pre-existing 400 entity, 317 source, and 442 claim records remain unchanged.

## Evidence and source depth

The 50 admissions comprise Yamagata 20, Miyazaki 8, Mie 13, Chiba 5, and Aomori 4. The Yamagata claims cite individual stories in the [Tohoku Bunkyo University folklore archive](https://www.t-bunkyo.ac.jp/library/minwa/archives/index.html); the two collection-level source records are reused. The [Miyazaki Prefectural Library PDFs](https://www.lib.pref.miyazaki.lg.jp/hp/menu000001300/hpg000001292.htm) were checked as page images at the printed pages in the claims. The [Mie prefectural retellings](https://www.bunka.pref.mie.lg.jp/minwa/genre/index.htm) and [Chiba prefectural reprints](https://www.pref.chiba.lg.jp/kkbunka/b-shigen/08minwa/index.html) have individual URLs. The four Aomori terms are in the digitized [*Aomori Prefectural History*, folklore volume, pp.436–438, “妖怪”](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MT1_850140). Aomori publication year 2014 is a publication date, not an origin date.

Source depth differs. Yamagata supplies full public transcriptions, but their original printed editions and collection dates were not inspected. Miyazaki and Mie supply complete later retellings, not independently established early attestations. Chiba identifies issues of `広報おおたき`, but their original page images were not inspected. Aomori supplies a digitized prefectural-history text that lists concise local beliefs; its cited underlying field records were not inspected. `attested_periods` remains empty for every new entry. Regions name where the registered record is set or recorded, not a place of origin.

The Mie “あごなし地蔵” account leaves the Oki image and a later local image related by two incompatible transfer/establishment explanations. The “接待地蔵” account has an original and a replacement image. Both were deferred rather than collapsed into a single object. The Mie `ガラボシ` story clearly describes a water being and its agreement with a boatman, so it replaced the ambiguous Jizo candidate. Aomori's `カマス親父` was deferred because the one-line item only says it comes; the full Mie `関の地蔵` account was selected instead. `草生のお里（八百比丘尼）` is indexed as the character in that regional account, without asserting continuity with the existing Hikonano account or the historical existence of O-sato.

## Audit

All 50 added entity-to-claim-to-source links, locators, and normalized exact names were checked; no duplicate or broken reference was found. All **43** unique new source and story URLs returned HTTP 200. A second pass on **16** entries sampled the five regional groups and six entity types: 浅立の蛇、長右ヱ門の化猫、およね狐、鬼八、馬渡天狗、日向の国のひょすんぼ、赤須賀の雷さま、西川の川立ち地蔵、鵜殿のガラボシ、関の地蔵、大多喜の犬神さま、筒森神社の十市姫、大多喜城山の武者の魂、川女、火斑剥ぎ、エンマババ. This pass checked literal wording, claim restraint, source kind, locator, and entity grain against the accessible text or PDF page images. No major error was found. The audit verifies what these sources say; it does not verify the occurrence of supernatural events or the truth of story-set chronology.

## Deferrals, rejections, and bias

The queue documents cases where a frightening title resolves to an ordinary animal, object, or human, and where multiple possible beings appear in one account. Chiba's `きもだめし` is a false ghost alarm; `石神のモチノキ` duplicates an existing entity. Mie's `ダンダラボーシの足あと` remains deferred because its relation to the newly indexed 大王島のダンダラボッチ is unproven. None of these was used to pad the count.

Yamagata contributes 20 entries from only two collections; Mie contributes 13 pages from one institutional site. The next checkpoint should diversify providers and regions and seek more direct earlier publications. Six added Mie entries are Jizo or stone devotional objects; their `object_spirit` type is an indexing decision for these supernatural accounts, not a classification of all Jizo statues. Aomori entries are low-depth list attestations and should be deepened before origin analysis.

Local LLM processed **0** records; literal-name, record-ID, locator accuracy, and unusable-output rate are not applicable; runtime failures **0**. Codex reviewed all 50 admissions; the focused second-pass audit covered 16. No publication rights text or images were copied into the Corpus.

**Unresolved:** original editions and dates for the Yamagata transcriptions, original Chiba newsletter page images, source chronology for Mie retellings, original Aomori field records, and whether some local devotional objects or regional homonyms should be merged or split after source deepening. No schema or theory change is inferred from this checkpoint.

**Next:** build a provider-diverse queue toward checkpoint 0500, with direct source depth where available, then run the required 500-entity cross review.
