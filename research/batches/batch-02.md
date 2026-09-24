# Batch 02 — 土地信仰と文学的人格

実施日: 2026-09-24

固定基準: public main `33f12be35ae2aa89769e20c5bfcbc84d7b46f550`

範囲: 新規10 entities。既存40件、schema、methodology、theory、validator は変更しない。

## 問いと採録方法

土地・山川・城郭・寺社との関係（origin）と、固有名・姿・役割が物語や芸能で表されたこと（persona formation）を別々に確認した。同名、同じ場所、現在の知名度だけから系譜を作らない。表の「未確認」は反証ではなく、今回読めた資料で直接の連続性を証明できないという意味である。`source_fact` は機関が何を説明・所蔵・記録しているかの事実であり、縁起・伝説中の出来事の史実性を保証しない。

公開機関・寺社・専門機関の資料本文、目録、抄録を Sol が個別に確認した。Local LLM（LM Studio `google/gemma-4-12b`）には取得済みの短い資料メモから候補を抽出させたが、採録判断と出典位置の照合は Sol が行った。今回読めた一次資料の原本・全文は限られ、最古の確認記録と成立時期を同一視しない。`attested_periods` / `attested_regions` は前 batch と同じく空配列のままとし、資料年代や舞台を発祥属性として転記しない。

## 追加10件の照合

