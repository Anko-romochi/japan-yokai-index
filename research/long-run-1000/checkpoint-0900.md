# Checkpoint 0900 — source-linked admissions and audit

Date: 2026-09-27 (Japan). The public `main` commit at the 900-entity stop is `f79863ff0c541f85e6c690a7e887bac2fce93fbe`. Admissions paused at exactly 900 for this review.

## State and decision

- **900 entities / 669 sources / 950 claims.** [Candidate queue](candidate-queue-0900.csv): **85 screened / 50 admitted / 30 deferred / 5 rejected** for positions 851–900.
- **`LONG_RUN_900_CHECKPOINT_PASS`**: 20-position stratified join audit found **0 remaining major errors**. Every new entity has a source-linked `source_fact` with a specific evidence location. The segment cites 33 distinct sources.
- Schema and theory remain unchanged. No 901st entity was added during this gate. Continue toward 950 only after this report is normally committed, public and local `main` match, the worktree is clean, and the validator remains PASS.

## Audit

The sampled positions were **851, 854, 857, 860, 863, 866, 869, 872, 875, 878, 881, 884, 887, 890, 891, 893, 895, 897, 899, 900**. For each, the entity–claim–source join, source URL, evidence locator, naming, attested region and grain were checked. All 20 had one reviewed `source_fact`, an existing source, a nonempty URL and a matching evidence location. An automated normalized-name check found **no collision involving the 50 new records**; no evidence source URL is duplicated within this segment.

The source passages for positions 891–900 were inspected during admission. This audit directly rechecked the public passages for positions 854, 860, 872, 875, 878, 884 and 887. The older sources for other sampled positions had been reviewed at admission; checking their current citation and locator here is not a claim to have reread every full original. The [Yamaguchi archive's *浦日記* excerpt](https://archives.pref.yamaguchi.lg.jp/user_data/upload/File/doubutsu20.pdf) explicitly records both the popular `尾かづき` report and the account's own objection to that rumor; the corpus claim keeps both. The [Hyogo museum account](https://rekihaku.pref.hyogo.lg.jp/digital_museum/legend3/story12/journey10/) presents the 洲本八狸 personas using a 2002 book; this is evidence for that reuse, not for an old continuous lineage. The [Totsukawa retelling](https://www.vill.totsukawa.lg.jp/bridge/folklore/old-tale/old-tale81-90/) itself supplies the `はくらんさん` name and change of shrine location. The [Ibaraki individual record](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1) names 四郎介 and assigns him the sea, while its original printed collection remains separate from the DB page.

The [Toyama prefectural water map](https://www.pref.toyama.jp/1711/kurashi/kankyoushizen/kankyou/mizu/chisui/map/gaiyou_jouganjigawa.html) gives separate paragraphs for the great kettle, river lord and ear-healing Jizō. Its 2021 page update and the story's 安政5年 flood are different dates. The [Kurobe basin page](https://www.pref.toyama.jp/1711/kurashi/kankyoushizen/kankyou/mizu/chisui/map/gaiyou_kurobegawa.html) explicitly calls the daughter お光; the index label `愛本のお光` distinguishes her from an older Kagoshima お光 entry and does not assert identity. The [Uozu city PDF](https://www.city.uozu.toyama.jp/attach/EDIT/009/009030.pdf), PDF p.10, distinguishes the serpent of the tale from the rock subsequently revered as 蛇石. The prefectural Oyabe page's `赤丸の大ムカデ` heading leads to a paragraph about a 権現 without a centipede account; it was deferred, not admitted. The one-sentence `宮島峡竜宮淵` dragon-god note was likewise deferred for grain and depth.

## Coverage and source depth

| Measure | Positions 851–900 |
| --- | ---: |
| Entity grain | 25 `named_supernatural_entity`; 22 `folklore_being`; 2 `object_spirit`; 1 `historical_person_in_supernatural_tradition` |
| Evidence source type | 36 `institutional_explanation`; 6 `primary_or_early_source`; 6 `database_record`; 2 `research_article` |
| Distinct evidence sources | 33 |
| Prefectures represented | 18, with one entity's region unknown |
| Kana unverified | 38/50 |
| Attested period unrecorded | 24/50 |
| Attested region unrecorded | 1/50 (`yanagihyoe_kitsune`) |
| Sampled positions with remaining major errors | 0/20 |

The largest regional counts are 奈良 7, 富山 5, 新潟・兵庫・千葉 4 each. These are documented settings or publication regions, not prevalence or places of origin. 十津川村's archive is the largest single provider (7 records); 兵庫県立歴史博物館 and 富山県 each support 4. The concentration reflects efficient reuse of inspected passages and remains a source/region bias for the next segment. Institutional explanations and DB records are indexed at their own depth. Their references to earlier texts have not automatically been counted as direct original-source verification.

**Grain cautions:** `yanagihyoe_kitsune` has no attested region because the cited retelling does not establish one. `shibasuke_tanuki_sumoto` and the other 洲本八狸 index the 2002 retelling cited by the museum, not proven older independent personas. `aimoto_no_ohikari`, `iwakuraji_no_ogama`, `jouganjigawa_no_nushi`, `eishoji_no_mimi_jizo`, and `hebiishi_no_daija_uozu` are source-specific labels or objects; later comparison may revise their grain. The story's flood year is not the first-attestation or origin date. Candidate names with thin passages or ambiguous identity remain `defer` in the queue.

Local LLM processed **0**; literal-name, record-ID and locator accuracy are **not measured**; unusable outputs **0**, runtime failures **0**. Codex made and reviewed the admission decisions. No source text or images were copied into the corpus.

**Validator:** `PASS: 900 entities, 669 sources, 950 claims`. **Unresolved:** original publications behind institutional retellings, the 2002 basis of the 洲本八狸 personas, the Toyama heading/body mismatch and thin dragon-god note, and broader source-depth and region concentration. **Next action:** after public verification of this report, begin diversified source-backed screening for positions 901–950.
