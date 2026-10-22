import {validateOverlay,candidatesFor} from './overlay.mjs';
import { readSnapshot, verifySnapshotPayload } from './reader.mjs';
import { TEN_TARGETS, exportBundle, sealBundle, claimResearchStatus } from './research.mjs';
import { zipFiles } from './zip.mjs';
import { search, related, sourceCount, safeURL, card, markdown, sourceMetrics } from './core.mjs';

const $ = id => document.getElementById(id);
const el = (tag, text) => {
  const node = document.createElement(tag);
  if (text != null) node.textContent = text;
  return node;
};
const packs = {
  kasha: 'kasha', tofu_kozo: 'tofu-kozo', atago_tarobo: 'atago-tarobo',
  oiwa: 'oiwa', kinnaga: 'kinnaga-rokuemon', rokuemon: 'kinnaga-rokuemon',
  hanako_san: 'hanako-san', kotoribaa: 'kotoribaa', aburatori: 'aburatori', aka_manto: 'aka-manto'
};
let data, selected, candidateOverlay=null;
let overlayEnabled=false;
let chosenClaims = new Set();

function renderResults() {
  const list = search(data, $('query').value, $('multiple').checked);
  $('count').textContent = `${list.length} 件 / 全 ${data.entities.length} 件`;
  $('results').replaceChildren();
  for (const entity of list) {
    const button = el('button', `${entity.name_ja} · ${sourceCount(data, entity.id)} source records`);
    button.setAttribute('aria-current', String(entity.id === selected));
    button.onclick = () => show(entity.id);
    $('results').append(button);
  }
  if (!list.length) $('results').append(el('p', '該当なし。検索語や条件を変更してください。'));
}

function appendSourceRows(table, claims, sources) {
  for (const source of sources) {
    const row = el('tr');
    const bibliography = el('td');
    bibliography.append(
      el('strong', source.title),
      el('p', `${source.author ?? '著者未記録'} / ${source.date ?? '年未記録'} / ${source.repository ?? '所蔵未記録'}`),
      el('small', `${source.id} / ${source.source_type} / 確認日 ${source.accessed_on ?? '未記録'}`)
    );
    const url = safeURL(source.source_url);
    if (url) {
      const link = el('a', '典拠を開く ↗');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      bibliography.append(el('br'), link);
    } else bibliography.append(el('p', '有効なURL未記録'));
    const descriptions = el('td');
    for (const claim of claims.filter(c => c.evidence_source_ids.includes(source.id))) {
      const research = claimResearchStatus(data, claim.id);
      if (research.historical_status === 'open_as_of_queue_v013') {
        const warning = el('p', `研究記録：${research.research_status === 'resolved_for_reported_issue' ? '指摘事項の修正済み' : research.research_status === 'wording_recheck_candidate' ? '文言再確認候補' : research.research_status === 'identity_unassessed' ? '同一性未判定・文言書換え提案なし' : research.research_status === 'upstream_original_unread' ? '背後の原掲載未読' : research.research_status === 'registered_page_unread' ? '登録ページ未読・既存記録にリンク不達' : '現在状態未照合'}（旧v013票はopen）：${research.summary_ja}`); warning.className = 'notice';
        descriptions.append(warning, el('p', `次の確認：${research.next_gate}`));
        const evidence = el('details'); evidence.append(el('summary', '状態と履歴の根拠となる既存研究記録'));
        for (const ref of research.evidence_refs) evidence.append(el('strong', ref), el('pre', data.research_documents?.[ref] ?? '記録未収録'));
        descriptions.append(evidence);
      }
      descriptions.append(
        el('p', claim.claim_ja),
        el('small', `${claim.id} / ${claim.layer} / ${claim.confidence} / ${claim.review_status}`),
        el('p', `位置：${claim.evidence_locations?.[source.id] ?? '未記録'}`)
      );
    }
    row.append(bibliography, descriptions, el('td',
      (source.rights_note || '権利未確認') + ' 図版の再配布許諾としては扱いません。書出しに画像は含まれません。'
    ));
    table.append(row);
  }
}

function refreshSelection(claims) {
  $('selectionStatus').textContent = `持出す根拠：${chosenClaims.size} / ${claims.length} 主張`;
  const empty = claims.length > 0 && chosenClaims.size === 0;
  for (const button of document.querySelectorAll('[data-export]')) button.disabled = empty;
  if (empty) $('exportStatus').textContent = '持出す根拠を1件以上選んでください。';
  else $('exportStatus').textContent = '';
}

