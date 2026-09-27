# Source Deepening 100 — units 51–60 pre-screen v001

調査日: 2026-09-28 JST。基準: public main `260e84fa45018423887a604a74093aaec48c2daa`。Evidence Pack完成前の資料導線。Corpus本体は1000 entities / 744 sources / 1052 claimsで凍結。

| queue / target ID | 到達した資料 | 次の確認 | 暫定深度 |
| --- | --- | --- | --- |
| 51 `shiuri_no_kanko` | [青森県史資料編近現代7・資料253](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Moda7-05-01-0-253)は「郷土鼎談 八戸を語る」pp.690–695を全文テキスト化。宮川は入水した女性カン子の火玉を語り、菊池は女狐説を述べる。 | 鼎談の初出紙誌・発行日。宮川と菊池の解釈差を保存。 | 本文直接、Level 2候補。 |
| 52 `nyubuta_toka` | [東北文教大学の安部忠内稿第74話](https://www.t-bunkyo.ac.jp/library/minwa/archives/tsuyufujinodensetsu/text/74.html)は本文全文。高橋又右ヱ門家の雌狐「トカ」と、夢に出る女性の姿を記す。 | 稿の成立・刊行、トカと別名「たから」の関係、末尾の棺事件の主体。 | 本文直接、Level 2候補。 |
| 53 `oshiroike_no_jizo` | 現行[大府市のPDF](https://www.city.obu.aichi.jp/_res/projects/default_project/_page_/001/007/193/19_oshiroikenojizousan.pdf)はこの閲覧経路で取得不能。Corpusは『おおぶの民話』1993-03-25、PDF pp.1–3を記録。 | PDF本体、刊本頁、像と池の地名の関係。 | Level 1保留、URL問題。 |
| 54 `oji_ike_no_oji` | 現行[新潟市高橋郁丸報告](https://www.city.niigata.lg.jp/kurashi/kankyo/kataken/kataken_kankoubutsu.files/05_fumimaru_takahashi.pdf)は取得不能。Corpus locatorは印刷p.89/PDF 5頁。 | PDF有効経路、引用元、青年オジと大蛇・池の主の同一性。 | Level 1保留、URL問題。 |
| 55 `hakusangame_niigata` | 現行[高橋郁丸報告２](https://www.city.niigata.lg.jp/kurashi/kankyo/kataken/kataken_kankoubutsu.files/H29takahashi06.pdf)は取得不能。現行claimは『にいがた夜話』の要約。 | 報告PDFと『にいがた夜話』原本。白山亀と鳥屋野亀を分ける。 | Level 1保留、URL問題。 |
| 56 `kishin_dayu_tsugaru` | [2007年ねぶた作品解説](https://www.nebuta.jp/archive/nebuta/2007ryouyuukai.html)は鬼神太夫が龍の姿で刀を鍛える筋を全文掲載。[青森県史民俗編資料津軽](https://kenshi-archives.pref.aomori.lg.jp/il/meta_pub/G0000004txt_Fork_MT1_820210)2014年pp.410–411は「鬼神太夫と刀鍛冶」を地名伝説として言及。 | 2007年解説の元となった民話、2014県史の引用元。二つを独立採録と数えない。 | Level 1、後世再利用は直接確認。 |
| 57 `otenpakusama` | [下田市「オテンパクサ」全文](https://www.city.shimoda.shizuoka.jp/category/050201densetsu/111229.html)は『下田市の民話と伝説 第2集』に帰属。祠の通称「オテンパクサマ」、名無しの武士、木の禁伐を別々に記す。 | 原刊の発行日・頁・異同。人名ではなく祀られる場所/霊の呼称。 | 原掲載相当の再掲本文、Level 2候補。 |
| 58 `saizaburo_gitsune_takeda` | [茨城県民話Web「武田池の狐」原文](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100207?f=1)は染谷萬千子『ふるさとの昔ばなし』2000-10-31、p.207の全文と書誌。狐の鮭売りと青年才三郎の名を取った別説を併記。 | 掲載頁画像・採話情報。二説を一つの確定形成史としない。 | 本文直接、Level 2候補。 |
| 59 `shizu_gentaro_gitsune` | [茨城県民話Web「静神社の四匹の狐」原文](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1)は同書2000-10-31、p.12の全文。源太郎は四兄弟の長兄で川を守り、瓜連城に祀られる。 | 原頁画像、四兄弟の区別、静神社の史実との関係。 | 本文直接、Level 2候補。 |
| 60 `shizu_jinjiro_gitsune` | 同じ[茨城県民話Web原文](https://www.bunkajoho.pref.ibaraki.jp/minwa/minwa/no-0800100012?f=1)で甚二郎は野を守り、米崎城に祀られる。59と同一話の別個体。 | 原頁画像、59との独立資料誤算を避ける。 | 本文直接、Level 2候補。 |

## 横断注意

- 51の県史刊行2016年は鼎談の初出ではない。52の「今から百年ばかり前」は稿の記述時点が確定するまで暦年に換算しない。57の2023年はウェブ更新日。
- 56の2007年ねぶたは後世の再利用。2014年県史の短い言及を別の完全な民話本文と扱わない。
- 59–60は同一の原掲載p.12にいる別の狐で、2資料と計数しない。61以降に兄弟が続く可能性があり、自動統合しない。
- 本文到達を示す「Level 2候補」は各Evidence Packで評価する。Corpus修正なし。
