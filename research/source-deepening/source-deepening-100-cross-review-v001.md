# Source Deepening 100 — 横断レビュー v001

調査日: 2026-09-28 JST。対象は[100 research-unit queue](source-deepening-100-candidate-queue.csv)の全100行。SD-1の10 unitは金長・六右衛門の2 entity、宗像6 entityを含むため、100 unitは106個の既存entity IDを指す。Corpus本体は1000 entities / 744 sources / 1052 claimsで凍結。どのPackも研究上の判定であり、schema上のsource depthではない。

## 到達点

| 判定 | unit数 | 説明 |
| --- | ---: | --- |
| Evidence Pack v001完成 | 100 | SD-1の10件と11–100の90件。全件に現行ID・claim・source・別名・地域・時代、Layer A–D、locator、名称・読み・粒度・矛盾・未解決点・提案を記載。 |
| Level 1 | 73 | カード・目録・一覧・後世説明まで、または直接資料の再確認ができないもの。 |
| Level 2 | 26 | 原掲載本文・直接転記・原画像・原史料の段落引用等、個別Packに限定条件を明記して到達。 |
| Level 2+ | 1 | SD-1の豆腐小僧。異なる黄表紙の原画像2点を確認。独立した民俗伝承2本という意味ではない。 |
| Level 2以上 | 27 | Level 2とLevel 2+の合計。 |
| Formation Trace Candidate | 10 | SD-1の3件、11–20の4件、21–30の2件、41–50の1件。成立史は確定していない。 |
| Level 3 | 0 | 今回は認定しない。 |

集計は[SD-1横断レビュー](source-deepening-10-cross-review-v001.md)および[11–20](source-deepening-11-20-progress-v001.md)、[21–30](source-deepening-21-30-progress-v001.md)、[31–40](source-deepening-31-40-progress-v001.md)、[41–50](source-deepening-41-50-progress-v001.md)、[51–60](source-deepening-51-60-progress-v001.md)、[61–70](source-deepening-61-70-progress-v001.md)、[71–80](source-deepening-71-80-progress-v001.md)、[81–90](source-deepening-81-90-progress-v001.md)、[91–100](source-deepening-91-100-progress-v001.md)の各判定を足した。11–100の90件だけではLevel 1が66、Level 2が24、Level 2+が0。SD-1はLevel 1が7、Level 2が2、Level 2+が1。

## 方法の検証

索引カード・目録から原掲載の著者、誌名、巻号、頁を固定し、本文・図像・直接資料へ進むゲートは実動した。100件のうち27件をLevel 2以上へ進め、残り73件を根拠なく昇格させなかったことが品質上の結果である。特に、本文があってもそれが転載なら初採録とは言えず（竹の子童子）、同じ話の再掲は独立資料にならず（浮島沼）、『平家物語』の一語を後世の固定名へ遡及できない（鵺）と区別できた。

## 矛盾・修正候補・保留

| 軸 | 主な例 | Corpus action candidate |
| --- | --- | --- |
| entity grain | 宗像の一覧6件、子取婆・油取りの脅し文句と人物、火車の車・死体奪取、鵺の鳥と合成獣、産女の説話、小豆洗いの音、浮島沼の声、キジムナーの圧迫経験、松江城の無名の女 | 類型・個体・現象・説話・場所・文学像を別記。type、split、claim修正は人間レビュー後。 |
| name / reading | 金長のきんちょう／カネナガ、花子さんの学校別同名、日光泉小太郎／泉小次郎、鵺の「声が似る」／「鵺といふ化鳥」、ネッカシマの地名、天狗の間という部屋名 | 原表記、原資料の読み、索引名、現在名を分離。kana・aliasを推測で変更しない。 |
| same-name / merge禁止 | 愛宕山太郎坊と赤神山太郎坊、おさん狐の鳥取／山形、源太郎・甚二郎・四郎介の兄弟と別個体、見越入道とろくろ首、犬神と白児、沖縄キジムナーと奄美ケンムン | 同名・近似名だけのmergeを禁止。独立原資料と identity を確認する。 |
| chronology | 金長の天保、菅江真澄の1811訪問と現代儀礼、1929年等の日文研原掲載刊年、1983年『豊芥子日記』再刊、1941年『西讃岐昔話集』の転載可能性、寛永16年（1639）の松江城の話中時代 | 物語内時代、採録日、刊行日、再刊日、後世再利用日を別欄で保持。発生年を作らない。 |
| region | 宗像の一覧地域、日文研の旧国・旧郡、送り狼の兵庫／岐阜、男鹿宮沢、浮島沼、大滝山・安原、ネッカシマ／猫ヶ島 | 出典の地名と行政現行名・舞台・話者居住地を分け、発祥地や全国分布へ広げない。 |
| source URL / locator | SD-1の類似検索URLと抄録URL、ぬらりひょん論文PDF、複数の日文研カードcache miss、小豆洗いの旧カードURL、大府PDF、富士市1997年ページ | 安定した個別URLと印刷頁・PDF頁を再確認するsource correction候補。取得不能を読了としない。 |
| claim / source追加 | 花子さんの学校別原論文、金長写本・後藤1922、火車引用古典、竹の子童子の転載元、浮島沼1984年号、『雲陽秘事記』原本 | 別フェーズで原資料に到達してからclaim・sourceを提案。現行データへの即時反映なし。 |

## Source independence と形成史

Level 2+の豆腐小僧も「異なる黄表紙に同名図像がある」以上の系譜は未確定。形成候補10件では時点をまたぐ比較の導線はあるが、転記・再版・再話・後世の解説と独立した目撃や採話を同一視しない。Level 3のためには原資料どうしの同一entity判定、属性の変化、引用・再利用経路、資料年代の確定が必要。

## 次段階への判断

研究モデルは100件へ適用できた。今後はLevel 1の73件のうち、原掲載頁が固定済みでアクセス可能なものから直接資料を探す。修正候補は人間レビューへ提出し、Corpus本体・schema・validatorの変更は別フェーズで扱う。今回の100件で研究を止め、1001件目のentityは作らない。

最終検証: `python scripts/validate_corpus.py` は `PASS: 1000 entities, 744 sources, 1052 claims`。今回の差分は `research/source-deepening/` のみ。公開mainのSHA一致は公開時に確認する。
