import {candidatesFor} from './overlay.mjs';
import {MIT_LICENSE_TEXT,THIRD_PARTY_NOTICES,EXPORT_LICENSE_SCOPE} from './LICENSING.mjs';
import {related,sourceCount,safeURL,card,markdown,markdownText,sourceMetrics} from './core.mjs';
export const TEN_TARGETS=['tofu_kozo','kuzunoha','kijo_momiji','atago_tarobo','kasha','fujiwara_no_sanekata','inugami_gyobu','namahage','hakone_kuzuryu_okami','koanji_no_hanatori_jizo'];
export const contentKinds=['original_text','transcription','summary','interpretation','creative'];
export function snapshotRef(data){return {id:data.snapshot.id||'public-main-bf35b905',commit:data.snapshot.commit,scope:data.snapshot.scope,files:data.snapshot.files,origin:data.snapshot.origin,payload_sha256:data.snapshot.payload_sha256,payload_verification:data.snapshot.payload_verification??{status:'unverified'}}}
export function annotations(data,id,selectedClaimIds=null){return card(data,id,'',selectedClaimIds).claims.map(c=>({id:`annotation:${id}:${c.id}`,snapshot_ref:snapshotRef(data),entity_id:id,claim_id:c.id,kind:'summary',text:c.claim_ja,attribution:'JYI既存claimの独自記述。原文引用・翻刻としては扱わない。',evidence:c.evidence_source_ids.map(sid=>({source_id:sid,locator:c.evidence_locations?.[sid]??null,read_scope:'このsnapshotの既存claim・locator。原資料を今回新たに実読した記録ではない。'})),unconfirmed:['資料間の独立性','異説・形成過程の判定'],review_status:c.review_status,claim_layer:c.layer,confidence:c.confidence,research_status:claimResearchStatus(data,c.id)}))}
export function comparisonRelations(data,id,selectedClaimIds=null){const ids=[...new Set(card(data,id,'',selectedClaimIds).claims.flatMap(c=>c.evidence_source_ids??[]))];return ids.slice(1).map(sid=>({snapshot_ref:snapshotRef(data),entity_id:id,source_ids:[ids[0],sid],relation:'unassessed',note:'複数出典の併置。異説・依存・独立資料とは未判定。'}))}
export function assetRights(source){return {source_id:source.id,rights_note:source.rights_note??null,distribution:'excluded',basis:'外部図版の再配布許諾の確認なし。書誌URLと権利記録のみ。',source_url:safeURL(source.source_url)}}
export function exportBundle(data,id,notes='',selectedClaimIds=null,overlay=null){
 const c=card(data,id,notes,selectedClaimIds);const candidateItems=candidatesFor(data,overlay,id,selectedClaimIds);c.original_snapshot=snapshotRef(data);if(candidateItems.length)c.candidate={overlay_id:overlay.id,adoption_state:'not_adopted',items:candidateItems};const a=annotations(data,id,selectedClaimIds),relations=comparisonRelations(data,id,selectedClaimIds);const rights=c.sources.map(assetRights);const statuses=c.claims.map(cl=>claimResearchStatus(data,cl.id));const refs=new Set(statuses.flatMap(s=>s.evidence_refs??[]));const researchEvidence=Object.fromEntries([...refs].map(ref=>[ref,data.research_documents?.[ref]??'Referenced research document not included; do not infer it was read.']));
 const manifest={format:'jyi-export-manifest/1',snapshot_ref:snapshotRef(data),original_snapshot:snapshotRef(data),candidate:c.candidate?{overlay_id:overlay.id,claim_ids:candidateItems.map(item=>item.claim_id),adoption_state:'not_adopted'}:null,entity_ids:[id],claim_ids:c.claims.map(c=>c.id),source_ids:c.sources.map(s=>s.id),unresolved_source_ids:c.unresolved_source_ids,selection:c.selection,source_metrics:sourceMetrics(data,id,selectedClaimIds),research_status_by_claim:statuses.map(s=>({claim_id:s.claim_id,historical_status:s.historical_status??null,current_status:s.research_status})),files:['card.json','card.md','research-annotations.json','comparison-relations.json','asset-rights.json','research-status.json','research-evidence.json','LICENSE-ATLAS-CODE.txt','LICENSE-SCOPE.json','THIRD-PARTY-NOTICES.txt','README.txt'],media_files:[],excluded_assets:rights.map(r=>({source_id:r.source_id,reason:r.basis})),rights_decision:'New Atlas code: MIT. Existing data terms unchanged. External media excluded; no new permission for third-party or private material.'};
 const bundle={manifest,files:{'card.json':JSON.stringify(c,null,2)+'\n','card.md':markdown(c),'research-annotations.json':JSON.stringify(a,null,2)+'\n','comparison-relations.json':JSON.stringify(relations,null,2)+'\n','asset-rights.json':JSON.stringify(rights,null,2)+'\n','research-status.json':JSON.stringify(statuses,null,2)+'\n','research-evidence.json':JSON.stringify(researchEvidence,null,2)+'\n','LICENSE-ATLAS-CODE.txt':MIT_LICENSE_TEXT,'LICENSE-SCOPE.json':JSON.stringify(EXPORT_LICENSE_SCOPE,null,2)+'\n','THIRD-PARTY-NOTICES.txt':THIRD_PARTY_NOTICES,'README.txt':'JYI 出典付き制作カード\ncard.json の sources は書誌・URL・権利記録、claims の evidence_locations は資料内の所在です。SnapshotRefで入力版を照合できます。summaryはJYIの既存短文で原文引用ではありません。reviewedは既存の出典照合状態で、史実性や今回の再照合を保証しません。selectionは持出す根拠の選択であり史実認定ではありません。今回原資料の実読確認や異説確定を追加していません。外部画像は0件です。制作メモは研究記述と分離しています。\n'}};
 if(candidateItems.length){bundle.files['candidate-overlay.json']=JSON.stringify({format:overlay.format,id:overlay.id,original_snapshot:overlay.original_snapshot,adoption_state:'not_adopted',scope_notice:overlay.scope_notice,items:candidateItems},null,2)+'\n';bundle.files['card.md']+='\n## 未採用の修正候補（元claimとは別）\n\n'+candidateItems.map(candidateMarkdown).join('\n\n')+'\n';}
 manifest.files=Object.keys(bundle.files);return bundle;
}
export function tenTargetReport(data){return TEN_TARGETS.map(id=>({id,name:data.entities.find(e=>e.id===id)?.name_ja??null,claims:related(data,id).length,sources:sourceCount(data,id),distinct_document_pages:sourceMetrics(data,id).distinct_document_pages,comparison_status:'unassessed',missing:data.entities.every(e=>e.id!==id)}))}

