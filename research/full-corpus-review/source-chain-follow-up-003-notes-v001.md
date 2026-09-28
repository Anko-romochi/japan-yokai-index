# Source chain follow-up 003 — `claim_0692` / `source_0487` publication date

Checked 2026-09-28 against public `main` `40bcf488af847176142eb91d8891df7a47e8f3cc`. Research-only bibliographic follow-up to batch 088; no corpus edit.

## Directly read card and existing claim limit

The registered [Nichibun card C1040210-000](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=C1040210-000) was read at its bibliography and summary fields. It identifies 井田安雄「第二編　三　二　群馬の伝説：（三）群馬の伝説の代表例」 in 『群馬県史 資料編27 民俗3』, pp.770–848, with the relevant excerpt on p.796. The summary says a serpent at みどろが池 names itself 那波八郎 and explains it became a serpent through resentment toward his brothers. This supports `claim_0692` only as a statement about the DB card's summary. The printed p.796 remains unread; the claim stays indexed-only/open for original-publication depth.

## Publication-date discrepancy

The same card gives both 「発行年月日 S55年3月31日」 and 「発行年（西暦）1982年」. S55 is 1980, so these two fields conflict internally. Three institutional catalog descriptions identify this edition as 1980:

- The [Gunma Prefectural Archives volume list](https://www.pref.gunma.jp/site/monjyokan/130233.html), maintained by the publisher prefecture, lists volume 27 「民俗3（年中行事・口頭伝承）」 as S55.3 and describes its scope.
- The [Osaka Prefectural Library holdings list](https://www.library.pref.osaka.jp/site/central/lib-lhist-lhist10.html) lists 「群馬県史 資料編27 民俗3」, publisher 群馬県, year 1980. It separately dates the index to volumes 25–27 as 1984.
- The [Showakan Digital Archive holding](https://search.showakan.go.jp/search/book/detail.php?material_cord=000011190) gives publisher 群馬県, date 1980-03, 1,185 pages, and the matching subtitle.

These all describe the same prefectural-history volume; the three catalog records are bibliographic corroboration, not three independent sources for the story. The issue is localized to the card's Western-year field and the corpus's `source_0487.date`, currently `1982-03-31`. A correction candidate is `1980-03-31`, preserving the card's exact month/day while converting its Japanese-era date. Verify against the volume title/colophon page before any human-reviewed corpus edit. Do not treat the book's publication date as the legend's event or origin date.

## Access and next evidence step

The Nichibun card's 「この文献を探してみる」 link points to an NDL Search query but did not return a readable catalog record in this check. The Showakan record is a physical holding, not a digital copy. Gunma Prefectural Archives describes volume 27 as oral-tradition material but does not expose p.796. Consult the printed volume or an accessible scan to inspect title/colophon and p.796; until then, neither the claim text nor the original locator has been checked against the book.

**Status:** Bibliographic correction candidate strengthened; `claim_0692` remains open and no result tally changes. No entity, source, claim, schema, validator, or theory file was modified.
