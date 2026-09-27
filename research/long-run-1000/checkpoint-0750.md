# Checkpoint 0750 — source-linked admissions and interim review

Date: 2026-09-27 (Japan). Public `main` at the 750-entity stop: `97be3fc19b3e58fcd93c203774710dfeaf809c6c`. No 751st entity was added during this gate.

## State and gate

- **750 entities / 560 sources / 796 claims**. [Candidate queue](candidate-queue-0750.csv): **74 screened / 50 admitted / 18 deferred / 6 rejected** for positions 701–750.
- Each of the 50 additions has a source-linked `source_fact` and a nonempty, source-specific locator. The segment has 51 claims and uses 39 distinct sources. Exact canonical Japanese-name duplicates: **0**. The validator passes.
- **LONG_RUN_750_INTERIM_REVIEW_PASS**: 20-position stratified audit, zero remaining major errors. Normal publication and remote verification of this review are required before admission resumes at 751. This gate does not certify that each cited earlier work or original publication was inspected.

## Audit and corrections

The audit joined entity, claim and source records, checked name and grain against the cited passage, and inspected source type, locator, chronology, attribution, reading and duplicate risk. Sampled positions: **701, 703, 706, 709, 712, 716, 720, 724, 728, 732, 736, 740, 743–750**. These include named beings, unnamed place-linked accounts, a DB record, printed story texts, institutional explanations, a catalog-linked account, and multiple prefectures. Additional grain checks examined **710 北面天満宮の河童木像**, **711 矢田の賽の神の石**, and **734 奥州の蛇藤**. Their cited text attributes action or speech to an object or plant; the physical object alone was not the reason for admission. Previously checked PDFs and pages were not all redownloaded during this gate.

The card for **貝鞍が池の大蛇** prints `Ver.1(2020/2/1)`, which is a version mark. `source_0555.date` was therefore changed from `2020-02-01` to `null` and its location note distinguishes the version mark from an unverified publication date. This is a metadata precision correction, not a change to the claim or entity. The same card's `建立時期：江戸時代` is not treated as the legend's origin date.

The [Nagano card](https://www.pref.nagano.lg.jp/sabo/manabu/documents/90-04iida-card.pdf) was checked visually because a search-engine image description conflicted with its text layer. The PDF itself reads **貝鞍が池**, supporting the registered spelling. The [Niigata prefectural page](https://www.pref.niigata.lg.jp/sec/nagaoka_nourin/1280692846183.html) says 七左衛門 *felt* the blind snake might be 小太郎's soul; `claim_0792` preserves that attribution instead of asserting identity. The [Iwate prefectural page](https://www.pref.iwate.jp/kensei/profile/1000647.html) describes **羅刹鬼** and **三ツ石様** as different actors. The [Yakuri-ji page](https://yakuriji.jp/tengu/) identifies 中将坊 as the hall's honzon and explains the geta tradition. The two Nagano cards for [黒体竜王](https://www.pref.nagano.lg.jp/sabo/manabu/documents/100-03neba-card.pdf) and [大沼池の大蛇](https://www.pref.nagano.lg.jp/sabo/manabu/documents/07-02yamanouchi-card.pdf) were checked as individual card images, not inferred from the card list.

The 1983 [Tottori city bulletin](https://www.city.tottori.lg.jp/archives/shihou/img/pr/S580601.pdf) had an OCR/search reading that suggested another named woman; a visual check did not support the proposed new entity and the candidate was rejected as a duplicate-risk case. No same-name traditions were merged by name alone. The Miki **万八狸** was kept distinct from the Kagawa namesake because the city account and place differ and continuity is unproven.

## Interim cross review

| Measure | Positions 701–750 | All 750, where useful |
| --- | ---: | ---: |
| Entity grain | 25 folklore beings; 20 named supernatural entities; 4 object spirits; 1 phenomenon | 366; 255; 41; 73 respectively; 13 historical-person traditions; 2 urban-legend figures |
| Primary evidence source type | 42 institutional explanations; 5 database records; 2 `primary_or_early_source`; 1 institutional catalog | 453; 196; 45; 43 respectively, plus 15 research articles |
| Region not recorded | 0/50 | 97/750 |
| Kana not verified | 39/50 | 413/750 |
| Attested period not recorded | 50/50 | 744/750 |
| Confirmed list-only admissions in this segment | 0/50 | Not reliably measurable from current schema without manual review |
| Major errors remaining after correction | 0/20 sampled | No corpus-wide major-error rate inferred |

The source-type counts use one primary evidence link per entity for comparability; 戸隠の九頭龍大神 has a second claim and source. The segment's most frequent attested prefectures are **兵庫 6; 栃木・京都・長野 5 each; 群馬 4; 鹿児島・福島・大分・香川 3 each**. These describe digital evidence available to this collection, not the frequency or origin of yokai in those places. Main providers are 栃木市教育研究所 (5 links), 三田市 and 京都府 CO-KYOTO (4 each), then いちき串木野市教育委員会、福島市、長野県砂防課 (3 each). Institutional explanations dominate; older publications behind them often remain uninspected. The present segment adds no historical-person or urban-legend entity; future screening should look for those grains when strong evidence appears, without a numerical quota.

Duplicate and grain cautions: **万八狸（三木）** remains separate from the Kagawa namesake; **三ツ石様** and **羅刹鬼** are distinct actors in one account; **大沼池の大蛇** is the being, not the contemporary 大蛇祭り; **庄川の盲目の大蛇** is not confirmed to be the deceased 小太郎. The place-linked names in this segment are indexing labels, not a claim that the original tale used them as stable personal names. No theory or schema was changed.

## Deferred, workflow and next action

The earlier registered `source_0511` URL for the Niigata lagoon report currently fails a fresh direct download, although a search-engine copy of its PDF text and a city-linked report catalog remain discoverable. **鎧潟の大蛇** and **鏡潟の主** were deferred until an accessible stable report or archive URL and identity can be confirmed. NDL reference record `source_0548` was discoverable through search but its minimal registered URL did not open in the current web tool; resolve link durability during source maintenance. Neither link issue justifies fabricating a new source or rewriting its claim at this gate.

Codex screened and reviewed this segment directly. Local LLM processed **0**; literal-name, record-ID and locator accuracy are **not measured**; unusable outputs **0**, runtime failures **0**. No source text or image was copied into the Corpus. Validator: **PASS: 750 entities, 560 sources, 796 claims** after the metadata correction.

**Reopen decision:** resume 751–800 only after this checkpoint file is committed by normal push, public `main` matches local `main`, working tree is clean, and validator remains PASS. At 800, repeat the 50-entry checkpoint and stratified audit.
