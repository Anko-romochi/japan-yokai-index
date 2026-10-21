import {CODE_LICENSE, CODE_COPYRIGHT} from './LICENSING.mjs';
export const normalize = value => String(value ?? '').normalize('NFKC').toLocaleLowerCase('ja');
export function related(data,id){return data.claims.filter(c=>c.entity_id===id)}
export function sourceCount(data,id){return new Set(related(data,id).flatMap(c=>(c.evidence_source_ids??[]))).size}
export function search(data,q='',multiple=false){const terms=normalize(q).split(/\s+/).filter(Boolean);return data.entities.filter(e=>{if(multiple&&sourceCount(data,e.id)<2)return false;const claims=related(data,e.id);const ids=new Set(claims.flatMap(c=>c.evidence_source_ids??[]));const text=normalize(JSON.stringify([e,claims,data.sources.filter(s=>ids.has(s.id))]));return terms.every(t=>text.includes(t))})}
export function safeURL(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)&&!u.username&&!u.password?u.href:null}catch{return null}}
export function card(data, id, notes = '', selectedClaimIds = null) {
  const entity = data.entities.find(e => e.id === id);
  if (!entity) throw Error('Unknown entity');
  const allClaims = related(data, id);
  if (selectedClaimIds !== null) {
    if (!Array.isArray(selectedClaimIds) || new Set(selectedClaimIds).size !== selectedClaimIds.length || selectedClaimIds.some(cid => !allClaims.some(c => c.id === cid))) throw Error('Invalid claim selection');
    if (allClaims.length && !selectedClaimIds.length) throw Error('Select at least one claim');
  }
  const claims = selectedClaimIds === null ? allClaims : allClaims.filter(c => selectedClaimIds.includes(c.id));
  const sourceIds = new Set(claims.flatMap(c => c.evidence_source_ids ?? []));
  return {
    format: 'jyi-production-card/1', snapshot: {...data.snapshot,payload_verification:data.snapshot.payload_verification??{status:'unverified',scope:'Payload digest not verified by this card call'}}, entity, claims,
    sources: data.sources.filter(s => sourceIds.has(s.id)), production_notes: notes,
    research_status: claims.map(c=>data.research_annotations?.find(a=>a.claim_id===c.id)??{claim_id:c.id,research_status:'not_listed_in_imported_open_queue',notice:'取り込んだv013 open queueに掲載なし。原典真偽確認ではない。'}),
    selection: {
      mode: selectedClaimIds === null ? 'all_available' : 'user_selected',
      included_claim_ids: claims.map(c => c.id),
      excluded_claim_ids: allClaims.filter(c => !claims.some(chosen => chosen.id === c.id)).map(c => c.id),
      notice: '持出す根拠の選択であり、史実性・資料独立性・再利用許諾の認定ではありません。'
    },
    unresolved_source_ids: [...sourceIds].filter(sid => !data.sources.some(s => s.id === sid)),
    interpretation_notice: 'source_fact は出典記述の事実。reviewed は既存の出典照合状態であり、伝承の史実性や今回の再照合を保証しません。複数資料は異説や独立性を保証しない。制作メモは研究claimではない。',
    media: { included: [], excluded_reason: '外部図版・私用ギャラリー画像は収録しない。権利不明画像は配布対象外。' },
    rights: { corpus: '既存LICENSE参照：独自メタデータ等 CC0 1.0。外部資料は対象外。', new_tool: 'JYI Atlasの道具コードはMIT。著作権表示とlicense文を保持。データ・第三者資料・制作メモの条件とは別。', code_license: CODE_LICENSE, code_copyright: CODE_COPYRIGHT }
  };
}

export function markdown(c){const m=markdownText;return [`# ${m(c.entity.name_ja)} — 制作カード`,`Snapshot: ${m(c.snapshot.commit)}`,m(c.interpretation_notice),'## 持出す根拠の選択',m(c.selection?.notice),`収録：${m(c.selection?.included_claim_ids.join('、'))} / 選択対象外：${m(c.selection?.excluded_claim_ids.join('、')||'なし')}`,'## 個別研究状態',...c.research_status.map(s=>`${m(s.claim_id)} / ${m(s.research_status)} / ${m(s.summary_ja??s.notice)}${s.next_gate?' / 次の確認：'+m(s.next_gate):''}${s.evidence_refs?.length?' / 根拠記録：'+m(s.evidence_refs.join('、')):''}`),'## 主張と出典',...c.claims.flatMap(cl=>[`### ${m(cl.id)} / ${m(cl.layer)} / ${m(cl.confidence)} / ${m(cl.review_status)}`,m(cl.claim_ja),...(cl.evidence_source_ids??[]).map(id=>{const s=c.sources.find(s=>s.id===id);const url=safeURL(s?.source_url);return `- ${m(id)}: ${m(s?.title??'参照欠落')} / ${m(cl.evidence_locations?.[id]??'位置未記録')}\n  ${url?'[典拠を開く](<'+url.replaceAll('<','%3C').replaceAll('>','%3E')+'>)':'URL未記録'}\n  権利: ${m(s?.rights_note??'未確認')}`})]),'## 制作メモ（研究記述と区別）',m(c.production_notes||'未記入'),'## 欠損参照',m(c.unresolved_source_ids?.join('、')||'なし'),'## 図版',m(c.media.excluded_reason),m(c.rights.corpus),m(c.rights.new_tool)].join('\n\n')+'\n'}

export function markdownText(value){return String(value??'').replace(/\\/g,'\\\\').replace(/([`*_{}\[\]()#+.!|<>])/g,'\\$1')}

export function sourcePageKey(source) {
 const url = safeURL(source.source_url);
 if (!url) return null;
 const parsed = new URL(url); parsed.hash = ''; parsed.searchParams.sort();
 return parsed.href;
}
export function sourceMetrics(data,id,selectedClaimIds=null) {
 const claims = selectedClaimIds === null ? related(data,id) : related(data,id).filter(c=>selectedClaimIds.includes(c.id));
 const ids = new Set(claims.flatMap(c=>c.evidence_source_ids??[]));
 const sources = data.sources.filter(s=>ids.has(s.id));
 const pages = new Set(sources.map(sourcePageKey).filter(Boolean));
 return {source_records:ids.size,distinct_document_pages:pages.size,records_without_page:sources.filter(s=>!sourcePageKey(s)).length,missing_source_records:[...ids].filter(sid=>!sources.some(s=>s.id===sid)),independence:'unassessed',counting_rule:'Unique source IDs versus normalized http(s) URL without fragment; pages are not proof of independent publications.'};
}
