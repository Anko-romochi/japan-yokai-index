"""Regression for release --check-only using an independent copied candidate."""
import argparse,json,pathlib,shutil,subprocess,sys,tempfile
parser=argparse.ArgumentParser();parser.add_argument('release',type=pathlib.Path);parser.add_argument('report',type=pathlib.Path);args=parser.parse_args()
with tempfile.TemporaryDirectory(prefix='jyi-release-set-') as directory:
 root=pathlib.Path(directory)/'release';shutil.copytree(args.release,root)
 passed=subprocess.run([sys.executable,'serve.py','--check-only'],cwd=root,capture_output=True,text=True,check=True)
 (root/'code/UNLISTED.txt').write_text('Synthetic extra file; no private material')
 extra=subprocess.run([sys.executable,'serve.py','--check-only'],cwd=root,capture_output=True,text=True)
 assert extra.returncode!=0 and 'Unlisted or missing release payload' in extra.stderr
 (root/'code/UNLISTED.txt').unlink()
 (root/'code/core.mjs').unlink()
 missing=subprocess.run([sys.executable,'serve.py','--check-only'],cwd=root,capture_output=True,text=True)
 assert missing.returncode!=0 and 'Unlisted or missing release payload' in missing.stderr
 report={'passed':True,'release_candidate':args.release.name,'original_candidate_mutated':False,'exact_manifest_set':'passed','allowed_auxiliary_files':['release-manifest.json'],'extra_code_UNLISTED_txt':'rejected','missing_listed_code_file':'rejected','test_target':'independent temporary copy'}
 args.report.write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
