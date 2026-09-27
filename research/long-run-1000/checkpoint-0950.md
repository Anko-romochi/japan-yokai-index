# Checkpoint 0950 — source-linked admissions and audit

Date: 2026-09-27 (Japan). Admissions paused at exactly 950 entities. The public `main` commit before this report is `892d7994fb6b827820ec35c31a8c6937a6cb4c80`.

## State and decision

- **950 entities / 706 sources / 1000 claims.** [Candidate queue](candidate-queue-0950.csv): **113 screened / 50 admitted / 40 deferred / 23 rejected** for positions 901–950.
- **`LONG_RUN_950_CHECKPOINT_PASS`**: the 20-position stratified join audit found **0 remaining major errors**. Each new entity has one reviewed, source-linked `source_fact` with a specific evidence location. The segment cites 42 distinct sources.
- Schema and theory remain unchanged. No 951st entity was added during this gate. Resume admissions only after this report is normally committed, public and local `main` match, the worktree is clean, and the validator remains PASS.

## Audit

Sampled positions: **901, 902, 904, 907, 911, 914, 918, 920, 923, 927, 930, 932, 935, 937, 939, 941, 944, 947, 948, 950**. For each, the entity–claim–source join, claim layer and review status, source URL, evidence locator, region and entity grain were checked. All 20 passed the structural and provenance checks. A normalized-name check found no collision with the older 900 records; the newly registered source URLs do not duplicate another source URL.

The public passages for positions **902, 907, 914, 918, 935 and 937** were directly rechecked during this audit; the sources for the newest positions had also been inspected at admission. This is a sampled review, not a claim to have reread every original publication. The [Ibaraki individual record](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0801200005?f=1) explicitly describes 長楽寺 joining the twelve tengu and quotes *仙境異聞*; the underlying classic has not been independently collated. The [Fujieda museum story](https://www.city.fujieda.shizuoka.jp/kyodomuse/11/12/1445916475707.html) directly describes the 青池 serpent but is a modern retelling. [*西讃岐昔話集*](https://www.library.pref.kagawa.lg.jp/know/local/local_3001), pp.91–92, gives the printed form 稻神さま and the editor's “newly made” assessment; neither a reading nor a locality is inferred from the title. The [Shiwa town reprint](https://www.town.shiwa.iwate.jp/kanko/rekishi/1/1876.html/) gives 坊主石 and its 雨ごい地蔵 name within the same story. Database text, original publication and later explanation remain distinct evidence levels.

## Coverage and source depth

| Measure | Positions 901–950 |
| --- | ---: |
| Entity grain | 26 `folklore_being`; 20 `named_supernatural_entity`; 3 `object_spirit`; 1 `supernatural_phenomenon` |
| Evidence source type | 20 `primary_or_early_source`; 24 `institutional_explanation`; 6 `database_record` |
| Distinct evidence sources | 42 |
| Prefectures represented | 16, with two records not assigned a prefecture |
| Kana unverified | 44/50 |
| Attested period unrecorded | 48/50 |
| Attested region unrecorded | 1/50 (`inegami_sama_sanuki`) |
| Sampled positions with remaining major errors | 0/20 |

The largest regional count is 静岡 10, followed by 茨城・愛知 5 each and 愛媛 4. 藤枝市郷土博物館・文学館 supports six records, 茨城県 and 大府市歴史民俗資料館 five each, 香川県立図書館 and 富士市 four each. These are attested settings or collection locations, not origins or population prevalence. The provider concentration and high rate of unknown kana/periods are documented limits, not values to fill by inference. `otsuchi_kotsuchi_no_daija` retains the two-island setting without forcing a prefecture; `inegami_sama_sanuki` retains an empty region because the cited passage does not establish one.

**Grain and source cautions:** `inegami_sama_sanuki` is an editor-identified made story, a useful test of how a named figure can be indexed without asserting inherited belief. `shiwa_no_bozuishi` is a named stone with a directly supported alternate name, not evidence of two separate beings. `momoyama_no_ryujin`, `yokone_no_tengubi` and the other 大府 entries share one inspected publication but point to separate passages. `osode_danuki_matsuyama` and nearby named tanuki index a modern institutional presentation; a historical lineage is unproven. The Ibaraki DB records expose text and original-publication metadata, but their cited older works are not automatically direct evidence. `katayori_no_okiku`, `myoho_nishin` and other weak or possibly duplicate candidates remain deferred in the queue.

Local LLM processed **0**; literal-name, record-ID and locator accuracy are **not measured**; unusable outputs **0**, runtime failures **0**. Codex made and reviewed admission decisions. Original text and images were not copied into the corpus.

**Validator:** `PASS: 950 entities, 706 sources, 1000 claims`. **Unresolved:** earlier publications behind modern retellings and DB cards; source and region concentration; unverified readings and periods; several candidate grain conflicts in the deferred queue. **Next action:** after this report is public and the reopen gate is verified, diversify source-backed screening for positions 951–1000.

