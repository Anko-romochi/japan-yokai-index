# 公開候補のファイルallowlist

公開に使うのは、専用生成物の `PUBLIC-MANIFEST.json`（source）または `release-manifest.json`（release）に列挙されたファイルと、そのmanifest自身だけです。実行中の作業ルートやbranchを一括で公開しません。

sourceは新Atlasコード・対応テスト・実LICENSE／対象一覧・起動説明・公開版JSONL／schema／validator・固定入力の研究記録・未採用候補だけを明示allowlistで切り出します。releaseはcode、data/public-main、data/candidates、third-party-payloadを分離します。個々の正確なパス・bytes・SHA256はその版のmanifestが正本です。

`.git`、秘密設定、内部運用receipt、private snapshotの具体契約・検証値、私用素材、外部原資料の検証copy、未列挙ファイルは含めません。privateデータを配信して画面だけで隠す方式は使いません。画像は制作カードへ含めず、QA画面は配布物本体と区別します。

公開前はmanifestと実ファイル集合の一致、全hash、実LICENSEの範囲、元snapshotの不変、候補の未採用状態、READMEからの一巡を確認します。その後、公開先・branch／対象・操作・rollbackを親が照合し、対象別grantを確定します。ここにはpush/deployの実行コマンドや、既存公開先を推測した設定はありません。

配置は既存 Anko-romochi/japan-yokai-index の atlas/ を第一選択とし、別repo作成や既存データ・schema・LICENSEの変更を行いません。対象別の公開操作grantは親の照合待ちです。
