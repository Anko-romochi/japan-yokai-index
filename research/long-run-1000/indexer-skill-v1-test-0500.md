# Indexer Skill v1.0 test at the 500 freeze

Date: 2026-09-25. Installed skill: `C:\Users\admin\.codex\skills\japan-yokai-corpus-indexer\SKILL.md` (metadata version `1.0`, SHA-256 `BE81E3D1079D8493F70782AE85F62507E7F62CC0E7AE9CB338F5322BF15B2385`). Its prior content was backed up outside the repository. The skill was updated only after [checkpoint 0500](checkpoint-0500.md) passed.

## Ten-candidate screening

All ten candidates below were inspected in individual text records in [東北文教大学の『つゆふじの伝説』](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/tsuyufujinodensetsu.html). The existing `source_0319` was reused for the two isolated test admissions; no duplicate source record was created. The university text is a transcription, while the original printed publication and collection date remain unverified. Region `山形県` is an attested setting, not an origin claim. No alias was added and no narrative date was copied to an attested period.

| No. / individual text | Decision | Identity and evidence judgment |
| --- | --- | --- |
| [35 砂川水江の怪物](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/35.html) | defer | Text offers a red-faced figure and alternate explanations (山男 or otter monster); identity and grain remain unclear. |
| [41 奥の院沼に白蛇](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/41.html) | **test admit** | A locally bounded white-snake account and rumor are in the full text. Indexed as a regional being, without equating it with the different account in #73 or its shrine deity. |
| [46 おしげ婆さん入道にあう](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/46.html) | defer | A giant nyūdō is reported at a tree, but no stable individual identity connects it to the existing 色部野 entry. The HTML title itself repeats #45's title, so the numbered record and body govern. |
| [68 石音和尚狐の嫁入りを見る](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/68.html) | defer | The monk is the experiencer, not a supernatural entity; the fox-wedding agents are not individually distinguished. |
| [70 牛沼の怪](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/70.html) | **test admit** | Full text gives a localized unexplained loud sound and its aftermath. Indexed as a `supernatural_phenomenon`; no unseen creature or causal power is asserted. |
| [73 奥の院沼の怪](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/73.html) | defer | Same pond as #41, but the text offers white-snake, giant-snake, and turtle accounts; same-place identity is unresolved. |
| [78 水江河童の怪物](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/78.html) | reject as new | Already indexed as `mizue_kappa`; the subject is not a new admission. |
| [89 前田原の怪](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/89.html) | defer | Multiple sights in a vacant house; a single entity or causal agent is not established. |
| [90 じゃこう猫](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/90.html) | reject | The text describes an animal caught and sold, without a supernatural referent. |
| [91 和田の七不思議](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/91.html) | reject as entity | A numbered collection of seven places/verses; the collection title is not one being or phenomenon. Items would need separate screening. |

Totals: **2 test admit / 5 defer / 3 reject**. Both test admissions used a temporary copy of `data/`, `schemas/`, and `scripts/` outside the repository. They added `skilltest_okunoin_white_snake` and `skilltest_ushinuma_sound` with one short, source-linked `source_fact` each, existing `source_0319`, precise individual text URLs, null unverified readings, no aliases, and no asserted formation chronology. These IDs and claims are **not** in production main and do not count toward 501.

## QC and gate

The first temporary validator run exposed an invalid *test-fixture* claim-ID pattern; a PowerShell rewrite then left a blank JSONL line. Both fixture mistakes were corrected in the isolated copy. The final isolated run passed: `PASS: 502 entities, 383 sources, 544 claims`. The production corpus separately remains `PASS: 500 entities, 383 sources, 542 claims`. Neither fixture error affected the installed skill or public corpus.

Manual source audit of both test admissions: **0 major errors, 0 locator errors, 0 unsupported claims, 0 fabricated aliases, 0 chronology errors**. Decisions exercised all three admission outcomes. The formal `skill-creator` quick validator could not start because its Python environment lacks `yaml`; a separate structure check verified required frontmatter fields, version, all 18 sections, and no scaffold placeholders. This dependency limit does not change the source-and-validator behavioral result.

**`YOKAI_INDEXER_SKILL_V1_PASS`**. The test shows the skill can screen and index these ten cases at Level 1; it does not establish the original print dates or a general error rate for future candidates.
