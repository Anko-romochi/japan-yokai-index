# Checkpoint 0700 — source-linked admissions and quality review

Date: 2026-09-27 (Japan). Starting verified public `main` for this final segment: `f647330de25f6bc43da9c8cefa612b6df1c6c0c5` (693 entities). Admissions stopped at **700**. No 701st entity was added before this gate.

## State and decision

- **700 entities / 522 sources / 745 claims**. [Candidate queue](candidate-queue-0700.csv): **108 screened / 50 admitted / 32 deferred / 26 rejected** for positions 651–700.
- All 50 new entities join to one `source_fact` with a real evidence source and a nonempty, source-specific locator. They use **33 distinct sources**. The full 700 contain no duplicate canonical Japanese names. The validator checks JSONL, schema, IDs, references and UTF-8 and passes.
- A provisional admission, **大槌島の大蛇**, failed the supernatural-subject check at audit: the available Kurashiki archive catalog describes an 1819 document and a shot giant snake with a preserved scale, but its brief item description alone does not establish a supernatural being. This candidate was changed to **defer** before publication. The original document needs direct examination. The released 700th-slot replacement is **千鳥ヶ池の千鳥**, supported by direct visual inspection of both pages of Koga City's 2005 `れきしのアルバム No.25` PDF. Its legend section explicitly tells of Chidori becoming a serpent and lord of the pond. The PDF's quotation of an 1873 geographical work documents the pond, not the date of that serpent tale.
- **LONG_RUN_700_CHECKPOINT_PASS**, subject to normal publication and remote verification. The 750 cross-review is the next mandatory wider review.

## Audit method and stratified sample

The full pass joined positions 651–700 against claims and sources, checked one meaningful `source_fact` and locator for every entity, and counted duplicate names, source types, regions, entity types and providers. The following 22-position sample spans early, middle and late admissions, source types, regions and entity grains. The underlying individual pages or PDF passages had been checked at admission; the late PDF passages and Koga replacement were directly rechecked at this gate. This audit does not claim to have read every earlier original publication mentioned inside a DB card or institutional explanation.

| Positions | Sampled entities | Audit result |
| --- | --- | --- |
| 651–660 | `sekino_taira_no_yamaoji`, `shinike_no_kitsune_ishioka`, `dozonoike_no_daija`, `yage_dani_no_bakeneko`, `hyotanike_no_mori_no_daija` | Distinct local episode or being and anchored locator; the source account, not the narrated event, is the fact. |
| 662–670 | `koenji_no_nikutsuki_no_men`, `nene_nikkosan`, `hirakisawa_no_daija`, `ryugu_no_uma_higashidori`, `kikonai_no_komochiishi` | Object, named river creature, serpent episode, wonder-horse and local stone remain different grains. The Aomori archive locator names the individual tale under a broader section; no origin date inferred. |
| 673–684 | `saraki_no_na_wo_yobu_kitsune`, `ryuzugan_no_daija`, `nakanogata_no_ogame`, `kojoro_tanuki_niihama`, `kaimon_yashiki_no_neko`, `ukishima_no_mori_no_daija` | The institutional or DB record is cited at its actual passage. Older works cited within those records remain uninspected unless separately stated. |
| 686–700 | `tamanoi_bashi_no_onnarei`, `koeji_no_oozaru`, `taikoiwa_no_ootaiko`, `chidorigaike_no_chidori`, `yatsuguro_no_shika`, `sabumi_no_enko` | Late city/prefectural PDF sections were directly checked. Chidori replaces a deferred catalog-only snake; Shimane's distinct enko episodes remain separate regional indexes. |

The IDs in the table are retrieval aids; the full review was by actual position, name, claim, source and locator. No name or alias was merged solely because it resembled another tradition.

## Coverage, grain and source depth

The new 50 comprise **29 folklore beings, 14 named supernatural entities, 5 object spirits, and 2 supernatural phenomena**. Evidence links: **40 institutional explanations, 6 DB records, 3 research articles, 1 institutional catalog**. The 33 distinct sources are not all original publications. A DB card or later municipal retelling remains labeled as such even when it names a predecessor.

Most frequent attested regions are **愛媛県 10, 和歌山県 8, 山口県 5, 茨城県・北海道・島根県 4 each, 新潟県 3**. Ten more prefectures have one or two entries in this segment, including 福岡県 for 千鳥. These are locations of attestation, not places of origin. Provider concentration is notable: 西条市 contributes 7 evidence links and 新宮市立図書館 5; 茨城県の民話Webアーカイブ、島根県、山口県 and other providers contribute multiple links. The next segment should diversify sources where the evidence permits.

Entity-grain cautions: the three えんこう records from the Shimane report are separate place-linked accounts, with no claim of three biological individuals or identity across rivers; 二上山の大蛇 is not automatically equated with the named 悪王子; 千鳥 is the tale's named wife and later pond-lord, whereas the 1873 quotation only attests the pond name. The deferred 大槌島の大蛇 is an important check against turning an archive catalog title into a supernatural entity. Other deferred/rejected decisions are in the queue.

## Workflow, unresolved and next action

Codex screened and reviewed the candidate records directly. Local LLM processed **0** in this segment; literal-name, record-ID and locator accuracy are **not measured**; unusable outputs **0** and runtime failures **0**. No original text, image or audio was copied into the Corpus. Schema and theory were unchanged. Validator: **PASS: 700 entities, 522 sources, 745 claims**.

Unresolved: direct text behind several DB records and institutionally summarized earlier works remains unexamined; three Shimane enko accounts and the four Yamaguchi disaster tales need source-depth review before any shared-identity or formation claim; the Kurashiki document on the 大槌島 snake requires direct inspection before admission. The publisher year 2005 for Koga No.25 is explicit on PDF page 2; it is not the age of the tale.

Next action: after normal commit/push and remote SHA verification, resume evidence-backed screening toward **750**, where the specified cross-review must be completed before a 751st admission.
