# Long run checkpoint 0275

## Scope and result

- Base: public main `701c3f5b3d3ddd2a00b562cd4224f3c99c46ed98` (250 entities).
- Current: 275 entities, 236 sources, 316 claims. Added 25 entities, 22 sources, 25 source facts. Reused `source_0024` for two NDL print-list entries and one newly registered Nichibun card for both ヒンナ神 and コチョボ.
- Validator: `PASS: 275 entities, 236 sources, 316 claims`. Schemas, methodology, theory, and old records unchanged.

## Admission and review

- Sources: NDLイメージバンク (3), 日文研DBの21カード (22). Print-list claims attest only to captions in the institution's catalog. Database claims attest to each card's abstract and bibliographic locator, not to direct reading of the original article. Some cards abstract earlier source material; card date is not an origin date.
- Sol/Codex reviewed all 25 names, cards, locators, and prior-entity collisions. Spot audit (5): 頓欲の婆々 / NDL『和漢百物語』項目; ヒンナ神とコチョボ / card 2180205 p.41; オシラサマ / card C0220076-000 p.348; 黒坊 / card 2400029 pp.57–58; 常元虫 / card 3510014 p.121. Each name and bounded claim matches the cited listing or card. Major errors: 0.
- `黒坊`の要約は河童との関係を疑問形で記すだけなのでaliasにしない。`砂まき`の要約が越後・津軽・備中を列挙するため、その三地域のみを attested_regions に記録した。`コチョボ` はヒンナ神の単なる異名ではなく、同カード中で別の作り方と呼称を持つ。`ゴンゴロウビ` は死者の遺念とされる火であり、死者本人の歴史的実在を確認したclaimではない。

## Rejected and deferred

- Rejected (1): NDL「浅倉當吾亡霊」は既存の佐倉惣五郎と同一対象の可能性が高く、画題だけで新規人物として数えない。
- Deferred (4): 「見上げ入道」はカードが既存の見越し入道と同じものと記すため別entityの採録を保留; 「かりこ坊」は河童・ひょうすんぼとの範囲を要比較; 「常陸坊海尊仙人／清悦」はカード内の人物同定を要確認; 「うはばみ／一」は類型と固有名の粒度を要判断。

## Coverage and bias

- Cohort: geographically unassigned NDL 3; 高知2、富山2、岩手1、徳島4、新潟2、熊本3、青森2、島根4、山口1、滋賀1. This is coverage in a selected digital sample, not occurrence frequency. At 275, Tokyo 19 and Hyogo 13 remain the largest attested_region counts.
- Source types: 122 database records, 79 institutional explanations, 26 institutional catalogs, 5 research articles, 4 primary/early sources. 日文研 abstracts form a large fraction of this checkpoint; next checkpoint should prioritize full municipal or museum text and distinct regional collections.
- Entity types: 110 folklore beings, 98 named supernatural entities, 49 phenomena, 12 historical people in supernatural traditions, 4 object spirits, 2 urban legend figures. No hypothesis classification was added.

## Local LLM and unresolved

- The ComfyUI queue was busy during the initial safe preflight, so no competing Local request, stop, or unload was made. Sol/Codex handled this checkpoint.
- Local processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 initial preflight condition, no new failure. Sol reviewed: 25 admission records and 5 sampled audit records.
- Unresolved: original publications behind the 21 日文研 cards were not directly checked, so these records remain index-level claims. Localized names and generic types need cross-record identity review after 300; no present schema change or stop condition is justified.
