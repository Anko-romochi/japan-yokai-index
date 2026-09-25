# Checkpoint 0400 — source-linked regional records

Date: 2026-09-25. Base public checkpoint: `94cc57aa1ce16c9fe841468f1b43257f6dd18af5` (350 entities). Interim 370-entity commit: `1ed1572fc9a74903d0af37713aeaa3fc2ea842c5`.

## Counts and admission

- Corpus: **400 entities / 317 sources / 442 claims**.
- This checkpoint added 50 entities and 50 `source_fact` claims. There are 43 new sources because the 1941 collection and one Okinawa record were each reused across several entities.
- [Candidate queue](candidate-queue-0400.csv): 64 screened; **50 admitted / 10 deferred / 4 rejected**. Decisions and reasons are recorded per row.
- Validator: `PASS: 400 entities, 317 sources, 442 claims`.
- No entity, source, claim, schema, or theory record from before checkpoint 0350 was rewritten. All 50 new entities have at least one source-linked claim with a locator.

## Evidence and source depth

The first 20 admissions are described in [interim-0370](interim-0370.md): 10 Mie prefectural retellings and 10 Chiba prefectural reprints. The final 30 comprise 7 entries from 武田明編『西讃岐昔話集』 (1941), 11 from 10 individual [Okinawa Prefectural Museum folklore cards](https://okimu.jp/museum/minwa/), and 12 from 12 individual [Akita Prefectural Museum oral-literature cards](https://www.akihaku.jp/monogatari/). The [Kagawa Prefectural Library transcription](https://www.library.pref.kagawa.lg.jp/know/local/local_3001) provides direct access to the 1941 printed text, with numbered story and page locators. Its underlying printed copy was not inspected as an image. The Okinawa and Akita sources remain `database_record`; cited books and original audio are **not** represented as if directly read. Okinawa record dates are collection dates, not origins. Akita catalog years and any parenthetical earlier text dates are kept in source notes, while the DB-card `date` is left unknown.

All 23 newly registered URLs returned content. Literal claim anchors and individual card/record numbers were checked before the records were written. Existing Japanese names, IDs, and source URLs were checked for exact duplication. The five figures in the single “山寺の恠” account are indexed only as **figures in that recorded tale**. Their independent circulation, earlier origins, and continuity with similarly named beings elsewhere are unknown. In that tale the fox is called `北山の白狐` at first and explained as `白山の白狐` later; the Corpus retains a neutral title and records the discrepancy rather than choosing one form as an alias.

## Audit

The interim increment reviewed all 20 admissions and made a focused second pass on 10, as recorded in its log. For the final 30, all sources and anchors were checked; a second pass on 15 stratified entries checked entity grain, claim wording, source type, record number, and locator: 宝藏院の小坊主、山寺の白狐、和仁川宮の三鶏、南の宮池の鯉魚、シチマジムン、アヒルマジムン、真玉橋の遺念火、屋良ムルチのジャー、佐久川の亡霊、雪ばば、かくし婆、夜泣き布団、柳の霊、バチ淵のバチ蛇、怨念の人首. No major claim, locator, or identity error was found in these 25 focused checks across the checkpoint. This verifies what the registered pages say; it does not verify supernatural events or unread original publications.

## Deferrals, rejections, and bias

Rejected `産女の礼物` as an ubume entity because the card's own synopsis has the woman identify herself as a mountain deity. Rejected `ゴーヘイ鳥` as a supernatural being because the 1941 editor describes an owl and the story's tengu is the listener's mistaken interpretation. `平安座ハッタラー` remains deferred as a legendary strong human, and `多度津の橋の鬼` as an anonymous tale role. Other deferred cases and reasons appear in the queue. None was used to pad the entity count.

The 50 new entities are concentrated in Mie (10), Chiba (10), Kagawa (7), Okinawa (11), and Akita (12). Kagawa contributes one publication to seven entities; Akita remains dependent on summaries of books not yet read. The next checkpoint should diversify source providers and regions and, where possible, inspect original publications. `attested_regions` record documented accounts, not places of origin; all new `attested_periods` are empty to avoid turning publication or recording dates into origin dates.

Local LLM processed 0 records; literal-name/record-ID/locator accuracy and unusable-output rate are not applicable; runtime failures 0. Codex reviewed all 50 admissions; focused second-pass audit 25 (10 interim, 15 final). Schema and theory remained unchanged.

**Unresolved:** source depth and independent identity for the five “山寺の恠” figures; `北山`/`白山` fox wording; uninspected original Chiba newsletters and Akita publications; possible literary/performative antecedents of the Okinawa accounts. These are research follow-ups, not claims of established continuity.
