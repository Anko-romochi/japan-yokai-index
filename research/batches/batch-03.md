# Batch C — 人霊 × 怪談 × 芸能

Date: 2026-09-24. Base: `fc644e2` (50 entities / 55 sources / 80 claims). Scope: ten new entities, ten sources, fifteen claims. The corpus records what cited performance explanations, a dated theatre print, a temple account, and a research article state. It does not establish the historicity of a depicted ghost.

| Entity | Evidence and locator | What can be said / what remains open |
| --- | --- | --- |
| 平敦盛 | 能楽協会『敦盛』「解説」 (`source_0056`) | The Noh plot gives him two postmortem appearances. The play summary alone does not establish the earliest ghost tradition or verify every biographical detail. |
| 平清経 | 能楽協会『清経』「解説」 (`source_0057`) | The Noh plot puts his appearance in his wife's dream after a reported drowning. The historical death and date need separate evidence. |
| 藤原定家 | 能楽協会『定家』「解説」 (`source_0058`) | The play personifies attachment as a vine. It does not depict a straightforward embodied Teika ghost; the asserted romance is a dramatic premise. |
| 式子内親王 | Same source, distinct passage | The play depicts her spirit guiding a monk and dancing after a memorial prayer. This does not establish a historical relationship with Teika. |
| 松風 | 能楽協会『松風』 (`source_0059`); the能ドットコム「あらすじ」 (`source_0061`) | Performance accounts describe a named sister, grave marker, and love driven dance. No historical woman matching the character was verified. |
| 村雨 | Same two sources, passages about the sister and her response | She shares the play setting but has a separate role from Matsukaze. Neither source verifies a historical original. |
| 平知盛 | 能楽協会『船弁慶』「解説」 (`source_0060`) | A named warrior appears as a threatening spirit in the play. The summary gives no proof of an earlier identical persona. |
| お露（牡丹燈籠） | 聖徳大学の圓朝作品解説 (`source_0063`); 1892芝居絵目録 NA080370 (`source_0062`) | The plot describes death and a night visit; the dated print confirms a later stage role called お露の霊. The story's setting is not the 1892 print date. |
| お米（牡丹燈籠） | Same two sources, distinct role locators | The print explicitly lists 下女お米の霊. Keep maid and mistress distinct; do not infer a historical original. |
| 佐倉惣五郎 | 宗吾霊堂縁起 (`source_0065`); 村田「佐倉惣五郎の怨霊」印刷頁1–2 (`source_0064`) | The temple supplies its religious narrative and name relation; Murata questions the evidentiary basis for connecting an executed man to the direct petition story. Temple tradition is not independent proof of the petition. |

## Cross-case observations

- Historical-person identity and theatrical spirit role require separate evidence. 敦盛・清経・知盛 are not entered as proof of historical hauntings.
- A single drama can create distinct supernatural roles: 定家's attachment is vegetation, whereas 式子's character appears as a spirit. 松風 and 村雨 likewise must not be merged simply because the play pairs them.
- The 1892 print and the 1884 shorthand record described by 聖徳大学 are dates of different witnesses. Neither dates the fictional events.
- 佐倉惣五郎 is a strong test of the person-to-legend transition, but the alleged direct petition remains disputed; neither the temple nor the article should be collapsed into one historical narrative.
- The professional Noh synopses are reliable for the currently described performance plots, yet thin for early textual chronology. The next review should seek dated libretti or manuscript witnesses before making origin claims.

## Local LLM quality control

The local model received only ten short, already retrieved excerpts for candidate extraction. No model output was copied into an entity, source, or claim. The reviewer re-opened every cited source and checked each entity identity, alias, layer, and locator.

| Metric | Count |
| --- | ---: |
| processed | 10 |
| auto_flagged | 8 |
| reviewed_by_sol | 10 |
| corrected_by_sol | 8 |
| locator_errors | 1 |
| entity_errors | 5 |
| alias_errors | 0 |
| chronology_errors | 0 |
| layer_errors | 0 |

Candidate correction rate: 8 / 10 = 80%. Flags include title/role confusion for 松風・村雨, scenery mistaken for named entities in 『定家』, conflation of actors and roles in the 牡丹燈籠 print, and a repository name treated as a story location for 佐倉惣五郎. Error classes overlap. These are extraction defects, not published claim errors. No five consecutive items showed the same specific error.

## Gate

All ten entries have cited claims and specific locators. No schema, methodology, or theory edits. Validator: `PASS: 60 entities, 65 sources, 95 claims`. The early witness gap above remains research work, but is not an established origin claim or a structural stop condition. `BATCH_C_GATE = PASS`.
