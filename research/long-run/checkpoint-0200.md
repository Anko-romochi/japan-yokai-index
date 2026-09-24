# Long run checkpoint 0200

## Scope and result

- Base: public main `46dd5c9b45e3f2489291a57aabbf7d115a1966a7` (175 entities).
- Current: 200 entities, 182 sources, 241 claims.
- Added: 25 entities, 5 source records, 25 source facts. Claims reuse their respective institutional page.
- Validator: `PASS: 200 entities, 182 sources, 241 claims`.
- No schema, methodology, theory, or preexisting record was changed.

## Admission and review

- Seven records come from 守谷市's individually headed 七不思議, six from あわら市's 吉崎 account, five from 宮島観光協会, and seven from two 丹波篠山市 pages. Each claim attributes a short summary to its page and heading. Date fields for the city sources represent page update dates, not traditional origin dates.
- Sol/Codex reviewed all 25 names, locators, scopes, and possible duplicates. No Local LLM output entered the Corpus.
- Spot audit (10): シラサギの霊 / 守谷市 heading; 高野のお化け石 / 守谷市 heading; お花松 / あわら市「その4」; 蓮如がに / あわら市「その6」; 神鴉 / 宮島観光協会 opening account; 雪の跡 / 宮島観光協会 seventh item; 負け嫌い稲荷 / 丹波篠山市 individual page; 土手裏のおちょぼ / 丹波篠山市 heading; 井の榧の木 / 丹波篠山市 heading; 番所橋の酒買い小僧 / 丹波篠山市 heading. All ten claims remain within the cited passages. The 井の榧 entry records the page's explicit trick explanation.

## Rejected and deferred

- Rejected: 0.
- Deferred this checkpoint: あわら市「片葉の葦」 was not merged with the existing 墨田区「片葉の芦」 and was not counted as a new entity pending a clearer scope rule; 宮島「龍灯」 was withheld because the corpus already has 龍燈 and the relation of regional attestations needs review; nearby 篠山 items with only a verse or an unclear supernatural referent were left out.
- 守谷市's page contains an internally inconsistent era and Gregorian year expression in the 大杉 account. The Corpus claim avoids the disputed year. Source-level historical chronology is unresolved.

## Coverage and source bias at 200

- The new 25 records are concentrated in 茨城、福井、広島、兵庫, reflecting four local collections, not national prevalence.
- Of 182 source records, 109 name 日文研 as repository; source types are 92 database records, 56 institutional explanations, 25 institutional catalog items, 5 research articles, and 4 primary/early sources. This cohort counterweights the earlier all-Nichibun checkpoint, but the overall index remains institutionally and digitally biased.
- Entity types at 200: 80 folklore beings, 69 named supernatural entities, 37 supernatural phenomena, 11 historical people in supernatural traditions, 2 urban-legend figures, and 1 object spirit. Region arrays are empty for 87 entities; many are literature or image items whose geography is unverified. Among stated regions, 兵庫 and 東京 have 8 each, 茨城 7, 広島 and 福井 6 each. These counts are documentation coverage, not origin or prevalence.
- Broad group/site names such as 負け嫌い稲荷 and 寅薬師と御手洗池 are provisional index scopes. Whether to split them is an entity-grain question for later review, not a reason to invent identities now.

## Local LLM

- The existing ComfyUI queue was not idle at the safe initial preflight. No stop, unload, or competing request was made; this checkpoint proceeded Sol/Codex-only.
- Processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 (same initial preflight condition, not a new failure).
- Sol reviewed: 25 admission records and 10 spot-audit records.

## Major issues and unresolved

- Major errors in the ten sampled records: 0.
- Unresolved: these are later institutional retellings rather than proof of the cited stories' original dates or historical events; the group/site grain noted above may require an explicit interpretation in the post-300 review; similarly named regional phenomena must not be merged from name alone.
- Direct HTTP checking of all five pages from the shell was interrupted by the host's certificate-validation error; the cited page passages were read through the web viewer. No certificate bypass was used.
- No schema change is justified by these index-level claims.
