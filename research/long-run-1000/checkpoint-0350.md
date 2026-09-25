# Checkpoint 0350 — source-linked expansion

Date: 2026-09-25. Base public commit: `9eefe25402f5dc753e7c64199b67fe1a1b7d7cdc` (305 entities). Interim public commit: `8b1cc7079a899806c7370723cc085f3399a6cf62` (322 entities). This report covers the full 305→350 checkpoint.

## Counts and disposition

| Measure | Checkpoint value |
| --- | ---: |
| Entities | 350 |
| Sources | 274 |
| Claims | 392 |
| Added since 305 | 45 entities / 22 sources / 46 claims |
| Screened since 305 | 63 candidates |
| Admitted / deferred / rejected | 45 / 11 / 7 |
| Validator | `PASS: 350 entities, 274 sources, 392 claims` |

The 17 interim admissions are documented in the prior public history. The remaining 28 comprise 15 records from numbered [十津川郷の昔話](https://www.vill.totsukawa.lg.jp/bridge/folklore/old-tale/) retellings, 10 from individual [鳥取県立博物館民話](https://www.pref.tottori.lg.jp/265693.htm) transcripts, two from 狭山市, and one from 青森県史. The full candidate decisions are in [candidate-queue-0350.csv](candidate-queue-0350.csv). No new entity was admitted solely from a search-result list.

## Source handling

- The six 十津川 village pages are municipal **retellings**. Their numbered stories and speaker/recorder lines were read; original printed collections or recordings were not. `source_type=institutional_explanation` reflects this. References to 明治, 天保 or “二百年前” inside stories were not put into `attested_periods` or source publication dates.
- The ten 鳥取 pages include full on-page transcriptions and explicit 1979–1996 **collection dates**. They were indexed as `database_record`, not as the original sound recordings; `source.date` remains null. Each individual URL is a distinct source with a locator to its `語り` passage.
- 狭山市の[化け地蔵の再話](https://www.city.sayama.saitama.jp/manabu/dentou/ehon/iriso/bakejizou.html) and [文化財解説](https://www.city.sayama.saitama.jp/manabu/dentou/siteibunkazai/simomizunonojizoson.html) are two sources for one reported tradition. The re-telling explains the apparent monster as a watermelon lantern; the claim does not assert that the stone statue transformed.
- The [青森県史 text](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MN1_810110) directly shows the 三蔵 story and cites 『村の話』上 p.165. That earlier printed page was not read. The source records the 2001 prefectural edition and its database record ID.

All 20 newly registered URLs returned HTTP 200 during this checkpoint. New IDs, exact names and URLs are unique. A proposed `ひとつ目小僧` was rejected because existing `hitotsume_kozo` is displayed as `一ツ目子僧`; this caught a spelling-only duplicate before admission. An older duplicate generic URL remains on `source_0079` and `source_0087`; no new source has that URL.

## Stratified spot audit

Fifteen new records were checked against their cited passage and locator, spanning all four provider groups and the main identity risks. No major claim or locator error was found. These are record-level audits, not verification of historical supernatural events.

| Claim | Check | Result |
| --- | --- | --- |
| `claim_0365` 男滝の龍 | Numbered tale (22), bridge aid and local “滝の主” remark | Pass |
| `claim_0367` 笠捨山の白蛇 | (25) white serpent; no automatic identity with 葛ばば | Pass |
| `claim_0370` 折立の怪猫 | (41) and (46) at one waterfall; wording leaves individual continuity open | Pass; grain review |
| `claim_0372` ごうらご | (53) explicitly glosses ごうらご as かっぱ, then presents woman form | Pass |
| `claim_0375` さんばば | (63) last disclosure gives human appearance and snake lower body | Pass |
| `claim_0377` 御前若の宮 | (71) text names the shrine after お若; person’s historical existence unverified | Pass |
| `claim_0378` ソウハン渕の魚 | (73) rice cake given to monk later in fish; claim does not identify them as one | Pass; grain review |
| `claim_0379` ガマ主 | (76) woman and dead giant toad, explicitly sequential | Pass |
| `claim_0380` 柳の精 | 1987 波多 transcript names tree spirit and human transformation | Pass |
| `claim_0381` / `0382` おさん狐 | 1985 波多 and 1988 大谷 transcripts differ; two regional IDs, no cross-identity claim | Pass; identity unresolved |
| `claim_0383` 赤松の池 | 1995 今在家 transcript reports princess appearing in serpent body | Pass |
| `claim_0385` 七兵衛の骸骨 | 1979 波多 transcript names murder victim and dancing skeleton | Pass |
| `claim_0387` 彦名の八百比丘尼 | 1995 彦名 transcript ties long-lived daughter to local cave; other regions not merged | Pass |
| `claim_0391` 水野の化け地蔵 | City retelling's lantern explanation and cultural-asset nickname kept separate | Pass |
| `claim_0392` 三蔵 | Prefectural text explicitly names cat and points to earlier print source | Pass; original print unread |

## Workflow, bias, unresolved

Local LLM was not used. Local processed/usable accuracy and runtime failures: not applicable / 0. Codex reviewed all 28 new admissions against the displayed source passage before writing; 15 received a separate checkpoint spot audit. No aliases were inferred from same names, no speculative readings were added, and no images or long source text were copied.

The 45 admissions are concentrated in 福井県 15, 奈良県 15, 鳥取県 10, 埼玉県 4, 青森県 1. Fifteen 福井 records still rely on one prefectural exhibition page (different cited original manuscripts), while the 15 十津川 records rely on six municipal retelling pages. This is a clear regional and provider bias, not evidence of origin geography. The next 50 should seek more regions and more directly consulted early publications. The two おさん狐 entries, 折立の猫又, and ソウハン渕の魚 remain entity-grain review candidates. No schema or theory change was made.

## Gate

Checkpoint 0350: PASS for source-backed Level 1 indexing and validator. Formation chronology and identity continuity are not established by these entries.
