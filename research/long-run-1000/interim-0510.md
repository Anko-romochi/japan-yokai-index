# Interim 0510 — three institutional providers

Date: 2026-09-25. Base public commit: `053816a11d12b65c2c12d8c3b77fc454aa427df8` (500 entities; [reopen gate](checkpoint-0500.md) passed).

## Counts and screening

- Corpus: **510 entities / 386 sources / 552 claims**. This interim adds 10 entities, 3 sources, and 10 short `source_fact` claims. No schema or theory edits.
- [Candidate queue](candidate-queue-0550.csv): **21 screened / 10 admitted / 10 deferred / 1 rejected**. Each admission has an individual passage locator. The one rejection is a normal-person/watermill history without a supernatural referent.
- Validator: `PASS: 510 entities, 386 sources, 552 claims`.

## Source and identity review

Six entries use individual full-text stories within [高知市春野郷土資料館「はるの昔ばなし」](https://www.city.kochi.kochi.jp/deeps/20/2019/muse/hanashi/hanashi.html). The museum says its pages basically reproduce a 1980 booklet drawn from a 1974–1978 public-newsletter series, with later corrections and annotations. **Neither the booklet nor the newsletters were directly checked.** The accessible museum pages are registered as one digital source (`source_0384`), with each story's individual URL and relevant passage in its claim locator. Story settings, including 慶応元年 in the fireball tale, were not copied into `attested_periods` or the digital source date.

Three entries use the [島根県「Kwaidan／八雲とセツが紡いだ怪談」](https://www.pref.shimane.lg.jp/admin/seisaku/koho/esque/2021/shimanesuque119/2.html) section on Matsue sites (`source_0385`). The page cites Hearn's work, but the original book chapters have not been checked. `稲荷新左衛門` is indexed only as the named appearing figure; the claim does **not** equate him with a fox or a deity. `清光院の松風` is kept distinct from the existing Noh `matsukaze` entity: same name alone does not establish identity. The place-prefixed `name_ja` is an index label for the geisha account, not a documented historic full name. `月照寺の亀の石像` is indexed as an object-spirit tradition, not a living animal.

One entry uses the [山口県文書館's 2013 exhibition explanation](https://archives.pref.yamaguchi.lg.jp/events/exhibition/h24/) (`source_0386`). The exhibition describes `シイ` as a cattle-killing, tanuki-like, unidentified beast and discusses later legendary/yokai treatment. Its cited `大和本草` and `防長故事年表` texts were **not** treated as directly read sources. The exhibition date is not the being's origin date.

The Kochi entries distinguish a locally narrated being from broad types: 北山の大蛇 from other snakes, ほうの坂のしばてん from the existing Tokushima `shibaten_iya`, and 竹河岸のえんこう from general kappa or shibaten. `てじが谷の火玉` indexes the reported phenomenon; its claim records the tale's sequence without asserting the woman's verified historical identity or a causal mechanism. `弘岡下西堀池の石地蔵` is a descriptive index label for a specific narrated statue, not a proven traditional proper name.

## QC, bias, and unresolved

Each new record was checked for exact source passage, claim wording, duplicate names/IDs, source URL reuse, alias support, story versus publication chronology, region, and entity grain. No aliases or unverified readings were added. During review, the brief `大雄寺の飴を買う女` summary was deferred because it does not securely establish the woman's supernatural status; a fuller Kochi stone-Jizō account was admitted instead. This replacement occurred **before** commit. Major/locator/unsupported-claim errors remaining in this interim: **0**.

Region exposure in this small interim is **高知県 6 / 島根県 3 / 山口県 1**. This reflects accessible text, not a yokai distribution. The next 10 should preferentially use different regions and providers of comparable quality. Local LLM processed **0**; Codex screened 21 and reviewed all 10 admissions; unusable local outputs and runtime failures were **0**.

Unresolved: original Kochi booklet/newsletter passages, Hearn chapters, the Yamaguchi exhibition's cited historical texts, whether some place-linked index labels became stable names, and the source depth of deferred stories. These require later source deepening and do not justify schema or theory changes now.
