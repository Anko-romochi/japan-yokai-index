# Batch D — 種・類型から固有名個体へ

Date: 2026-09-24. Base: `dcb1df2` (60 / 65 / 95). Added ten entities, eleven sources, twelve claims. A source's use of a personal name is recorded independently of when that name first emerged.

| Entity | Evidence level and locator | Review finding / open question |
| --- | --- |
| 鞍馬山僧正坊 | ジャパンサーチ天狗解説 (`source_0066`, 霊山と天狗の段落) | A named example attached to a mountain. The page does not date his first name appearance. |
| 比叡山次郎坊 | 日文研『醍醐随筆』card 6330008 (`source_0067`, original reprint p.40) | The card places this Jirōbō at Mt Hiei. Do **not** merge him with a “比良の次郎坊” in other eight-tengu lists. Original old text was not inspected. |
| 善界坊 | 大正大学『善界』performance account (`source_0068`, synopsis) | The work identifies a Chinese tengu chief who meets Atago Tarōbō. Do not infer continuity with every “是害坊” spelling or older pictorial lineage. |
| 飯綱三郎 | 日文研『あしなか』1994 card 0030443 (`source_0069`, summary) | The card names him among eight tengu; its description of the general 飯縄系 should not automatically be assigned to the individual. |
| 源九郎狐（義経千本桜） | 文化デジタルライブラリー狐伝説節 (`source_0070`) | The site relates a shrine explanation and the drama's fox role. The “源九郎” fox in a 1936 Osaka record is not assumed identical. Shrine account and dramatic portrayal need separate early witnesses. |
| 宗旦狐 | 日文研 card 2600003, 福岡1977 p.111 (`source_0071`) | Named fox impersonates 千宗旦. This says nothing about the fox being that historical person. Full article and earlier temple attestations remain unchecked. |
| おとら狐 | 日文研 card 0640283, 早川1916 pp.36–37 (`source_0072`) | The name is associated with possession of a woman. It is not evidence for one biologically identifiable fox across reports. |
| 二つ岩の団三郎 | 日文研 card 0640310, 茅原1917 p.63 (`source_0073`); image catalog U426_nichibunken_0319 (`source_0074`) | A dated folklore card names the Sado tanuki. The separate late Edo art catalog calls 同三狸 “団三郎狸”, but does not itself attest the “二つ岩” epithet or a direct chain to the 1917 account. |
| 芝右衛門狸 | 日文研 card 2400114, 後藤1922 pp.282–283 (`source_0075`) | A named Awaji tanuki competes with a fox in the indexed story. The 1922 date belongs to the print witness, not to the event setting. |
| 九千坊 | 広島大学公開研究レポート印刷頁22 (`source_0076`) | The report retells a kappa chief story. The tale's mention of 加藤清正 does not date the report's witness or prove the episode historical. |

The group is deliberately uneven: a mountain name can distinguish one tengu, a stage plot can give a fox a stable role, a possession story can use a name without stable individuality, and “九千坊” may function as a leader title. Thus “species → individual” is a research question, not an asserted single process. No new origin classification was entered into the corpus.

## Local LLM quality control

Ten short, already retrieved excerpts were submitted for candidate extraction only. Every entity identity, alias, claim layer, and locator was checked against the actual cited page by the reviewer. Model output was never copied directly into Corpus files.

| Metric | Count |
| --- | ---: |
| processed | 10 |
| auto_flagged | 6 |
| reviewed_by_sol | 10 |
| corrected_by_sol | 6 |
| locator_errors | 0 |
| entity_errors | 5 |
| alias_errors | 0 |
| chronology_errors | 1 |
| layer_errors | 0 |

Candidate correction rate: 6 / 10 = 60%. Errors include treating a card or role label as a work title, missing 九千坊 while treating the repository as a story location, and returning 1922 without separating publication date from story setting. Error classes overlap. No specific error repeated on five consecutive items. The counted corrections are screening decisions before manual entry, not modifications of published claims.

## Gate

Each new entity has a cited, located claim; the records identify when evidence is only a modern abstract of an older print. `PASS: 70 entities, 76 sources, 107 claims`. No schema or theory change. Early original texts and individual identity for the cases above remain unresolved research gaps. `BATCH_D_GATE = PASS`.
