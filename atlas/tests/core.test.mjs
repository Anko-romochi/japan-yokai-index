import {test} from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import {search,card,markdown,safeURL,sourceCount,sourceMetrics} from '../core.mjs';
const d=JSON.parse(fs.readFileSync(new URL('../snapshot.json',import.meta.url)));
test('pinned full index and joins',()=>{assert.equal(d.entities.length,1003);assert.equal(d.sources.length,749);assert.equal(d.claims.length,1058);for(const c of d.claims){assert(d.entities.some(e=>e.id===c.entity_id));for(const id of c.evidence_source_ids)assert(d.sources.some(s=>s.id===id))}});
test('Japanese, kana, AND, empty, no match',()=>{assert(search(d,'豆腐小僧').some(e=>e.id==='tofu_kozo'));assert(search(d,'かっぱ').some(e=>e.id==='kappa'));assert.equal(search(d,'').length,1003);assert.equal(search(d,'存在しない検索xyz').length,0);assert(search(d,'豆腐小僧 国立国会図書館').some(e=>e.id==='tofu_kozo'));assert(search(d,'',true).every(e=>sourceCount(d,e.id)>1))});
test('exports retain citations, unknowns and exclude media',()=>{for(const id of ['tofu_kozo','kasha','atago_tarobo']){const c=card(d,id,'制作メモ <script>');assert.deepEqual(c.media.included,[]);assert(c.claims.length);assert(c.sources.length);assert(markdown(c).includes(d.snapshot.commit));assert.equal(JSON.parse(JSON.stringify(c)).production_notes,'制作メモ <script>');fs.writeFileSync(new URL(`../samples/${id}.json`,import.meta.url),JSON.stringify(c,null,2)+'\n');fs.writeFileSync(new URL(`../samples/${id}.md`,import.meta.url),markdown(c))}assert.throws(()=>card(d,'unknown'));assert.equal(safeURL('javascript:alert(1)'),null);assert.equal(safeURL(null),null)});

test('RC2 reviewed evidence is searchable and exported with its coverage and limits',()=>{
 const expected=[
  ['鬼童丸','kidomaru',['claim_1324']],
  ['骸骨の軍勢','gyosai_hyakki_gadan_skeleton_army',['claim_1325','claim_1326']],
  ['神鴉','ogarasu',['claim_1327']],
  ['髪切虫','kamikiri_mushi',['claim_1328']],
  ['お菊虫','okikumushi_hyogo',['claim_1329']]
 ];
 for(const [query,id,claimIds] of expected){
  assert(search(d,query).some(e=>e.id===id));
  const result=card(d,id,'');
  for(const claimId of claimIds){
   const claim=result.claims.find(c=>c.id===claimId);
   assert.equal(claim.review_status,'reviewed');
   for(const sourceId of claim.evidence_source_ids){
    const source=result.sources.find(s=>s.id===sourceId);
    assert.ok(safeURL(source.source_url));
    assert.ok(source.rights_note&&claim.evidence_locations[sourceId]);
   }
  }
  assert.deepEqual(result.media.included,[]);
 }
 const id='gyosai_hyakki_gadan_skeleton_army';
 const depiction=card(d,id,'');
 assert.equal(sourceMetrics(d,id).independence,'unassessed');
 assert(depiction.sources.every(s=>s.location.includes('独立資料ではない')));
});
