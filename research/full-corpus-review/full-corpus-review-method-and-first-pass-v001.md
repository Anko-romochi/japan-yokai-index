# Full corpus review: method and first pass (v001)

Run opened 2026-09-28 10:01 JST on public `main` at `0cca0533a2a71f15c1c0c832b804fb98037f9856`. `python scripts/validate_corpus.py` passed before this research pass: **1000 entities, 744 sources, 1052 claims**. The admission phase and corpus remain frozen. This report, the three ledgers, and the inventory are research records only.

## What has been reviewed

The three ledgers enumerate **every current entity, source, and claim** and link each entity to its claims, sources, prior Source Deepening pack (if any), and triage flags. This is a **structural and coverage pass**, not a declaration that every cited passage has been reread. Every unexamined ledger row explicitly says `passage recheck pending` or `individual source recheck pending`. The 100 prior Source Deepening units cover 106 entity IDs; their conclusions are not silently promoted to Level 2 for other records.

The inventory flags are review queues, not error counts. In particular: 961 entities have one claim, 967 have one source, 103 lack recorded region, 945 lack recorded period, 606 lack kana, 39 cite only a catalog, 214 cite only database records, and 623 cite only institutional explanations. Unknown metadata remains unknown. There are 460 entities for which the linked source date is not recorded. Two claims have `pending` review status and three have `probable` confidence. Exact repeated source URLs occur for `source_0079`/`source_0087` and `source_0426`/`source_0455`; these may be distinct passages of a shared page, so no automatic merge follows.

The ledgers preserve the corpus values and add a triage score for ordering. Score and flags are deterministic heuristics, not evidence of an incorrect claim. Review order should mix risk, source type, entity grain, publication period, region, and early/late corpus positions instead of processing score alone. A verified passage supports only the wording it contains; a database card, catalog, later explanation, original publication, and independent earlier witness stay separate. Story date, publication date, and collection date stay separate. Name similarity does not establish identity.

## First 20 source checks

The first sample spans corpus positions 3–981 and includes catalog, database, institutional explanation, transcription, original text, and research article references. The table is a **claim support check** for the identified source passage, not a full evidence pack or Source Depth upgrade. `direct` means the cited page or PDF passage was readable; `alternate` means a second official publication of the same story was readable while the recorded URL could not be fetched; `indexed` means only a search index or linking page was available. The latter must not be counted as a passage verification.

