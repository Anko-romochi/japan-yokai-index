// A snapshot is an indivisible collection. Never merge entity/claim/source arrays.
export const CONTRACTS=Object.freeze({
 public_main:{id:'public-main-bf35b905',counts:{entities:1000,sources:744,claims:1052},baseCommit:'bf35b90509547fc1b2c550f47349d3f288cbf8e1',scope:'public main snapshot; SERVER export not included'}

});
export function validateSnapshot(data){
 if(!data||typeof data!=='object'||!data.snapshot||typeof data.snapshot.commit!=='string')throw Error('snapshot provenance missing');
 const maps={};for(const key of ['entities','sources','claims']){if(!Array.isArray(data[key]))throw Error(`${key} must be an array`);maps[key]=new Map();for(const row of data[key]){if(!row||typeof row.id!=='string'||!row.id||maps[key].has(row.id))throw Error(`${key}: invalid or duplicate ID`);maps[key].set(row.id,row)}}
 for(const c of data.claims){if(!maps.entities.has(c.entity_id))throw Error(`claim ${c.id}: entity missing`);if(!Array.isArray(c.evidence_source_ids))throw Error(`claim ${c.id}: source IDs missing`);for(const id of c.evidence_source_ids)if(!maps.sources.has(id))throw Error(`claim ${c.id}: source ${id} missing`)}
 return data;
}
export function readSnapshot(data, contractKey = 'public_main', contracts = CONTRACTS) {
 validateSnapshot(data);
 const contract = Object.hasOwn(contracts, contractKey) ? contracts[contractKey] : null;
 if (!contract) throw Error('Unknown snapshot contract');
 if (data.snapshot.commit !== contract.baseCommit) throw Error('Snapshot base commit mismatch');
 for (const key of ['entities', 'sources', 'claims']) {
  if (data[key].length !== contract.counts[key]) throw Error(`${contract.id}: ${key} count mismatch`);
 }
 if (contract.id && data.snapshot.id !== contract.id) throw Error('Snapshot identity mismatch');
 if (contract.scope && data.snapshot.scope !== contract.scope) throw Error('Snapshot scope mismatch');
 if (contract.zipSha256 && data.snapshot.verified_zip_sha256 !== contract.zipSha256) throw Error('ZIP verification receipt missing');
 if (contract.fileSha256) {
  for (const key of ['entities', 'sources', 'claims']) {
   if (data.snapshot.files?.[key] !== contract.fileSha256[key]) throw Error(`${key} byte hash mismatch`);
  }
 }
 return Object.freeze({
  data: {...data, snapshot: {...data.snapshot, payload_verification: {
   status: 'unverified', scope: 'Structural validation only. Declared digests have not been checked against loaded payload.'
  }}},
  contract
 });
}

export function selectSnapshot(registry,key){if(!registry.has(key))throw Error('Snapshot not received');return registry.get(key).data}

export function canonicalJSON(value) {
 if (Array.isArray(value)) return '[' + value.map(canonicalJSON).join(',') + ']';
 if (value && typeof value === 'object') return '{' + Object.keys(value).sort().map(key => JSON.stringify(key) + ':' + canonicalJSON(value[key])).join(',') + '}';
 return JSON.stringify(value);
}
function freezeDeep(value) {
 if (value && typeof value === 'object' && !Object.isFrozen(value)) {
  Object.freeze(value);
  for (const child of Object.values(value)) freezeDeep(child);
 }
 return value;
}
export async function verifySnapshotPayload(data) {
 const keys = ['entities','sources','claims','research_packs','research_annotations','research_documents'];
 if (data.snapshot.integrity_method !== 'sha256-canonical-json-sorted-keys-utf8-v1') throw Error('Payload integrity method missing');
 const actual = {};
 for (const key of keys) {
  if (data[key] === undefined || !data.snapshot.payload_sha256?.[key]) throw Error('Payload digest missing: ' + key);
  const bytes = new TextEncoder().encode(canonicalJSON(data[key]));
  const hash = await globalThis.crypto.subtle.digest('SHA-256',bytes);
  actual[key] = Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2,'0')).join('');
  if (actual[key] !== data.snapshot.payload_sha256[key]) throw Error('Actual payload SHA256 mismatch: ' + key);
 }
 return freezeDeep({...data,snapshot:{...data.snapshot,payload_verification:{status:'verified',actual_payload_sha256:actual,scope:'Loaded JSON payload matches declared digests; publisher authenticity is not verified. Raw JSONL file hashes are build-time records.'}}});
}
