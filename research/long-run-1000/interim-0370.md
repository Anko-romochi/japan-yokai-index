# Interim 0370 — regional retellings for checkpoint 0400

Date: 2026-09-25. Base public commit: `94cc57aa1ce16c9fe841468f1b43257f6dd18af5` (350 entities). This is an interim increment; the 400-entity checkpoint and its full stratified audit are still pending.

## Counts and candidate decisions

- Corpus after this increment: 370 entities / 294 sources / 412 claims.
- Added: 20 entities, 20 individually linked source pages, 20 `source_fact` claims.
- Screened in this increment: 25 candidates; 20 admitted, 3 deferred, 2 rejected. See [candidate-queue-0400.csv](candidate-queue-0400.csv).
- Validator: `PASS: 370 entities, 294 sources, 412 claims`.

Ten admissions use full individual retellings on the [Mie prefectural folk-tale site](https://www.bunka.pref.mie.lg.jp/minwa/genre/index.htm). Ten use full individual tales reprinted by [Chiba Prefecture](https://www.pref.chiba.lg.jp/kkbunka/b-shigen/08minwa/index.html) from named issues of `広報おおたき` (`ふるさと民話さんぽ`, 斉藤弥四郎). Every individual URL returned HTTP 200, and two literal passage anchors per source were checked before admission. The original Chiba newsletter pages and the original Mie tellings were not separately inspected; `source_type=institutional_explanation` is deliberate. Chiba `source.date` is the prefectural page update date, not a story, collection, or newsletter date. `attested_periods` remain empty.

## Interim review

Claims are short statements about what the retellings say. They do not assert supernatural events as history. The regional accounts of `牛鬼`, `河童`, `狐`, and `天狗` are kept separate from any generic Corpus type without claiming identity continuity. `横山の八大竜王` indexes the three local dragon stones and their reported enshrinement, not a proven descent from any other 八大竜王 tradition. `まん山ギツネ` indexes a place-linked group of fox accounts rather than one established individual.

Source-to-claim review was performed for all 20 admissions. A focused second pass on 小女良狐, おねじゃたぬき, 蛇池の大蛇, 長島浦のかんからこぼし, 四日市の大入道, 田五郎, 上瀑の首切り地蔵, 正宝院の使者狐, 田代滝の白蛇, and 夜泣き石 found no major claim or locator error. This does not verify the older original publications or the historicity of any legend.

## Deferrals and bias

- `おみねとかっぱ`: the people in the tale *infer* a kappa; a separate individual is not established.
- `オコウさま`: the reprint gives an inconsistent Gregorian year for 慶應四年, and the older newsletter/enshrinement record has not been checked. This is a source problem, not a date to copy into Corpus.
- The Miyazaki prefectural-library PDF was downloaded, but embedded text extraction is garbled. No record was admitted from unreadable passages.
- `ぼてふり平さん` is an ordinary person deceived by an unnamed fox; `せんがりの田` is a place-name story. Neither was admitted as a new being.

This increment is concentrated in two prefectures and two institutional republishing projects. The next 30 admissions toward checkpoint 0400 should draw from other regions and providers. Local LLM was not used; Local processed 0, unusable outputs 0, runtime failures 0. No schema or theory file changed.
