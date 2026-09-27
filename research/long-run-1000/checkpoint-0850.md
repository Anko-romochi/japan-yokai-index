# Checkpoint 0850 — source-linked admissions and audit

Date: 2026-09-27 (Japan). The public `main` commit at the 850-entity stop is `17b9b580defc89a3d4216bae5404c6eaf85a3390`. Admissions paused at exactly 850 for this review.

## State and decision

- **850 entities / 638 sources / 900 claims.** [Candidate queue](candidate-queue-0850.csv): **86 screened / 50 admitted / 27 deferred / 9 rejected** for positions 801–850.
- **`LONG_RUN_850_CHECKPOINT_PASS`**: 20-position stratified audit found **0 remaining major errors** after the duplicate correction described below. The 50 entries each retain a source-linked `source_fact` with an evidence locator; the segment cites 40 distinct sources.
- Schema and theory are unchanged. No 851st entity was added during this gate. Continue toward 900 only after this report is normally committed, public and local `main` match, the worktree is clean, and the validator remains PASS.

## Duplicate correction and audit

During screening, `hozoin_no_kobozu` (formerly position 837, 宝蔵院の小坊主) was found to repeat existing `hozo_in_kobozo` (position 372, 宝藏院の小坊主): both cite [the same passage in *西讃岐昔話集*, story 41](https://www.library.pref.kagawa.lg.jp/know/local/local_3001) through `source_0295`. The new entity and its claim `claim_0887` were removed, and its queue decision changed from `admit` to `reject`. This was **one major duplicate**, resolved and [published separately](https://github.com/Anko-romochi/japan-yokai-index/commit/6ef4a80e1e3ea74d74930caa63b97f72b6b5909f) before the replacement admissions. The earlier ID and claim remain intact. A check of the recent entries for normalized spelling, similar names, shared evidence sources, and region distinguished the separate 三重県・蛇池 and 石川県・千蛇ヶ池 stories; it found no other recent duplicate of this kind. Validator passed after the correction.

The 20 sampled final positions were **801, 804, 807, 810, 813, 816, 819, 822, 825, 828, 831, 834, 836, 838, 841, 843, 845, 847, 849, 850**. Their entity–claim–source joins, source types and URLs, evidence locations, naming, chronology, region and grain were checked. The sample covers the first and last positions, an early-region cluster, phenomena and objects, named and unnamed beings, direct published narratives, and institutional explanations. Source passages for positions 845–850 were directly inspected in this run; several older sampled passages were checked at admission and their stored references were rechecked here without claiming a new full reading. The new [Mie accounts](https://www.bunka.pref.mie.lg.jp/minwa/chusei/miyagawa/index.htm) explicitly separate 父ヶ谷の牛鬼 from 高瀬の淵の大蛇; neither is merged with the existing 五ケ所浦の牛鬼. [The museum's 藤原基任 account](https://www.bunka.pref.mie.lg.jp/saiku/senwa/journal324.html) is indexed as its explanation of a *吉野拾遺* story; that earlier text and the named person's historicity have not been independently verified. [The Himeji map](https://www.city.himeji.lg.jp/kurashi/cmsfiles/contents/0000005/5841/map_back.pdf) supports only the local flood-protecting serpent tradition, not its origin date.

## Coverage and source depth

| Measure | Positions 801–850 |
| --- | ---: |
| Entity grain | 25 `named_supernatural_entity`; 21 `folklore_being`; 2 `supernatural_phenomenon`; 2 `object_spirit` |
| Primary evidence source type | 43 institutional explanations; 6 directly inspected published texts; 1 research article |
| Distinct evidence sources | 40 |
| Prefectures represented | 19 |
| No attested region | 0/50 |
| Kana unverified | 37/50 |
| Attested period unrecorded | 38/50 |
| Sampled positions with remaining major errors | 0/20 |

The largest regional counts are 長崎 6, 長野・青森 5 each, 兵庫 4, and several others at 1–3. These are documented settings or transmission regions, never a prevalence measure or origin assignment. Institutional explanations remain the main source type, so citations they make to older publications are **not** direct verification of those publications. The last seven records draw from three Mie prefectural/museum pages, one Kagawa library transcription (reused as `source_0550`), and one Himeji city map; source and prefecture concentration should be monitored in the next segment. The seven new entity labels include descriptive labels, not claims that every phrase was a traditional proper name.

**Grain cautions:** `motojime_gitsune_sanuki` indexes the fox who uses 元締狐 as a role-like self-description in the cited reworking, not an independently proven old name. `ohana_danuki_takamatsu` indexes the narrator's identification of the disappearing woman; her identity is not historically established. `horodo_numa_no_nushi` remains a regional index of two recorded variants and needs comparison before claiming one continuous individual. The [Tottori municipal paper's two snake-body stories](https://www.city.tottori.lg.jp/archives/shihou/img/pr/S580601.pdf), printed p.8, were deferred: web OCR misreads the first name and the relationship between the two stories needs deeper source checking. A Mie history note's “小天狗” was rejected because it names a human religious practitioner, not a tengu being. The “宮川の漆” account was deferred because its visible serpent mouth is a human trick and a distinct supernatural individual is not established by that scene.

Automated structural checks found **0 normalized Japanese-name collisions** and **0 dangling evidence links** at 850. They found two older duplicate source URLs outside this segment (`nichibun.ac.jp/YoukaiDB/ikai/report.html` and `city.mishima.shizuoka.jp/page/1320.html`); their source-record identity must be reviewed before any deduplication. This does not alter the 50-entry gate. Local LLM processed **0**; literal-name, record-ID and locator accuracy are **not measured**; unusable outputs **0**, runtime failures **0**. Codex made and reviewed the admission decisions. No source text or images were copied into the corpus.

**Validator:** `PASS: 850 entities, 638 sources, 900 claims`. **Unresolved:** source depth behind institutional retellings, the Tottori two-story identity and reading, two older duplicated source URLs, and the grain cautions above. **Next action:** after public verification of this report, begin source-backed screening for positions 851–900, seeking more provider and region variety.
