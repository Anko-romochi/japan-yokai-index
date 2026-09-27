# Checkpoint 1000 — final admission freeze and audit

Date: 2026-09-28 (Japan). Admissions stopped at **exactly 1000**. The public `main` admission and audit-correction commit before this report is `91e6617ff61ef966d34b0de020ad2fd8c8558f11`. No 1001st entity was added.

## State and decision

- **1000 entities / 744 sources / 1052 claims.** [Candidate queue](candidate-queue-1000.csv) for positions 951–1000: **83 screened / 50 admitted / 25 deferred / 8 rejected**.
- **`LONG_RUN_1000_CHECKPOINT_PASS`**: a full 50-position entity–claim–source join and a 20-position stratified identity/locator review found **0 remaining major errors** after correction. Every admitted entity has at least one reviewed `source_fact`, a registered source URL, and a nonempty evidence locator. The 50 positions cite 41 distinct source records.
- The first published #1000, `higashihaguro_tsutsumi_no_daija`, failed the supernatural-subject test at this audit: the Fukushima page only says a large snake lived near the pond. It was changed to `defer` in `ef1dcf5`. Its provisional replacement, `hataya_kannon_fuji_no_kappa`, has a narrated kappa action in the indexed Niigata PDF, but a fresh retrieval of that city's PDF URL failed during the final audit; it was also deferred. The final #1000 is `itayado_hachimangu_no_tobimatsu`, supported by the current live Kobe city page's statement that the pine flew from Kyoto. Both corrections were validated and published normally; the count stayed exactly 1000 throughout. This is **one caught major admission error, zero remaining**.
- Schema and theory are unchanged. This is the final stop; there is no reopen decision for #1001.

## Audit method and sample

The full segment pass joined positions 951–1000 to claims and sources, checked source IDs/URLs and locators, reviewed name collisions and duplicate source URLs, and counted source type, provider, region, and entity grain. The 20-position sample checked canonical name, identity, alias support, claim wording/layer, chronology, region, and source depth as well as the join. Sources for the newest positions were inspected at admission; the public passages for #953, #962, #974, #985, #988 and #991–1000 were rechecked during this final gate. The Niigata report's indexed PDF text was reviewed at precise pages, but a fresh direct download failed. Its underlying cited books were not collated. The final #1000 uses a current live Kobe city page.

| Sample positions and entity IDs | Check |
| --- | --- |
| 951 `shiraito_legend_princess`; 953 `kaeruiwa_no_oogaeru`; 956 `ryuo_minamata_ryuzan`; 959 `imari_osho_no_mikeneko`; 962 `hanzaki_daimyojin_yubara` | Joins and locators pass. #953 is a later city explanation of *西備名区*, not a direct reading of that older geography. #959 is a database synopsis. #962 uses the MLIT English passage and a separate Okayama source for the shrine reference. |
| 965 `jincho_echigo_honjotsu`; 968 `kikuishi_yogoko`; 971 `kuroboshi_daitengu_enrinji`; 974 `hikaru_kaicho_osarizawa`; 977 `tsuchinoko_kaga_account` | Joins and locators pass. #965, #968 and #971 cite later treatments of older texts; the source and alleged event dates remain separate. #977 preserves the text's statement that a witness called the moving object ツチノコ, rather than asserting its identity as fact. |
| 978 `okori_no_kami_kaga`; 980 `kokokuji_no_tengu`; 982 `usa_jingu_hyakudan_no_oni`; 984 `kirikomi_karikomi_no_daija`; 985 `todoroki_no_taki_ryujin_ureshino` | Joins and locators pass. #978 keeps the narrator's doubt and no inferred region. #980 attributes the tengu identification to villagers. #985 is the Saga waterfall tradition, distinct from the previously indexed Nagasaki waterfall. |
| 988 `donchi_ike_no_kappa`; 991 `matsuejo_tengu_no_ma_no_onna`; 995 `oni_no_iwaya_no_oni_saito`; 998 `toida_gawa_no_enko`; 1000 `itayado_hachimangu_no_tobimatsu` | Joins and locators pass after the #1000 correction. #991 does not equate the apparition with a human pillar. #995 is a local rock-formation tale, not a claim that it appears in the *Kojiki*. #998 keeps the kappa distinct from the commemorative statue. #1000 indexes the flying pine itself, not Sugawara no Michizane. |

## Source, region, and entity-grain review

| Measure | Positions 951–1000 | Whole index at 1000 |
| --- | ---: | ---: |
| Entity types | 31 `folklore_being`, 16 `named_supernatural_entity`, 3 `object_spirit` | 500 `folklore_being`, 357 `named_supernatural_entity`, 76 `supernatural_phenomenon`, 51 `object_spirit`, 14 historical persons in supernatural tradition, 2 urban-legend figures |
| Distinct evidence sources by type | 36 `institutional_explanation`, 3 `research_article`, 2 `database_record` | 452 `institutional_explanation`, 206 `database_record`, 40 `primary_or_early_source`, 35 `institutional_catalog`, 11 `research_article` source records |
| Empty region / kana / attested period | 2 / 44 / 48 | 103 / 606 / 945 |
| Major errors remaining in sample | 0/20 | Not an exhaustive review of all 1000 |

The segment has **26 explicitly named modern prefectures**. One entry uses historical 越中国, one a 大聖寺藩 location, and two have no supported region. This is source-exposure diversity, not a map of historical origins or prevalence. The largest segment counts are 熊本 and 滋賀 at four each, then 大分, 新潟, 秋田, and 佐賀 at three each. The MLIT database is the largest provider at nine admissions; 加賀市立中央図書館 supports four, and 新潟市潟環境研究所 supports three. The segment has no source record classified `primary_or_early_source`; modern retellings and database descriptions remain a substantial source-depth limit. The full corpus likewise has a large share of institutional and database sources, and its unknown kana and periods were left unknown rather than inferred.

The three new Niigata kappa are place- and episode-specific; their shared type does not prove the same individual. The two 下湯 oni are separately named in one account. The 轟の滝 records refer to separate waterfalls in Saga and Nagasaki. Named site qualifiers in index labels disambiguate records; they are not asserted as traditional personal names. The rejected 八木の大蛇 was already indexed. The deferred 宇佐神宮 snake variant, 湯田温泉 fox, 書写山 heavenly maiden, 米子と夜叉鬼, corrected 東羽黒 snake, and 旗屋 kappa retain their documented grain, evidence or access questions in the queue. Two corpus-wide duplicate source URLs predate this segment (`source_0426`/`source_0455`, `source_0079`/`source_0087`); this segment introduced none.

## Validation and closeout

`python scripts/validate_corpus.py` returned **`PASS: 1000 entities, 744 sources, 1052 claims`** after the correction; `git diff --check` passed. No local LLM processed candidates in this segment, so literal-name, record-ID and locator accuracy for local extraction are not measured; unusable outputs and runtime failures were 0. No full source text or images were committed. Original publications behind several institutional retellings and database records remain for future source deepening; this Level 1 stop does not make origin, continuity, or formation claims.

**Next action:** publish this audit report normally, verify local and public `main` match and the worktree is clean, then disable the existing heartbeat. Keep admissions frozen at 1000.