export async function sealBundle(bundle){const file_integrity={};for(const [name,text] of Object.entries(bundle.files)){const bytes=new TextEncoder().encode(text);const hash=await globalThis.crypto.subtle.digest('SHA-256',bytes);file_integrity[name]={bytes:bytes.length,sha256:Array.from(new Uint8Array(hash),x=>x.toString(16).padStart(2,'0')).join('')}}return {...bundle,manifest:{...bundle.manifest,file_integrity,integrity_scope:'All payload files; export-manifest.json is excluded from its own hash'}}}

export function claimResearchStatus(data,claimId) {
 const record = data.research_annotations?.find(a=>a.claim_id===claimId);
 return record??{claim_id:claimId,research_status:'not_listed_in_imported_open_queue',queue:'v013',notice:'今回取り込んだopen queueに掲載なし。最新の原典真偽確認や独立性認定ではない。',evidence_refs:[]};
}

export function candidateMarkdown(item) {
 const text = [
  item.claim_id,
  '元の文：' + item.original.claim_ja,
  '候補文：' + item.candidate.claim_ja,
  '元locator：' + JSON.stringify(item.original.evidence_locations),
  '候補locator：' + JSON.stringify(item.candidate.evidence_locations),
  '読んだ層：' + item.evidence_layer.read_extent,
  '未読・未確認：' + item.evidence_layer.underlying_unread + ' ' + item.remaining_unverified,
  'adoption_state: not_adopted'
 ].map(markdownText).join('\n\n');
 const url = safeURL(item.evidence_layer.source_url);
 const link = url ? '[候補の典拠を開く](<' + url.replaceAll('<','%3C').replaceAll('>','%3E') + '>)' : '有効な典拠URL未記録';
 return text + '\n\n' + link;
}
