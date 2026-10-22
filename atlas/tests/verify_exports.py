"""Read downloaded ZIPs without the app or corpus and rediscover citation routes."""
import hashlib,json,pathlib,zipfile
report=[]
for path in [pathlib.Path('atlas/samples/tofu-kozo-bundle.zip'),pathlib.Path('atlas/evidence/browser-atago-bundle.zip'),pathlib.Path('atlas/samples/okiku-selected-bundle.zip'),pathlib.Path('atlas/evidence/browser-okiku-selected.zip'),pathlib.Path('atlas/evidence/browser-ohikari-status.zip')]:
 with zipfile.ZipFile(path) as z:
  assert z.testzip() is None
  m=json.loads(z.read('export-manifest.json')); c=json.loads(z.read('card.json'))
  assert not m['media_files']
  assert m['selection']==c['selection']
  assert set(m['claim_ids'])==set(c['selection']['included_claim_ids'])
  assert not set(c['selection']['included_claim_ids'])&set(c['selection']['excluded_claim_ids'])
  assert set(z.namelist())==set(m['files'])|{'export-manifest.json'}
  assert set(m['file_integrity'])==set(m['files'])
  for name,check in m['file_integrity'].items():
   raw=z.read(name);assert len(raw)==check['bytes'];assert hashlib.sha256(raw).hexdigest()==check['sha256']
  assert set(m['source_ids'])=={s['id'] for s in c['sources']}
  for cl in c['claims']:
   for sid in cl['evidence_source_ids']:
    source=next(s for s in c['sources'] if s['id']==sid)
    assert source['source_url'].startswith('https://') and cl['evidence_locations'][sid]
  report.append({'path':str(path),'crc':'pass','all_payload_sha256':'pass','bundle_only_citation_rediscovery':'pass','media_count':0})
pathlib.Path('atlas/evidence/export-readback.json').write_text(json.dumps(report,indent=2)+'\n')
print('PASS: ZIP CRC, all payload byte/SHA256, bundle-only source and locator rediscovery, zero images')
