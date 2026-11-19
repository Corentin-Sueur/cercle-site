import{a as e,d as t,f as n,i as r,l as i,n as a,u as o}from"./styles-CFcbIZ0h.js";import{a as s,c,d as l,i as u,l as d,o as f,s as p,t as m,u as h}from"./company-nBJPkJdT.js";import{i as g,n as _,t as v}from"./table-D1qczLg5.js";var y={jorfsearch:{title:`JORFSearch`,about:`Every appointment published in the Journal officiel since 1990, structured by Nathann Cohen. The backbone: offices, boards, careers, and the Légion d'honneur and Ordre national du Mérite lists with the proposing ministry.`},hatvp_declarations:{title:`HATVP declarations`,about:`Declarations of interests filed by ministers, members of Parliament and local leaders: birth dates, jobs, consulting, board roles, shareholdings and the spouse's employer (the spouse's name is withheld by the HATVP).`},assemblee_amo:{title:`Assemblée nationale`,about:`Deputies since 2002 with birth dates, seats, parliamentary groups and the outside bodies they sit on (earlier deputies come from Wikidata).`},senat_senateurs:{title:`Sénat`,about:`Every senator with birth date, seats, groups and outside bodies.`},senat_collaborateurs:{title:`Sénat staff list`,about:`The current collaborators of each senator, published by the Sénat as a list; names only, matched through the shared boss.`},subsidies:{title:`State subsidies`,about:`Every subsidy the State paid to an association, from the yearly budget annex (2013–2020 and 2023; the 2021 and 2022 lists were never published as data), kept for the organisations in the network and matched on the company number, plus the réserve parlementaire grants of 2016 and 2017 whose named deputy or senator is in the network, matched on name and full birth date.`},budget_programmes:{title:`Budget nomenclature`,about:`The budget programmes, missions and ministries of the 2025 finance bill, completed with the 2022, 2020 and 2018 nomenclatures and the annex's own labels for programmes that no longer exist, used to name the programme behind each subsidy.`},elus:{title:`Répertoire national des élus`,about:`Every sitting mayor, municipal, arrondissement, departmental and regional councillor, EPCI executive and territorial assembly member, with full birth dates, matched on name and birth date.`},wikidata_births:{title:`Wikidata births`,about:`Birth dates for people whose name matches a single politician or civil servant of plausible age.`},deaths:{title:`INSEE deaths file`,about:`Death dates of people in the network, matched on surname, first name and full birth date against the monthly files since 1970; a death closes every role still open.`},wikidata_careers:{title:`Wikidata careers`,about:`Employers, positions, schools and parties for people with a Wikidata id.`},company_directors:{title:`Company register`,about:`Current or last known company directorships (recherche-entreprises), matched on name and birth month.`},bodacc_notices:{title:`BODACC`,about:`Official notices of company changes, used to date register roles from the first notice naming the person.`},hatvp_liste:{title:`HATVP declarant list`,about:`Links each declarant to their public page on hatvp.fr.`},european_parliament:{title:`European Parliament`,about:`French members of the European Parliament since 1979 and current members from the other member states, with birth dates, political groups, national parties and committees.`},ep_meetings:{title:`European Parliament meetings`,about:`Meetings with interest representatives declared by members of the European Parliament since 2019, from each member's page.`},wikidata_parliament_ids:{title:`Wikidata ids of members of Parliament`,about:`Wikidata items of members of the Assemblée, the Sénat and the European Parliament, matched on their official ids.`},wikidata_ena:{title:`Wikidata ENA classes`,about:`Named ENA classes since 1946 and the class of people with a Wikidata id, which adds classes before 1990 that the Journal officiel does not cover.`},wikidata_family:{title:`Wikidata family ties`,about:`Spouses, parents, children and siblings recorded in Wikidata, kept when both people are in the network, and the ties one relative away (grandparents, aunts and uncles, in-laws) when the relative in between is outside it.`},wikidata_deputies:{title:`Wikidata deputies`,about:`Deputies of the Fifth Republic before 2002, with birth dates, which Assemblée open data does not cover.`},company_profiles:{title:`Company register, organisations from Wikidata`,about:`Legal form, activity, size and headcount of the companies known only through a Wikidata item, looked up by company number.`},company_finances:{title:`Company accounts`,about:`Latest published revenue of the matched companies (recherche-entreprises), for those that publish their accounts.`},public_contracts:{title:`Public contracts (DECP)`,about:`Consolidated public procurement data, kept for the companies in the network, matched by company number.`},grants:{title:`ADEME aid and Premier ministre subsidy files`,about:`The aid ADEME grants to companies and associations from its own budget since 2021, with the scheme behind each grant, and the subsidies the Premier ministre's cabinet and the DILCRAH published for 2017–2021 under the common subsidies schema, kept for the organisations in the network by company number; the Premier ministre's files count only for the years the budget annex lacks, since the annex already lists their payments.`},boamp:{title:`BOAMP award notices`,about:`Contract award notices published in the BOAMP since 2015, kept when the winner's name is exactly that of a company in the network; the buyer's category is the one the notice declares, and an amount is kept only when the notice has a single winner.`},hatvp_opinions:{title:`HATVP opinions on moves`,about:`Published opinions of the HATVP on officials and advisers moving to the private sector, with the verdict and the planned move read from each opinion.`},eu_transparency_register:{title:`EU Transparency Register`,about:`Organisations registered to lobby the EU institutions, with their category and head-office country; linked to European Parliament meetings by register number only.`},hatvp_lobbies:{title:`HATVP register of lobbies`,about:`Organisations that lobby, with their yearly declared activities and the public officials targeted; linked to companies by company number.`},state_companies:{title:`State-controlled companies (INSEE)`,about:`The INSEE register of companies majority-controlled by the State, with their company numbers, as of the end of 2016 and 2017, the last editions published as a list.`},wikidata_sirens:{title:`Wikidata SIRENs`,about:`Company numbers of Wikidata organisations, so an employer in Wikidata and a company in the register are one organisation.`}},b={company:`Companies`,public:`Public bodies`,school:`Schools`,party:`Parties and groups`,other:`Other bodies`},x={r:`Company register`,h:`HATVP`,p:`Assemblée, Sénat or European Parliament`,d:`Wikidata deputies`,w:`Wikidata`,"":`Unknown`},S={sex:`records under the name describe both a man and a woman`,many:`records from the same years describe an unrelated profession`,ena:`the name appears in several ENA classes`,order:`a government post precedes the adviser role`,age:`the birth date makes the first appointment implausible`,birth:`HATVP and Wikidata disagree on the birth year`,span:`board seats under the name span more than 35 years`,jo:`a member of Parliament shares a name with an undated Journal officiel person`},C={e:`--elysee`,m:`--matignon`,i:`--ministry`,b:`--board`,c:`--org`};function w(t){let r=(t,r)=>n`<div><dt>${e(t??0)}</dt><dd>${o(r)}</dd></div>`;return n`<dl class="facts tiles">
    ${r(t.people,`people in the network`)}
    ${r(t.europeanMembers,`members of the European Parliament from the other member states`)}
    ${r(t.officePeople,`appointed to a minister's office, the Élysée, Matignon or the government`)}
    ${r(t.offices,`ministerial offices, Élysée and Matignon teams`)}
    ${r(t.boards,`state boards`)}
    ${r(t.officeTies,`pairs of people who shared an office`)}
    ${r(t.repeatPairs,`pairs who worked together in two or more separate stints`)}
    ${r(t.ministers,`members of government`)}
    ${r(t.ena,`office people with an ENA class in the Journal officiel`)}
    ${r(t.organisations,`companies, schools, parties and bodies shared by two or more people`)}
    ${r(t.officeToCompany,`office people with a known job in a company or private organisation`)}
  </dl>`}var T=[{key:1,label:`Élysée`,color:`--elysee`},{key:2,label:`Matignon`,color:`--matignon`},{key:3,label:`Ministers' offices`,color:`--ministry`}];function E(e,t){let n=e.map((e,t)=>[e,t]).sort((e,t)=>e[0]-t[0]),r=e.slice(),i=-1/0;for(let[e,a]of n)i=Math.max(e,i+t),r[a]=i;return r}function D(t,r,i){let a=t.filter(e=>e[1]+e[2]+e[3]>0);if(a.length<2)return n``;let s={l:40,r:112,t:12,b:28},c=a[0]?.[0]??0,l=a[a.length-1]?.[0]??1,u=Math.max(...a.map(e=>Math.max(...r.map(t=>e[t.key])))),d=[10,20,25,50,100,200,250,500].find(e=>u/e<=6)??1e3,f=Math.ceil(u/d)*d,p=e=>s.l+(e-c)/(l-c)*(520-s.l-s.r),m=e=>s.t+(1-e/f)*(240-s.t-s.b),h=Array.from({length:f/d+1},(e,t)=>t*d),g=a.map(e=>e[0]).filter(e=>e%5==0),_=a[a.length-1],v=_?E(r.map(e=>m(_[e.key])+4),14):[];return n`<figure class="chart" data-chart="years" data-series="${r.map(e=>e.key).join(`,`)}">
    <figcaption class="chart-title">${i}</figcaption>
    <svg viewBox="0 0 ${520} ${240}" role="img" aria-label="${i}">
      ${h.map(t=>n`<g class="grid"><line x1="${s.l}" x2="${520-s.r}" y1="${m(t)}" y2="${m(t)}"></line><text x="${s.l-8}" y="${m(t)+4}" text-anchor="end">${e(t)}</text></g>`)}
      ${g.map(e=>n`<text class="axis" x="${p(e)}" y="${232}" text-anchor="middle">${e}</text>`)}
      ${r.map(e=>n`<path class="series" style="stroke:var(${e.color})" d="${a.map((t,n)=>`${n?`L`:`M`}${p(t[0]).toFixed(1)} ${m(t[e.key]).toFixed(1)}`).join(``)}"></path>`)}
      ${_?r.map((e,t)=>n`<text class="direct" x="${p(_[0])+8}" y="${v[t]??0}">${o(e.label)} · ${_[e.key]}</text>`):``}
      <line class="crosshair" y1="${s.t}" y2="${240-s.b}" x1="0" x2="0" visibility="hidden"></line>
      <rect class="hit" x="${s.l}" y="${s.t}" width="${520-s.l-s.r}" height="${240-s.t-s.b}"
        data-x0="${c}" data-x1="${l}" data-left="${s.l}" data-right="${520-s.r}"></rect>
    </svg>
  </figure>`}function O(e){return n`<div class="chart-pair">
      ${D(e,[T[0],T[1]],o(`Élysée and Matignon teams`))}
      ${D(e,[T[2]],o(`Ministers' offices`))}
    </div>
    <p class="muted small">${o(`People in post at any time during the year, so years with a change of government count both teams. A person's time in an office ends with their departure decree, their next appointment or the end of the minister's tenure. Each chart has its own scale.`)}</p>`}function k(e,t){for(let n of e.querySelectorAll(`[data-chart="years"]`))A(n,t)}function A(t,r){let i=t.querySelector(`rect.hit`),a=t.querySelector(`line.crosshair`),s=document.getElementById(`tooltip`),c=(t.dataset.series??``).split(`,`).map(Number),l=T.filter(e=>c.includes(e.key));if(!i||!a||!s)return;let u=i.ownerSVGElement,d=Number(i.dataset.x0),f=Number(i.dataset.x1),p=Number(i.dataset.left),m=Number(i.dataset.right);i.addEventListener(`pointermove`,t=>{if(!u)return;let i=u.getBoundingClientRect(),c=(t.clientX-i.left)/i.width*u.viewBox.baseVal.width,h=Math.round(d+(c-p)/(m-p)*(f-d)),g=r.find(e=>e[0]===h);if(!g)return;let _=p+(h-d)/(f-d)*(m-p);a.setAttribute(`x1`,String(_)),a.setAttribute(`x2`,String(_)),a.setAttribute(`visibility`,`visible`),s.innerHTML=n`<b>${h}</b>${l.map(t=>n`<div><i style="background:var(${t.color})"></i>${o(t.label)}<span>${e(g[t.key])}</span></div>`)}`.value,s.hidden=!1,s.style.left=`${Math.min(t.clientX+14,window.innerWidth-220)}px`,s.style.top=`${t.clientY+14}px`}),i.addEventListener(`pointerleave`,()=>{s.hidden=!0,a.setAttribute(`visibility`,`hidden`)})}function j(t){let r=Math.max(1,...t.map(e=>e.value));return n`<ol class="bars">${t.map(t=>n`<li>
      <span class="bar-label">${t.label}${t.note?n` <small class="muted">${t.note}</small>`:``}</span>
      <span class="bar-track"><span class="bar" style="width:${(t.value/r*100).toFixed(1)}%;background:var(${t.color??`--ink-3`})"></span></span>
      <span class="bar-value">${e(t.value)}</span>
    </li>`)}</ol>`}function M(t){let r=Object.keys(b).filter(e=>t.some(t=>t[2]===e));return n`<div class="tabs" data-tabs>
    <div class="segmented" role="tablist">${r.map((e,t)=>n`<button type="button" role="tab" aria-selected="${t===0?`true`:`false`}" data-tab="${e}">${o(b[e]??e)}</button>`)}</div>
    ${r.map((r,i)=>n`<div role="tabpanel" data-panel="${r}" ${i===0?``:`hidden`}>${j(t.filter(e=>e[2]===r).map(t=>({label:c(t[0],t[1]),value:t[4],note:t[3]>t[4]?o(`{n} counting board-only people`,{n:e(t[3])}):``,color:`--org`})))}</div>`)}
    <p class="muted small">${o(`People from ministers' offices, the Élysée, Matignon or the government. Organisations are counted once per Wikidata item, company number or name within one source.`)}</p>
  </div>`}function N(e){for(let t of e.querySelectorAll(`[data-tabs]`))t.addEventListener(`click`,e=>{let n=e.target.closest(`[data-tab]`);if(n){for(let e of t.querySelectorAll(`[data-tab]`))e.setAttribute(`aria-selected`,String(e===n));for(let e of t.querySelectorAll(`[data-panel]`))e.hidden=e.dataset.panel!==n.dataset.tab;a(`facts_tab_opened`,{tab:n.dataset.tab??``})}})}function P(t){return n`<div class="table-wrap"><table class="data">
    <thead><tr><th>${o(`Source`)}</th><th>${o(`What it brings`)}</th><th>${o(`Updated`)}</th><th class="num">${o(`People listed`)}</th><th class="num">${o(`Matched, independent key`)}</th><th class="num">${o(`Matched, name and age`)}</th></tr></thead>
    <tbody>${t.map(([t,r,i,,a,s,c])=>{let l=y[t];return n`<tr>
        <td><a href="${r}" target="_blank" rel="noopener">${l?o(l.title):t}</a></td>
        <td class="muted">${l?o(l.about):``}</td>
        <td class="mono">${i}</td>
        <td class="num">${a>=0?e(a):`–`}</td>
        <td class="num">${s>=0?e(s):`–`}</td>
        <td class="num">${c>=0?e(c):`–`}</td>
      </tr>`})}</tbody>
  </table></div>
  <p class="muted small">${o(`An independent key is the Wikidata id, or a full birth date taken from another source. "Name and age" means the birth date came from the same source as the career, so the match rests on the name, a plausible age and an uncommon surname.`)}</p>`}function F(t){let r=t.births.filter(([,e])=>e!==``),i=t.births.filter(([e])=>e===`office`).reduce((e,t)=>e+t[2],0),a=r.filter(([e])=>e===`office`).reduce((e,t)=>e+t[2],0);return n`<div class="columns">
    <div>
      <h3>${o(`Birth dates`)}</h3>
      <p class="muted small">${o(`{born} of {total} office people ({percent}%) have a birth date; it is what lets outside sources attach safely.`,{born:e(a),total:e(i),percent:Math.round(a/Math.max(1,i)*100)})}</p>
      ${j(Object.entries(r.reduce((e,[,t,n])=>({...e,[t]:(e[t]??0)+n}),{})).map(([e,t])=>({label:n`${o(x[e]??e)}`,value:t})))}
    </div>
    <div>
      <h3>${o(`Possible homonyms`)}</h3>
      <p class="muted small">${o(`People are identified by name in the Journal officiel. Names whose records contradict each other are flagged, shown with a dashed outline, and left out of summaries.`)}</p>
      ${j(t.flags.map(([e,t])=>({label:n`${o(S[e]??e)}`,value:t})))}
    </div>
  </div>`}var I=[[`overview`,`Overview`],[`business`,`From state to business`],[`network`,`The network`],[`sources`,`Sources and quality`]];function L(e){let t=e.replace(/^#/,``);return I.find(([e])=>e===t)?.[0]??`overview`}function R(e){let t=new Map;for(let[,,,,,,n]of e){let e=Number(n.slice(0,4));e&&t.set(e,(t.get(e)??0)+1)}let n=[...t.keys()];if(!n.length)return[];let r=Math.min(...n),i=Math.max(...n);return Array.from({length:i-r+1},(e,n)=>[r+n,t.get(r+n)??0])}function z(e,t){if(e.length<2)return n``;let r={l:36,r:8,t:12,b:26},i=Math.max(1,...e.map(e=>e[1])),a=[1,2,5,10,20,25,50,100].find(e=>i/e<=5)??200,o=Math.ceil(i/a)*a,s=(960-r.l-r.r)/e.length,c=e=>r.t+(1-e/o)*(220-r.t-r.b),l=Array.from({length:o/a+1},(e,t)=>t*a);return n`<figure class="chart columns-chart">
    <figcaption class="chart-title">${t}</figcaption>
    <svg viewBox="0 0 ${960} ${220}" role="img" aria-label="${t}">
      ${l.map(e=>n`<g class="grid"><line x1="${r.l}" x2="${960-r.r}" y1="${c(e)}" y2="${c(e)}"></line><text x="${r.l-6}" y="${c(e)+4}" text-anchor="end">${e}</text></g>`)}
      ${e.map(([e,t],i)=>n`<g class="column" data-year="${e}" tabindex="0" role="button" aria-label="${e}: ${t}">
          <rect class="hit" x="${r.l+i*s}" y="${r.t}" width="${s}" height="${220-r.t-r.b}"></rect>
          <rect class="col-bar" x="${(r.l+i*s+s*.15).toFixed(1)}" y="${c(t).toFixed(1)}" width="${(s*.7).toFixed(1)}" height="${(c(0)-c(t)).toFixed(1)}"><title>${e}: ${t}</title></rect>
          ${e%5==0?n`<text class="axis" x="${(r.l+i*s+s/2).toFixed(1)}" y="${212}" text-anchor="middle">${e}</text>`:``}
        </g>`)}
    </svg>
  </figure>`}function B(r){let i=r.totals,a=r.connectors[0],s=r.pairs[0],u=R(r.moves).reduce((e,t)=>!e||t[1]>e[1]?t:e,void 0),d=r.lobbies[0],f=r.stateContracts[0],p=[n`<li>${t(`{known} of the {total} people appointed to an office have a known role in a company.`,{known:n`<b>${e(i.officeToCompany??0)}</b>`,total:e(i.officePeople??0)})} <a href="#business">${o(`{n} took one within two years of leaving`,{n:e(new Set(r.moves.map(e=>e[0])).size)})}${u?o(`, most often in {year}`,{year:u[0]}):``}.</a></li>`,a?n`<li>${t(`{person} worked with {colleagues} office colleagues, {repeat} of them in two or more separate stints.`,{person:l(a[0],a[1]),colleagues:e(a[2]),repeat:e(a[3])})} <a href="#network">${o(`See the connectors.`)}</a></li>`:n``,s?n`<li>${t(`{a} and {b} worked together in {stints} separate stints ({years}).`,{a:l(s[0],s[1]),b:l(s[2],s[3]),stints:s[4],years:s[5]})}</li>`:n``,d?n`<li>${t(`{count} registered lobbies that targeted ministers' offices have people from the offices among them, led by {lobby} ({people} people).`,{count:`${e(r.lobbies.length)}${r.lobbies.length>=100?`+`:``}`,lobby:d[0]?c(d[0],d[1]):d[1],people:d[3]})} <a href="#business">${o(`See lobbies and contracts.`)}</a></li>`:n``,f?n`<li>${t(`{person}'s company, {company}, received {contracts} State contracts after they joined; timing only, not involvement.`,{person:l(f[0],f[1]),company:f[4]?c(f[4],f[5]):f[5],contracts:e(f[7])})}</li>`:n``];return n`<ul class="findings">${p}</ul>`}var V={Compatibilité:`Compatible`,"Compatibilité avec réserves":`With reservations`,Incompatibilité:`Incompatible`},H=e=>{let t=V[e];return t?o(t):e},U=()=>[{label:o(`Person`),value:e=>e[1],cell:e=>l(e[0],e[1])},{label:o(`Latest office`),value:e=>e[3],cell:e=>e[2]?n`<span class="clamp" data-text="${e[3]}">${c(e[2],e[3])}</span>`:n`<span class="muted">—</span>`},{label:o(`Date`),value:e=>e[4],cell:e=>n`<span class="mono">${e[4]}</span>`},{label:o(`Verdict`),value:e=>H(e[5])},{label:o(`Planned move`),value:e=>e[6],cell:e=>n`<span class="clamp-3" data-text="${e[6]}">${e[6]}</span> <a class="source" href="${e[7]}" target="_blank" rel="noopener">PDF</a>`}],W=e=>e===`hatvp`?`HATVP`:e===`rne`?o(`Companies, BODACC`):`Wikidata`;function G(r){let i=[{label:o(`Person`),value:e=>e[1],cell:e=>l(e[0],e[1])},{label:o(`Left`),value:e=>e[4],cell:e=>n`<span class="mono">${d(e[4])}</span>`},{label:o(`Office`),value:e=>e[3],cell:e=>n`<span class="clamp" data-text="${e[3]}">${h(e[2],e[3])}</span>`},{label:o(`Then`),value:e=>e[5],cell:e=>{let t=[e[8]?m([e[8],``,null,``]):``,e[9]?o(`registered lobby`):``].filter(Boolean).join(` · `);return n`${e[5]}${t?n`<br><small class="muted">${t}</small>`:``}`}},{label:o(`From`),value:e=>e[6],cell:e=>n`<span class="mono">${d(e[6])}</span>`},{label:o(`Source`),value:e=>W(e[7]),cell:e=>n`<span class="muted">${W(e[7])}</span>`}],a=[{label:o(`Organisation`),value:e=>e[1],cell:e=>n`${h(e[0],e[1])} <a class="source" href="${e[9]}" target="_blank" rel="noopener">HATVP</a>`},{label:o(`From offices`),num:!0,value:e=>e[3]},{label:o(`Activities`),num:!0,value:e=>e[4]},{label:o(`At the executive`),num:!0,value:e=>e[5]},{label:o(`Years`),value:e=>s(e[6],e[7]),cell:e=>n`<span class="mono">${s(e[6],e[7])}</span>`},{label:o(`Ministries most targeted`),value:e=>e[8].join(` · `),cell:e=>n`<span class="muted small">${e[8].join(` · `)}</span>`}],f=[{label:o(`Company`),value:e=>e[1],cell:e=>h(e[0],e[1])},{label:o(`From offices`),num:!0,value:e=>e[2]},{label:o(`Contracts`),num:!0,value:e=>e[3],cell:t=>e(t[3])},{label:o(`From the State`),num:!0,value:e=>e[4],cell:t=>e(t[4])},{label:o(`Declared amount`),num:!0,value:e=>e[5],cell:e=>u(e[5])},{label:o(`Years`),value:e=>s(e[6],e[7]),cell:e=>n`<span class="mono">${s(e[6],e[7])}</span>`}],p=[{label:o(`Person`),value:e=>e[1],cell:e=>l(e[0],e[1])},{label:o(`Latest office`),value:e=>e[3],cell:e=>n`<span class="clamp" data-text="${e[3]}">${c(e[2],e[3])}</span>`},{label:o(`Company`),value:e=>e[5],cell:e=>h(e[4],e[5])},{label:o(`From`),value:e=>e[6],cell:e=>n`<span class="mono">${d(e[6])}</span>`},{label:o(`State contracts`),num:!0,value:e=>e[7]},{label:o(`Declared amount`),num:!0,value:e=>e[8],cell:e=>u(e[8])}];return n`
    <section id="moves">
      <h2>${o(`From an office to a company`)}</h2>
      <p class="muted small">${t(`Company jobs that started within two years of leaving a minister's office, the Élysée, Matignon or a government post, from Wikidata employers, HATVP declarations and company roles dated by BODACC. Only companies identified by their company number or Wikidata item count; public bodies, associations and parties are left out. A BODACC date is the first notice naming the person, so such a role may have started earlier. Click a year to list its moves; {link} also shows moves from companies into the state.`,{link:n`<a href="./leads.html#revolving">${o(`the Leads page`)}</a>`})}</p>
      ${z(R(r.moves),o(`Moves from an office to a company, by year joined`))}
      ${_(`moves`,i,r.moves,{wide:!0,sortedBy:4,descending:!0})}
    </section>

    <section id="opinions">
      <h2>${o(`What the HATVP said about their moves`)}</h2>
      <p class="muted small">${o(`Opinions of the HATVP on former advisers, ministers and officials who asked to work in the private sector, with its verdict and, quoted from the opinion, the move they planned. An opinion gives a name and no birth date, so it is attached only when it names a minister whose office the person worked in, or the Élysée or Matignon where they served, or for ministers and senior officials whose name is unique. The HATVP publishes the opinions it finds of interest, not all of them.`)}</p>
      ${_(`opinions`,U(),r.opinions??[],{wide:!0,sortedBy:2,descending:!0})}
    </section>

    <section id="lobbies">
      <h2>${o(`Lobbies with people from the network`)}</h2>
      <p class="muted small">${o(`Organisations in the HATVP register of lobbies, linked by company number, where people from the network hold or held a role, and which declared activities aimed at ministers' offices or the Élysée. An activity is one declared lobbying topic over a reporting year.`)}</p>
      ${_(`lobbies`,a,r.lobbies,{wide:!0,sortedBy:1,descending:!0})}
    </section>

    <section id="contracts">
      <h2>${o(`Public contracts`)}</h2>
      <p class="muted small">${o(`Public contracts (DECP, published mostly from 2019, and BOAMP award notices from 2015) held by companies where people from the offices hold or held a role. Amounts are the declared amounts, often the ceiling of a framework agreement rather than what was paid, and leave out amounts flagged as suspect; "State" means contracts from ministries and other State services.`)}</p>
      ${_(`contractors`,f,r.contractors,{wide:!0,sortedBy:2,descending:!0})}
      <h3>${o(`State contracts after someone from the offices joined`)}</h3>
      <p class="muted small">${o(`Contracts from State buyers notified after the person's role at the company began (the role's first known date, so it may have begun earlier). This shows timing only, not that the person had any part in the contract.`)}</p>
      ${_(`state`,p,r.stateContracts,{wide:!0,sortedBy:4,descending:!0})}
    </section>`}var K={office:`Offices`,parliament:`Parliament`,board:`State boards`,company:`Company boards`,local:`Local executives`},q=e=>{let t=K[e];return t?o(t):e},J=()=>[{label:o(`Person`),value:e=>e[1],cell:e=>l(e[0],e[1])},{label:o(`From`),value:e=>q(e[2]),cell:e=>n`<span class="muted">${q(e[2])}</span>`},{label:o(`Latest office or state board`),value:e=>e[3],cell:e=>n`<span class="clamp" data-text="${e[3]}">${e[3]}</span>`},{label:o(`Seats`),num:!0,value:e=>e[4]},{label:o(`Companies`),value:e=>e[5].map(([,e])=>e).join(`, `),cell:e=>n`${e[5].slice(0,4).map(([e,t],r)=>n`${r?`, `:``}${c(e,t)}`)}${e[5].length>4?` ${o(`and {n} more`,{n:e[5].length-4})}`:``}`}];function Y(r){let i=[{label:o(`Person`),value:e=>e[1],cell:e=>l(e[0],e[1])},{label:o(`Office colleagues`),num:!0,value:e=>e[2],cell:t=>e(t[2])},{label:o(`In 2+ stints`),num:!0,value:e=>e[3],cell:t=>e(t[3])}],a=[{label:o(`Pair`),value:e=>`${e[1]} ${e[3]}`,cell:e=>t(`{a} and {b}`,{a:l(e[0],e[1]),b:l(e[2],e[3])})},{label:o(`Stints`),num:!0,value:e=>e[4]},{label:o(`Years`),value:e=>e[5],cell:e=>n`<span class="mono">${e[5]}</span>`}];return n`
    <section class="columns" id="connectors">
      <div>
        <h2>${o(`The connectors`)}</h2>
        <p class="muted small">${o(`People with the most colleagues they worked with in two or more separate stints.`)}</p>
        ${_(`connectors`,i,r.connectors,{sortedBy:2,descending:!0})}
      </div>
      <div>
        <h2>${o(`Pairs who kept working together`)}</h2>
        <p class="muted small">${o(`Separate stints in the same offices: a minister's team moving together counts as one, a reunion years later as another.`)}</p>
        ${_(`pairs`,a,r.pairs,{sortedBy:1,descending:!0})}
      </div>
    </section>

    <section id="interlocks">
      <h2>${o(`From the state to company boards`)}</h2>
      <p class="muted small">${o(`People from ministers' offices, the government, Parliament or state boards who sit on the boards or in the management of two or more large or mid-size companies, as listed today in the company register. Companies of the same group count separately.`)}</p>
      ${_(`interlocks`,J(),r.interlocks??[],{wide:!0,sortedBy:3,descending:!0})}
    </section>

    <section id="organisations">
      <h2>${o(`Where they studied, campaigned and worked`)}</h2>
      ${M(r.organisations)}
    </section>

    <section id="offices">
      <h2>${o(`The largest offices`)}</h2>
      <p class="muted small">${o(`Distinct people appointed. Junior ministers' offices are grouped by government when the Journal officiel gives no title.`)}</p>
      ${j(r.offices.map(([e,t,n,r,i,a])=>({label:c(e,t),value:r,note:i===a?i:`${i}–${a}`,color:C[n]??`--ink-3`})))}
    </section>`}function X(e){return n`
    <section id="sources">
      <h2>${o(`Sources`)}</h2>
      ${P(e.sources)}
    </section>

    <section id="quality">
      <h2>${o(`Data quality`)}</h2>
      ${F(e)}
    </section>

    <section id="limits">
      <h2>${o(`Known limits`)}</h2>
      <ul class="limits">
        <li>${o(`Moves to the private sector are not in the Journal officiel; they come only from Wikidata, HATVP declarations and the company register, so most advisers' later careers are missing.`)}</li>
        <li>${o(`The company register shows current or last known roles; BODACC notices date about two thirds of them, from the first notice naming the person, so a role can be older than its first date.`)}</li>
        <li>${o(`Deputies before 2002 come from Wikidata, without groups or constituencies. Parliamentary staff are named without birth dates, so they are not linked.`)}</li>
        <li>${o(`Lobbying is counted per organisation from the HATVP register (activities from 2018): holding a role in a lobby does not mean the person lobbied.`)}</li>
        <li>${o(`Board seats are assumed to last three years unless renewed or ended by a published decree.`)}</li>
        <li>${o(`Only about a fifth of office appointments have a published departure, so time in an office can be overstated for people who left early.`)}</li>
        <li>${o(`People are matched by name in the Journal officiel; flagged homonyms are shown but kept out of summaries.`)}</li>
      </ul>
    </section>`}function Z(t,r=`overview`){let i=t.totals;return n`
    <section class="hero">
      <h1>${o(`The people who run the French state, in figures`)}</h1>
      <p class="lede">${o(`Every appointment to a minister's office, the Élysée, Matignon, the government and the boards of state companies published in the Journal officiel since 1990, linked to {n} roles from Parliament, the HATVP, Wikidata, the company register, the register of lobbies and public contracts.`,{n:e(i.affiliations??0)})}</p>
      <nav class="page-tabs" aria-label="${o(`Sections`)}">${I.map(([e,t])=>n`<a href="#${e}" data-page-tab="${e}" ${e===r?n`aria-current="page"`:``}>${o(t)}</a>`)}</nav>
    </section>

    <div class="facts-pages">
      <div data-page="overview" ${r===`overview`?``:`hidden`}>
        <section>
          ${w(i)}
        </section>
        <section>
          <h2>${o(`Key findings`)}</h2>
          ${B(t)}
        </section>
        <section>
          <h2>${o(`How many people staff the top of the state`)}</h2>
          ${O(t.years)}
        </section>
      </div>
      <div data-page="business" ${r===`business`?``:`hidden`}>${G(t)}</div>
      <div data-page="network" ${r===`network`?``:`hidden`}>${Y(t)}</div>
      <div data-page="sources" ${r===`sources`?``:`hidden`}>${X(t)}</div>
    </div>`}function Q(e){let t=e.querySelector(`[data-table="moves"]`),n=n=>{let r=n?.closest(`.column`),i=r?.dataset.year;if(i&&t){for(let t of e.querySelectorAll(`.columns-chart .column`))t.classList.toggle(`selected`,t===r);a(`chart_year_picked`,{year:i}),t.dispatchEvent(new CustomEvent(`dt-where`,{detail:{column:4,prefix:i,label:o(`Joined in {year}`,{year:i})}}))}};for(let t of e.querySelectorAll(`.columns-chart`))t.addEventListener(`click`,e=>n(e.target)),t.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n(e.target))})}async function $(){let e=document.getElementById(`facts`);if(e){r();try{let t=await fetch(`${i()}data/facts.json`);if(!t.ok)throw Error(`HTTP ${t.status}`);let n=await t.json(),r=document.getElementById(`data-date`);r&&(r.textContent=o(`Data of {date}`,{date:n.generated})),e.innerHTML=Z(n,L(location.hash)).value,k(e,n.years),N(e),v(e),Q(e),p(e,n.people??{}),f(e,L),g(e)}catch(t){e.innerHTML=n`<p class="warn">${o(`Could not load the figures: {error}`,{error:String(t)})}</p>`.value}}}$();