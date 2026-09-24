# Batch E retry — Local extraction repair gate

Date: 2026-09-24. Fixed base: `fd75498b4d66c8bda60a554c74a7f41510a677d6` (70 entities / 76 sources / 107 claims). No Corpus, schema, methodology, or theory rows were changed.

## Scope and input limitation

The five stopped candidates were retested with `google/gemma-4-12b` in LM Studio. The old byte-exact snippets were not retained in [the Batch E stop record](batch-05.md). [The held-out input file](../local-extraction-heldout-v001.json) reconstructs short snippets from the **same cited pages**, with source fields and brief paraphrases. Thus this is a same-source, not byte-identical, retest. Candidate labels were used by the evaluator but were not supplied to the model separately; the 赤マント source snippet lists multiple beings, which limits attribution of its identity error.

The new [working extraction contract and machine gate](../../scripts/local_extraction_gate.py) separates entity, retrieved source container, DB record metadata, cited work, claim, relations, and review flags. It does not alter the Corpus schema. The local model received the contract and each snippet, without earlier correct outputs. The machine gate rejects malformed field values, unsupported titles, missing DB metadata, and unverified alias or identity assignments, then requires Sol review.

## Runtime diagnosis

The first OpenAI-compatible request used an unsupported `json_object` mode (HTTP 400), so it was not an extraction attempt. A subsequent compatible text request returned empty `message.content` for all five; a diagnostic call confirmed zero content. A JSON Schema request likewise exhausted its token limit in reasoning before output. These were transport/inference configuration failures, not scored candidate outputs. The [LM Studio native chat API](https://lmstudio.ai/docs/developer/rest/chat) was then used with reasoning off. It produced content for the five cases. This was the single scored retest; no prompt iteration followed the result.

## Held-out review

Raw outputs and machine findings are saved in [the result file](../local-extraction-heldout-results-v001.json). Sol reviewed all five against the cited source snippets and original pages.

| Case | Work-title result | Other material problems | Decision |
| --- | --- | --- | --- |
| 油取り | `1550068` stayed in `record_id`; explicit article title was correctly separated | Markdown fence; illegal enum values; card label `油取り（俗信）` incorrectly treated as an alias | Reject |
| 赤マント | The model selected `竹槍騒擾記` from a general references list without evidence that it specifically supports 赤マント | Extracted **子取りばばあ** as entity; `第42回` placed in `record_id` instead of section metadata; illegal enum values | Reject |
| 饅頭食わせ | `0690264` stayed in `record_id`; explicit article title was correctly separated | Markdown fence; illegal enum values; separately listed `狐` and `狸` treated as aliases | Reject |
| ヒダル神 | `2240297` stayed in `record_id`; explicit article title was correctly separated | Markdown fence; illegal enum values including `deity`, which the contract does not define | Reject |
| ヒトタタラ | `1720003` stayed in `record_id`; explicit article title was correctly separated | Markdown fence; `database` is not a valid container type; separately listed `鬼` treated as an alias | Reject |

The four DB cards are [油取り](https://www.nichibun.ac.jp/YoukaiCard/1550068.html), [饅頭食はせ](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0690264), [ヒダル神](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2240297), and [ヒトタタラ](https://www.nichibun.ac.jp/YoukaiCard/1720003.html). 赤マント appears in [「異界の杜」第42回](https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html) with other child-snatcher names; the cited-work list does not establish which work supports each name.

## Gate and workflow

- Prior stop: 5 same-family work-title errors in 8 candidates (62.5% correction rate).
- Scored retest: 5 processed, 5 Sol reviewed, 5 rejected before Corpus entry; effective correction/screening rate 100%.
- Old card-ID/creature-name-to-work-title error: 0 of 5. A different unsupported work association remained in 赤マント.
- New major errors: format/enum violations in 5 of 5, entity identity corruption in 1 of 5, unsupported alias assignments in 3 of 5.
- `LOCAL_EXTRACTION_GATE = FAIL`; `SOL_LOCAL_WORKFLOW_FAIL` for candidate extraction. This is the second failed extraction gate after the Batch E stop, so no further prompt retuning or Batch E collection was attempted.
- Batch E added entities/sources/claims: **0 / 0 / 0**. The candidate list remains in [the stop record](batch-05.md); no candidate was adopted or rejected as a research subject solely because the extractor failed.
- Unresolved: the exact prior snippets are unavailable, and none of these five original publications was checked beyond the cited DB cards or institutional explanation in this repair gate.

**One recommended next step:** restrict the Local LLM to named-entity recognition and locator extraction; Sol should determine work identity, alias equivalence, claim layer, and Corpus admission from the source.

## Supervised NER/locator retry and Batch E completion (2026-09-24)

The user authorized the narrower role proposed above. The [narrow gate](batch-05-ner-gate.md) passed 5/5 same-source held-out snippets. That result supersedes the broad worker for future collection; the earlier failure remains recorded. The Local worker may return **only literal name mentions, card IDs, page locators, and section headings**. Sol alone selects entities, identifies works, decides aliases and claim layers, and admits data. No Local field maps directly into `data/*.jsonl`.

Six further [source snippets](../local-ner-locator-batch-05-input-v001.json) were extracted once by `google/gemma-4-12b`; [raw parsed results](../local-ner-locator-batch-05-results-v001.json) were reviewed against the live source pages. All six target names, all five card IDs, and all five page values were present and correct. Two results omitted the literal `### ` prefix from `カード表示`; the gate initially rejected them, then accepted the bare text **only when it exactly matched a `###` heading in the supplied source snippet**. The saved model outputs were reaudited without another model call. An alphanumeric-hyphen card ID (`C0410963-000`) required the gate's record-ID pattern to accept more than digits. These are deterministic parser/gate repairs, not new claims about sources.

### Sol admission review

| Entity | Directly checked evidence | Decision and limit |
| --- | --- | --- |
| 子取婆 | [日文研カード1231229](https://www.nichibun.ac.jp/YoukaiCard/1231229.html), summary and p.65–75 locator | Admit the **prior child-snatcher rumor**. The card's account about ノブ is not verified historical biography and ノブ is not the entity. |
| 油取り | [カード1550068](https://www.nichibun.ac.jp/YoukaiCard/1550068.html), summary and p.3裏 | Admit a locally reported oil-taker rumor. Neither actual oil-taking nor its alleged relation to war is a historical finding. |
| 赤マント | [異界の杜 第42回](https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html), body paragraph 2 | Admit only the child-snatcher figure in this paragraph. Whether this is the same as the school-toilet 赤マント is unresolved; no region or first appearance is assigned. |
| ヒダル神 | [カード2240297](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2240297), summary and p.158 | Admit the named possession agent/condition as a provisional folklore being. The card does not establish an original personality. Reading follows ヒダルカミ on the card. |
| ヒトタタラ | [カード1720003](https://www.nichibun.ac.jp/YoukaiCard/1720003.html), summary and p.58 | Admit the Kumano-route figure. `鬼` is a separate card term, not an alias. No equation with 一本ダタラ is made. |
| ナンジ | [異界の杜 第71回](https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html), body paragraph 3 | Admit a named route apparition. Its earliest attestation and original printed source remain unchecked. |
| 送り狼 | [カード1260080](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1260080), p.231; [カード1231951](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1231951), p.70 | Admit one **type-level** entity with two regional accounts, not one individual wolf. The stories differ on whether it escorts/protects or threatens the walker. |
| ベトベトさん | [カード2180750](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2180750), p.12 | Admit a named footstep phenomenon, without assigning a visible body or personal identity. |
| ゴウリキさん | [カード1140545](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1140545), p.32 | Admit the Shōnai name separately. The card compares its formula with 高知のベトベトさん but does not establish identity or descent. |
| 送り雀 | [カードC0410963-000](https://www.nichibun.ac.jp/YoukaiCard/C0410963-000.html), p.442 | Admit the bird-like road warning; the card describes a 紀州 report even though its structured region field is blank. Do not automatically alias 夜雀. |

The first five rows above were fully checked before final review of the last five. Each new `source_fact` asserts what the cited **DB card or institutional essay says**, never that the underlying legend happened. The original periodicals/books behind nine DB cards have not been directly inspected; `source_type=database_record` and source rights notes make that limit visible. The two `異界の杜` essays have separate source records and author names despite sharing a URL. `attested_periods` remain empty because publication dates do not establish origin dates; `attested_regions` reflect only named settings in cited claims. No alias was added.

### Rejected controls and research result

- [ウマが走る](https://www.fsjnet.jp/regular_meeting/abstract/861.html): a school story about a running horse; the abstract does not establish a distinct supernatural **being** or its proposed connection to a relocated 馬頭観音.
- [紫の鏡](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0970170): a phrase/rumor, not a named creature.
- [饅頭食はせ](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0690264): a child-poisoner rumor; the checked card does not establish a supernatural being or a verified culprit.
- ナメラスジ: a named route/place in the stopped candidate notes, not enough evidence for a separate being. Its source card needs renewed direct inspection before any Corpus claim.

The batch demonstrates **recorded, geographically nonmetropolitan telling and variation**; it does **not** show that information transmission originated these figures, nor that cities are unnecessary for *all* information-origin figures. In particular, 送り狼 is a type across places, ベトベトさん and ゴウリキさん have similar formulas without proven identity, and the child-snatcher figures are not one lineage. These are comparison/possible counterexample cases for later review, not theory conclusions.

### Workflow and release gate

- Held-out narrow gate: **5/5 PASS** under Sol review; original broad gate: **FAIL**, retained above.
- Batch E Local processed: **6**; total narrow-gate outputs including held-out: **11**; Sol reviewed: **11**.
- Target name/card ID/page locator errors: **0/11**; identity/alias/layer decisions by Local: **not requested and not measured**.
- Sol filtered non-name numeric mentions in **2/11** held-out outputs (18.2%). Two of six Batch E section headings needed deterministic prefix normalization; no model rerun. All 11 fenced JSON outputs were parsed mechanically.
- Batch E adopted: **10 entities**; added **11 sources / 11 claims**. Corpus now **80 entities / 87 sources / 118 claims**.
- Validator: `PASS: 80 entities, 87 sources, 118 claims`.
- `SOL_LOCAL_WORKFLOW_PASS` for this narrow, **fully supervised** Batch E workflow. This verdict does not approve an unsupervised extractor.
- Unresolved: underlying nine printed works are not text-checked; 赤マント identity, ヒダル神 being/condition grain, ゴウリキさん relation to ベトベトさん, and the information-origin question remain open. None requires schema or theory change now.

The next 10-entity batch may proceed under the same per-entity Sol review and independent source checks. No proposed origin classification was written into the Corpus.
