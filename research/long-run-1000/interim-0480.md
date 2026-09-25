# Interim 0480 — regional institutional texts

Date: 2026-09-25. Base public commit: `ea536845a515d16afed3eb6683dc263817cfa654` (470 entities).

## Counts and screening

- Corpus: **480 entities / 366 sources / 522 claims**. This interim adds 10 entities, 10 sources, and 10 short `source_fact` claims.
- [Candidate queue](candidate-queue-0500.csv): **50 screened / 30 admitted / 15 deferred / 5 rejected** since 450. This interim screened 16, admitted 10, deferred 5, and rejected 1.
- The validator result is `PASS: 480 entities, 366 sources, 522 claims`. Schemas, methodology, theory, and all older records remain unchanged.

## Evidence and QC

Six cases use full individual tales on [Ebina City's folklore pages](https://www.city.ebina.kanagawa.jp/shisei/profile/tankyusha/minwa/index.html); two use substantive [Akita Prefecture community articles](https://common3.pref.akita.lg.jp/genkimura/history); one uses [Nagawa Town's five-page PDF transcription](https://www.town.nagawa.nagano.jp/material/files/group/3/kikazudourokujin.pdf); one uses a full, scene-numbered [Kaminokawa Library tale](https://adeac.jp/kaminokawa-lib/top/minwa/minwa1-1.html). All 10 cited URLs opened, and each claim was checked against its stated individual story passage or PDF pages. No new entity name or source URL duplicates an existing exact value. Local LLM processed 0; Codex reviewed all 10.

The Ebina pages show their Web update date, **not** the dates of the cited `こどもえびなむかしばなし` volumes or of oral recording. These earlier volumes have not been inspected. The Nagawa PDF credits `長門昔ばなし`; the town's index dates that volume to 1978, while the PDF's own release date is unverified. The Akita articles cite earlier books that remain unchecked. The `手長足長伝説` page gives an internally inconsistent posting-year notation, so its source `date` remains `null`.

Claims for `有鹿姫` and `能恵姫` describe figures **as told by the cited narratives**, without asserting their historicity. The 三島社 snake's supposed involvement in a woman's disappearance is explicitly recorded as villagers' belief. The dragon that drinks from a pond is scoped to the 下大谷観音堂 carving, apart from similar stories elsewhere. `不聞どうろく神` is scoped to the 長久保宿 account; it is not merged with all 道祖神. `ねずみ観音` is indexed as the named figure in a single tale, not as a general 馬頭観音 identity.

Five candidates were deferred for same-name, group-versus-individual, incomplete full text, or conflicting account issues. The anonymous fox in `狐にばかされた与太郎` was rejected as an independent entity at this stage. Source or narrative setting dates were not written into `attested_periods`.

## Bias and unresolved

This interim spans four prefectures and four institutional hosts, but **6 of 10** new records are from Ebina City. The latest 20 additions also remain concentrated in institutional retellings and modern transcriptions. Further work toward 500 should seek different hosts and, where accessible, earlier texts.

**Unresolved:** original Ebina print volumes; the underlying Akita references; original Nagawa book pages; collection dates; whether geographically close snow-woman tales identify one figure; and whether the shrine, sculpture, and creature identities in object-linked accounts coincide beyond their individual narratives. These are source-deepening questions, not automatic schema changes.

**Next:** screen source-diverse candidates for the final 20 admissions to 500, then stop and run the required checkpoint audit and skill gate.
