"""Rebuild from pinned files with Python stdlib; works without .git."""
import argparse,csv,hashlib,io,json,pathlib
ROOT=pathlib.Path(__file__).resolve().parents[1]
BASE_COMMIT='bf35b90509547fc1b2c550f47349d3f288cbf8e1'
QUEUE='research/full-corpus-review/open-claim-source-queue-v013.csv'
TRIAGE='research/full-corpus-review/open-claim-queue-v013-triage-v001.md'
PRIORITY='research/full-corpus-review/priority-1-corpus-correction-review-v001.md'
SUMMARY={
 'claim_0209':'夢の登場人物・順序の圧縮に修正文案あり。二つの夢を区別する判断待ち。原掲載pp.43–45は未読。',
 'claim_0215':'地蔵と石碑を建てた別々の所有者と、不吉な出来事との因果表現が判断待ち。原掲載p.108は未読。',
 'claim_0335':'殺された鞍作りの霊と生前のお光の動作・死の順序に修正文案あり。現locatorは既存調査で確認され、別の研究ノートに頁ずれがある。採用判断待ち。',
 'claim_0381':'娘への変化は記録されるが、後の僧が狐の変身と断定できるか判断待ち。同名狐との同一性も未確認。',
 'claim_0440':'二人の悪病の神を一者の二姿と読ませる表現の判断待ち。原掲載p.96は未読。',
 'claim_0458':'若衆と後の河童の死骸は同一と明記されない。現claimの中立的な順序表現は書換え提案なし。identityとsource-chainは保留。',
 'claim_0462':'複数の狐への集合的呼称と単独個体の区別が判断待ち。単一の名付き個体へ自動統合しない。',
 'claim_0761':'狐が酒を要求し、百姓が瓶を投げる動作と、現claim・locatorの「取り上げる」の差が判断待ち。頁画像の再確認ゲートあり。',
 'claim_0837':'解説の「生け贄」と現claimの「おとり」の役割表現が判断待ち。歴史的事実の認定ではない。',
 'claim_0061':'既存調査では登録甲賀市URLが404へ遷移し、該当ページを直接読めていない。検索snippetや別の市記事・論文を同一ページの実読に代用しない。'}