| Entity / claim | Current result | Passage, limit, or follow-up |
|---|---|---|
| `kitsunebi` / `claim_0003` | direct, supports limited claim | [NDL 石燕 list](https://www.ndl.go.jp/imagebank/theme/sekienyokai), 「狐火」. List presence does not establish folklore origin. |
| `nanji` / `claim_0113` | direct, supports | [日文研 異界の杜 #71](https://www.nichibun.ac.jp/YoukaiDB/ikai/report.html), 第71回第3段落. Shared page URL needs its episode locator retained. |
| `aburaname` / `claim_0142` | direct, supports | [日文研画像目録 U426_nichibunken_0073_0047_0000](https://www.nichibun.ac.jp/cgi-bin/YoukaiGazou/card.cgi?identifier=U426_nichibunken_0073_0047_0000). Image metadata date is not the original print date. |
| `kodama_sekien` / `claim_0267` | direct, supports limited claim | [NDL 石燕 list](https://www.ndl.go.jp/imagebank/theme/sekienyokai), 「木魅（こだま）」. |
| `oritate_nekomata_no_kai` / `claim_0370` | indexed, direct recheck pending | [十津川村 (41)(46)](https://www.vill.totsukawa.lg.jp/bridge/folklore/old-tale/old-tale41-50/) indexed excerpts show two distinct tellings at 猫又の滝. No shared individual established. Recorded URL timed out. |
| `souhanbuchi_no_ooameno_uo` / `claim_0378` | alternate official text supports narrative; recorded URL pending | [十津川村学校旧サイト](https://www.totsukawa-nara.ed.jp/bridge-old/guide/folktale/ft_0205.htm) relates the rice cake and fish stomach. It does not explicitly identify monk and fish. Verify recorded village URL separately before closing. |
| `hozo_in_kobozo` / `claim_0414` | direct, supports | [香川県立図書館翻刻](https://www.library.pref.kagawa.lg.jp/know/local/local_3001), 「山寺の恠」pp.68–69. Publication and story time must remain distinct. |
| `asada_hebi` / `claim_0443` | index only, direct text pending | [東北文教大学 index](https://www.t-bunkyo.ac.jp/library/minwa/archives/kappa/kappa.html) links 「浅立の蛇」; [text](https://www.t-bunkyo.ac.jp/library/minwa/archives/kappa/text/07.html) could not be fetched in this run. |
| `fukanuma_kaido_no_kitsune` / `claim_0542` | direct, supports | [東北文教大学翻刻「狐退治」](https://www.t-bunkyo.ac.jp/library/minwa/archives/naranasitori/text/13.html), story body. The fox and later shrine appellation are separate name facts. |
| `shiunji_ofuku` / `claim_0558` | indexed, direct recheck pending | [新潟市2017 report PDF](https://www.city.niigata.lg.jp/kurashi/kankyo/kataken/kataken_kankoubutsu.files/H29takahashi06.pdf) indexed, direct PDF fetch failed. Report is a later summary of 『新潟県伝説の旅』. |
| `taroten_yayama` / `claim_0573` | direct, supports | [豊後高田市教育委員会 PDF](https://www.city.bungotakada.oita.jp/uploaded/attachment/5567.pdf), printed p.10 / PDF p.11. 1130 is the inscription's claimed image production year, not the booklet year. |
| `marugata_bakemono` / `claim_0688` | indexed, direct recheck pending | [新潟市2017 report PDF](https://www.city.niigata.lg.jp/kurashi/kankyo/kataken/kataken_kankoubutsu.files/H29takahashi06.pdf) indexed; original 『鳥屋野地区の今昔』 remains unread. |
| `oshizu_gitsune` / `claim_0739` | indexed, direct recheck pending | [萩市保存樹木等台帳 PDF](https://www.city.hagi.lg.jp/uploaded/attachment/5851.pdf) indexed only in this run; verify exact PDF and locator. |
| `taikyuji_no_bake_yokozuchi` / `claim_0749` | direct, supports | [鳥取県立博物館「語り」](https://www.pref.tottori.lg.jp/272550.htm), collected 1986-08-04. Teller birth year is not collection date. |
| `yata_no_sainokami_no_ishi` / `claim_0756` | direct, supports; grain review | [大阪市解説](https://www.city.osaka.lg.jp/higashisumiyoshi/page/0000033856.html), 「038 賽の神社ととんど行事」. Speaking stone, fire deity, ritual object require separate grain assessment. |
| `takamaru_tsugaru` / `claim_0861` | direct, supports limited claim | [青森県史 民俗編資料津軽](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MT1_820210), 2014, pp.410–411, ［英雄］. Mentions 高丸の首塚; does not identify historical reality or date of legend's origin. |
| `oriya_daija` / `claim_0920` | direct, supports | [東北文教大学「おりや峠の蛇」](https://www.t-bunkyo.ac.jp/library/minwa/archives/satouke/text/20.html). |
| `shiota_no_tsukimiso_no_sei` / `claim_0962` | direct, supports synopsis only | [佐賀県立図書館 No.59](https://www2.tosyo-saga.jp/kentosyo/web-mukashibanashi/title.html). The 1916 date shown is narrator 蒲原タツエ's birth year, not story collection date. Original 843話 remains unread. |
| `yokone_no_tengubi` / `claim_0981` | indexed, direct recheck pending | [大府市「天狗火」 PDF](https://www.city.obu.aichi.jp/_res/projects/default_project/_page_/001/007/193/18_tengubi.pdf) indexed and linked from [official list](https://www.city.obu.aichi.jp/bunka/kanko_rekishi/rekishi/1007193.html); direct PDF rendering failed. Index excerpt alone cannot verify the exact bucket/fire scene. |
| `imari_osho_no_mikeneko` / `claim_1010` | direct, supports synopsis only | [佐賀県立図書館 No.69](https://www2.tosyo-saga.jp/kentosyo/web-mukashibanashi/title.html). Original 『肥前伊万里の昔話と伝説』 remains unread. |

**First batch:** 13 readable cited passages support the narrowly worded claim; one alternate official telling supports the narrative but the recorded locator remains unverified; six are index/link-only and remain open. No corpus correction has been justified by this sample. The explicit grain follow-up is the speaking 賽の神の石; source-level follow-ups include the unreachable PDFs and original publications. The claim's existing caution around the two 猫又 tellings and the monk/fish identity remains appropriate.

Local `google/gemma-4-12b` was used only for a bounded second-pass classification of six high-risk claims from short observations. It marked `claim_0861` supported and `claim_0370`, `claim_0378`, `claim_0558`, `claim_0688`, and `claim_0981` pending. Codex independently checked the cited material and retained the more specific `alternate` result for `claim_0378`. The model output is not source evidence.

## Continuation gate

Continue claim-by-claim source checks across the remaining corpus, prioritizing `pending`/`probable`, catalog/database-only, reused URLs, ambiguous grain, and prior Source Deepening conflicts, while sampling every source class and region. Log exact passage status and correction candidates in research. Do not edit the corpus before human review, increase source depth from an index, fill unknown readings/dates, merge names automatically, or resume admission. Re-run validator and verify unchanged corpus files at every publication batch.
