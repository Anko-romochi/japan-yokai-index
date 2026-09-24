# Batch F screening stop — creation and independent transmission

Date: 2026-09-24. Fixed public base: `722ba26feab9ae8b5e9ca47614faa9d94dba0bc6` (80 entities / 87 sources / 118 claims). No Batch F entity, source, or claim was added. Schema, methodology, and theory remain unchanged.

## Question and admission gate

The intended Batch F asks when a figure traceable to an authored work becomes independent of that work. For each candidate, Sol sought to separate **(1) earliest checked work**, **(2) authorial invention versus use of an earlier tradition**, **(3) appearance in another work**, and **(4) circulation as a tradition beyond work citation**. A first known image is not proof of invention, and repeated publications are not by themselves proof of oral/folk transmission. The Local worker was not invoked for this screening because no ten-candidate source set met this admission gate; Local is restricted to NER and locators and cannot resolve the missing relations.

## Source checks

| Candidate group | Checked source | What is supported | Gap preventing ten-row admission |
| --- | --- | --- | --- |
| 豆腐小僧 | [NDL exhibit, 「妖怪『豆腐小僧』」](https://www.ndl.go.jp/kaleido/entry/21/2.html); [Edo-Tokyo Museum collection notice via NDL reference service](https://crd.ndl.go.jp/reference/entry/index.php?id=3000003280&page=col_view) | NDL names a 1779 yellow-cover book as the earliest known printed appearance and points to several later books. The museum describes further appearances in cards and games. | The specific route from popular publications to independently reported folklore remains unverified. NDL also flags an uncertain creation mechanism and a name variant `大あたまこぞう` that must not be accepted as a simple alias without work-level checking. |
| 骨傘・琵琶牧々・瀬戸大将・鳴釜 | [Kawasaki City Museum catalog search result](https://archive.keiyou.jp/kawasaki_test/Archive/List?archiveId=kawasaki_comic&doi=0447544%2F01800000HA); [NDL book catalog](https://ndlsearch.ndl.go.jp/books/R100000136-I1970586434814282113) | These names are catalogued in a book attributed to Toriyama Sekien; the NDL record distinguishes its original issue and later impression. | The museum catalog was not directly retrievable in this environment, and this evidence does not establish that Sekien invented each figure or that any circulated outside later work references. One book is not four independent origin chains. |
| 呼子・すねこすり・子泣き爺・砂かけ婆・一反木綿・塗り壁 | [Agency for Cultural Affairs Media Arts article, 「妖怪とデザイン前編」](https://mediag.bunka.go.jp/article/article-16510/) | The article explicitly describes Mizuki's reuse and redesign of earlier names/forms; 呼子 incorporates an existing 山彦 term and a craft doll's form. | This is largely **tradition/name → authored persona**, the reverse of Batch F's required arrow. Treating these as author-invented entities would erase the antecedents. |
| Other Sekien figures | [NDL Image Bank, 「鳥山石燕の妖怪図鑑でみる妖怪の世界」](https://www.ndl.go.jp/imagebank/column/sekienyokai) | The NDL displays the series and notes how Sekien's figures drew on earlier pictures and were depicted by later artists. | A general cross-work account cannot attribute an origin or independent transmission to ten individual figures. |
| Creative-monster scholarship | [NDL catalog of Kabat's *江戸化物の研究*](https://ndlsearch.ndl.go.jp/books/R100000002-I027957275); [University of Tokyo thesis abstract](https://repository.dl.itc.u-tokyo.ac.jp/record/52191/files/B18361_abstract.pdf) | The scholarship directly addresses invented beings in illustrated popular books, and may supply work-by-work distinctions. | The full case-level argument was not inspected here; the thesis endpoint was unavailable through the research browser. A title or abstract cannot support ten entity-level claims. |

The search surfaced one strong **literary recurrence** case (豆腐小僧) and several useful reverse-direction or work-only controls. It did not yield ten individually source-linked examples with a defensible origin/formation distinction. Registering ten now would recreate the Batch E failure mode of turning a catalog name, work title, or same-name match into a lineage claim. The stop is the v0.5 rule: **insufficient source quality for ten entries**. The problem is research evidence, not a need to widen the Local extraction contract or Corpus schema.

## Gate and next step

- Batch E narrow workflow: `SOL_LOCAL_WORKFLOW_PASS`, fully supervised; [details](batch-05-retry.md).
- Batch F admission: `STOP — fewer than 10 defensible candidates`.
- Validator at stop: `PASS: 80 entities, 87 sources, 118 claims`.
- Local Batch F processed/reviewed/corrected: **0 / 0 / 0**; no error rate is defined for zero attempts.
- No Batch G work starts while Batch F is stopped under the prior batch-between stop rule.

**One next step:** inspect the 1779 豆腐小僧 work and independently dated later attestations at their exact pages, then use that documented three-stage chain as the admission template to screen nine additional Batch F candidates.
