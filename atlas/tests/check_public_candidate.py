"""Inspect the exact public-candidate directory for excluded operational metadata."""
import argparse,json,pathlib,re
PATTERNS=[re.compile(r'libfile_[0-9a-f]{20,}'),re.compile(r'file_000000[0-9a-f]+'),re.compile('/'+'workspace/'),re.compile('/'+'tmp/'),re.compile(r'oaiusercontent\.com'),re.compile(r'"download_url"\s*:'),re.compile(r'"completion_token"\s*:')]
def check(root):
 found=[]
 for p in root.rglob('*'):
  if p.is_symlink():found.append(str(p.relative_to(root))+':symlink');continue
  if not p.is_file():continue
  if any(part in {'.git','__pycache__'} for part in p.relative_to(root).parts):found.append(str(p.relative_to(root))+':excluded directory')
  if p.suffix.lower() in {'.png','.jpg','.jpeg','.zip'}:continue
  text=p.read_text(encoding='utf-8')
  if any(pattern.search(text) for pattern in PATTERNS):found.append(str(p.relative_to(root)))
 if found:raise ValueError('Excluded metadata found: '+', '.join(found))
 license_files=[p for p in [root/'atlas/LICENSE',root/'code/LICENSE',root/'source/atlas/LICENSE',root/'release/code/LICENSE'] if p.is_file()]
 for license_file in license_files:
  assert license_file.read_text().startswith('MIT License\n')
  scope=json.loads(license_file.with_name('LICENSE-SCOPE.json').read_text());assert scope['identifier']=='MIT' and scope['approval_status']=='owner_approved'
 print(json.dumps({'root_name':root.name,'public_metadata_scan':'pass','new_code_license':'MIT' if license_files else 'not_applicable_to_this_check','public_ready':False,'remaining_gate':'target-specific public operation grant pending parent verification'}))
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('directory',type=pathlib.Path);a=parser.parse_args();check(a.directory)
