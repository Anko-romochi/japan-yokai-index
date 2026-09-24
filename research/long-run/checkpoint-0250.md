# Long run checkpoint 0250

## Scope and result

- Base: public main `a27289ff91efab0a7903db5e3e510bcdcbd2cfbf` (225 entities).
- Current: 250 entities, 214 sources, 291 claims. Added 25 entities, 16 source records, and 25 source facts; reused existing `source_0001` for seven NDL image-list items.
- Validator: `PASS: 250 entities, 214 sources, 291 claims`.
- Existing records, schemas, methodology, and theory remain unchanged except a wording correction to one new claim before commit.

## Admission and audit

- Sources: 国立国会図書館イメージバンク (7 records), 横浜市港南区 (5), 北九州市 (3), and 9 distinct 日文研 cards (10). Each claim refers to a list item, page heading/passage, or card ID and original-page locator when given.
- NDL entries attest to an **index listing of a depicted name**, not a complete lore or an origin. `狸` remains a generic type, separate from named tanuki and `狸囃子`. Yokohama's `ヌエの宮` is an uncanny site/story name, not a newly established individual nue. 北九州市 explicitly links the 河童封じ地蔵 account to 火野葦平の小説『石と釘』; its pre-literary continuity is unproved. 日文研 cards are mediated abstracts, and the original publications have not been directly checked.
- Sol/Codex reviewed all 25 name scopes, source identities, locators, claims, and duplicate risks. Spot audit (5): 白児 / NDL paired list item; 首塚の亡霊 / 横浜市の亡霊説とふくろう説; 河童封じ地蔵 / 北九州市「かっぱ封じの地蔵尊」; 長狐 / 日文研 C3820145-000 p.582; たね / 日文研 0590192 pp.72–73. All five names and bounded statements are in the cited records; 0 major errors. The 長狐 wording was tightened during review so the fox does not falsely self-name.

## Rejected and deferred

- Rejected (2): 横浜市「笑うゴロスケ」は説明上は普通のフクロウ; 日文研「二十三夜様」はこの採録で独立した怪異を示す情報が薄い。
- Deferred (4): `ナビゲー・マジムン` is `ナビケー・マジムン` in the same card's abstract; `ヌサオガミ／ヌサメガミ` card has discrepant written forms; 横浜市「浄念寺の咳止め玄入坊」は見出しと本文の字形が異なる; 北九州市「わかっぱ」は現代のマスコットと伝承上の存在の独立性を要確認。
- Boundary cases retained: `たね` has two story variants in one abstract; the claim does not collapse their sequence or origin. `ミンツチ` shares a card with other labels including 河童, but none were set as aliases. `河童神さまの御手洗池` is indexed as a named site account, not a separate named kappa. `乙媛様` is a tradition figure; the card's chronological story claim is not used to date attestation.

## Coverage and source bias

- Cohort: seven geographically unassigned NDL images; 神奈川5、福岡3、鹿児島3、愛媛2、北海道・沖縄・石川・宮城・鳥取各1. This is digital coverage, not regional prevalence. At 250, Tokyo remains the largest attested region (19). The next checkpoint should sample underrepresented regions, without relaxing evidence gates.
- Source types: 101 database records, 79 institutional explanations, 25 institutional catalogs, 5 research articles, 4 primary/early sources. Image catalog entries and mediated summaries need later source-deepening; `attested_periods` remains empty for the new cohort because source publication years and narrated story dates are not origin dates.
- Entity types: 96 folklore beings, 91 named supernatural entities, 47 phenomena, 12 historical people in supernatural traditions, 2 object spirits, 2 urban legend figures. The broad-type, named figure, and named site scopes remain a comparison question for post-300 review.

## Local LLM and unresolved

- Existing ComfyUI queue was busy at the initial safe preflight; no stop, unload, or competing request was made. Sol/Codex-only extraction continued.
- Local processed: 0; literal-name accuracy: N/A; record-ID accuracy: N/A; locator accuracy: N/A; unusable outputs: 0; runtime failures: 1 initial preflight condition, no new failure. Sol reviewed: 25 admissions plus 5 spot-audit records.
- Unresolved: cited 日文研 abstracts and later municipal retellings do not verify first attestations. The deferred internal naming discrepancies need original-text comparison before admission. No architectural stop condition was met.
