"""Verify and serve the isolated candidate locally, using Python stdlib only."""
import argparse,hashlib,http.server,json,pathlib,urllib.parse
ROOT=pathlib.Path(__file__).resolve().parent
ALLOWED_AUXILIARY_FILES={'release-manifest.json'}

def verify():
 manifest=json.loads((ROOT/'release-manifest.json').read_text())
 expected_files=set(manifest['files'])|ALLOWED_AUXILIARY_FILES
 actual_files=set()
 for path in ROOT.rglob('*'):
  if path.is_symlink():raise ValueError('Release symlink is not allowed')
  if path.is_file():actual_files.add(path.relative_to(ROOT).as_posix())
 if actual_files!=expected_files:
  raise ValueError('Unlisted or missing release payload: extra='+str(sorted(actual_files-expected_files))+' missing='+str(sorted(expected_files-actual_files)))
 for name,expected in manifest['files'].items():
  path=(ROOT/name).resolve()
  if not path.is_relative_to(ROOT):raise ValueError('Unsafe manifest path')
  raw=path.read_bytes()
  if len(raw)!=expected['bytes'] or hashlib.sha256(raw).hexdigest()!=expected['sha256']:raise ValueError('Release payload mismatch: '+name)
 print('PASS: '+str(len(manifest['files']))+' release payloads verified',flush=True)

class Handler(http.server.SimpleHTTPRequestHandler):
 def __init__(self,*args,**kwargs):super().__init__(*args,directory=str(ROOT/'code'),**kwargs)
 def translate_path(self,path):
  if urllib.parse.urlsplit(path).path=='/corrections-candidate.json':return str(ROOT/'data/candidates/corrections-candidate.json')
  if urllib.parse.urlsplit(path).path=='/snapshot.json':return str(ROOT/'data/public-main/snapshot.json')
  return super().translate_path(path)

if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=8766);parser.add_argument('--check-only',action='store_true');args=parser.parse_args();verify()
 if not args.check_only:
  print(f'Open http://127.0.0.1:{args.port}/ — stop with Ctrl+C',flush=True)
  with http.server.ThreadingHTTPServer(('127.0.0.1',args.port),Handler) as server:server.serve_forever()
