# Long run checkpoint 0100

## Scope and result

- Base: `4a91de1e3ea6cd8e15f57c7cc846e50d042a9bac` (81 entities).
- Current: 100 entities, 110 sources, 141 claims.
- Added: 19 entities, 19 source records, 19 source facts.
- Validator: `PASS: 100 entities, 110 sources, 141 claims`.
- Source fact scope: every new claim describes what a Nichibun card summarizes. The underlying journal or book pages were not independently read. The cited page is the original publication locator **reported by the card**.
- Duplicate prevention: compared names and IDs with the existing 81 entities. No alias was added solely from phonetic resemblance.

## Admission and review

Admitted: 青坊主、小豆洗い、赤又、猫又、一ツ目子僧、雪女、見越し入道、牛鬼、一反木綿、鎌鼬、塗り壁、雪入道、キジムナー、ケンムン、ヤマワロ、磯女、蛟、山彦、産女。

Sol/Codex admission review: 19 proposed names, record IDs, source claims and locators were checked against the public card pages. These are indexed provisional records, not verified origin histories.

Spot audit (10 additional records): 青坊主/C3720087-000、赤又/1231704、猫又/0640028、一ツ目子僧/1670016、雪女/1070346、見越し入道/2180788、鎌鼬/1240021、キジムナー/0400011、蛟/6550006、産女/2260058。Each had a matching card name, publication locator, region, and summary for its bounded claim. No correction was required.

## Rejected and deferred

- Rejected: 0. Index labels alone were not counted as entities.
- Deferred: 油すまし（カード呼称「アブラスマシン」と一般名称の関係を保留）、蛇女房（昔話類型を単一entityとして扱う粒度を保留）、コロポックル（今回の検索では対象カード未確認）。これらは追加件数に含めない。
- Potential naming boundary: 「一ツ目子僧」は採用カードの表記のまま登録した。一般的な「一つ目小僧」との表記統合は未判定。

## Coverage and bias

- This checkpoint draws all 19 new sources from Nichibun folklore DB cards. Region labels span 関東、中部、近畿、中国、四国、九州・沖縄, but 北海道・東北の新規採録はない。Next checkpoint should prioritize an independent repository and northern records.
- A card summarizes an earlier publication; its issue date is not the tradition's origin. The new attested_periods arrays remain empty for that reason.
- The source catalog is secondary to original text access; later enrichment should inspect original pages where available.

## Local LLM

- Safe preflight: failed because the existing ComfyUI queue was not idle. No service was stopped or switched.
- Processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1.
- Sol/Codex reviewed: 19 admission records and 10 spot-audit records.

## Major issues and unresolved

- Major errors in the sampled records: 0.
- Unresolved: derivative-card source concentration; original publication text unreviewed; deferred name/grain decisions above.
- The previously noted 1777/1779 tofu bibliographic discrepancy remains outside this checkpoint and did not gate indexing.
