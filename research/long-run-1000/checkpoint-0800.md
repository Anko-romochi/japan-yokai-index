# Checkpoint 0800 — source-linked admissions and stratified audit

Date: 2026-09-27 (Japan). Public `main` at the 800-entity stop: `f9b6e4c4f9427fd5cec1161508f60d7116d85043`. Admissions paused at exactly 800; no 801st entity was added during this gate.

## State and gate

- **800 entities / 602 sources / 846 claims**. [Candidate queue](candidate-queue-0800.csv): **91 screened / 50 admitted / 27 deferred / 14 rejected** for positions 751–800.
- The 50 admissions have 50 source-linked `source_fact` claims, each with an evidence locator. The segment uses 45 distinct sources. Exact canonical Japanese-name duplicates, dangling references, missing evidence locations, and duplicate source URLs in the segment: **0**.
- **LONG_RUN_800_CHECKPOINT_PASS**: 20-position stratified audit found **0 remaining major errors**. This is a sampled review, not a certification of all 800 records or of uninspected earlier publications. The gate opens for 801–850 only after this report is committed by normal push, public and local `main` match, the working tree is clean, and the validator remains PASS.

## Audit

Sampled positions: **751, 754, 756, 759, 763, 765, 768, 772, 774, 776, 779, 782, 784, 786, 788, 790, 793, 797, 799, 800**. For each, the audit joined entity, source and claim records and checked source type, URL, locator, attribution, name/alias, chronology, region, grain and wording. The sample spans DB cards, direct story texts, institutional explanations, named and unnamed beings, and 13 prefectures. Direct passages rechecked in this gate include the Okinawa individual card **47O220799**, Tateyama Museum's クタベ explanation, Rekihaku record **F-320-745**, Shimoda's コガセンばあさん story, Neyagawa's 河北の狐, Aomori prefectural record **Fork_MS1_820210**, Sendai's 猫塚 account, Yokohama's 乳出神 story, and Seki's 高賀神社 account. The remaining sampled passages had been inspected at admission; this gate rechecked their data joins and locators without claiming a fresh full reread.

The sample supports its registered short claims. The [Okinawa card](https://okimu.jp/museum/minwa/1582445055/) explicitly distinguishes the speaker's title **逆立ち幽霊** from the story's unspecified setting; 沖縄県 is tied to the speaker's recorded origin, not asserted as the ghost's birthplace. The [1882 Rekihaku card](https://khirin.rekihaku.ac.jp/pid/nmjh_collection/F-320-745.html) dates the **print**, not the first appearance of 尼彦. [Tateyama Museum](https://tatehaku.jp/kutabe/) explicitly distinguishes the printed 越中立山のクタベ from a tale attested locally around Tateyama and records クダベ as a variant in another text. The [Aomori prefectural record](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MS1_820210) contains the separate 立石様 and アカエイサマ passages in the stated chapter and pages, while citing earlier materials not directly checked here.

**Grain cautions:** [東野の乳出神さま](https://www.city.yokohama.lg.jp/seya/kurashi/kyodo_manabi/manabi/rekishi/minwa/minwa05.html) is the **named spring as a focus of worship**, not a separately described humanlike being. `named_supernatural_entity` is a provisional index choice and should be revisited if a finer grain model is proposed; the current claim correctly says the spring was called 乳出神さま. [仙台・猫塚の三毛猫](https://www.city.sendai.jp/waka-katsudo/wakabayashiku/machizukuri/miryoku/ichiran.html) indexes the cat acting in one tale, not the grave marker or a general cat-spirit type. [さるとらへび](https://www.city.seki.lg.jp/kanko/0000000643.html) is kept distinct from the earlier luminous monster in the same shrine account, because the cited text presents them at different points. No same-name traditions were merged by name alone. These are cautions, not grounds for an unverified data rewrite.

## Coverage, source depth, and workflow

| Measure | Positions 751–800 |
| --- | ---: |
| Entity grain | 34 `folklore_being`; 16 `named_supernatural_entity` |
| Primary evidence source type | 41 institutional explanations; 5 database records; 4 `primary_or_early_source` |
| Distinct evidence sources | 45 |
| Region not recorded | 0/50 |
| Kana not verified | 30/50 |
| Attested period not recorded | 43/50 |
| Major errors remaining in the 20-position sample | 0 |

The attested-region distribution spans **22 prefectures**: 静岡 6, 大阪 5, 千葉 4, 熊本・兵庫・青森・神奈川 3 each, and 15 others with 1–2 entries. This reflects accessible records, not yokai origin or prevalence. Provider concentration is modest within this segment: 寝屋川市 5, 下田市 4, 国立歴史民俗博物館・青森県史デジタルアーカイブス・横浜市瀬谷区 3 each. Institutional explanations still dominate; their cited antecedent publications should not be treated as directly read. The segment has no historical-person or modern urban-legend type. Subsequent screening should seek diverse source and grain types where evidence supports them, without a numerical quota.

Examples deferred rather than forced into the corpus include the Saga city `子育て幽霊` and `蛇女房` tales (generic tale-type and entity-grain overlap), two 狭山市 第六天 fox accounts (same-place identity unresolved), 南房総's 里見の大猿 and 富浦亡者船 (subject/grain ambiguity), and 古賀の古狸 (attribution remains conjectural). The queue records individual decisions. Local LLM processed **0** in this segment; literal-name, record-ID and locator accuracy are **not measured**; unusable outputs **0**, runtime failures **0**. Codex performed admission and spot review. No original text or images were copied into the corpus.

**Validator:** `PASS: 800 entities, 602 sources, 846 claims`. Schema and theory unchanged. **Unresolved:** 乳出神さま's deity/spring grain; older publications behind institutional explanations; 30 unverified kana and 43 unrecorded periods in this segment. These do not alter the source-backed claims or block the next 50-entry screening batch.

**Next action:** after public verification of this gate, screen candidates for positions 801–850 under the same admission rules.
