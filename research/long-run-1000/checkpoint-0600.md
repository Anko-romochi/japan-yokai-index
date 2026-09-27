# Checkpoint 0600 — source-linked admissions and quality review

Date: 2026-09-27 (Japan). Starting public main: d5645fc1eb6ab600d54504692923e0645cd03805 (593 entities). Admissions stopped at **600** for this gate.

## State and decision

- **600 entities / 455 sources / 644 claims** after the repair below. No 601st entity admitted during this checkpoint.
- [Candidate queue](candidate-queue-0600.csv): **102 screened / 50 admitted / 38 deferred / 14 rejected** since 550. It includes explicit decisions on ordinary people/animals, ambiguous local manifestations, and inaccessible or insufficient passages.
- All 50 new entities have a source-linked source_fact with a nonempty locator. The 50 use **40 distinct sources**. No exact duplicate canonical Japanese name was found among them.
- The full 50-record structural join found no broken evidence references, missing claims, or missing locators. A 22-record focused review found **one substantial admission-evidence gap**: the cultural-property list for the 光安寺 鼻取り地蔵 identified the object but did not describe supernatural action. The object was already in the Corpus. Before publishing this checkpoint, the 三島市郷土資料館 narrative was inspected and added separately as source_0455 / claim_0644; its passage explicitly links the helpful novice to the 地蔵像. The earlier catalog claim remains a correct catalog fact and is no longer the sole basis for admission. No second substantial error was found in the focused sample.
- **LONG_RUN_600_CHECKPOINT_PASS.** Keep source and theory claims distinct; continue toward 650 after public verification.

## Review method and focused sample

The full pass parsed entity, claim, and source joins for all 50 admissions, checked source and locator presence, checked source reuse and canonical-name duplicates, and separated publication/collection dates from story settings. The focused pass compared claim substance and locator against the cited passage or the exact document section inspected during admission. For image-only and long PDFs, the section was reviewed at admission; this checkpoint rechecked the citation and record decision without claiming new full-text inspection.

Focused sample (22): sumiyoshiike_daija_aira, kotokuji_daija_kagoshima, nikko_izumi_kotaro, nikusui_kumano, misogorodon, koanji_no_hanatori_jizo, miyama_ike_no_nushi, ibori_no_daija, funabashi_kikyo_no_mae, houosan_no_daija, miyako_issunbo, sanbanmagari_no_furudanuki, onizawa_no_oni, mitsuishi_sama, buzen_ibo_kamisama, honami_old_woman_yokai, joza_yajo, oshikiri_kuma_jizo, shinkawa_giant_eel, monjuji_lion, ganeko_blue_meowing_cat, yonago_tama_cat.

The new 福岡市博物館 entries cite its 2007 exhibition explanation of 怪奇談絵詞, not the scroll image. The 沖縄県立博物館 entry fixes individual record 47O416861 and its 1978 recording date; that date is not a tradition origin. The 鳥取県立博物館 page says the story was collected at 米子市今在家, while the teller came from 日吉津村. The descriptive local qualifier in the entity label must not be read as an origin or transmission claim. The 福岡 headings likewise index local episodes and do not establish stable personal names.

## Coverage and remaining source-depth limits

New entity types: 27 folklore_being, 15 named_supernatural_entity, 7 object_spirit, 1 supernatural_phenomenon. The 52 evidence links for the 50 new entities comprise 40 institutional explanations, 7 primary/early source links, 4 database records, and 1 institutional catalog. The catalog entry is accompanied by the separate municipal narrative described above.

The 50 use 20 region strings with none empty. Most frequent: 鹿児島県 6, 福岡県 6, 愛知県 5, 長野県 4, 熊本県 4. These are source-attested regions, not origins. Top providers by evidence links: 稲沢市教育委員会事務局生涯学習課 5; 松本市文書館／信州地域史料アーカイブ 4; いちき串木野市教育委員会 4; 水俣市 4; 熊谷市立江南文化財センター 3. Source concentration remains toward institutional retellings. Future admissions should broaden providers and seek original publications when accessible, without substituting secondary accounts for originals.

Grain risks retained as provisional: local great snakes versus generic snake traditions; named animal individuals versus a story type; miracle-bearing statues versus their material catalog entries; single-card supernatural figures versus later personae. The 宝尾山の大蛇 passage records a large snake sighting plus villagers' fear that it was a pond lord; it does not prove a biologically extraordinary animal. The museum title for the 鳥取 cat is a collection label, not a proven home locality. These are review cues, not grounds for invented aliases or origin claims.

## Workflow, unresolved, and next gate

Codex screened and reviewed candidates directly. Local LLM processed **0** in this segment; literal-name, record-ID, and locator accuracy were **not measured**; unusable outputs **0**, runtime failures **0**. No source text or images were copied to the Corpus. Schema and theory were not changed. Validator: **PASS: 600 entities, 455 sources, 644 claims**.

Unresolved: the earlier broken Niigata report URL at source_0392 needs a durable institutional replacement; primary images of 怪奇談絵詞 and the books behind some municipal retellings remain unchecked; the exact tradition locality and grain of the cat タマ remain open. None of these is filled by inference.

Next gate: continue source-backed admissions toward **650** after this report and the 600-count Corpus are published and remote main is verified. Stop at 750 for the specified cross-review.
