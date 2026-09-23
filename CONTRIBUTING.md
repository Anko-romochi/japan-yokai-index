# Contributing / 修正・追加

Issue は `Correction`, `New entity`, `New source` のテンプレートから作成してください。PRでは対応するIssue、変更理由、確認した資料と該当位置を記してください。新しい主張は `claims.jsonl` に一件一行で追加し、存在・資料のIDを参照してください。元資料の本文や画像を貼り付けず、独自の短い要約にしてください。

1. 資料のタイトル、著者、年代、所蔵・提供機関、URLまたは書誌ID、ページ・コマ・節などを確認する。
2. 未確認の値は `null` / 空配列 / `unverified` とする。推測で埋めない。
3. 主張の層と確度を [methodology](docs/methodology.md) に従い設定する。独自学説は `theory/` に提案する。
4. `python scripts/validate_corpus.py` を実行し、PASS結果をPRに記す。

## Correction workflow

Issueの状態は `reported → evidence_found → under_review → accepted / rejected / unresolved` です。管理者はIssue本文またはコメントに現在の状態と判断理由を残します。`accepted` は修正PRのマージ後に付けます。資料間で異説がある場合は一方を消さず、主張を分けて `disputed` として記録できます。

翻訳は元の日本語欄を保ったまま `claim_en` 等に追加し、解釈が変わる場合は別の主張として根拠を示してください。名称のローマ字は検索補助であり、訳語の正本ではありません。
