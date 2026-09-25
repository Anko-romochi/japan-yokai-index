# Japan Yokai Corpus Indexer v1.0 — MVO test

Date: 2026-09-25. Base: `48a5b276f2fd91e952d75d49629072b7a3b64874` (300 entities). The Codex user skill `japan-yokai-corpus-indexer` v1.0 was installed in the existing Codex skill directory and passed the skill-creator format validator. The skill is an operator workflow; Corpus schemas and theory were not changed.

## Candidate screening

[Candidate queue](skill-mvo-candidate-queue.csv): 22 screened; 5 `admit`, 3 `defer`, 14 `reject`. Rejections include 10 existing entity overlaps and 4 entries whose inspected page concerns an ordinary animal/person, an object, or a place rather than a separate supernatural subject. Deferrals retain unresolved entity grain and identity questions. The 5 admissions are below; each is Level 1 only.

| Entity | Source and precise locator | Admission boundary |
| --- | --- | --- |
| `jinchiji_no_daija` 神池寺の大蛇 | [兵庫県立歴史博物館「神池寺の澄まずの池」](https://rekihaku.pref.hyogo.lg.jp/digital_museum/legend3/story9/), 大蛇が鐘つき小僧を飲む段落 | 寺の物語に限定。原典『郷土の民話』丹有編は未照合。 |
| `sayo_yasukawa_no_neko` 佐用安川の猫 | [同「佐用安川の猫堂」](https://rekihaku.pref.hyogo.lg.jp/digital_museum/legend3/story10/), 猫の死後から夢の段落 | 名称は索引用の記述名。祟る一匹の猫を対象とし、「猫堂」は場所として扱う。原典『西播怪談実記』は未照合。 |
| `higashihongo_no_hinotama` 東本郷村の火の玉 | [同「東本郷村の火の玉」](https://rekihaku.pref.hyogo.lg.jp/digital_museum/legend3/story11/), 火の玉と翌朝の腕の段落 | 個別の遭遇譚。元禄は再話内の物語設定であり、確認資料の年代ではない。 |
| `sasai_no_takebo` 笹井のタケ坊 | [狭山市「笹井のタケ坊河童の話」](https://www.city.sayama.saitama.jp/shisei/kouhou/koho/sayamanomukashi/202608.html), 冒頭のタケが淵の段落 | 「タケ坊」は本文の明示名。2026年更新の再話以前の記録・創作経路は未確認。 |
| `zakkuri_baba` ザックリ婆 | [狭山市「ざっくり婆の話」](https://www.city.sayama.saitama.jp/shisei/kouhou/koho/sayamanomukashi/202506.html), 小豆婆の地域呼称の段落 | 本文が奥富の呼称と明示する。小豆婆全体の同一系譜や起源は主張せず、aliasも追加しない。 |

## Complete admission audit

- **Identity / names:** all 5 Japanese names are unique in the 300-record base; ID and source URL duplication check passed. `神池寺の大蛇` and `佐用安川の猫` are scoped descriptive index names, not claims of stable oral names. `東本郷村の火の玉` is the source heading. `タケ坊` and `ザックリ婆` are printed in their individual articles. No aliases were added; unknown readings/romanizations remain null.
- **Sources / locators:** all five individual pages were read. Sources `source_0248`–`source_0250` are museum retellings, and `source_0251`–`source_0252` are municipal pages authored by 池原昭治. No original book was represented as directly read. Every new `source_fact` (`claim_0342`–`claim_0346`) has one live source ID and a bounded heading/passage locator.
- **Claim wording / chronology:** all five claims describe what the page says; none asserts a supernatural event as history. `attested_periods` is empty. Museum story times and the Sayama page update dates are not used as origin or collection dates.
- **Entity grain:** one place-linked serpent, one individual retaliating cat, one localized phenomenon, one named kappa, and one regional term for an azuki-washing figure. These are separate from existing broad `河童`/`狐`/`鬼` types; no identity merge follows from the type relation.
- **Corrections before publication:** the draft source note for the 神池寺 page was corrected from a different museum story's cited book to 『郷土の民話』丹有編; the new ID for 笹井 was corrected to `sasai_no_takebo`. Neither draft was published. No major error, locator error, invented alias, or chronology confusion remains in the audited set.

## Gate

- `python scripts/validate_corpus.py`: `PASS: 305 entities, 252 sources, 346 claims`.
- Major errors: **0**; unsupported aliases: **0**; locator errors: **0**; major chronology confusion: **0**; source_fact inference intrusion: **0**. `defer` and `reject` were exercised with stated reasons.
- Source bias: 3 museum retellings from 兵庫県 and 2 authored municipal retellings from 埼玉県. This is a calibration sample, not a distribution estimate. Next checkpoint should seek more original/early or independent institutional sources.
- Result: **`YOKAI_INDEXER_SKILL_PASS`**, conditional on the normal public-main push and remote verification of this test commit. No automatic theory or schema revision follows.
