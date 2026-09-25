# Interim 0520 — regional passages and a lagoon report

Date: 2026-09-26. Base public commit: `e8426b03b7b9ca56806f9b607695bb7b75573b13` (510 entities).

## Counts and screening

- Corpus: **520 entities / 393 sources / 562 claims**. This interim adds 10 entities, 7 sources, and 10 short `source_fact` claims. Schema and theory remain unchanged.
- [Candidate queue](candidate-queue-0550.csv): **43 screened / 20 admitted / 18 deferred / 5 rejected** cumulatively toward 550. This batch screened 22: 10 admitted, 8 deferred, 4 rejected as duplicates. No new alias or unverified reading was assigned.
- Validator: `PASS: 520 entities, 393 sources, 562 claims`.

## Source and identity review

- [九戸村の民話案内](https://vill.kunohe.iwate.jp/docs/255.html) (`source_0387`) describes オドデ様 in one identified paragraph. The referenced book 『九戸村の民話』 was not directly checked.
- 花巻市掲載の [「河童の証文」](https://www.city.hanamaki.iwate.jp/kosodate_kyoiku/kyoiku/sho_chugakko/website/1001550/1013983/1013988/1014000.html) and [「亀ケ森玄蕃の兜神」](https://www.city.hanamaki.iwate.jp/kosodate_kyoiku/kyoiku/sho_chugakko/website/1001550/1013983/1013988/1013998.html) (`source_0388`–`0389`) contain inspectable story text. The claims identify the桜淵の河童 and the particular十一面観音 called 身代わり観音. The earlier 『口碑伝記』 and 『亀ケ森村誌』 volumes were **not** read. The latter entity indexes a narrated statue, not every十一面観音.
- [秋田県「新玉の池」](https://common3.pref.akita.lg.jp/genkimura/archive/contents-409) (`source_0390`) gives two accounts concerning a pond serpent: one describes a move from 古玉の池, another an お玉 transformation. The index does not assert that the two accounts document a single biographical origin. The listed local-history books remain unchecked.
- [北九州市「夜宮の森にまつわるお話」](https://www.city.kitakyushu.lg.jp/tobata/file_0007.html) (`source_0391`) explicitly discloses its reuse of 『北九州むかしばなし』. The admitted subject is the mother fox inferred *within the narrated story* from the newborn kits; the man who summons the midwife is not independently identified as a fox. The older booklet was not checked.
- 高橋郁丸 [「潟の伝承・書籍調査報告２」](https://www.city.niigata.lg.jp/kurashi/kankyo/kataken/kataken_kankoubutsu.files/H29takahashi06.pdf) (`source_0392`, 平成29年度報告書、印刷頁59–82) explicitly says it **summarizes earlier books**. Four entries point to named subsections on printed pp.59–60 and state which earlier book the report summarizes. Those books are not registered as directly read sources. 白山亀 is kept separate from the report's 鳥屋野潟の大亀 and 三平池の大亀 accounts. Existing `minomushi_road` was not duplicated from a similar Niigata fire account.
- [色麻町「かっぱ伝説」](https://www.town.shikama.miyagi.jp/soshiki/shakai_kyoiku/8/458.html) (`source_0393`) directly supports the single arm-and-ointment episode. The generic source name 河童 does not imply identity with other regional kappa or an `おかっぱさま` alias.

## QC, bias, and unresolved

All 10 admissions were checked against current names, aliases, entity IDs, source URLs, claim locators, chronology, region, and entity grain. The 4 rejections were already indexed 三崎山の手長足長, 能恵姫, 海御前, and リキリン. Deferred cases include a regional オシラサマ manifestation, literary 河童 group, overlapping lagoon turtles, a similar ミノムシ, and image-based Hanamaki stories whose text or identity was not fixed. Major claim or locator errors found in this batch: **0**.

This interim's region exposure is **新潟県 4 / 岩手県 3 / 秋田県 1 / 福岡県 1 / 宮城県 1**. Four Niigata records depend on one secondary report, so the next admissions should spread across other regions and providers. A cited story period, including the Kitakyushu tale's Edo setting, was **not** entered as an attestation period. Local LLM processed **0**; Codex reviewed all 22 decisions and all 10 admissions; local-output failures and runtime failures were **0**.

Unresolved: the original volumes cited by the municipal pages and Niigata report; source-level continuity between the two 新玉の池 accounts; whether the place-prefixed index labels were stable historic names; and the grain of deferred regional manifestations. These are source-deepening questions, not grounds to change the schema or theory during Level 1 admission.
