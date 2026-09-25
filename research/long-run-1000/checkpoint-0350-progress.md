# Checkpoint 0350 — interim progress (322/350)

Date: 2026-09-25. Base public commit: `9eefe25402f5dc753e7c64199b67fe1a1b7d7cdc` (305 entities). This is an interim, fully audited publication; the 350 checkpoint and its required stratified spot audit have **not** occurred.

## Counts and gate

- Corpus after this increment: 322 entities, 254 sources, 364 claims.
- Added: 17 entities, 2 sources, 18 claims (one claim strengthens the existing `sasai_no_takebo`).
- Candidate queue: [candidate-queue-0350.csv](candidate-queue-0350.csv) — 17 admit, 5 defer, 2 reject in this research increment.
- Validator: `PASS: 322 entities, 254 sources, 364 claims`.
- Local LLM: not used. Every addition was manually checked against the cited institutional page and audited before commit.

## All-admission audit

The 17 new IDs and names are unique in the Corpus. New source URLs are unique; a pre-existing pair (`source_0079`, `source_0087`) uses the same generic 日文研 report URL for different report titles and remains outside this increment. All 18 new `source_fact` claims have source IDs and bounded locators. No alias or speculative reading was added; publication/update dates were not entered as origin periods.

| Entity group | IDs / scope | Evidence and limitation |
| --- | --- | --- |
| Named kappa | `igusa_no_kesabo_kappa`, `kume_no_mandara_kappa` | [狭山市「タケが淵の伝説」](https://www.city.sayama.saitama.jp/manabu/dentou/minwa_densyo/mizutomi_chiku/takegahutinodensetu.html), paragraph listing タケ坊・ケサ坊・まんだら. These are three names in one municipal retelling; the 1996 広報原紙 is not yet read. Locations are attested association, not birthplaces. |
| Human ghosts / demoness | `shibata_katsuie_no_borei`, `tojinbo_no_akuryo`, `yashagaike_no_yasha`, `shirakijo` | [福井県文書館展示](https://www.library-archives.pref.fukui.lg.jp/bunsho/category/tenji/29991.html), numbered entries (1), (4)–(6). The exhibition prints translations and transcriptions and identifies manuscript items. 東尋坊 is indexed as a legendary named being; the monk's historical existence is not confirmed. The 白鬼女 origin is only a recorded place-name explanation. |
| Local animal / water beings | `fukui_tsumani_baketa_ooneko`, `kuzuryugawa_no_kuzuryu`, `yokohamaura_no_kaigyu`, `wakamiya_buchi_no_onamazu`, `mizuno_genchichi_no_roukawauso`, `magoemon_ga_kaka` | Same exhibition, entries (3), (11), (12), (23), (16), (17). Descriptive index names are scoped to the cited episode. 九頭竜川の九頭龍 is not merged with the existing 箱根・芦ノ湖の九頭龍大神. The 大鯰's transformation is reported as a story that the cited text itself doubts. |
| Anomalous appearances / voices | `fukui_taika_no_daihoshi`, `kanegasaki_no_kaijo_kaii`, `matsuoka_no_reika`, `botamochi_bakemono`, `sabaya_no_nukekubi` | Same exhibition, entries (2), (10), (13), (18), (21). 金ヶ崎's vision is not asserted to be ghosts rather than mirage. ぼた餅化物 is a nickname for an unidentified voice, not an identified species. The 抜け首 episode concerns a living woman's reported wandering head, not her death. |

For each of the 15 福井 entries, the registered `source_0254` is the **2023 prefectural archive exhibition page**, not the linked original manuscript. Its page labels give original titles, shelf IDs and image frame numbers, but the image frames were not directly verified in this increment. The claims therefore say what the exhibition transcription or explanation reports. Entry numbers provide locators. One initially considered giant turtle was deferred because its supernatural status is uncertain; the directly attested shapeshifting-catfish account was used instead.

## Bias and next checkpoint

This interim increment is concentrated in 福井県 (15) and 埼玉県 (2), with 15 claims on one exhibition page, albeit citing different named manuscripts. Source diversity and entity grain need deliberate attention for the remaining 28 admissions. At 350, inspect at least ten stratified new records, save the completed checkpoint log, run validator and source/name checks, then verify the public commit. Level 1 only; no formation history or origin is inferred.
