# Checkpoint 0550 — source-linked admissions and quality review

Date: 2026-09-26. Starting public `main`: `074c8158ed29788d041278ed8f620699554f3e60` (546 entities). Collection is paused at **550** while this checkpoint is validated and published.

## State and decision

- **550 entities / 417 sources / 592 claims**. No 551st entity admitted.
- [Candidate queue](candidate-queue-0550.csv): **94 screened / 50 admitted / 35 deferred / 9 rejected** since 500. Decisions include entity-grain deferrals and a duplicate rejection for `kashozan_chuho`.
- All 50 new entities have at least one source-linked `source_fact` and a nonempty evidence locator. The 50 use 35 distinct source IDs. No exact duplicate canonical Japanese name was found among the 50.
- The full 50-record structural pass and the 21-record focused evidence pass found **no major identity, claim-substance, or locator error**. One minor entity-type inconsistency was corrected before publication: the individually named giant `sambutaro_miho` is `named_supernatural_entity`.
- **`LONG_RUN_550_CHECKPOINT_PASS`**, with the broken Niigata PDF URL explicitly unresolved below. This is a link-availability issue in a previously inspected institutional report, not a reason to substitute an unverified source or alter the four claims. Continue screening at the next checkpoint, and prioritize repair of this citation path.

## Audit method and sampled records

The full pass parsed all 50 entity/claim/source joins, checked source IDs and `evidence_locations`, and compared new canonical names for exact duplication. For the focused pass, each sampled claim was compared with its named section or page, checking the claimed actor, place, role, chronology, and whether a later explanation was mislabeled as an early source. `OK` means the cited passage supports the indexed claim; it does not mean the original folk publication or formation history was traced. One indexed-PDF recheck is marked limited because the live URL now returns 404.

| Coverage | New entity positions and IDs | Result |
| --- | --- | --- |
| Early, local tales | 501 `kitayama_no_daija_kochi`; 503 `hounosaka_no_shibaten`; 506 `inari_shinzaemon_matsue`; 508 `gesshoji_no_kame_sekizo`; 510 `shii_yamaguchi`; 511 `odode_sama_kunohe` | OK; individual tales, not a site's list heading, were compared. |
| Middle, varied media | 516 `shiunji_ofuku`; 520 `shikama_kappa`; 523 `kamiichi_ganzaburo_kappa`; 526 `kashozan_chuho`; 530 `kumanbo_daigongen_tounji`; 531 `taroten_yayama` | Five OK. #516 matches the indexed official report text and printed p.59 but live PDF unavailable; limited current recheck. The inscription in #531 attests a dated object, not a claim of the being's origin. |
| Later, varied grain | 536 `kogenji_ameya_yurei`; 539 `sochiyama_sakon`; 540 `hata_tenguyama_no_tengu`; 545 `chota_mujina`; 546 `nawagaike_ryujin`; 547 `sambutaro_miho`; 548 `jana_no_daija_gifu`; 549 `oyamajo_icho_hime_rei`; 550 `nekonoshima_oomukade` | OK; #547's historical model remains distinct from the giant. #549's earlier tree records do not prove the princess-spirit story was already recorded then. #545 distinguishes the woodcutter from the mujina; #550 distinguishes the centipede from the island serpent. |

The focused sample spans beginning, middle and end of the 501–550 segment, 16 regions, and institutional pages, a catalog, and an inscription report. The official [Niigata report's indexed p.59 text](https://www.city.niigata.lg.jp/kurashi/kankyo/kataken/kataken_kankoubutsu.files/H29takahashi06.pdf) still exposes the distinct `紫雲寺潟とお福` passage in web search, but both that split PDF and the indexed full-report PDF currently return HTTP 404 to direct GET. Search snippets are **not** a replacement live source or proof of the original books summarized by Takahashi. `source_0392` remains accurately labeled `research_article`; its four claims remain tied to printed pp.59–60 and explicitly say the earlier books were summarized, not directly inspected. No speculative URL rewrite was made.

## Coverage and source bias

New entity types: 30 `folklore_being`, 13 `named_supernatural_entity`, 4 `object_spirit`, 3 `supernatural_phenomenon`. New claim source types: 44 `institutional_explanation`, 4 `research_article`, 1 `institutional_catalog`, 1 `database_record`. There is a strong bias toward institutional retellings; a registered institutional page is not necessarily the original publication. The four Niigata records share one research report that itself summarizes earlier books.

The 50 new records use 26 distinct `attested_regions` strings and none is empty. The most frequent are 高知県 6; 新潟県, 富山県, 石川県 4 each; 島根県, 山口県, 岩手県 3 each. These are source-attested places, **not** places of origin. Provider concentration is visible: 高知市春野郷土資料館 supplies 6 records, 新潟市潟環境研究所 4, and 島根県シマネスク119, 山口県文書館, 上市町教育委員会, 石川県立図書館 3 each. Source and region balance should be managed in the next 50, without numerical quota filling.

At 550 overall, 97 entities still have empty `attested_regions` (not inferred), and source records comprise 205 institutional explanations, 166 DB records, 30 institutional catalogs, 10 primary/early sources, and 6 research articles. Entity grain remains the main research risk: named individuals versus classes, local manifestations versus generic types, legend labels versus independently stable names, and object inscriptions versus later personae. Deferrals in the queue preserve these questions rather than manufacturing identity or merging names.

## Workflow, unresolved, and next gate

Codex screened and reviewed these candidates directly. Local LLM processed **0** in this segment; literal-name, record-ID, and locator accuracy are **not measured**, unusable outputs **0**, runtime failures **0**. No source text or images were copied into the Corpus. Schema and theory were not changed.

Unresolved: find a durable live official or institutional archive URL for `source_0392`; deepen the source books behind the Niigata report; review deferred grain questions; rebalance provider and region exposure. One broken URL does not justify replacing the four verified, page-located report summaries with unverified alternatives. Recheck the link before further reuse. The next production gate is **600**, not 551 as an independent milestone; keep the 50-entity checkpoint discipline and stop at 750 for the specified cross-review.
