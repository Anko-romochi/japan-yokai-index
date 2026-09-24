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
