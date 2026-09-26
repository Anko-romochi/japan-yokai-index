# Interim 0543 — paired oni and a place-bound kappa account

Date: 2026-09-26. Base public commit: `ad3b816f44c76c15c1e3eccf558fd2e37b2abc8e` (540 entities).

- Corpus after admission: **543 entities / 412 sources / 585 claims**. Three entities, two sources, and three short `source_fact` claims added. Schema and theory unchanged.
- [Candidate queue](candidate-queue-0550.csv): 80 screened / 43 admitted / 29 deferred / 8 rejected cumulatively since 500. This pass screened five: three admitted, one deferred, one rejected. Codex reviewed all; Local LLM processed zero.
- [長野県の大倉地区紹介](https://www.pref.nagano.lg.jp/sabo/manabu/chizu-yomitoku-ookura.html), 「伝承」「大岩」, distinguishes two interacting oni at 満仲 and 大岩. They are indexed separately because one throws the rock and the other catches it. These are descriptive place-qualified labels, not documented personal names. The webpage credits the 1977 village history and a 1929 notice; those originals were not inspected and neither date is treated as an origin date.
- [相良村『川辺川魅力創造事業』](https://www.vill.sagara.lg.jp/dl?q=6054_filelib_eaad081c9a9fc4c254385e0b22e64248.pdf), p.32, explains that a sign by the 河童の墓 refers to an account of a rescued kappa delivering fish. The p.32 indexed excerpt was checked as an institutional description of the sign, not the sign's full text or the original local narrative. `廻りサカマの河童` is a descriptive index label; no traditional personal name is asserted.
- Deferred 山鹿・小柳の河童 because the inspected [Kumamoto education reader](https://www.pref.kumamoto.jp/uploaded/attachment/117399.pdf) is a retelling and the earlier narrative was not located. Rejected 熊本市「おばけの金太」: [the city page](https://www.city.kumamoto.jp/kiji0033056/) describes a mechanical toy based on a reputed human; it does not establish an independent supernatural being.
- New region exposure: 長野県 2 / 熊本県 1. The two Nagano oni derive from one episode; at checkpoint, include the pair in entity-grain review. Next passes should diversify providers and entity types.
- Structural validator: `PASS: 543 entities, 412 sources, 585 claims`. Major claim/locator errors found during this pass: **0**.
