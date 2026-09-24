# Long run checkpoint 0175

## Scope and result

- Base: public main `7b3be7e6215ceee9a6a57ecfcfa0723e819cfbf4` (150 entities).
- Current: 175 entities, 177 sources, 216 claims.
- Added: 25 entities, 25 source records, 25 source facts.
- Validator: `PASS: 175 entities, 177 sources, 216 claims`.
- No schema, methodology, theory, or preexisting record was changed.

## Admission and review

- Added regionally documented beings, named figures, spirit terms, and supernatural phenomena. Each record cites one individually identified Nichibun folklore card, with the card ID and the original page locator reported by that card. Claims describe the card's summary, not verified original publication text.
- Sol/Codex checked each candidate against the existing entity IDs and names, then directly retrieved all 25 card URLs. All 25 matched the expected record ID, author, and publication title. No Local LLM output entered the Corpus.
- Spot audit (5): 禿童 / `1233085` (the card's reading はぎわら is retained); ゲドウ / `2400111` (the claim does not conflate it with トウビョウ); ミノムシ / `2180826` (road fire, not an ordinary insect claim); 大海龍大神 / `2130010` (the card's dream narrative is attributed); 川天狗 / `C1450062-000` (the river lights and offering are within the card summary). The first direct metadata audit exposed a whitespace-normalization mismatch for 三位稲荷's journal title; the source entry was aligned to the card, and the final direct audit found zero failures.

## Rejected and deferred

- Rejected: 0.
- Deferred this checkpoint: お菊の水 was found to be an existing entity (`okiku_mizu`) before admission; 一本ダタラ was withheld because its relationship to existing 一つだたら is unresolved; the snake, fox, and kappa names that were only generic aliases or unnamed single-story animals were not counted as separate entities.
- The 福太郎 card reports an internally doubtful era-year expression. The claim does not repeat or resolve it; chronology requires original-text checking.

## Coverage and source bias

- New documented regions include 長崎、熊本、宮崎、鳥取、高知、香川、広島、新潟、岩手、山形、滋賀、富山、和歌山、愛知、神奈川、埼玉、群馬.
- All 25 new source records are Nichibun folklore cards. They point to different publication items and locators, but repository concentration is high. This checkpoint broadens regional coverage while increasing dependence on card summaries. The 200 checkpoint should counterweight this with other institutional sources where available.
- `attested_regions` follows the card's regional field. Empty `attested_periods` deliberately avoids turning publication years or story setting into origin dates.

## Local LLM

- The existing ComfyUI queue was not idle at the safe initial preflight. No stop, unload, or competing request was made; this checkpoint proceeded Sol/Codex-only.
- Processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 (the same initial preflight condition, not a new failure).
- Sol reviewed: 25 admission records, 25 direct-card metadata checks, and 5 spot-audit records.

## Major issues and unresolved

- Major errors in sampled records: 0 after the metadata whitespace correction.
- Unresolved: the original journal/book pages remain unread; some cards index a narrow local event under a broad name; the textual relationship among variant names and older records remains to be examined. 福太郎's internal date expression needs checking against the underlying text.
- No schema change is justified by these indexed records.