def canonical(value):return json.dumps(value,ensure_ascii=False,sort_keys=True,separators=(',',':'),allow_nan=False).encode('utf-8')
def build(root=ROOT,release=False,output=None):
 manifest_path=root/('code/build-inputs.json' if release else 'atlas/build-inputs.json')
 manifest=json.loads(manifest_path.read_text())
 def path(name):
  if not release:return root/name
  if name.startswith('data/'):return root/'data/public-main'/pathlib.PurePosixPath(name).name
  if name.startswith('atlas/'):return root/'code'/pathlib.PurePosixPath(name).name
  return root/'data/public-main'/name
 def read(name):return path(name).read_bytes()
 for name,expected in manifest['files'].items():
  raw=read(name)
  if len(raw)!=expected['bytes'] or hashlib.sha256(raw).hexdigest()!=expected['sha256']:raise ValueError('Pinned build input mismatch: '+name)
 data={key:[json.loads(l) for l in read('data/'+key+'.jsonl').decode('utf-8').splitlines() if l.strip()] for key in ('entities','sources','claims')}
 data['snapshot']={'id':'public-main-bf35b905','commit':BASE_COMMIT,'origin':'https://github.com/Anko-romochi/japan-yokai-index','scope':'public main snapshot; SERVER export not included','files':{k:hashlib.sha256(read('data/'+k+'.jsonl')).hexdigest() for k in ('entities','sources','claims')}}
 data['research_packs']={pathlib.PurePosixPath(n).parent.name:read(n).decode('utf-8') for n in sorted(manifest['files']) if n.startswith('research/source_deepening/') and n.endswith('/evidence-pack.md')}
 docs=[n for n in manifest['files'] if n.startswith('research/full-corpus-review/')]
 data['research_documents']={n:read(n).decode('utf-8') for n in sorted(docs)}
 data['research_annotations']=[]
 timeline=json.loads(read('atlas/research-timeline.json'))
 data['research_documents']['atlas/research-timeline.json']=read('atlas/research-timeline.json').decode('utf-8')
 for row in csv.DictReader(io.StringIO(read(QUEUE).decode('utf-8'))):
  cid=row['claim_id'];number=int(cid.split('_')[1]);refs=[TRIAGE,QUEUE]
  if cid in SUMMARY and cid!='claim_0061':refs.append(PRIORITY)
  elif cid=='claim_0061':refs.append('research/full-corpus-review/source-check-batch-089-notes-v001.md')
  elif 336<=number<=341:refs.append('research/full-corpus-review/munakata-six-source-chain-follow-up-v001.md')
  summary=SUMMARY.get(cid,'一覧・DBカードと書誌locatorは読まれているが、原掲載の該当頁またはidentityの確認が未到達。深度を格上げしない。')
  data['research_annotations'].append({'claim_id':cid,'entity_id':row['entity_id'],'historical_status':'open_as_of_queue_v013','research_status':'unknown','recorded_on':'2026-09-28','queue':'v013','current_result':row['current_result'],'summary_ja':summary,'registered_source_directly_read':row['registered_source_directly_read']=='yes','recorded_locations':json.loads(row['recorded_locations']),'next_gate':row['follow_up'],'evidence_refs':refs,'historical_notice':'旧v013研究ログの保留注記。この票は原DBを書換えずに作られたものであり、後続コミットによる修正済み状態とは別に保持する。'})
 for record in data['research_annotations']:
  current=timeline['records'].get(record['claim_id'])
  record['historical_summary_ja']=record['summary_ja']
  record['historical_next_gate']=record['next_gate']
  if current:
   record['evidence_refs']=list(dict.fromkeys(record['evidence_refs']+current.get('evidence_refs',[])))
   record.update({k:v for k,v in current.items() if k!='evidence_refs'})
  else:record['summary_ja']='旧v013票に保留記録あり。後続修正・現行文との解消状態はこの追加層で未照合。元の指摘：'+record['historical_summary_ja']
 for record in data['research_annotations']:
  record['notice']=('主要文言の修正済みを現行公開HEADから読み込んだ現在の注記。旧票の保留はhistorical_noticeに分離する。史実性やentity粒度の解決とは区別する。' if record['research_status']=='resolved_for_reported_issue' else '旧研究票と後続履歴・現行文を照合した現在の追加注記。直近資料の照合、上流原典の実読、文言候補、同一性を別軸として保持し、今回の原典再実読とは区別する。')
  record['next_gate']={
   'resolved_for_reported_issue':'主要文言修正の履歴は確認済み。原典真偽やentity粒度の別論点を自動解決しない。',
   'wording_recheck_candidate':'既存priority-1文案と該当資料を再確認し、文言・必要なlocatorの採否を個別判断する。原DBは判断前に変更しない。',
   'identity_unassessed':'若衆と河童の死骸の同一性を明記する根拠を確認する。現claimの中立的な順序表現は書換えない。',
   'registered_page_unread':'登録市ページの同一ページの検証可能な保存版または原資料を確認する。別記事やsnippetで実読を代用しない。',
   'upstream_original_unread':'記録された原掲載の指定頁・巻号・書誌を確認する。登録された直近資料の照合と原掲載本文の実読を分ける。'
  }.get(record['research_status'],'後続修正と現行文を照合し、現在状態を確定する。')
 assert len(data['research_annotations'])==21
 payload_keys=['entities','sources','claims','research_packs','research_annotations','research_documents']
 data['snapshot']['payload_sha256']={k:hashlib.sha256(canonical(data[k])).hexdigest() for k in payload_keys}
 data['snapshot']['integrity_method']='sha256-canonical-json-sorted-keys-utf8-v1'
 target=pathlib.Path(output) if output else root/('data/public-main/snapshot.json' if release else 'atlas/snapshot.json')
 target.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
 return data
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--root',type=pathlib.Path);parser.add_argument('--release-root',type=pathlib.Path);parser.add_argument('--output',type=pathlib.Path);a=parser.parse_args();d=build((a.release_root or a.root or ROOT).resolve(),bool(a.release_root),a.output);print({k:len(d[k]) for k in ('entities','sources','claims','research_annotations')})
