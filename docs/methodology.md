# Methodology / 記述方法

一つの主張を一つの `claim` とします。`source_fact` は資料に確認できる記述・図像についての主張であり、伝承内の出来事が歴史上起きたという意味ではありません。`established_view` は研究・機関解説等で支持される見解、`inference` は資料からの明示した推論、`hypothesis` は検証待ちの仮説です。AIの生成内容だけを根拠に `source_fact` を作ってはいけません。

`evidence_source_ids` は出典IDを列挙し、`evidence_locations` は各出典で確認すべきページ・コマ・見出し等をID別に記します。根拠のない主張は追加せず、調査課題としてIssueに出してください。`confidence` は `confirmed`, `probable`, `tentative`, `unverified`。`review_status` は `reviewed`, `pending`, `disputed`。この二つは別の軸です。

`entity_type` は索引上の便宜的区分です。`periods` は確認済みの伝承・記載時期を表し、存在の起源や実在時期を断定しません。今回のサンプルでは時代特定に曖昧さがある場合、空配列にしています。歴史的人物を怪異伝承の索引に含めても、人物を妖怪と断定しません。

採録の順序は、出典の所在確認、最小限の独自要約、層と確度の設定、別人による照合です。スキーマ検証は資料解釈の妥当性を判定しません。
