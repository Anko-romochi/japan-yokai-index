# Methodology / 記述方法

一つの主張を一つの `claim` とします。`source_fact` は出典の内容・研究対象など資料について確認できる事実であり、伝承内容の歴史的事実性や妖怪の実在を保証しません。`established_view` は出典を明示した既存研究・機関解説の具体的な見解であり、学界の合意を意味しません。`inference` は資料からの明示した推論、`hypothesis` は検証待ちの仮説です。AIの生成内容だけを根拠に `source_fact` を作ってはいけません。

資料との一次的な接続は `claim` に置きます。`entity` から資料への参照は、そのentityを指すclaimの `evidence_source_ids` から導出します。`evidence_locations` は各出典で確認すべきページ・コマ・見出し等をID別に記します。根拠のない主張は追加せず、調査課題としてIssueに出してください。`confidence` は `confirmed`, `probable`, `tentative`, `unverified`。`review_status` は `reviewed`, `pending`, `disputed`。この二つは別の軸です。

`entity_type` は索引上の便宜的区分です。`attested_periods` と `attested_regions` はclaimと出典で確認できる伝承・記載の時期と地域を表し、発祥時代や本来の生息地域を断定しません。該当する根拠claimがない値は入れず、今回のサンプルでは空配列とします。歴史的人物を怪異伝承の索引に含めても、人物を妖怪と断定しません。

採録の順序は、出典の所在確認、最小限の独自要約、層と確度の設定、別人による照合です。スキーマ検証は資料解釈の妥当性を判定しません。
