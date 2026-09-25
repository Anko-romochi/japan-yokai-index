# Interim 0460 — direct transcriptions and individual retellings

Date: 2026-09-25. Base public commit: `ffc3275394034ade8a4d7b41c1d8cd281ebf7467` (450 entities).

## Counts and screening

- Corpus: **460 entities / 346 sources / 502 claims**. This interim adds 10 entities, 6 sources, and 10 `source_fact` claims.
- [Candidate queue](candidate-queue-0500.csv): **18 screened / 10 admitted / 5 deferred / 3 rejected** so far toward checkpoint 0500. The queue remains open for the next 40 admissions.
- All 10 added claims identify a source and a story, page, or individual page section. The validator passes. Schemas, methodology, theory, and all earlier records are unchanged.

## Evidence depth and boundaries

Seven entries use full transcriptions hosted by [Kagawa Prefectural Library](https://www.library.pref.kagawa.lg.jp/know/local/local_3004-1) of printed collections dated 1975, 1979, and 1984. These are direct access to the published wording, not proof of the stories' origins or the exact date of oral recording. Three entries use full individual retellings published by [Chiba Prefecture](https://www.pref.chiba.lg.jp/kkbunka/b-shigen/08minwa/index.html), which cite the Inzai town collection *光堂の竜*; that underlying volume remains unchecked. The added `attested_periods` arrays remain empty.

The records distinguish the three Kagawa temple cats by temple, text, and narrative action. `おきく狸` and `喜八猫` are separate named participants in one source account. `お鶴` is indexed as a character **within the Inzai transformation story**; her historical existence is not asserted. The `草深原の狐` claim records how the story's human participant is told to interpret his experience, without identifying a real animal or claiming a continuing individual. `光堂の竜` indexes the story connecting a carved tail and a dragon said to travel from Nikkō; the identity relation between carving and dragon remains a grain issue for later review.

`柳のおりゅう` was deferred because an `oryu_yanagi` record already exists and a shared name is insufficient to merge or split their identities. `きんみね大五郎` was deferred because the strong child and the posthumously venerated father are different analytical units. `信田の森の狐` and the generic cat and snake tales were deferred for the same identity or grain concerns. `お遍路さんと化物` resolves to a false supernatural reading; `なまやけの弥兵エ` names a human rather than the mujina; and `頼政塚とじごくそば` does not isolate a supernatural entity. These three were rejected.

## Audit

All **10** new entity–claim–source chains were checked against their cited story passages. All **6** new source URLs returned HTTP 200. The 10 new names plus their recorded regions do not duplicate an earlier record. Claim language was constrained to what the texts say, including the Chiba retellings' internal uncertainty. No major error was found. The validator result is `PASS: 460 entities, 346 sources, 502 claims`.

The source and region mix is deliberately recorded as a bias: 7 Kagawa and 3 Chiba entries, with 7 from one institutional host. Further admissions toward 500 should use additional providers and regions. Local LLM processed 0 records; Codex reviewed all 10. No long passages or images were copied into the Corpus.

**Unresolved:** original pages and collection dates of the Kagawa printed books, the underlying Inzai town volume, and the identity/grain of `光堂の竜` and the regional fox account. None requires a schema or theory change at this stage.

**Next:** diversify the candidate queue, admit only text-supported cases, then perform the full checkpoint-0500 audit and cross review.