| entity | 土地・信仰側の確認 | 名前・物語側の確認 | 判定と未解決 |
| --- | --- | --- | --- |
| `kuzunoha` 葛の葉（白狐） | [和泉市の館案内](https://www.city.osaka-izumi.lg.jp/kakukano/syougaibu/bunkaisan/bunkazai_facilities/shinodanomori_furusatokan/furusatokan.html) 第1段落は信太の森の鏡池を聖神社の手洗池・儀礼の場、かつ伝説に関わる場所として紹介する。 | [日本芸術文化振興会](https://www2.ntj.jac.go.jp/dglib/contents/learn/edc26/rekishi/rekishi3.html)「『芦屋道満大内鑑』」は1734年の文楽に人間の葛の葉姫に化けた白狐を置く。 | 池の儀礼と白狐の人格の直接の継承は未確認。人間の葛の葉姫を狐の alias にしない。 |
| `kijo_momiji` 鬼女紅葉 | [鬼無里ふるさと資料館](https://www.city.nagano.nagano.jp/museum/Kinasa/exhibition/01momiji.html)「鬼女紅葉伝説」は当地に追放された紅葉が鬼女と呼ばれる話を載せる。 | [長野県博物館協議会](https://www.nagano-museum.com/info/detail.php?fno=33)は伝説が能『紅葉狩』等の題材になったと説明する。 | [国立劇場の歌舞伎解説](https://www2.ntj.jac.go.jp/unesco/kabuki/jp/play/play22.html)の舞台人物は更科姫。当地の紅葉と舞台上の更科姫の個体同一性・順序は今回の資料で確定できず、alias にしない。 |
| `inugami_gyobu` 隠神刑部 | [愛媛県の山口霊神社案内](https://www.iyokannet.jp/spot/4193)は隣接する石像と808匹の狸の封印伝説を紹介する。 | [松山観光コンベンション協会](https://www.mcvb.jp/kankou/tanuki.html)「伊予八百八狸」は『松山騒動八百八狸物語』内の城の古狸の役を述べる。 | 県の封印譚と協会が紹介する物語は細部が異なる。祀られる対象が文学上の人物から直接生じたとは断定しない。`伊予八百八狸` は集団・作品名であり alias にしない。 |
| `hakuzosu_tsuri_gitsune` 白蔵主（釣狐の狐） | [一宮市博物館の作品目録](https://www2.icm-jp.com/list/index.cgi?cat=2&keyword=%EF%BF%BDH%EF%BF%BD%7C&mode=view&no=14865&st=55)「解説」は堺の住僧とその狐の伝承を紹介する。 | [放送ライブラリー](https://www.bpcj.or.jp/program/detail/005736/)番組005736「概要」と[京都芸術大学](https://www.kyoto-art.ac.jp/events/171)の公演案内は、狂言『釣狐』では古狐が白蔵主に化けると説明する。 | 索引対象は「白蔵主に化ける狐」に限定。僧本人と狐は別の登場人物なので、博物館目録の僧の話を狐の claim に混ぜない。僧の伝承が狂言の狐にどう接続したかは未確認。 |
| `sakanoue_no_tamuramaro` 坂上田村麻呂 | [甲賀市](https://www.city.koka.lg.jp/4772.htm)は鈴鹿峠の田村社と江戸の『東海道名所図会』に見える鬼神退治を紹介する。 | [田村市](https://www.city.tamura.lg.jp/soshiki/30/bunkazai_tamuramaro3.html)は大多鬼丸との当地の伝説を紹介し、本人が当地へ来た文献はないと明記する。 | 実在人物への崇敬と後世の英雄譚は分ける。鈴鹿峠と田村市の話を同じ事件としない。 |
| `otakimaru` 大多鬼丸 | [田村市2013年の紹介](https://www.city.tamura.lg.jp/soshiki/18/kanko-tamuramarodensetu-kari.html)は大滝根山・達谷窟と結び付ける。 | 同紹介は賊・鬼の首領と地元を守る指導者の対立する人物像を並べる。[田村市2024年の解説](https://www.city.tamura.lg.jp/soshiki/30/bunkazai_tamuramaro3.html)は伝説上の人物としてしか知られていないとする。 | 史実の地方豪族と認定しない。当地の「大竹丸」表記を登録したが、鈴鹿系の大嶽丸との同一性は未確認。 |
| `atago_tarobo` 太郎坊（愛宕山） | [京都市の愛宕信仰コラム](https://kyoto-bunkaisan.city.kyoto.lg.jp/kyotoisan/nintei-theme/hinoshinkou.html)は愛宕山の修験・神仏習合と愛宕権現太郎坊を関連付ける。 | [日文研DB 1140355](https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1140355)は1972年刊論文 p.9 の太郎坊天狗をめぐる呪詛譚を要約する。 | 原論文 p.9 は未照合。愛宕山の古い無名の天狗から固有名「太郎坊」への最初の移行は未確認。 |
| `akagamiyama_tarobo` 太郎坊（赤神山） | [滋賀県教育委員会2019年資料](https://www.pref.shiga.lg.jp/file/attachment/5148235.pdf) PDF p.5「特徴・評価」は赤神山の磐境信仰と阿賀神社の守護天狗を記す。 | [阿賀神社の由緒](https://tarobo.or.jp/about)「太郎坊天狗」は最澄を助けたという語りと太郎坊宮の名称を紹介する。 | 京都・愛宕山の太郎坊とは地名を付けて別索引にした。同名の伝承間の直接の同一性は未確認。神社の創建伝承を現存最古の記録としない。 |
| `namahage` ナマハゲ | [男鹿市の説明](https://www.namahage-oga.akita.jp/english/)「The Namahage」は家を訪れる来訪神としての行事を記す。 | 同ページ「Legends」「Record」は複数の起源説と1811年の菅江真澄の記録を紹介する。 | 固定された一個体の文学的人格を必要としない比較対照。1811年は市が挙げる記録年であり、起源年ではない。個体・行事・来訪神という粒度差を保持する。 |
| `hakone_kuzuryu_okami` 九頭龍大神（芦ノ湖） | [箱根神社の由緒](https://hakonejinja.or.jp/hakone/)「本宮と新宮」は芦ノ湖畔と箱根神社境内での祭祀を説明する。 | 同ページ「由緒」は1191年成立とされる『筥根山縁起并序』の九頭の毒龍と万巻上人の話を引用する。 | 縁起原本・異本は未照合。毒龍譚と現在の神格を神社は結び付けるが、他地域の九頭龍との同一性は扱わない。 |

## 二軸モデルへの含意

葛の葉と鬼女紅葉では、場所の伝説と舞台の役名を直線で結べない。隠神刑部は城の古狸の物語と社の封印譚が併存する。白蔵主は同じ呼称でも「僧本人」と「僧に化ける狐」という別の役がある。太郎坊は同名で二つの山に現れるが、同一存在とは確認できない。ナマハゲは単一の人格形成を前提にしない対照例になる。このため、今回の資料だけで「土地神が文学的人格へ発展した」とした事例はない。二軸を分けた記録は有用だが、継承関係には別の根拠が要る。

## Local LLM の監査結果

最初の5件の候補抽出では、Local LLM が狐の異名に人間の「葛の葉姫」を入れ、鬼女紅葉の異名に舞台人物「更科姫」を入れ、個体の隠神刑部に集団名「伊予八百八狸」を付けた。白蔵主の僧と狐を分けず、`claim_layer_candidate` に schema 外の `folklore` / `theater` を使った。後半5件では芦ノ湖の縁起に出る「万巻」を「満願」と誤記し、箱根と他地域の九頭龍を根拠なしに「別個体」と断定した。これらは全て Sol が棄却・修正した。Local LLM の出力は candidate queue に限り、claim や alias の正本にしない。

## 未解決と次の調査

- 多くの claim は公的・専門機関の解説文に関するもので、古い原典を直接読んだわけではない。葛の葉の『信田妻』、鬼女紅葉と『紅葉狩』、愛宕山太郎坊の早い固有名、箱根の『筥根山縁起并序』異本は原資料照合を優先する。
- 白蔵主の僧と狐、愛宕山と赤神山の同名太郎坊、田村市の大多鬼丸と他地域の大嶽丸は、同一性を立証する資料が揃うまで統合しない。
- 男鹿の来訪神を単一 entity として持つことは便宜的な粒度である。将来、儀礼・仮面・来訪神のレベルを区別する必要があるか横断レビューで確認する。
- 滋賀県PDFの建築年代は社殿の年代で、太郎坊という名の初出ではない。1972年は日文研DBが抄録する論文の刊行年で、愛宕伝承の成立年ではない。

## 検証

`python scripts/validate_corpus.py` → `PASS: 50 entities, 49 sources, 73 claims`。新規 claim は `claim_0053`–`claim_0073`、新規 source は `source_0033`–`source_0049`。各新規 entity に出典付き claim があり、全 `source_fact` に `evidence_locations` を付けた。
