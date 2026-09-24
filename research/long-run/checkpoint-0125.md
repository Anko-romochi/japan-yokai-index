# Long run checkpoint 0125

## Scope and result

- Base: public main `dffa281cb16501f2fd4ac23e9bd92caf29895572` (100 entities).
- Current: 125 entities, 134 sources, 166 claims.
- Added: 25 entities, 24 source records, 25 source facts. The 大潟村 page is reused for 八郎太郎 and 南祖坊.
- Validator: `PASS: 125 entities, 134 sources, 166 claims`.
- No schema, methodology, or preexisting record was changed.

## Admission and review

- Added 12 named items from the Nichibun image catalog. Claims only index the catalog's descriptions of depictions. Catalog dates 2006/2007 were **not** treated as dates of the original artwork or of the tradition.
- Added 3 figures from two Akita municipal pages, with the statements explicitly attributed to the pages.
- Added 10 figures or named local traditions from Nichibun folklore cards. Claims explicitly describe the cards' summaries. Original journal/book pages were not read; page locators are those reported by each card.
- Sol/Codex reviewed all 25 proposed names, item/record IDs, locators, and claim scopes. No Local LLM output entered the Corpus.
- Spot audit (5): 手の目 / `U426_nichibunken_0082_0006_0000`; 八郎太郎 / 大潟村「八郎太郎伝説」冒頭; 七尋女 / `1070477`; 米とぎ婆 / `C0411214-000`; 遊び地蔵 / `1300049`. Name, locator, and bounded claim matched the cited page. No repair required.

## Rejected and deferred

- Rejected: 0.
- Deferred this checkpoint: セクラベ（河童との関係を未判定）、タッチュー（カード識別子を未確認）、灰ばばあ・門助ばばあ（今回、直接カードを確認できず）、鼻取地蔵（同名の異なる土地の像を同一視できない）。The 100 checkpoint's three deferred names remain deferred.
- The image title `くはごせ` is indexed under the card's reading ガゴゼ. The catalog's subject 元興寺 is quoted only in the claim; this does not merge the figure with the temple institution.

## Coverage and source bias

- New documented regions include 岩手、宮城、秋田、鳥取、高知、愛媛、兵庫、栃木、新潟、静岡. Image-only entries have empty attested-period and attested-region arrays.
- 22 of 24 new source records are Nichibun catalog/card items; 2 are municipal pages. Nine image items share one parent work, `新版妖怪飛巡雙六`, but each source record refers to a distinct image catalog item and locator. This materially concentrates the cohort in one work and one repository.
- Illustrated figures are provisional index entries. Whether they circulated as independent folk beings is unresolved.

## Local LLM

- Existing ComfyUI queue was not idle at the safe preflight. No stop, unload, or competing request was made; this checkpoint proceeded Sol/Codex-only.
- Processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 (same preflight condition, not a new failure).
- Sol reviewed: 25 admission records and 5 spot-audit records.

## Major issues and unresolved

- Major errors in sampled records: 0.
- Unresolved: original publication pages behind Nichibun cards remain unchecked; image catalog dates do not establish artwork chronology; artwork-to-folklore identity needs later evidence; the parent-work concentration should be counterweighted in the next checkpoint.
- No schema change is justified by these index-level claims.
