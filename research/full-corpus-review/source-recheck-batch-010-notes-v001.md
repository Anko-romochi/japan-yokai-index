# Source recheck 010 — shared registration for two distinct Nichibun cards

Checked 2026-09-28 against public `main` `a2ca64e54288b8749ff0b3f60eef23b837538690`. Research only; no new unique claim IDs, source-depth promotion, or corpus edit. This expands [batch 006](source-check-batch-006-notes-v001.md)'s `claim_0026` URL mismatch into a reviewable shared-source decision.

## Exact registered relationship

`source_0014` is registered as 後藤捷一「阿波に於ける狸傳説十八則―附『外道』について―」, 『民族と歴史』8(1), 1922-07-01, article pp.281–292. Its `external_id` and `location` list two Nichibun cards, but its **single** `source_url` resolves to [card 2400113](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2400113).

| Linked claim | Its registered evidence locator | What the directly read card supports |
| --- | --- | --- |
| `claim_0024` 金長 | card 2400113, pp.281–282 | [Card 2400113](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2400113) identifies 金長 as a leader in the narrated 狸合戦. It is a Tokushima-prefecture indexed item. |
| `claim_0025` 六右衛門 | card 2400113, pp.281–282 | Same card identifies 六右衛門 as the opposing leader. The two leaders are separate named figures in one battle narrative. |
| `claim_0026` 屋島の禿狸 | card 2400120, pp.288–290 | [Card 2400120](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2400120) contains the Genpei-battle spectator, 八栗寺 move, and narrated life story. It is indexed under Kagawa/Takamatsu. Card 2400113 only mentions the 禿狸 as a mediator in a different passage. |

Both cards index **different excerpts of the same 1922 article**. The article pages themselves remain unread. Card 2400120's summary supports `claim_0026` at the *card* layer; the registered single URL does not lead to that card. This is a source-linkage problem, not a reason to merge the figures or to assign the Tokushima card's region to 屋島の禿狸.

## Human-reviewed corpus decision needed later

Simply replacing `source_0014.source_url` with the 2400120 URL would break the direct link for `claim_0024` and `claim_0025`. A future corpus phase should choose a representation that links all three claims to their exact card while preserving the shared article relationship, using the then-current schema and source-count policy. Possible designs include separate card registrations linked by a shared publication note, or an explicit multiple-card link if the schema supports it. **No design is adopted here**: the corpus is frozen at 1000 entities, 744 sources, 1052 claims, and source/schema changes require human review.

Current queue v010 retains `claim_0026` as open. Its locator correctly names 2400120; the recorded URL points to 2400113. The registered-source tally remains 1020 directly supported at their layer and 32 open under the review's conservative accounting.
