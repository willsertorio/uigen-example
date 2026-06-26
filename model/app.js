/* ============================================================
   Crema Vecchia — interactions
   ============================================================ */
(function(){
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s,c=document)=>c.querySelector(s);
  const $$ = (s,c=document)=>[...c.querySelectorAll(s)];

  /* ---------- gauge ticks ---------- */
  (function ticks(){
    const g = $('#gaugeticks'); if(!g) return;
    let s='';
    for(let i=0;i<=10;i++){
      const a = (-210 + i*24) * Math.PI/180;       // sweep ~240deg
      const r1=48, r2=(i%5===0)?40:44, cx=60, cy=60;
      s += `<line x1="${cx+r1*Math.cos(a)}" y1="${cy+r1*Math.sin(a)}" x2="${cx+r2*Math.cos(a)}" y2="${cy+r2*Math.sin(a)}"/>`;
    }
    g.innerHTML = s;
  })();

  /* ---------- hero load sequence ---------- */
  window.addEventListener('load', ()=>{
    const name = $('#heroName');
    const glyphs = $$('.glyph', name);
    if(reduce){ name.classList.add('in'); glyphs.forEach(g=>{g.style.transition='none';}); }
    else {
      glyphs.forEach((g,i)=> g.style.transitionDelay = (0.25 + i*0.045)+'s');
      requestAnimationFrame(()=> name.classList.add('in'));
    }
    // needle sweep to ~9 bar
    const needle = $('#needle');
    if(needle && !reduce){ setTimeout(()=> needle.style.transform = 'rotate(150deg)', 500); }
    else if(needle){ needle.style.transform='rotate(150deg)'; }
  });

  /* ---------- nav: solidify on scroll ---------- */
  const nav = $('#nav');
  const onScroll = ()=> nav.classList.toggle('solid', window.scrollY > 40);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  /* ---------- mobile menu ---------- */
  const burger = $('#burger'), navlinks = $('#navlinks');
  burger.addEventListener('click', ()=>{
    const open = navlinks.classList.toggle('open');
    nav.classList.toggle('menu-open', open);
    document.body.classList.toggle('locked', open);
  });
  $$('#navlinks a').forEach(a=> a.addEventListener('click', ()=>{
    navlinks.classList.remove('open'); nav.classList.remove('menu-open'); document.body.classList.remove('locked');
  }));

  /* ---------- render blueprint ---------- */
  const bp = $('.blueprint'); if(bp) bp.innerHTML = BLUEPRINT;

  /* ---------- render machine list ---------- */
  const mlist = $('#mlist');
  mlist.innerHTML = CASES.map((c,i)=>`
    <article class="mrow reveal" data-id="${c.id}" tabindex="0" role="button" aria-label="Open ${c.name} case study">
      <span class="mrow__no">0${i+1}</span>
      <div class="mrow__name">
        <h3 class="serif">${c.name}</h3>
        <div class="mrow__tags">${c.badges.map(b=>`<span class="tag">${b}</span>`).join('')}</div>
      </div>
      <span class="mrow__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
      </span>
    </article>`).join('');

  /* ---------- render instagram strip ---------- */
  const igs = $('#igstrip');
  igs.innerHTML = IG.map(o=>`
    <figure class="ig__cell reveal">
      <div class="frag">${ART[o.art]('var(--brass)')}</div>
      <figcaption>${o.cap}</figcaption>
    </figure>`).join('');

  /* ---------- case overlay ---------- */
  const caseEl = $('#case'), caseContent = $('#caseContent'), caseBar = $('#caseBar'), caseClose = $('#caseClose');
  let lastFocus = null;

  function openCase(id){
    const c = CASES.find(x=>x.id===id); if(!c) return;
    const idx = CASES.findIndex(x=>x.id===id);
    caseBar.textContent = `Case study · 0${idx+1} of 0${CASES.length}`;
    caseContent.innerHTML = `
      <div class="case__hero">
        <div class="case__eyebrow">
          <span class="eyebrow">${c.name}</span>
          ${c.badges.map(b=>`<span class="tag">${b}</span>`).join('')}
        </div>
        <h2 class="case__title serif">${c.name}</h2>
        <p class="case__sub">${c.owner} &nbsp;·&nbsp; ${c.date}</p>
      </div>
      <div class="case__visual">${ART[c.art]('var(--brass)')}</div>
      <div class="case__body">
        <div class="case__prose">
          <h4>Overview</h4>
          <p>${c.overview}</p>
          <h4>Objective</h4>
          <p>${c.objective}</p>
          <div class="case__services">${c.services.map(s=>`<span class="tag">${s}</span>`).join('')}</div>
        </div>
        <aside class="spec">
          <div class="spec__head"><span>Service record</span><span>${c.id.split('-')[0].toUpperCase()}</span></div>
          <div class="spec__row"><span class="k">Owner</span><span class="v">${c.owner}</span></div>
          <div class="spec__row"><span class="k">Date</span><span class="v">${c.date}</span></div>
          <div class="spec__row"><span class="k">Duration</span><span class="v">${c.duration}</span></div>
          <div class="spec__row"><span class="k">Budget</span><span class="v brass">${c.budget}</span></div>
          ${c.services.map(s=>`<div class="spec__row"><span class="k">Service</span><span class="v">${s}</span></div>`).join('')}
        </aside>
      </div>`;
    lastFocus = document.activeElement;
    caseEl.classList.add('open');
    document.body.classList.add('locked');
    caseEl.scrollTop = 0;
    caseClose.focus();
  }
  function closeCase(){
    caseEl.classList.remove('open');
    document.body.classList.remove('locked');
    if(lastFocus) lastFocus.focus();
  }
  mlist.addEventListener('click', e=>{
    const row = e.target.closest('.mrow'); if(row) openCase(row.dataset.id);
  });
  mlist.addEventListener('keydown', e=>{
    if((e.key==='Enter'||e.key===' ') && e.target.closest('.mrow')){
      e.preventDefault(); openCase(e.target.closest('.mrow').dataset.id);
    }
  });
  caseClose.addEventListener('click', closeCase);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && caseEl.classList.contains('open')) closeCase(); });

  /* ---------- scroll reveals ---------- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, {threshold:.16, rootMargin:'0px 0px -8% 0px'});
  $$('.reveal').forEach(el=> io.observe(el));

  /* ---------- subtle needle drift on scroll (ambient) ---------- */
  if(!reduce){
    const needle = $('#needle');
    let t;
    window.addEventListener('scroll', ()=>{
      if(!needle) return;
      clearTimeout(t);
      const base = 150, jitter = (Math.sin(window.scrollY/240)*8);
      needle.style.transform = `rotate(${base+jitter}deg)`;
    }, {passive:true});
  }
})();
