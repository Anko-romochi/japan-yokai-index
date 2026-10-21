"""Create a source candidate from a public allowlist; exclude operational receipts."""
import argparse,hashlib,json,pathlib,shutil
ROOT=pathlib.Path(__file__).resolve().parents[1]
CODE=['.gitignore','examples/claim_0761.json','examples/claim_0761.md','examples/README.md','index.html','style.css','app.mjs','core.mjs','reader.mjs','overlay.mjs','corrections-candidate.json','research.mjs','zip.mjs','LICENSING.mjs','LICENSE','LICENSE-SCOPE.json','THIRD-PARTY-NOTICES.txt','build.py','build-inputs.json','research-timeline.json','package_release.py','package_source.py','serve_release.py','USER_GUIDE.md','README.public.md','RELEASE-README.md','RELEASE-NOTES.md','ROLLBACK.md','PUBLICATION-ALLOWLIST.md','RELEASE-STATUS.json','CONTRACTS.public.md','LICENSE-DECISION.md','snapshot.json']
TESTS=['core.test.mjs','research.test.mjs','overlay.test.mjs','licensing.test.mjs','browser.cjs','browser-edge.cjs','browser-user-journey.cjs','browser-semantics.cjs','browser-overlay.cjs','browser-readme.cjs','audit-source-records.mjs','verify_exports.py','verify_candidate_exports.py','check_public_candidate.py','rebuild-selftest.py','verify_release_file_set.py']
def package(destination):
 if destination.exists():raise ValueError('Source candidate destination exists')
 names=['LICENSE','scripts/validate_corpus.py','docs/data-policy.md','docs/methodology.md','docs/terminology.md']
 names += ['atlas/'+name for name in CODE]+['atlas/tests/'+name for name in TESTS]
 names += list(json.loads((ROOT/'atlas/build-inputs.json').read_text())['files'])
 names += [str(p.relative_to(ROOT)) for p in (ROOT/'schemas').glob('*.json')]
 destination.mkdir(parents=True)
 for name in sorted(set(names)):
  source=ROOT/name
  if source.is_symlink() or not source.is_file():raise ValueError('Missing/unsafe allowlist entry '+name)
  target=destination/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(source,target)
 shutil.copyfile(ROOT/'LICENSE',destination/'UPSTREAM-LICENSE.txt')
 (destination/'LICENSE').write_text('JYI Atlas has scoped MIT code and unchanged upstream data terms. New Atlas code: atlas/LICENSE and atlas/LICENSE-SCOPE.json. Existing JYI data and validator: UPSTREAM-LICENSE.txt. Third-party/private material is excluded; see atlas/THIRD-PARTY-NOTICES.txt.\n')
 shutil.copyfile(ROOT/'atlas/README.public.md',destination/'README.md')
 (destination/'atlas/README.md').write_text((ROOT/'atlas/README.public.md').read_text().replace('](atlas/',']('))
 shutil.copyfile(ROOT/'atlas/CONTRACTS.public.md',destination/'atlas/CONTRACTS.md')
 (destination/'atlas/evidence').mkdir();(destination/'atlas/samples').mkdir()
 (destination/'atlas/evidence/.keep').write_text('');(destination/'atlas/samples/.keep').write_text('')
 readiness=json.loads((ROOT/'atlas/RELEASE-STATUS.json').read_text())
 manifest={'format':'jyi-source-candidate/1','base_commit':'bf35b90509547fc1b2c550f47349d3f288cbf8e1','counts':{'entities':1000,'sources':744,'claims':1052},'public_ready':False,'snapshot_contract_keys':['public_main'],'private_snapshot_contracts_included':False,'candidate_overlay':{'included':True,'enabled_by_default':False,'adoption_state':'not_adopted','base_snapshot_unchanged':True},'license_decision':'Owner approved MIT for new Atlas code only; existing data terms unchanged','rights_gate':{'status':'passed','new_code_license':'MIT','third_party_permission':'not extended'},'content_gate':readiness['content_gate'],'operation_grant':readiness['operation_grant'],'artifact_version':readiness['source_version'],'publication_hold':[readiness['reason']],'allowlist_only':True,'operational_receipts_included':False,'files':{}}
 for p in sorted(destination.rglob('*')):
  if p.is_file():
   raw=p.read_bytes();manifest['files'][str(p.relative_to(destination))]={'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest()}
 (destination/'PUBLIC-MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 return manifest
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('destination',type=pathlib.Path);a=parser.parse_args();m=package(a.destination.resolve());print(json.dumps({'files':len(m['files']),'public_ready':m['public_ready']}))
