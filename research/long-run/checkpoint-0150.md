# Long run checkpoint 0150

## Scope and result

- Base: public main `bd71ea53a4b1407a7ce181f004001685d7db2ac9` (125 entities).
- Current: 150 entities, 152 sources, 191 claims.
- Added: 25 entities, 18 source records, 25 source facts. Eight 本所七不思議 entries reuse one 墨田区 source.
- Validator: `PASS: 150 entities, 152 sources, 191 claims`.
- No schema, methodology, or preexisting record was changed.

## Admission and review

- Added eight distinct 本所七不思議 phenomena from the relevant headings of 墨田区's page. This is a municipal summary, not a direct reading of Edo-period sources. The 片葉の芦 claim preserves the page's distinction between the plant account and a later murder story.
- Added 早太郎 from 駒ヶ根市's cultural-property PDF, 13 local-tradition entries from individual Nichibun folklore cards, and three separate image-catalog figures from 『化物尽絵巻』. Each claim is limited to what its cited page or card says.
- Corrected the proposed name どうもこうも to the image catalog's literal どふもこうも before admission; no undocumented alias was added.
- Sol/Codex reviewed all 25 names, source IDs, locators, and claim scopes. No Local LLM output entered the Corpus.
- Spot audit (5): 片葉の芦 / 墨田区「片葉の芦」; 早太郎 / 駒ヶ根市 PDF 1頁; コロポックル / card `1231776`; 龍燈 / card `0540009` (reading リュウビ); どふもこうも / image item `U426_nichibunken_0052_0003_0000`. The catalog spelling discrepancy was repaired before commit. No other repair required.

## Rejected and deferred

- Rejected: 0.
- Deferred this checkpoint: 黒狐 (its relationship with the 松前 玄古狐 account is unclear). Earlier deferred candidates remain deferred.
- 狒狒 and 鬼人 were consulted through indexed card text when direct page opening did not resolve; original publication pages were not read. These remain provisional index records, not primary-source confirmations.

## Coverage and source bias

- New documented regions include 東京、長野、北海道、青森、秋田、石川、沖縄、宮城、高知. Three image-only entries have no attested region or period.
- 13 of 18 new source records are Nichibun folklore cards and three are Nichibun image items. The group remains strongly dependent on Nichibun. Eight entries share one municipal page; this is source reuse, but those entries are not eight independent historical attestations.
- The Ainu-related card is a record of one published summary. It is not treated as representative of Ainu tradition broadly.

## Local LLM

- The existing ComfyUI queue was not idle at the safe preflight. No stop, unload, or competing request was made; this checkpoint proceeded Sol/Codex-only.
- Processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 (same initial preflight condition, not a new failure).
- Sol reviewed: 25 admission records and 5 spot-audit records.

## Major issues and unresolved

- Major errors in sampled records: 0 after correction of the draft name.
- Unresolved: publication pages behind Nichibun cards remain unchecked; the dates and geographic origin of the image items are unestablished; same-named or similar animal spirits must not be merged without evidence; Nichibun/source concentration needs continued counterweighting.
- No schema change is justified by these index-level claims.
