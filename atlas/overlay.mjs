import {safeURL} from './core.mjs';
import {canonicalJSON} from './reader.mjs';

export function validateOverlay(data, overlay) {
 if (overlay?.format !== 'jyi-corrections-candidate/1' || overlay.adoption_state !== 'not_adopted') throw Error('Invalid candidate overlay state');
 const base = overlay.original_snapshot;
 if (base?.id !== data.snapshot.id || base.commit !== data.snapshot.commit || canonicalJSON(base.files) !== canonicalJSON(data.snapshot.files)) throw Error('Candidate base snapshot mismatch');
 if (!Array.isArray(overlay.items)) throw Error('Candidate items missing');
 const seen = new Set();
 for (const item of overlay.items) {
  const claim = data.claims.find(c => c.id === item.claim_id);
  if (!claim || seen.has(item.claim_id) || item.entity_id !== claim.entity_id) throw Error('Invalid candidate claim ID');
  seen.add(item.claim_id);
  if (item.original?.claim_ja !== claim.claim_ja || canonicalJSON(item.original.evidence_locations) !== canonicalJSON(claim.evidence_locations)) throw Error('Candidate original wording or locator mismatch');
  if (canonicalJSON(item.source_ids) !== canonicalJSON(claim.evidence_source_ids)) throw Error('Candidate cannot add independent source records');
  if (!item.candidate?.claim_ja || !item.evidence_layer?.read_extent || !item.evidence_layer?.underlying_unread || !safeURL(item.evidence_layer.source_url) || item.adoption_state !== 'not_adopted') throw Error('Candidate evidence layer or adoption state missing');
  if (canonicalJSON(Object.keys(item.candidate.evidence_locations).sort()) !== canonicalJSON(Object.keys(claim.evidence_locations).sort())) throw Error('Candidate locator source IDs changed');
  if (item.locator_change === 'required' && canonicalJSON(item.candidate.evidence_locations) === canonicalJSON(claim.evidence_locations)) throw Error('Candidate wording and required locator change must stay together');
 }
 return overlay;
}
export function candidatesFor(data, overlay, entityId, selectedClaimIds = null) {
 if (!overlay) return [];
 validateOverlay(data, overlay);
 return overlay.items.filter(item => item.entity_id === entityId && (selectedClaimIds === null || selectedClaimIds.includes(item.claim_id)));
}
