# JYI Atlas RC1 — 2026-10-20

- 公開1000対象／744 source records／1052主張を検索し、資料記述・locator・利用条件を比較して出典付きZIPを保存できる初回候補。
- 7件の文言／locator修正案を未採用overlayとして分離。候補Markdownにも元／候補locatorと安全な典拠リンクを保持。原snapshotのbytesは不変。
- 新Atlasコードと対応テストはMIT。既存データ条件・第三者資料の権利は維持。
- 単独再build、ファイル集合・hash検査、候補on/off、URL安全性とMarkdown injectionを回帰検証。

内容は初回配布候補として準備済み。公開先と対象別push/deployの操作grantは親側の照合待ちで、公開操作は未実施です。ローカル版名はRC1であり、Git tagやGitHub Releaseを作成したという意味ではありません。

配置は既存 Anko-romochi/japan-yokai-index の atlas/ を第一選択とし、別repo作成や既存データ・schema・LICENSEの変更を行いません。対象別の公開操作grantは親の照合待ちです。
