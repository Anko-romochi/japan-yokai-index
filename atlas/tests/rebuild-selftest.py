"""Exercise a clean copied distribution with no Git, then detect a changed input."""
import argparse,hashlib,json,os,pathlib,shutil,subprocess,sys,tempfile
parser=argparse.ArgumentParser();parser.add_argument('source',type=pathlib.Path);parser.add_argument('report',type=pathlib.Path);a=parser.parse_args()
with tempfile.TemporaryDirectory(prefix='jyi-rebuild-') as directory:
 root=pathlib.Path(directory)/'source';shutil.copytree(a.source,root)
 assert not (root/'.git').exists()
 snapshot=root/'atlas/snapshot.json';before=hashlib.sha256(snapshot.read_bytes()).hexdigest()
 environment=os.environ.copy();environment['PATH']=''
 rebuilt=subprocess.run([sys.executable,str(root/'atlas/build.py')],cwd=root,env=environment,capture_output=True,text=True,check=True)
 assert hashlib.sha256(snapshot.read_bytes()).hexdigest()==before
 subprocess.run([sys.executable,'scripts/validate_corpus.py'],cwd=root,capture_output=True,text=True,check=True)
 node=shutil.which('node');tests=sorted(str(p.relative_to(root)) for p in (root/'atlas/tests').glob('*.test.mjs'))
 subprocess.run([node,'--test',*tests],cwd=root,capture_output=True,text=True,check=True)
 corpus=root/'data/claims.jsonl';corpus.write_bytes(corpus.read_bytes()+b'\n')
 rejected=subprocess.run([sys.executable,str(root/'atlas/build.py')],cwd=root,env=environment,capture_output=True,text=True)
 assert rejected.returncode!=0 and 'Pinned build input mismatch' in rejected.stderr
 report={'passed':True,'source_candidate':a.source.name,'git_directory':False,'build_PATH':'empty; absolute existing Python runtime','snapshot_byte_identical':True,'validator':'pass','node_tests':'all shipped Node tests pass','changed_input':'rejected before build','original_candidate_mutated':False}
 a.report.write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report))
