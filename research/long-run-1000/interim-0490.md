# Interim 0490 — Wakayama institutional folktales

Date: 2026-09-25. Base public commit: `ca05fbbb5540792321417c7f899153b637c833f9` (480 entities).

## Counts and screening

- Corpus: **490 entities / 376 sources / 532 claims**. This interim adds 10 entities, 10 sources, and 10 short `source_fact` claims.
- [Candidate queue](candidate-queue-0500.csv): **70 screened / 40 admitted / 20 deferred / 10 rejected** since 450. This interim screened 20, admitted 10, deferred 5, and rejected 5.
- Validator: `PASS: 490 entities, 376 sources, 532 claims`. Schemas, methodology, theory, and older data records remain unchanged.

## Evidence and QC

All 10 admissions use individual full-text folktales in the [Wakayama Prefecture Cultural Information Archive](https://wave.pref.wakayama.lg.jp/bunka-archive/minwa/index.html), not its title index alone. The cited locations identify each relevant passage. The archive credits earlier town histories or prefectural collections, but those original volumes, page numbers, and publication years have **not** been checked. These source records describe the accessible prefectural pages as `institutional_explanation`, and their claims state what the pages narrate, not that the events occurred. Local LLM processed 0; Codex reviewed all 10 against their page texts.

Identity checks kept regional figures distinct from broad types: the 琴の滝 bull-oni from other 牛鬼, the 白良浜 甲羅法師 from all 河童, and three separate waterside snakes from each other. The 紀ノ川河口 snake is not given the shrine's later name `おはらはん` as an alias. The 住持池 snake is not equated with 桂姫. `狸々` retains the source's literal spelling. `小又川の枕がえし` indexes the phenomenon caused by little people rather than treating the group as a named individual. `てんぐの徳兵衛` records a narrated person with acquired arts and later worship without claiming a verified historical person or that he became a tengu.

Five screened candidates were existing entities, including the same-region `ヒトタタラ`; they were rejected as new admissions. Five others were deferred because the source does not yet support a stable supernatural individual or its identity is ambiguous. Narrative dates, such as the time suggested inside a tale, were not copied into `attested_periods` or source publication dates.

## Bias and unresolved

**All 10** newly admitted records are from one prefecture and one digital archive. They represent multiple cited print collections, but the originals remain unchecked. This interim is evidence of accessible Wakayama narratives, **not** a distribution of Japanese yokai. The next admissions should use different providers and regions if equivalent source quality is available.

**Unresolved:** original printed pages and dates; whether some place-linked figures have earlier independent accounts; the precise grain of the 枕がえし phenomenon; and the historical status of 徳兵衛. These are source-deepening and grain-review questions, not grounds to alter the schema or theory during this run.

**Next:** screen candidates from other institutional providers for exactly 10 more admissions, stop at 500, then perform the specified stratified audit and skill gate before any 501st production record.
