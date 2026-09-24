# Batch E — 自走停止記録

Date: 2026-09-24. Base/public main before Batch E: `fef2d29` (70 entities / 76 sources / 107 claims). **No Batch E entity, source, or claim was committed.** Unpublished draft rows were discarded after the stop condition. Schema, methodology, and theory remain unchanged.

## Candidate evidence checked before the stop

These are *candidates*, not adopted corpus conclusions. Source dates are dates of documents or catalogued publications, not origin dates of the stories.

| Candidate type | Evidence read | Open issue |
| --- | --- | --- |
| School: 「ウマが走る」 | [日本民俗学会・見上恵発表要旨](https://www.fsjnet.jp/regular_meeting/abstract/861.html), 同見出し第2–3段落 | Reported knowledge among roughly 70% of pupils in one school; the route by which the account formed remains uncertain. |
| Village child-snatcher fear: 子取婆 | [日文研 card 1231229](https://www.nichibun.ac.jp/YoukaiCard/1231229.html), summary of 三木春露1942 | The account connects a rumor with violence against a real woman. The woman must not be identified as the rumored being; the account requires careful historical verification. |
| Village rumor: 油取り | [日文研 card 1550068](https://www.nichibun.ac.jp/YoukaiCard/1550068.html), 高田十郎1925, original p.3裏 | Report from Tōno links the feared figure to a war omen; earliest transmission unknown. |
| Child-snatcher and poisoning rumors: 赤マント、饅頭食わせ | [日文研「異界の杜」第42回](https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html); [card 0690264](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0690264), original p.17 | The child-snatcher “赤マント” cannot automatically be merged with the toilet-story name. A poisoning rumor is not proof that a poisoner existed. |
| Pilgrimage road: ヒダル神、ヒトタタラ、ナンジ | [日文研 cards 2240297](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2240297), [1720003](https://www.nichibun.ac.jp/YoukaiCard/1720003.html), and [「異界の杜」第71回](https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html) | Mountain road traditions are documented; their being outside a city does not itself prove an information origin. |
| School word-rumor: 紫の鏡 | [日文研 card 0970170](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0970170), 久野1999, original p.54 | A reported phrase with a threatened consequence, unlike a stable named person. |
| Rural road: ナメラスジ | [日文研 card 0310156](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0310156), 三浦1954, original p.125 | The named road is described as a passage for uncanny beings; it is not itself automatically a person-like entity. |

## Local LLM stop condition

The local candidate worker received short retrieved-source snippets. In five consecutive completed responses it put non-work material into a “作品名” slot:

1. 油取り: a database card number treated as a work title.
2. 赤マント: the monster name mixed into a work-title list.
3. 饅頭食わせ: a card number and poison bun treated as work titles.
4. ヒダル神: a database card number treated as a work title.
5. ヒトタタラ: a database card number treated as a work title.

The preceding two and one subsequent response were also observed, making `processed = 8`. `auto_flagged = 5`, `reviewed_by_sol = 8`, `corrected_by_sol = 5` (screened out before corpus entry), `entity_errors = 5`, `alias_errors = 0`, `chronology_errors = 0`, `layer_errors = 0`, `locator_errors = 0` (the short snippets did not support a meaningful locator-error test). Candidate correction rate was 5 / 8 = 62.5%. No local output was published as a claim.

The v0.5 instruction says to stop autonomous progression when the same Local LLM error occurs in five consecutive items. Therefore `BATCH_E_GATE = STOP`. The stop concerns the extraction workflow, not validator quality or GitHub authorization. The single recommended next action is to revise the Local LLM extraction contract so it emits typed JSON fields and explicitly excludes database card labels and entity names from work titles, then retest that contract on the five held-out cases before resuming Batch E.