function appendSelection(detail, claims) {
  const fieldset = el('fieldset');
  fieldset.id = 'claimSelection';
  fieldset.append(el('legend', '持出す根拠を選ぶ'));
  fieldset.append(el('p', '初期状態は全件です。選択対象外のclaim IDも記録します。選択は史実性・独立性・利用許諾の認定ではありません。'));
  for (const claim of claims) {
    const label = el('label');
    const checkbox = el('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.value = claim.id;
    checkbox.onchange = () => {
      if (checkbox.checked) chosenClaims.add(claim.id);
      else chosenClaims.delete(claim.id);
      refreshSelection(claims);
    };
    label.append(checkbox, document.createTextNode(` ${claim.id} — ${claim.claim_ja}`));
    fieldset.append(label);
  }
  const status = el('p');
  status.id = 'selectionStatus';
  status.setAttribute('role', 'status');
  fieldset.append(status);
  detail.append(fieldset);
}

async function download(id, kind) {
  const status = $('exportStatus');
  try {
    const chosen = [...chosenClaims];
    const bundle = await sealBundle(exportBundle(data, id, $('notes').value, chosen, overlayEnabled ? candidateOverlay : null));
    const blob = kind === 'zip'
      ? zipFiles({ ...bundle.files, 'export-manifest.json': JSON.stringify(bundle.manifest, null, 2) + '\n' })
      : new Blob([kind === 'json' ? bundle.files['card.json'] : bundle.files['card.md']], {
        type: kind === 'json' ? 'application/json;charset=utf-8' : 'text/markdown;charset=utf-8'
      });
    const url = URL.createObjectURL(blob);
    const link = el('a');
    link.href = url;
    link.download = `jyi-${id}.${kind === 'json' ? 'json' : kind === 'zip' ? 'zip' : 'md'}`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = '書出し済み。図版ファイルは含みません。';
  } catch (error) {
    status.textContent = `書出し失敗：${error.message}`;
  }
}

function appendExport(detail, id, claims) {
  detail.append(el('h3', '出典付き制作カード'));
  appendSelection(detail, claims);
  const label = el('label', '制作メモ（研究claimと分離）');
  label.htmlFor = 'notes';
  const notes = el('textarea');
  notes.id = 'notes';
  const key = `jyi-note-${data.snapshot.id || 'public-main-bf35b905'}-${id}`;
  try { notes.value = localStorage.getItem(key) || ''; } catch { /* Local notes still work in memory. */ }
  notes.oninput = () => {
    try { localStorage.setItem(key, notes.value); }
    catch { $('exportStatus').textContent = 'ブラウザへのメモ保存は利用できません。書出しには現在のメモを含めます。'; }
  };
  detail.append(label, notes);
  for (const [kind, name] of [['zip', '根拠付きZIPを取り出す'], ['json', 'JSONを書出し'], ['md', 'Markdownを書出し']]) {
    const button = el('button', name);
    button.dataset.export = kind;
    button.onclick = () => download(id, kind);
    detail.append(button);
  }
  const status = el('p');
  status.id = 'exportStatus';
  status.setAttribute('role', 'status');
  detail.append(status);
  refreshSelection(claims);
}

function show(id, preserveSelection=false) {
  const previousSelection=preserveSelection && selected===id ? new Set(chosenClaims) : null;
  const previousNotes=previousSelection && $('notes') ? $('notes').value : null;
  const entity = data.entities.find(e => e.id === id);
  if (!entity) return;
  selected = id;
  const claims = related(data, id);
  chosenClaims = previousSelection ?? new Set(claims.map(c => c.id));
  renderResults();
  const sources = data.sources.filter(s => claims.some(c => c.evidence_source_ids.includes(s.id)));
  const metrics = sourceMetrics(data, id);
  const detail = $('detail');
  detail.replaceChildren(
    el('h2', entity.name_ja),
    el('p', `${entity.name_kana || '読み未記録'} / ${entity.id} / ${entity.research_status}`),
    el('p', `資料で確認された地域：${entity.attested_regions?.join('、') || '未記録'} ／ 時期：${entity.attested_periods?.join('、') || '未記録'}`)
  );
  const notice = el('p', sources.length < 2
    ? '現索引は単一出典です。異説比較の材料は不足しています。'
    : '資料別の記述比較です。異説の判定、資料間の独立性、形成過程は未評価です。');
  if (sources.length > 1 && metrics.distinct_document_pages < 2) notice.textContent = '複数source recordsですが、確認できる資料ページは1件以下です。異説比較の材料は不足しています。';
  notice.className = 'notice';
  if (!claims.length) notice.textContent = 'この対象にはclaimがありません。根拠未収録として書出します。';
  detail.append(notice, el('p', 'source recordsは登録ID数、資料ページはURLを正規化した数です。同一ページの重複登録は独立資料として数えません。URLの異なるページ同士も独立性は未判定です。'), el('p', 'source_fact は出典の記述についての事実。reviewed は既存の出典照合状態であり、伝承の史実性や今回の再照合を保証しません。'),
    el('h3', `出典別比較 · ${claims.length} 主張 / ${metrics.source_records} source records / ${metrics.distinct_document_pages} 資料ページ`));
  const wrap = el('div');
  wrap.className = 'comparison';
  const table = el('table');
  const head = el('tr');
  for (const text of ['資料・典拠へ', '主張・位置・照合状態', '図版の再利用条件']) head.append(el('th', text));
  table.append(head);
  appendSourceRows(table, claims, sources);
  wrap.append(table);
  detail.append(wrap, el('p', '記述区分：JYI既存claimの独自要約。原文引用・翻刻ではありません。今回の閲読範囲はsnapshot内のclaim・locatorと既存調査記録です。'));
  appendCandidateComparisons(detail,id);
  if (data.research_packs?.[packs[id]]) {
    const record = el('details');
    record.append(el('summary', '既存の調査記録・未解決点（snapshot時点）'), el('pre', data.research_packs[packs[id]]));
    detail.append(record);
  }
  appendExport(detail, id, claims);
  if(previousNotes!==null)$('notes').value=previousNotes;
  for(const checkbox of document.querySelectorAll('#claimSelection input'))checkbox.checked=chosenClaims.has(checkbox.value);
  refreshSelection(claims);
  location.hash = id;
}

function appendCandidateComparisons(detail,id) {
 if(!overlayEnabled||!candidateOverlay)return;
 const items=candidatesFor(data,candidateOverlay,id);
 if(!items.length)return;
 const section=el('section');section.id='candidateComparison';
 section.append(el('h3','修正候補（未採用・元snapshotとは別）'),el('p',candidateOverlay.scope_notice));
 for(const item of items){
  section.append(el('h4',item.claim_id),el('p','元の文：'+item.original.claim_ja),el('p','候補文：'+item.candidate.claim_ja),el('p','元locator：'+Object.entries(item.original.evidence_locations).map(([source,location])=>source+'：'+location).join(' ／ ')),el('p','候補locator：'+Object.entries(item.candidate.evidence_locations).map(([source,location])=>source+'：'+location).join(' ／ ')),el('p','読んだ層：'+item.evidence_layer.read_extent),el('p','未読の原資料・範囲：'+item.evidence_layer.underlying_unread),el('p','未確認：'+item.remaining_unverified),el('small','検証報告：'+item.evidence_layer.checked_at+' / 実装担当による再取得ではありません。'),el('p','採用状態：未採用'));
  const link=el('a','候補の検証対象となった典拠を開く ↗');link.href=safeURL(item.evidence_layer.source_url);link.target='_blank';link.rel='noopener noreferrer';section.append(link);
 }
 detail.append(section);
}
async function loadCandidateOverlay(){
 try{
  const response=await fetch('./corrections-candidate.json');if(!response.ok)throw Error('HTTP '+response.status);
  candidateOverlay=validateOverlay(data,await response.json());
  $('candidateEnabled').disabled=false;
  $('candidateEnabled').checked=false;overlayEnabled=false;
  $('candidateStatus').textContent=candidateOverlay.items.length+'件の文言・locator候補。初期状態は無効、すべて未採用です。';
  $('candidateEnabled').onchange=()=>{overlayEnabled=$('candidateEnabled').checked;if(selected)show(selected,true)};
  for(const item of candidateOverlay.items){const entity=data.entities.find(e=>e.id===item.entity_id);const button=el('button','候補を見る：'+entity.name_ja);button.onclick=()=>{overlayEnabled=true;$('candidateEnabled').checked=true;show(entity.id,selected===entity.id)};$('candidateTargets').append(button)}
 }catch(error){$('candidateStatus').textContent='修正候補は利用できません：'+error.message+'。元snapshotの検索・exportは継続できます。';}
}

try {
  const response = await fetch('./snapshot.json');
  if (!response.ok) throw Error(`HTTP ${response.status}`);
  data = await verifySnapshotPayload(readSnapshot(await response.json()).data);
  $('snapshot').textContent = `公開正本 snapshot · ${data.entities.length} 対象 / ${data.sources.length} source records / ${data.claims.length} 主張 · ${data.snapshot.commit.slice(0, 12)}（SERVER追加分は未収録）· 実payloadの宣言hashとの整合確認済み（発行者真正性の認証ではありません）`;
  $('query').oninput = renderResults;
  $('multiple').onchange = renderResults;
  for (const id of TEN_TARGETS) {
    const button = el('button', data.entities.find(e => e.id === id).name_ja);
    button.onclick = () => show(id);
    $('pilots').append(button);
  }
  const licensing = el('p', '道具コード：MIT（著作権表示とlicense文を保持）。既存データと第三者資料の条件は別です。');
  licensing.id = 'licensing';
  const licenseLink = el('a', 'コードのLICENSE'); licenseLink.href = './LICENSE';
  const noticesLink = el('a', '権利の区分'); noticesLink.href = './THIRD-PARTY-NOTICES.txt';
  licensing.append(document.createTextNode(' '), licenseLink, document.createTextNode(' ／ '), noticesLink);
  document.querySelector('main').append(licensing);
  await loadCandidateOverlay();
  renderResults();
  show(decodeURIComponent(location.hash.slice(1)));
  window.addEventListener('hashchange', () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id !== selected) show(id);
  });
} catch (error) {
  $('snapshot').textContent = `読込み失敗：${error.message}。READMEの起動手順を確認してください。`;
}
