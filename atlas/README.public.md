# JYI 研究アトラス — レビュー用候補

公開正本 `Anko-romochi/japan-yokai-index` のcommit `bf35b90509547fc1b2c550f47349d3f288cbf8e1` を基準とした **1000対象／744 source records／1052主張**の研究readerです。他の未公開入力版は収録していません。10対象の入口は独立原典研究10件の完了認定ではありません。

## 動作環境と起動

Python 3.10以降とJavaScript ES modules / Fetch / Blob / Web Crypto対応ブラウザ。追加パッケージ不要でアプリを起動できます。今回の実測はLinux、Python 3.12.14、Chromium。Windows・macOSの実機確認は未実施。

このsource treeで、順に実行してください。`.git`は不要です。

```sh
python atlas/build.py
python scripts/validate_corpus.py
python -m http.server 8875 --bind 127.0.0.1
```

http://127.0.0.1:8875/atlas/ を開きます。file://起動は非対応。停止はCtrl+C。検索と書出しはローカルで完結し、典拠リンクを開く時だけ外部へ接続します。

`atlas/build-inputs.json`が入力ファイルのbytesとSHA256を固定します。同梱JSONLと研究記録だけから同じsnapshotを再生成し、入力の部分改変は拒否します。Git履歴や外部APIに依存しません。

利用手順は [USER_GUIDE](atlas/USER_GUIDE.md)。名前・読み・地域・出典・記述のAND検索→資料別の記述・locator比較→利用条件→持出すclaimの選択→ZIP保存と進みます。ZIPだけからsource_urlとevidence_locationsを対応させて典拠へ戻れます。選択対象外claim IDも残し、画像は含みません。

## 検証と再配布候補の生成

Nodeの単体テストは追加パッケージ不要です。

```sh
node --test atlas/tests/*.test.mjs
python atlas/package_release.py NEW_CANDIDATE_DIRECTORY
```

新しい配布フォルダはcode/data/third-party-payloadを分離し、独自のREADMEと起動・再build手順を持ちます。既存フォルダへ上書きしません。

Browser QAは導入済みPlaywrightとChromiumがある環境でのみ実行します。この候補は未導入ソフトを自動導入しません。上記サーバーを起動したまま、別端末で実行します。

```sh
node atlas/tests/browser.cjs
node atlas/tests/browser-edge.cjs
node atlas/tests/browser-user-journey.cjs
node atlas/tests/browser-semantics.cjs
python atlas/tests/verify_exports.py
```

ブラウザ用テストは今回のLinux `/usr/bin/chromium`を使用します。他環境のQAには実体確認と別の実機検証が必要です。製品の利用自体はPlaywrightを必要としません。

## 研究上の意味と限界

source_factは「資料がそう記述する」層であり史実認定ではありません。reviewedは元DBの照合状態です。登録された直近資料の照合と、その背後の原掲載の実読は別軸です。既存研究票v013の21件を現行openと一律扱いせず、現HEADまでの履歴と照合した個別注釈を表示/exportします。0335の主要文言は修正済み、7件は文言再確認候補、0458は同一性未判定、12件は原掲載・導線の課題として区別します。現在状態を照合していない記録はunknownにできます。

source recordsは登録ID数、資料ページ数はURLを正規化した数です。同じページの重複登録は独立資料になりません。別URLのページ同士も独立性未判定です。summaryは既存JYI短文で、原文引用・翻刻ではありません。時期・地域を発祥へ読み替えません。

ブラウザではロードした各JSON payloadと宣言digestを実際に照合し、一致しなければ拒否します。これは発行者の真正性を認証する電子署名ではありません。元JSONLのbytes/hashはbuild時の記録であり、ブラウザが元JSONLを再取得したという意味ではありません。検証APIを通していないcard呼出しにはunverifiedを残します。

## 内容と権利

既存LICENSEの範囲を維持します。独自メタデータ等は既存CC0、既存validatorはMIT。新しいJYI Atlas道具のコードは本人承認済みMITです。著作権表示とlicense文を保持してください。対象は [LICENSE-SCOPE](atlas/LICENSE-SCOPE.json)、実際の許諾文は [Atlas LICENSE](atlas/LICENSE)。[採用記録](atlas/LICENSE-DECISION.md) と [権利の区分](atlas/THIRD-PARTY-NOTICES.txt) も参照してください。権利gateは解消済みですが、完成内容と配布対象の最終レビューは別gateであり、公開操作は本作業では行いません。

外部の本文・画像・データベースの権利は含みません。rights_noteは再配布許諾の認定ではありません。外部画像や原資料全文のpayloadは0件で、図版は書出しから常に除外します。公開allowlistで内部運用記録・私的参照・秘密を除外します。公開、共有設定変更、SNS投稿の機能は含みません。

## 更新

元JSONLや原研究記録の更新には別snapshotと検証済み入力manifestが必要です。現公開版に別版の配列を混ぜず、選択と注釈をSnapshotRefで固定します。既存source treeは保持し、更新候補は別フォルダへ生成してください。

## 公開契約の範囲

同梱readerの標準契約はpublic_mainだけです。別版用の汎用契約を呼出し側から渡す仕組みは残しますが、特定の未公開snapshotの識別子・件数・検証hashは公開source／releaseに含めません。内部検証用の具体契約やadapterは別の作業領域で保持し、公開ページへ送信しません。


## 未採用の修正候補7件

「修正候補を表示・exportへ含める」は初期状態で無効です。「候補を見る」の対象を選ぶと、その対象について元の文→候補文→元/候補locator→検証された層→未読範囲→未採用を見られます。元snapshotの主張は上書きしません。チェックを外すと元snapshotだけの表示・exportへ戻ります。

候補を含むZIP/JSONはoriginal_snapshotとcandidateを分離し、各候補のevidence_layerとadoption_state=not_adoptedを保持します。候補を根拠として新しい独立出典や確定史実へ数えません。claim_0761の文言とlocator変更は不可分で、瓶投げを死因とは断定しません。原資料のPDF・本文・画像は取り込みません。これは候補の持出しであり、元DBへの採用操作ではありません。

新しいJYI AtlasコードはMITです。著作権表示と実際のlicense文を保持してください。既存JYIデータ、第三者本文・画像、私用素材の条件は変更しません。カードにも道具コードのLICENSEと権利区分を同梱します。

## 初回候補の状態

初回の利用手順は [release向けREADME](atlas/RELEASE-README.md)、版の戻し方は [ROLLBACK](atlas/ROLLBACK.md)、短い変更点は [RELEASE-NOTES](atlas/RELEASE-NOTES.md)、公開対象は [PUBLICATION-ALLOWLIST](atlas/PUBLICATION-ALLOWLIST.md) を参照してください。内容gateはv5の独立受入と局所回帰を根拠に準備済み、権利gateはMIT承認済みです。対象別の公開操作grantは親の照合待ちで、public_ready=falseを区別して記録します。

持出しの実例は [0761の例](atlas/examples/README.md)。元／候補locatorと安全な典拠リンクを保存した、未採用のカード例です。
