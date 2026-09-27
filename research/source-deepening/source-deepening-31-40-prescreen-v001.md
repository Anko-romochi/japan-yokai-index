# Source Deepening 100 — units 31–40 pre-screen v001

調査日: 2026-09-28 JST。基準: public main `fdeec8f813b70ff5aa11933f6eb2375ff08a7dc7`。本稿はEvidence Pack完成前の導線確認で、31–40の深度認定やqueue完了を意味しない。Corpus本体は1000 entities / 744 sources / 1052 claimsで凍結。

| queue / target ID | 現行sourceと到達した資料 | 次の確認 | 暫定深度 |
| --- | --- | --- | --- |
| 31 `techinbo_misasa` | [出雲かんべの里「化け物問答」](https://kanbenosato.com/minwa/294/)は別所菊子（鳥取県東伯郡三朝町吉尾、1902年生）から1988年8月に聞いたと明記し、テッチン坊が椿の杵と判明する語りの本文を掲載。 | 録音・最初の文字化の刊行日、他の四人との名前・正体の関係。語り手所在地と山寺所在地を分離。 | 本文直接確認。Level 2候補。 |
| 32 `otaki_karakasa_matsu` | [千葉県「からかさ松の怪」](https://www.pref.chiba.lg.jp/kkbunka/b-shigen/08minwa/ootaki09.html)は全文と「斉藤弥四郎『ふるさと民話さんぽ』、『広報おおたき』No.413」の出典を掲載。 | No.413の発行日・紙面・本文一致、松を「山の神様」とした範囲、戦時の伐採という後日談。県ページ更新2024-02-19を伝承初出としない。 | 原掲載号の書誌は到達、紙面未読。Level 1で保留。 |
| 33 `hokumen_tenmangu_no_kappa_mokuzo` | [佐賀お宝帳・登録ID430](https://www.saga-otakara.jp/search/detail.html?cultureId=430)は木像が子を救った話を「日新校区史跡ガイドマップ」由来と明記。 | ガイドマップの版・頁・本文、現物の年代。ページの「中世」は神社項目の年代であり河童木像の制作年ではない。鳥居の1658年銘も別の物体。 | Level 1。 |
| 34 `nurikabe` | [日文研2180774](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2180774)は柳田國男「妖怪名彙（四）」『民間伝承』4(1)、1938-09-20、p.12と、引用文献『続方言集』を示す。 | 原論文p.12と『続方言集』の該当箇所。夜道の壁という現象と後の図像的な個体を分ける。 | Level 1。 |
| 35 `betobeto_san` | [日文研2180750](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2180750)は柳田「妖怪名彙（三）」『民間伝承』3(12)、1938-08-20、p.12と引用文献『民俗学』2(5)を示す。 | 両原文の相互関係と足音・呼びかけの原表記。音の現象と人格化の境界。 | Level 1。 |
| 36 `kamaitachi` | [日文研1240021](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1240021)は関根邦之助「秩父地方の医療に関する迷信と風習（続）」『秩父民俗』9号、1974-03-15、pp.12–16、該当p.14。 | 原論文と採話時期。皮膚の傷という現象とイタチ形の妖魔の説明を分離。 | Level 1。 |
| 37 `yamabiko` | [日文研0640051](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0640051)は清水兵三「出雲より」『郷土研究』2(4)、1914-06-01、pp.47–49、該当p.48。 | 原文で「山彦，声」の呼称と山の神の使いの関係を確認。音響現象を単一の個体へ固定しない。 | Level 1。 |
| 38 `tenbi` | [日文研2180832](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2180832)は柳田「妖怪名彙（五）」『民間伝承』4(2)、1938-11-01、p.16、引用『南関方言集』。 | 引用元の原語・地域と、屋根に落ちる怪火の独立採録。 | Level 1。 |
| 39 `ryubi` | [日文研0540009](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=0540009)は小倉学「北陸の龍燈伝説」『加能民俗研究』17号、1989-01-31、pp.1–27、該当pp.2–5。カード読みは「リュウビ」。 | 本文中の龍燈様・龍燈石・トメッサマと海上の光の関係、複数地域の独立性。 | Level 1。 |
| 40 `gongorobi` | 現行[日文研2180958](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2180958)は柳田「妖怪名彙（六）」『民間伝承』1939-03-01を指す。今回ウェブ取得はcache missでカード本文を再確認できなかった。 | カード再取得、原論文の巻号・頁・先行引用、権五郎という人物と火の同一性。 | Level 1維持、URL再確認待ち。 |

## 横断注意

- 31は現段階で採話本文まで確認できるが、最初の刊行年や採録の原音声は未確認。次のPackでLevel 2判定を正式化する。
- 32の県ウェブ再掲と『広報おおたき』No.413は独立した2資料ではない。34–35と38–40の日文研カードも引用元・原論文・DB要約を別々の独立採録として数えない。
- 地域は各資料の語り手所在地、話の舞台、採録地域、祭祀物所在地を分離。年代は採話・刊行・物語内事件・物体銘を混同しない。
- 31–40のEvidence Pack、source URL再照合、原本文到達確認は次の作業。Corpus修正なし。
