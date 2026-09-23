# Japan Yokai Index — Corpus MVO

日本の妖怪・怪異文化を、原典へ辿れる形で世界から利用可能にするオープン研究インデックスです。This is an open research index of Japanese yōkai and uncanny traditions, designed to lead readers back to the cited material.

このリポジトリは原資料の本文・画像を集めたアーカイブではありません。資料の書誌、所在、位置と、独自に書いた短い主張を結びます。日本語の名称を正本として保持し、英語欄は将来の翻訳用です。

## Status and limits

- MVO v0.3: 30 entities, 19 sources, 31 claims. 完全収録ではありません。
- デジタルアクセス可能な資料と機関公開ページに偏りがあります。
- 誤りや未確認情報が含まれ得ます。Issue・PRによる訂正を歓迎します。
- `source_fact`, `established_view`, `inference`, `hypothesis` を分離します。独自仮説は `theory/` に置き、一般事実とは扱いません。
- `source_fact` は出典の内容についての事実であり、伝承内容の史実性を保証しません。`reviewed` は出典と記述の照合状態です。
- `attested_periods` / `attested_regions` は資料で確認できる時期・地域であり、発祥時代や本来の生息地域ではありません。資料との一次的な接続単位は `claim` です。

## Files

| File | Purpose |
| --- | --- |
| `data/entities.jsonl` | 日本語名を軸にした存在の索引 |
| `data/sources.jsonl` | 参照資料・所蔵者・URL・権利の記録 |
| `data/claims.jsonl` | 一行一主張、根拠資料との結合 |
| `schemas/*.schema.json` | JSON Schema Draft 2020-12 |
| `theory/` | 検討中の独自分類。Corpus本体から分離 |

## Validation

Python 3.10+ の標準ライブラリのみ使用します。プロジェクト直下で実行してください。

```sh
python scripts/validate_corpus.py
```

検証対象はUTF-8、JSONL、スキーマの必須項目・型・列挙値、ID重複、参照整合性、`source_fact` の根拠資料と位置です。実行結果が `PASS` でも出典内容の人手確認は必要です。2026-09-23 のローカル結果：`PASS: 30 entities, 19 sources, 31 claims`。

## Contribute and reuse

[CONTRIBUTING.md](CONTRIBUTING.md) に追加・訂正手順があります。データの出典管理、確度、翻訳方針は [methodology](docs/methodology.md)、[data policy](docs/data-policy.md)、[terminology](docs/terminology.md) を参照してください。

このプロジェクト自身が作成したメタデータと文章は CC0 1.0、validator は MIT License です。外部資料の本文・画像・各機関の権利は含まれません。詳細は [LICENSE](LICENSE) を参照してください。
