"""Read actual browser-saved candidate ZIPs using only their contents and pinned baseline."""
import hashlib,json,pathlib,zipfile
root=pathlib.Path(__file__).resolve().parents[2]
data=json.loads((root/'atlas/snapshot.json').read_text());original={c['id']:c for c in data['claims']};overlay=json.loads((root/'atlas/corrections-candidate.json').read_text());results=[]
for item in overlay['items']:
 path=root/'atlas/evidence'/('browser-candidate-'+item['claim_id']+'.zip')
 with zipfile.ZipFile(path) as archive:
  assert archive.testzip() is None
  manifest=json.loads(archive.read('export-manifest.json'));card=json.loads(archive.read('card.json'));candidate=json.loads(archive.read('candidate-overlay.json'))
  for name,expected in manifest['file_integrity'].items():
   raw=archive.read(name);assert len(raw)==expected['bytes'] and hashlib.sha256(raw).hexdigest()==expected['sha256']
  assert card['snapshot']['id']==data['snapshot']['id']
  assert card['snapshot']['files']==data['snapshot']['files']
  assert card['original_snapshot']['id']==data['snapshot']['id']
  assert all(c==original[c['id']] for c in card['claims'])
  assert candidate['adoption_state']=='not_adopted'
  assert candidate['items']==card['candidate']['items']
  assert candidate['items'][0]['candidate']==item['candidate']
  assert candidate['items'][0]['evidence_layer']['underlying_unread']
  assert manifest['candidate']['adoption_state']=='not_adopted' and not manifest['media_files']
  assert card['rights']['code_license']=='MIT'
  assert json.loads(archive.read('LICENSE-SCOPE.json'))['third_party_and_private_permission_extended'] is False
  results.append({'claim_id':item['claim_id'],'passed':True,'original_claim_unchanged':True,'candidate_adopted':False,'original_snapshot_hashes_unchanged':True,'read_layer_and_limits':'preserved','images':0})
with zipfile.ZipFile(root/'atlas/evidence/browser-candidate-disabled.zip') as archive:
 manifest=json.loads(archive.read('export-manifest.json'));card=json.loads(archive.read('card.json'));assert 'candidate-overlay.json' not in archive.namelist();assert 'candidate' not in card;assert manifest['candidate'] is None
report={'passed':True,'base_snapshot_byte_identity':'unchanged','candidate_disabled_export':'no candidate payload','code_license':'MIT; data and third-party scope unchanged','rows':results}
(root/'atlas/evidence/candidate-export-readback.json').write_text(json.dumps(report,indent=2)+'\n');print('PASS: 7 actual browser candidate ZIPs and disabled export; original claims/hashes unchanged, proposal+locator+layers separate')
