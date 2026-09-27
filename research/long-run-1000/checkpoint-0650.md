# Checkpoint 0650 — source-linked admissions and quality review

Date: 2026-09-27 (Japan). Starting verified public `main`: `e92c909eab5ff75d4eb882f28c20a098953e19ca` (640 entities); the 644-entity intermediate state was published at `4fe427fbb46c1541acad9e7d570839a4ba0cb474`. Admissions stopped at **650** for this gate; no 651st entity was added.

## State and decision

- **650 entities / 490 sources / 695 claims**. [Candidate queue](candidate-queue-0650.csv): **83 screened / 50 admitted / 29 deferred / 4 rejected** since 600.
- All 50 new entities have at least one `source_fact` with a real source ID and nonempty, source-specific locator. They use **40 distinct sources**. There are no duplicate canonical Japanese names in the full 650. Structural ID/reference/UTF-8 validation passes.
- The focused check below found **no major identity, claim-substance, or locator error**. It did retain source-depth and naming questions as unresolved; these are recorded without changing the claims into asserted historical events.
- **LONG_RUN_650_CHECKPOINT_PASS**, subject to the publication and remote verification recorded in the Git history. After that verification, collection may proceed toward 700 under the existing 50-entity gate. The mandatory 750 cross-review remains ahead.

## Audit method and sample

The full pass joined all 50 new entities with their claims and sources, checked a supporting `source_fact` and locator, checked ID uniqueness and canonical-name duplication, and counted region, entity type, source type, and provider. The 20-position stratified sample below spans early/middle/late admissions, regions, types, and source depths. The claim text and locator were read for all 20. Direct passage rechecks in this gate included the Okinawa individual record, the Izumo oral-text page, the Ibaraki individual story, Komatsushima's two relevant headings, the Culture Agency pages for Bōze and Amahage, Niigata report passages, and the five new Nichibunken cards. Other sampled records were checked at admission; this audit does not claim to have opened their original underlying publications anew.

| Positions | Entity IDs | Focus | Result |
| --- | --- | --- | --- |
| 601–612 | `kurokane_zasu`, `naka_mikoshi_nyudo`, `ohata_head_seeking_serpent`, `ibara_river_enko`, `aka_tenugui_fox` | Named person tradition, local monster, oral narrative, fox individual | No major issue. The Okinawa record's 1987 recording date is not an origin date; the Izumo page's impossible printed day remains uncorrected in source metadata. |
| 615–630 | `kawatari_osan_gitsune`, `saizaburo_gitsune_takeda`, `osano_gitsune_kadoma`, `miko_no_yabu_danuki`, `yushichi_daimyojin`, `sayama_no_sankichi_tanuki` | Fox aliases and name stories, shrine/狸 individuals, DB record | No major issue. Komatsushima gives specific actions for both named狸; its shrine headings are not the sole admission evidence. The Ibaraki story gives two alternative explanations for 才三郎's name; neither is chosen as historical fact. |
| 633–650 | `iimureyama_no_ooni`, `akusekijima_no_boze`, `yuza_no_amahage`, `atamanashi_bori_no_oohebi`, `kawaguchi_no_ikijizo`, `setsuan`, `otane_fox_mihonoseki`, `nandobashi_no_kaibutsu`, `yoshima_no_fuchi_no_nushi` | Book/PDF locators, masked visiting figures, object spirit, named fox/serpent and bridge figure | No major issue. Niigata report quotes earlier books that remain unexamined. The five last cards are DB summaries with original-publication locators, not directly read original articles. The bridge figure's nature and the 好間淵の主/機織り姫 relationship remain open. |

The six final admissions were additionally checked individually: `akaike_no_daija` has a precise printed pp.73–74/PDF pp.14–15 report section; `setsuan`, `naha_hachiro`, `otane_fox_mihonoseki`, `nandobashi_no_kaibutsu`, and `yoshima_no_fuchi_no_nushi` point to individual Nichibunken cards. `naha_hachiro` leaves `name_kana` null despite the card's one reading, pending variant review. `otane_fox_mihonoseki` indexes a named possessing figure; the claim records that people inferred a white fox, not that zoological identity as fact. The 好間 place qualifier disambiguates the indexed tale and is not asserted as the being's original name.

## Coverage, grain, and source depth

New entity types: **25 named supernatural entities, 23 folklore beings, 1 supernatural phenomenon, 1 object spirit**. The 51 evidence links for the 50 new entities are **30 institutional explanations, 13 DB records, 5 research-article links, and 3 primary/early text links**. These source types describe the **directly consulted record**; a card's cited original article is not promoted to a directly consulted source. Forty distinct sources support the 50.

The 50 use 23 `attested_regions` strings, all nonempty. Most frequent: **新潟県・秋田県・鹿児島県 5 each; 徳島県 4; 埼玉県・島根県・茨城県 3 each**. These are attested regions, never origin claims. Largest providers by evidence links: **文化庁・文化遺産オンライン 7**, **国際日本文化研究センター 5**, and four each from **新温泉町文化財室・浜坂先人記念館、小松島市、秋田県立博物館、新潟市潟環境研究所**. The source mix is institution-heavy; the next segment should broaden providers and seek original books where practical, without admitting weak entries for geographic balance.

Entity-grain risks retained as provisional: multi-village visiting-deity events versus one regional label; local serpent episodes versus generic 大蛇; an inanimate statue versus a later miracle tale; a shrine name versus a named狸; DB card labels versus independently stable names. The deferred queue records 宮古島のパーントゥ, 栄大権現, 念吉の大亀, and 大曲の地蔵群 for these reasons. The named fox 蛻庵 and 那波八郎 warrant original-source deepening before any alias or formation claims. The name `納戸橋の怪物` comes from the card's label; the card's summary does not settle the figure's ontology.

## Workflow, unresolved, and next action

Codex screened and reviewed candidates directly. Local LLM processed **0** in this segment; literal-name, record-ID, and locator accuracy were **not measured**; unusable outputs **0**, runtime failures **0**. No source text or images were copied into the Corpus. Schema and theory were unchanged. Validator: **PASS: 650 entities, 490 sources, 695 claims**.

Unresolved: primary publications behind the five final DB cards and the Niigata report have not been directly read; the `蛻庵`/`蛻菴` orthographic relationship and 那波八郎's competing readings need source-depth review; local-mask traditions grouped under broad cultural-property headings need continuing grain discipline. The institutional Niigata PDF URL is currently accessible and was directly rechecked at this gate. No new claim treats a source date or story date as origin.

Next action: after normal commit/push and remote SHA verification, resume evidence-backed screening toward **700**. Do not treat this checkpoint as a formation-tracing verdict.
