"""Build an isolated local release candidate with code/data/third-party boundaries."""
import argparse,hashlib,json,pathlib,shutil
ROOT=pathlib.Path(__file__).resolve().parents[1]
CODE=['index.html','style.css','app.mjs','core.mjs','reader.mjs','overlay.mjs','research.mjs','zip.mjs','LICENSING.mjs','LICENSE','LICENSE-SCOPE.json','THIRD-PARTY-NOTICES.txt','USER_GUIDE.md','build.py','build-inputs.json','research-timeline.json','LICENSE-DECISION.md']
def package(destination):
 if destination.exists(): raise ValueError('Destination already exists; preserve it and choose a new candidate directory')
 snapshot=json.loads((ROOT/'atlas/snapshot.json').read_text())
 for kind in ['entities','sources','claims']:
  if hashlib.sha256((ROOT/'data'/f'{kind}.jsonl').read_bytes()).hexdigest()!=snapshot['snapshot']['files'][kind]:raise ValueError('Snapshot/corpus hash mismatch')
 destination.mkdir(parents=True)
 for name in CODE:
  path=destination/'code'/name;path.parent.mkdir(exist_ok=True);shutil.copyfile(ROOT/'atlas'/name,path)
 data=destination/'data/public-main';data.mkdir(parents=True)
 for name in ['entities.jsonl','sources.jsonl','claims.jsonl']:shutil.copyfile(ROOT/'data'/name,data/name)
 shutil.copyfile(ROOT/'atlas/snapshot.json',data/'snapshot.json')
 candidates=destination/'data/candidates';candidates.mkdir();shutil.copyfile(ROOT/'atlas/corrections-candidate.json',candidates/'corrections-candidate.json')
 shutil.copyfile(ROOT/'LICENSE',data/'EXISTING-LICENSE.txt')
 shutil.copyfile(ROOT/'atlas/CONTRACTS.public.md',destination/'code/CONTRACTS.md')
 build_inputs=json.loads((ROOT/'atlas/build-inputs.json').read_text())
 for name in build_inputs['files']:
  if name.startswith('research/'):
   target=data/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(ROOT/name,target)
 (destination/'rebuild.py').write_text("import pathlib,runpy\nroot=pathlib.Path(__file__).resolve().parent\nrunpy.run_path(str(root/'code/build.py'))['build'](root,release=True)\nprint('Rebuilt snapshot from pinned local inputs without .git')\n")
 shutil.copyfile(ROOT/'docs/data-policy.md',data/'data-policy.md')
 third=destination/'third-party-payload';third.mkdir()
 (third/'README.txt').write_text('外部画像・原資料全文・私用ギャラリー画像のpayloadは0件です。dataには既存JYIの独自記述・書誌・調査記録を含みます。リンク先資料の権利や利用条件は移転しません。\n')
 shutil.copyfile(ROOT/'atlas/serve_release.py',destination/'serve.py')
 (destination/'LICENSE').write_text('New JYI Atlas code: MIT, see code/LICENSE and code/LICENSE-SCOPE.json. Existing data and validator terms remain in data/public-main/EXISTING-LICENSE.txt. Third-party/private materials are not relicensed; see code/THIRD-PARTY-NOTICES.txt.\n')
 scope=json.loads((ROOT/'atlas/LICENSE-SCOPE.json').read_text());scope['shipped_code_paths']=[str(p.relative_to(destination)) for p in sorted(destination.rglob('*')) if p.is_file() and p.suffix in {'.mjs','.py','.html','.css'}];(destination/'code/LICENSE-SCOPE.json').write_text(json.dumps(scope,ensure_ascii=False,indent=2)+'\n')
 readme=(ROOT/'atlas/RELEASE-README.md').read_text()
 (destination/'README.md').write_text(readme)
 for name in ['RELEASE-NOTES.md','ROLLBACK.md','PUBLICATION-ALLOWLIST.md','RELEASE-STATUS.json']:shutil.copyfile(ROOT/'atlas'/name,destination/name)
 readiness=json.loads((ROOT/'atlas/RELEASE-STATUS.json').read_text())
 manifest={'format':'jyi-local-release/1','snapshot_ref':snapshot['snapshot'],'counts':{k:len(snapshot[k]) for k in ['entities','sources','claims']},'third_party_payload_count':0,'new_code_license':'MIT','public_ready':False,'snapshot_contract_keys':['public_main'],'private_snapshot_contracts_included':False,'candidate_overlay':{'included':True,'enabled_by_default':False,'adoption_state':'not_adopted','base_snapshot_unchanged':True},'rights_gate':{'status':'passed','new_code_license':'MIT','third_party_permission':'not extended'},'content_gate':readiness['content_gate'],'operation_grant':readiness['operation_grant'],'artifact_version':readiness['release_version'],'publication_hold':[readiness['reason']],'files':{}}
 for p in sorted(destination.rglob('*')):
  if p.is_file():
   raw=p.read_bytes();manifest['files'][str(p.relative_to(destination))]={'bytes':len(raw),'sha256':hashlib.sha256(raw).hexdigest()}
 (destination/'release-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 return manifest
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('destination',type=pathlib.Path);args=parser.parse_args();m=package(args.destination.resolve());print(json.dumps({'destination':str(args.destination.resolve()),'counts':m['counts'],'payload_files':len(m['files'])}))
