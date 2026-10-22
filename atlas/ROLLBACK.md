# 更新とrollback

版はフォルダ全体で保持します。元の検証済みreleaseを上書きせず、新版は別フォルダへ展開してください。code、data/public-main、data/candidates、manifestを別々の版から混ぜません。

1. 必要な制作メモとカードを先にZIPへ保存します。元データやブラウザ保存領域を削除する必要はありません。
2. 起動中のサーバーをCtrl+Cで止めます。
3. 以前の検証済みreleaseがある場合は、そのフォルダへ戻り `python serve.py --check-only` を実行します。実ファイル集合とhashが一致することを確かめます。
4. `python serve.py` で起動し、ブラウザをreloadします。候補は初期無効です。表示された入力版と保存済みカードのSnapshotRefを照合してください。

これはローカルファイル版の切替で、DB migrationや採用済みclaimの巻戻しではありません。本候補は元DBへ書き込まず、7件も未採用です。異なる版のカードは元のsnapshot／candidate情報を残したまま保管できます。

公開後のrollbackは公開先と操作grantが確定してから別に決めます。本書はGitHubや公開サイトを操作する承認・指示ではありません。
