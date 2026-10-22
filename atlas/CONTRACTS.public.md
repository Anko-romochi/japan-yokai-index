# JYI Atlas 追加層契約

- SnapshotRef：id、commit、scope、元JSONLのbuild時hash、実JSON payloadのdigestと検証状態。複数版の配列を結合しない。
- Entity / Source / Claim：既存ID・内容を保持。元DBのlayer、confidence、review_statusを無言で変更しない。
- ResearchAnnotation：既存claimのsummaryと出典・locator・読んだ範囲を記録。original_text / transcription / summary / interpretation / creativeを区別。既存研究票と修正履歴を照合した個別状態・evidence_refsを持つ。
- ComparisonRelation：現在はunassessed。source IDの併置は異説・独立性・形成過程の認定ではない。source_metricsで登録record数と別資料ページ数を分ける。
- AssetRights：元rights_noteとsource URLを保持。現候補の外部図版はすべてexcluded。文字列から許諾を自動認定しない。
- ExportManifest：snapshot、claim/source ID、選択・選択対象外claim ID、個別研究状態、除外図版理由、各payloadのbytesとSHA256。manifest自身の自己hashは対象外。

元JSONLのhashとJSON payload hashは別の値。構造検証だけのreaderはunverified。実payload照合後だけverifiedにし、その後は深くfreezeする。発行者真正性や原典の真偽は、この整合検査から認定しない。

カードとZIPには研究状態を保持し、ZIPのresearch-evidence.jsonには根拠となる既存研究記録を同梱する。過去票のopen、現行文の修正済み、文言再確認候補、同一性未判定、上流原掲載未読、登録ページ未読、状態unknownを区別する。

出典URLはhttp/httpsに限定し、資格情報付きURLをリンクにしない。画面はtextContent、Markdownは本文をescapeする。JSONは元記録の保存形式であり、読戻し側もURL等を実行データとして扱わない。欠損参照のsnapshotは拒否し、診断用cardはunresolved_source_idsを残す。不正選択IDや根拠ゼロの選択書出しを拒否する。元からclaimなしの対象は不足を保持した空カードを作れる。

公開標準契約はpublic_mainだけ。汎用契約注入機能は特定の私用snapshot情報を内蔵せず、内部用adapterや具体契約は公開allowlist外に置く。
