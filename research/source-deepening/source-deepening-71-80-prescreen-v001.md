# Source Deepening 100 — units 71–80 pre-screen v001

調査日: 2026-09-28 JST。基準: public main `1b91c693ca176d358217df8104aeffc069912b57`。Evidence Pack作成前の資料導線。Corpus本体は1000 entities / 744 sources / 1052 claimsで凍結。

| queue / target ID | 到達した資料 | 次の確認 | 暫定深度 |
| --- | --- | --- | --- |
| 71 `nikko_izumi_kotaro` | 現行[信州地域史料アーカイブの翻刻](https://adeac.jp/shinshu-chiiki/texthtml/d100040-mh043200/mh043200/ht032030)は今回取得不能。[同史料の現代訳](https://adeac.jp/shinshu-chiiki/texthtml/d100040-mh043200/mh043200/ht032020)は『信府統記』第17「安曇・筑摩両郡旧俗伝」を段落単位で示し、犀竜・白竜王の子「日光泉小太郎」と、後段の別説「泉小次郎」を分ける。 | 原字の翻刻・刊本と現代訳の対照、両者が同一個体か別説か。『信府統記』の刊行・編纂年。 | 原典の現代訳に到達、Level 2候補。翻刻URL問題。 |
| 72 `imari_no_yodaretare_kozo` | [佐賀県立図書館一覧No.23](https://www2.tosyo-saga.jp/kentosyo/web-mukashibanashi/title.html)は伊万里市立花町渚、話者松尾テイ（1916年生）、出典『肥前伊万里の昔話と伝説』を示す。涎たれ小僧の贈与と退去のあらすじを掲載。 | 原掲載の版・頁と語り全文、話者生年と採話日を分ける。竜宮童子話型と当該個体の違い。 | Level 1。 |
| 73 `kappa` | [国会図書館・鳥山石燕の資料リスト](https://www.ndl.go.jp/imagebank/theme/sekienyokai)は『百鬼夜行』掲載図の「河童（かっぱ）」を示し、IIIF画像へリンク。 | 原図画像の実見・版・刊年。単一図像を河童類型全体の起源や全国的な共通姿としない。 | Level 1。 |
| 74 `tengu` | 同じ[NDL資料リスト](https://www.ndl.go.jp/imagebank/theme/sekienyokai)は「天狗（てんぐ）」を挙げる。 | 原図の字形・出版情報、天狗類型の地域・時代別変異。 | Level 1。 |
| 75 `rokurokubi` | [NDL解説](https://www.ndl.go.jp/imagebank/column/sekienyokai)は石燕・豊国の女性姿と、芳年の男性見越入道の首が長く描かれる事例を分けて説明。 | 各作品の原図・年代・「ろくろ首」と「見越入道」の名称関係。後者を同じ類型に自動統合しない。 | Level 1。 |
| 76 `nurarihyon` | 現行[田辺龍2016年論文PDF](https://reitaku.repo.nii.ac.jp/record/926/files/07%E7%94%B0%E8%BE%BA%E9%BE%8D.pdf)はこの閲覧経路で取得不能。[麗澤大学リポジトリ索引](https://reitaku.repo.nii.ac.jp/records/926)は書誌を示すが今回429。 | 論文pp.71、77の本文と、論文が引用する近世版画・20世紀作品の原資料。 | Level 1保留、URL問題。 |
| 77 `yamauba` | [NDL資料リスト](https://www.ndl.go.jp/imagebank/theme/sekienyokai)に「山姥（やまうば）」がある。 | 石燕原図と地域別山姥伝承を区別し、刊年・版を確認。 | Level 1。 |
| 78 `inugami` | 同じ[NDL資料リスト](https://www.ndl.go.jp/imagebank/theme/sekienyokai)に「犬神（いぬがみ） 白児（しらちご）」と併記。 | 原図で二者がどう配置されるか、犬神信仰の別資料。白児を犬神の別名としない。 | Level 1。 |
| 79 `oni` | [NDL「百鬼夜行絵巻」](https://www.ndl.go.jp/imagebank/theme/100yagyoemaki)は異形の総称として「鬼」を用い、大半を付喪神と説明。巻末の火の解釈にも複数説。 | 該当絵巻の画像・年代・異本、鬼という広い類型との関係。 | Level 1。 |
| 80 `zashiki_warashi` | 現行[日文研カード2180289](https://sekiei.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=2180289)は取得不能。検索索引は小林文夫「座敷童子の話」『民間伝承』16(7)、1952-07-05、p.33、岩手県二戸市の足跡話を示す。 | 原論文p.33、カード本文、足跡の話と他地域の座敷童子を区別。 | Level 1保留、URL問題。 |

## 横断注意

- 71の『信府統記』本文内には日光泉小太郎と泉小次郎という別説があり、名前が似るだけで同一にしない。景行天皇時代等の物語内時代を出典刊行年としない。
- 73–79は広い類型が多い。石燕の一図、後世のNDL解説、異本、地域伝承は別層。NDL一覧だけでは類型全体の成立史を確定できない。
- 72の話者生年は採話日ではない。76の2016年は研究論文刊行日、80の1952年は原掲載日で、妖怪の発生年ではない。
- 「候補」は深度認定ではない。各Evidence Packで本文・画像・locatorの到達を再点検する。
