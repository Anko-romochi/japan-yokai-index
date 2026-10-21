# JYI Atlas — 初回配布候補 RC1

公開正本 `bf35b90509547fc1b2c550f47349d3f288cbf8e1` の **1000対象／744 source records／1052主張**を読む道具です。原snapshotを保持し、7件の修正候補は未採用の別overlayにしています。アカウント・APIキー・私用データ・担当者の作業環境は不要です。公開操作はまだ行っていません。

## 必要な環境

Python 3.10以降と、JavaScript・ES modules・Fetch・Blob・Web Crypto対応ブラウザ。追加PythonパッケージやNodeは通常利用に不要です。実測はLinux／Python 3.12／Chromium。Windows・macOSおよび他ブラウザの実機確認は未実施です。file://起動は非対応です。

## このREADMEだけで試す

1. この `release/` 全体を新しいフォルダへ展開し、ターミナルでそのフォルダへ移動します。`code/` だけを取り出さないでください。
2. `python rebuild.py` を実行します。同梱入力だけから同じsnapshotを再生成します。Gitや外部APIは使いません。
3. `python serve.py --check-only` を実行します。manifestと実ファイル集合・bytes・SHA256の一致を確認します。未列挙ファイルや欠落があれば起動を止めます。
4. `python serve.py` を実行し、表示された **http://127.0.0.1:8766/** を開きます。使用中のポートなら `python serve.py --port 8767` とし、表示されたURLを使います。
5. 検索欄に **藤岡** と入力し、「藤岡のさむらいに化けた狐」を選びます。元の記述・出典・locator・利用条件を確認します。
6. **修正候補を表示・exportへ含める**にチェックします。初期状態は無効です。修正候補欄で元の文と候補文、元／候補locator、読んだ層、未読・未確認、未採用状態を比較します。0761は文言とlocatorを一体で扱い、瓶投げを死因と因果断定しません。
7. 「持出す根拠を選ぶ」で `claim_0761` を選び、必要なら制作メモを記入します。**根拠付きZIPを取り出す**を押し、ダウンロードしたZIPを保存します。候補を含めたくなければ手順6のチェックを外します。
8. ローカルサーバーをCtrl+Cで止めても、保存したZIPは使えます。ZIPを展開し、`card.md` をMarkdown対応ビューアで開きます。候補節に元／候補locatorを再掲し、**候補の典拠を開く**から元の機関資料へ戻れます。ビューアがなければ `card.json` または `candidate-overlay.json` の `evidence_layer.source_url` をブラウザへ貼り付け、locatorの該当箇所を探します。
9. `original_snapshot` と `candidate`、`evidence_layer`、`adoption_state=not_adopted` が別に保存されていることを確認します。元claimは書き換わりません。ZIPの `export-manifest.json` はファイルのbytes・SHA256、選択／除外ID、画像0件も記録します。

典拠を開く時だけインターネット接続が必要です。機関URLの失効や閲覧制限があれば、資料名・機関名・ID・locatorから追跡してください。リンク先の現在の可用性を本ツールが保証するものではありません。

## 権利と内容

新しいJYI Atlasコードと対応テストは本人承認済みMIT。著作権表示とlicense文を保持してください。実文は `code/LICENSE`、対象は `code/LICENSE-SCOPE.json`。既存JYIデータとvalidatorの条件は `data/public-main/EXISTING-LICENSE.txt` のままです。第三者本文・画像・私用素材・他製品へMITを拡張しません。`code/THIRD-PARTY-NOTICES.txt`と各出典のrights_noteを確認してください。外部原資料の本文・画像payloadは0件です。

- `code/`：道具の実装・説明・ライセンス。
- `data/public-main/`：公開版の原JSONLと派生snapshot。再生成しても同じbyte identityを保ちます。
- `data/candidates/`：7件の短い未採用文言／locator候補。原資料ファイルは含みません。
- `third-party-payload/`：外部原資料payloadなし。
- `release-manifest.json`：この版の正確なファイルallowlistとhash。
- `RELEASE-STATUS.json`：内容gate・権利gateと、公開操作grantを分けた状態。`public_ready=false`は対象別の操作grant照合待ちです。

## 既知の限界

source_factは出典の記述についての層、reviewedは元DBの照合状態であり、史実性や上流原刊本の実読を保証しません。10対象の入口は10件の独立原典研究完了ではありません。source recordsと別資料ページ数、複数主張と異説、資料の独立性を区別します。時期・地域は資料で確認した値で、発祥とは限りません。

7候補は登録された機関ページ／PDFの再読報告に基づきますが、原刊本・録音・同一性等の未確認点を残します。候補の採用、全原典の逐語照合、別入力版の統合を自動実行しません。メモはブラウザのlocalStorageへ保存し、保存不能なら現在のメモをexportできます。根拠の選択は対象を開き直すと全件へ、候補はreloadすると無効へ戻ります。必要なメモは先にカードへ書き出してください。

v5のcode/data受入は独立検査済みで、独立browser操作は未実施です。同梱のbrowser QAは実装側のローカル自動操作と区別しています。今回の局所修正もURL安全性・Markdown injection・元snapshot不変を回帰確認しています。

更新・戻し方は `ROLLBACK.md`、短い変更点は `RELEASE-NOTES.md`、公開対象の境界は `PUBLICATION-ALLOWLIST.md`。公開先の作成やpush/deployを行う手順は、この配布候補には含めません。

配置の第一選択は既存 `Anko-romochi/japan-yokai-index` の `atlas/` です。別repoを作らず、原DB・schema・既存LICENSE履歴を保ちます。配置判断は、push／PR／tag／release／deployを今実行するgrantではありません。
