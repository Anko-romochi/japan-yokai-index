# Checkpoint 0500 — admission freeze and stratified audit

Date: 2026-09-25. Public baseline before the audit: `7a0b4ec375fb6e04a66dfc518ee28f82242943c7`.

## State and decision

- **500 entities / 383 sources / 542 claims**. No 501st production entity was admitted.
- Validator after the correction: `PASS: 500 entities, 383 sources, 542 claims`.
- Candidate [queue](candidate-queue-0500.csv), covering the screening since 450: **86 screened / 50 admitted / 26 deferred / 10 rejected**. Forty were admitted since 460.
- The 30-record primary audit found **one major locator error**. A further 20 records were audited, with **no additional major error**. The locator was corrected in `claim_0467`; the claim's substance, source, schema, and theory were unchanged.
- **`LONG_RUN_500_CHECKPOINT_PASS`** after correction and expanded audit. This decision alone does not authorize a 501st production admission; the skill test and reopen gate remain separate.

## Audit method and coverage

Each sampled entity was checked against its registered entity, source, and claim records for identity, canonical name, alias support, source identity, evidence locator, claim wording, chronology, inference, attested region, and entity grain. The cited passage or individual DB record was inspected where accessible; previously completed direct-source evidence packs were used for the early, known access-limited records. A working URL or a matching title alone was not treated as a successful passage check. `OK` below means no major error in these checks, not that an original publication has been source-deepened. `limited` means the available source is an index/DB or a prior evidence pack, so the formation history remains unresolved.

| Phase | Entity positions and IDs | Outcome |
| --- | --- | --- |
| Primary, early | 1 `kappa`; 9 `tsukumogami`; 10 `sugawara_no_michizane`; 15 `nurarihyon`; 25 `rokuemon`; 30 `hanako_san`; 40 `fujiwara_no_sanekata` | OK; catalog/DB and the previously reviewed Tanabe article retain their documented depth limits. |
| Primary, middle | 75 `hitotatara`; 100 `ubume`; 125 `asobi_jizo`; 150 `domokomo`; 200 `banshobashi_sakekai_kozo`; 241 `mishige_majimun`; 250 `tanegaike_tane`; 275 `jogen_mushi`; 300 `ryuoike_no_kinryu` | OK; #300 remains a descriptive Munakata list label requiring source deepening, as already recorded in `research/source_deepening/munakata-six/evidence-pack.md`. |
| Primary, later | 325 `kasasuteyama_no_shirohebi`; 350 `sanzo_bakeneko_hachinohe`; 375 `higashino_ushigashira`; 400 `taibyo_onna_yurei`; 425 `mawatari_tengu`; 450 `aomori_enma_baba`; 460 `komido_no_ryu`; 470 `okon_gitsune_itako`; 480 `tendare_nezumi_kannon`; 490 `tengu_tokubei`; 493 `suguji_no_hashi_azukitogi_onna`; 495 `ninosaka_no_oman_danuki`; 498 `tatara_no_tazen`; 500 `fukanuma_kaido_no_kitsune` | One major locator error at #425, corrected; all other sampled records OK. Recent PDF claims were compared with the exact pages/sections. |
| Expanded, early | 5 `umibozu`; 14 `kuchisake_onna`; 35 `takiyasha_hime`; 60 `sakura_sogo`; 85 `nekomata`; 110 `hyosube`; 135 `genko_gitsune`; 160 `minomushi_road` | OK; some DB/catalog records remain indexed only. The temple explanation and Kobe University article for #60 were kept distinct. |
| Expanded, middle | 185 `okoshikake_no_ishi`; 210 `ome_sanjo_reiboku`; 235 `konan_kubizuka_borei`; 260 `gongorobi`; 285 `hii_hyo_don`; 310 `fukui_tsumani_baketa_ooneko`; 335 `ooike_no_gozenwaka_no_miya` | OK. #210 is on printed p.15 of the city PDF; #235 explicitly offers both ghost rumor and owl-call explanation; #335 is a village retelling credited to an earlier publication, not that original text. |
| Expanded, later | 360 `yokkaichi_onudo`; 385 `sakugawa_borei`; 410 `irobeno_mikoshi_nyudo`; 435 `nishikawa_kawadachi_jizo`; 485 `kinokawa_kakou_no_daija` | OK. #410 was checked against the individual university transcription, not only the table of contents. |

