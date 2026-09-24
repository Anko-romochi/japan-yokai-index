# Long run checkpoint 0225

## Scope and result

- Base: public main `8724b8e44ce2ef6696374f67246502f360558a79` (200 entities).
- Current: 225 entities, 198 sources, 266 claims.
- Added: 25 entities, 16 source records, 25 source facts. One 青梅市 booklet is reused for 11 entities; all other pages have individually identified headings.
- Validator: `PASS: 225 entities, 198 sources, 266 claims`.
- No schema, methodology, theory, or preexisting record was changed.

## Admission and review

- Sources: 青梅市 booklet (11), 兵庫県立歴史博物館 (5), 匝瑳市 (6), 戸田市 (2), 横浜市港南区 (1). Booklet claims have printed page and numbered item locators. Other claims identify the individual page and relevant heading or passage.
- These are institutional presentations of traditions. A narrated date, a purported historic event, or a present cultural explanation is not treated as the first attestation or proven event. `attested_periods` remains empty where no dated witness was checked.
- Sol/Codex reviewed all 25 name scopes, claims, locators, and duplicate risks. Local LLM output did not enter the Corpus.
- Spot audit (5): テンマル / 青梅市冊子5頁⑥; あずき婆 / 同9頁⑯; およし狐 / 兵庫県立歴史博物館本文; 大浦瘡神 / 匝瑳市本文; 八日僧 / 横浜市港南区本文. The name and summarized claim were present within each cited passage. Major errors found: 0.

## Rejected and deferred

- Rejected (3): 青梅市のコトガーラ is explained as a place-name derivation, 百いらず as a name for a cold location, and ズンズク大尽 is the heading of a household story about unnamed tanuki. Counting them as separate beings would inflate the entity index.
- Deferred (3): 青梅市の猫地蔵 has a memorial context but no clear supernatural action in the booklet; 待ち伏せオオカミ could be an ordinary animal encounter; 戸田市の「かっぱの金さん」は金さんが捕獲者の名であり河童の固有名と誤読しやすい。
- Boundary cases kept: 流転のサル人形 is an ominous object story, not proof the doll has agency. 休哲さま and 大浦瘡神 concern persons worshipped after death; the records do not establish historical details beyond the pages' narration. およし狐 is not merged with おさかべ姫 despite literature linking them. あずき婆 is not automatically merged with the existing 小豆洗い.

## Coverage and source bias at 225

- The 25 entries come from 東京都11、兵庫県5、千葉県6、埼玉県2、神奈川県1. They are selected from five public institutional collections, not a measure of national prevalence.
- Source types at 225: 92 database records, 72 institutional explanations, 25 institutional catalog items, 5 research articles, 4 primary/early sources. The cohort adds many later retellings; first attestations remain a research gap.
- Entity types at 225: 88 folklore beings, 79 named supernatural entities, 43 supernatural phenomena, 12 historical persons in supernatural traditions, 2 urban legend figures, 1 object spirit. Region arrays remain empty for 87 entities. Those fields describe documented coverage only.

## Local LLM

- The existing ComfyUI queue was busy at the initial safe preflight. No stop, unload, or competing request was made; this checkpoint proceeded Sol/Codex-only.
- Processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 (same initial preflight condition, no new failure).
- Sol reviewed: 25 admission records and 5 spot-audit records.

## Major issues and unresolved

- Major errors in the five sampled records: 0.
- All five collections are mediated presentations, and their source pages should not be mistaken for early documentary witnesses. The first attestation and variant relations of several named figures remain unresolved.
- Entity granularity remains a review topic for v0.3 onward: a locally named version of a broad type, a named spirit linked to a human, a story title, and an uncanny object are distinct analytical scopes. No schema change was justified by this checkpoint.
