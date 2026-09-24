# Batch E — supervised Local NER/locator gate

Date: 2026-09-24. Base commit: `33f98432b4ee41827adb7ba9c930e4bb0b0f322c`. This gate changes the **working role** of the Local LLM only. The Corpus schema, data, methodology, and theory are unchanged.

After the broad extraction contract failed, [the replacement helper](../../scripts/local_ner_locator_gate.py) requested only literal name mentions, DB card IDs, cited page locators, and section headings. It did **not** ask the Local model to identify works, aliases, claims, layers, origins, or admissible Corpus entities. The machine gate requires verbatim substrings of the input and checks IDs/pages against labelled source fields. Markdown JSON fences are normalized; candidate output is never written directly to `data/`.

The five [same-source reconstructed snippets](../local-extraction-heldout-v001.json) were processed once by `google/gemma-4-12b` through LM Studio with reasoning off. The [saved outputs](../local-ner-locator-heldout-results-v001.json) were then reaudited without another model call after changing the target check from exact to substring matching: `油取り（俗信）` contains 油取り, and `赤マントの怪人` contains 赤マント. The older byte-exact snippets remain unavailable.

| Target | Name mention | Record ID / locator | Sol review |
| --- | --- | --- | --- |
| 油取り | `油取り（俗信）` | `1550068` / `3裏` | Surface form and locator present; no identity or alias conclusion accepted from Local. |
| 赤マント | `赤マントの怪人` | `第42回` section | Mention present alongside other beings; Sol must select the target and avoid automatic identification with other 赤マント traditions. |
| 饅頭食わせ | `饅頭食はせ` | `0690264` / `17` | Historical spelling retained; `狐` and `狸` are separate mentions, not accepted aliases. |
| ヒダル神 | `ヒダル神` | `2240297` / `158` | Mention and locator present; status as being or condition remains for Sol to decide. |
| ヒトタタラ | `ヒトタタラ` | `1720003` / `58` | `鬼` is a separate mention, not an accepted alias. |

Five of five passed the narrow machine gate and Sol checked all five against their snippets. No invented name or locator was found. The Local output also included publication years and volume numbers in `name_mentions` for 饅頭食わせ and ヒトタタラ; Sol filtered these as non-name candidate noise. This is **2/5 outputs requiring filtering**, not a source/locator error. All five outputs used Markdown fences, which the parser normalized; format cleanup is performed mechanically. The model made no work-identity or alias assertion because those fields no longer exist.

`LOCAL_NER_LOCATOR_GATE = PASS` **under mandatory Sol review**. The gate supports resuming Batch E candidate work, with Sol retaining all decisions about entity grain, work identity, aliases, source/claim writing, and final commit. It does not validate the truth of the underlying DB summaries or imply that all five held-out candidates belong in the Corpus.