The only major finding: [Miyazaki Prefectural Library's PDF](https://www.lib.pref.miyazaki.lg.jp/ct/other000002000/minwa_hen.pdf) discusses the woodcutter at printed p.63/PDF p.13 and the castle branch scene at printed p.64/PDF p.14. `claim_0467` previously located both on p.63/PDF p.13. The evidence location now names **pp.63–64 / PDF pp.13–14** and assigns the two details to their respective pages. This was checked in rendered PDF pages, not inferred from search snippets.

## Source, provider, region, and grain review

Counts below describe **indexed records and digitized-source availability**, not the historical distribution of yokai. The 383 source records contain 174 `institutional_explanation`, 165 `database_record`, 29 `institutional_catalog`, 10 `primary_or_early_source`, and 5 `research_article`. At the entity level, 169/500 (33.8%) have a claim mediated by a DB record; 50/500 (10.0%) have a catalog-mediated claim. A strict source-type proxy gives 37/500 (7.4%) supported **only** by institutional catalogs. This is a lower-bound list-only estimate because some DB cards and institutional pages are brief indexes despite different source types.

The highest source-record provider counts are 国際日本文化研究センター 18, 千葉県公式ウェブサイト 15, 三重県文化の展示室 13, 秋田県立博物館口承文芸検索システム 12, and 兵庫県立歴史博物館 11. Other providers can have many entities per source, so source-record counts do not measure entity exposure. The recent admissions reduced dependence on a single provider by adding sources from 長和町, 水俣市, 京都市, and 東北文教大学, but source depth still varies sharply.

`attested_regions` is empty for **97/500 (19.4%)**. The most frequent strings are 三重県 24, 千葉県 24, 山形県 22, 福井県 21, 兵庫県 19, 東京都 19, 香川県 18, 秋田県 18, 茨城県 17, and 沖縄県 16. There are 54 distinct region strings, including prefectures, municipalities, districts, and `紀州地方`. These strings are attestations in cited sources, never origin or native-habitat claims. No region normalization or schema change was made.

Entity types are 232 `folklore_being`, 168 `named_supernatural_entity`, 65 `supernatural_phenomenon`, 20 `object_spirit`, 13 `historical_person_in_supernatural_tradition`, and 2 `urban_legend_figure`. The Corpus averages **1.084 claims per entity**; 470 entities have one claim, 22 have two, 5 have three, 2 have four, and 1 has five; none is claimless. The small number of claims is appropriate for a Level 1 index, but it rarely traces persona formation.

Grain risks remain: a type versus a local manifestation (#1, #75), a named individual versus a narrative title (#300, #335), a phenomenon versus its proposed agent (#235, #410), and a historical person versus later supernatural devotion (#10, #60). The audit found no justification to merge or split these automatically. The Munakata list-only records remain flagged for source deepening. These are review questions, not a schema-change requirement at this checkpoint.

## Workflow and unresolved work

The Local LLM processed **0** candidates in the 460→500 segment; Codex directly screened the 40 admissions and reviewed the stratified 50-record audit. Local literal-name, record-ID, and locator accuracy are therefore **not measured** for this segment; unusable outputs and runtime failures were **0**. The candidate queue preserves the admit/defer/reject decisions. No long source text or images were committed.

Unresolved: direct original-publication checks for DB-mediated and list-only entries; the precise grain of Munakata descriptive labels; mixed geographic granularity; and source depth for institutionally retold folklore. None is silently promoted to an origin or continuity claim. The next gate is the separately logged Indexer Skill v1.0 test, followed by an explicit 500→1000 reopen decision.

## Reopen gate

The [Indexer Skill v1.0 test](indexer-skill-v1-test-0500.md) screened ten unadmitted candidates in an isolated copy, passed its behavioral QC and validator, and left production at 500. The checkpoint's sole major locator error has been corrected, with no major error remaining in the 50-record audit. Production validator passes; no schema or theory change is required. Thus all user-defined criteria are met: **`LONG_RUN_1000_REOPEN_PASS`**. The next production admission may be #501 at the next 550 checkpoint run; the isolated test records must not be copied into main without normal candidate review.
