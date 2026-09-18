(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const strings = {
    zh: {
      skip:'跳至主要内容',navigation:'主要导航',navProjects:'项目',navAbout:'关于我',navContact:'联系',heroTitle:'你好，<br>我是<span class="name-accent">秉君</span><span class="blue-period">.</span>',heroDescription:'在数据里寻找规律，<br>把想法写成真正可用的工具。',explore:'探索我的项目',heroMini:'保持好奇，持续构建。',greetLabel:'和秉君打招呼',avatarAlt:'穿蓝色卫衣、佩戴耳钉的秉君卡通形象',sayHi:'点我，打个招呼',atGlance:'关于我 / AT A GLANCE',profileTitle:'数据有逻辑，<br>生活有热爱。',profileIntro:'香港中文大学（深圳）数据科学硕士在读，关注数据挖掘、机器学习与可信 AI 应用。',based:'目前坐标',shenzhen:'中国 · 深圳',graduation:'预计毕业',moreAbout:'认识更多面的我',openRoles:'探索数据科学 · 数据挖掘 · 数据研发机会',scroll:'向下看看我的作品',projectsTitle:'从问题出发，<span>用作品回答。</span>',projectsIntro:'业务分析、机器学习与 AI 系统。<br>一些正在积累的实践。',aboutTitle:'代码之外，也有热爱。',aboutLead:'从理解业务，到构建系统。',aboutText:'本科的信息管理与财经背景，让我习惯先问“这个问题为什么值得解决”。在数据科学的学习与实践中，我继续探索模型、数据管道与应用开发，也关注结果是否可信、证据能否追溯。',skillData:'数据与建模',skillBuild:'构建与探索',education:'教育经历',masterSchool:'香港中文大学（深圳）',masterDegree:'数据科学 · 硕士',bachelorSchool:'中央财经大学',bachelorDegree:'信息管理与信息系统 · 本科',expectedNote:'* 预计 2027 年 7 月毕业',hobbyTitle:'离开键盘，<br>就去球场。',hobbyIntro:'另一种专注，另一种快乐。',hobbyButton:'解锁我的篮球模式',hobbyFootnote:'一枚关于热爱的小彩蛋',contactTitle:'有好问题？<br><span>一起聊聊。</span>',contactIntro:'关于数据、AI、项目，或者一个有趣的想法。',copyEmail:'复制邮箱',footer:'认真做事，也认真生活。',backTop:'回到顶部 ↑',closeProject:'关闭项目详情',closeHobby:'关闭篮球彩蛋',basketballTitle:'今天的快乐，<br>球场见。',basketballText:'写代码时认真，打篮球也一样。换上 14 号球衣，给好奇心放个课间。',cheer:'给 14 号加油',detailButton:'项目详情',demoCard:'观看完整演示',videoTitle:'项目演示视频 · 待上线',videoText:'系统运行在公司内网，后续将在这里展示操作演示。',demoPage:'打开完整功能演示',viewCode:'查看 GitHub 仓库',greeting:'嗨，很高兴认识你！',cheered:'14 号收到！下一球，继续加油。',copied:'邮箱已复制',copyFailed:'请长按或选中上方邮箱复制。',lightTheme:'切换浅色模式',darkTheme:'切换深色模式',basketballAlt:'秉君身穿红色 14 号篮球服，抱着篮球挥手',dataUnits:'产品覆盖',clvUnits:'Cox C-index',bankUnits:'最佳 AUC',reasoningUnits:'AMC23 pass@64',motionOn:'暂停头像动效',motionOff:'开启头像动效'
    },
    en: {
      skip:'Skip to main content',navigation:'Main navigation',navProjects:'Work',navAbout:'About',navContact:'Contact',heroTitle:'Hi, I’m<br><span class="name-accent">Bingjun</span><span class="blue-period">.</span>',heroDescription:'Finding patterns in data.<br> Building ideas into useful tools.',explore:'Explore my work',heroMini:'Stay curious. Keep building.',greetLabel:'Say hello to Bingjun',avatarAlt:'Cartoon Bingjun in a blue hoodie with silver stud earrings',sayHi:'Click to say hello',atGlance:'ABOUT ME / AT A GLANCE',profileTitle:'A mind for data.<br>A life of curiosity.',profileIntro:'MSc student in Data Science at CUHK-Shenzhen, exploring data mining, machine learning and trustworthy AI applications.',based:'Based in',shenzhen:'Shenzhen, China',graduation:'Graduating',moreAbout:'A little more about me',openRoles:'Exploring data science, data mining & data engineering roles',scroll:'Scroll to explore',projectsTitle:'Starting with questions.<span> Answering through work.</span>',projectsIntro:'Business analytics, machine learning and AI systems.<br>A growing collection of experiments.',aboutTitle:'There’s life beyond the keyboard.',aboutLead:'From understanding the business to building the system.',aboutText:'My background in information management and economics taught me to start with “Why is this problem worth solving?” Through data science, I’m exploring models, data pipelines and application development—with an eye on trustworthy results and traceable evidence.',skillData:'Data & modeling',skillBuild:'Building & exploring',education:'EDUCATION',masterSchool:'The Chinese University of Hong Kong, Shenzhen',masterDegree:'MSc · Data Science',bachelorSchool:'Central University of Finance and Economics',bachelorDegree:'Bachelor’s · Information Management & Information Systems',expectedNote:'* Expected graduation: July 2027',hobbyTitle:'Close the laptop.<br>Hit the court.',hobbyIntro:'A different kind of focus. The same joy.',hobbyButton:'Unlock basketball mode',hobbyFootnote:'A little easter egg about what I love',contactTitle:'A good question?<br><span>Let’s talk.</span>',contactIntro:'Data, AI, a project, or an interesting idea.',copyEmail:'Copy email',footer:'Build with care. Live with curiosity.',backTop:'Back to top ↑',closeProject:'Close project details',closeHobby:'Close basketball easter egg',basketballTitle:'Find me<br>on the court.',basketballText:'Focused on code. Just as focused on basketball. Jersey number 14 is my way to give curiosity a little recess.',cheer:'Cheer for number 14',detailButton:'Project details',demoCard:'Watch full walkthrough',videoTitle:'Project walkthrough · Coming later',videoText:'The system runs on a company intranet. A video will demonstrate its workflow here.',demoPage:'Open full project walkthrough',viewCode:'View GitHub repository',greeting:'Hey! So nice to meet you.',cheered:'Number 14 heard you. On to the next play!',copied:'Email copied',copyFailed:'Select the email above to copy it.',lightTheme:'Switch to light mode',darkTheme:'Switch to dark mode',basketballAlt:'Cartoon Bingjun in a red number 14 basketball jersey, holding a ball and waving',dataUnits:'products covered',clvUnits:'Cox C-index',bankUnits:'best AUC',reasoningUnits:'AMC23 pass@64',motionOn:'Pause avatar animation',motionOff:'Enable avatar animation'
    }
  };
  const storage = { get(k){try{return localStorage.getItem(k)}catch{return null}}, set(k,v){try{localStorage.setItem(k,v)}catch{}} };
  let lang = storage.get('bj-language') === 'en' ? 'en' : 'zh';
  let activeProject = null;
  let greetingTimer;
  let waveTimer;
  let blinkTimer;
  let motionEnabled = storage.get('bj-motion') !== 'off';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const t = key => strings[lang][key] || key;
  const pick = value => value && typeof value === 'object' ? (value[lang] || value.zh || '') : value;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const projectDialog = $('#project-dialog');
  const hobbyDialog = $('#basketball-dialog');

  function projectVisual(id) {
    if(id === 'evidence') return '<div class="visual-eyebrow">EVIDENCE → KNOWLEDGE</div><div class="evidence-graph" aria-hidden="true"><div class="graph-node"><strong>Source</strong><span>text + video</span></div><span class="graph-edge">→</span><div class="graph-node main"><strong>Evidence</strong><span>verify + trace</span></div><span class="graph-edge">→</span><div class="graph-node"><strong>Insight</strong><span>linked data</span></div></div>';
    if(id === 'clv') return '<div class="visual-eyebrow">THE CUSTOMER LIFECYCLE</div><div class="lifecycle" aria-hidden="true"><div class="life-block"><b>01</b><span>ACQUIRE</span></div><div class="life-block"><b>02</b><span>RETAIN</span></div><div class="life-block"><b>03</b><span>GROW</span></div></div>';
    if(id === 'bank') return '<div class="visual-eyebrow">PREDICT. THEN UNDERSTAND.</div><div class="bank-equation" aria-hidden="true"><div class="bank-features"><span>channel</span><span>history</span><span>context</span></div><span class="graph-edge">→</span><div class="model-chip"><strong>LightGBM</strong><span>+ SHAP explainability</span></div></div>';
    return '<div class="visual-eyebrow">SMALLER BUDGET. BETTER QUESTIONS.</div><div class="reasoning-block" aria-hidden="true"><div>reasoning_experiment.py</div><p><em>strategy</em> = <b>"LoRA"</b><br><em>temperature</em> = 0.6<br><em>evaluate</em>(quality, compute)</p></div>';
  }

  function renderProjects() {
    $('#project-grid').innerHTML = PORTFOLIO.projects.map(p => {
      const metric = p.id === 'evidence' ? p.metrics[0] : p.id === 'clv' ? p.metrics[1] : p.metrics[2];
      const demo = safeURL(p.demoPageUrl);
      return `<article class="project-card"><div class="project-visual visual-${p.id}" aria-hidden="true">${projectVisual(p.id)}</div><div class="project-card-body"><p class="project-type">${escape(pick(p.type))}</p><h3>${escape(pick(p.title))}</h3><p class="project-subtitle">${escape(pick(p.subtitle))}</p><p class="project-summary">${escape(pick(p.summary))}</p><div class="project-tags">${p.tags.map(tag=>`<span>${escape(tag)}</span>`).join('')}</div><div class="project-card-footer"><span class="project-outcome"><b>${escape(lang === 'en' && metric.valueEn ? metric.valueEn : metric.value)}</b> ${escape(pick(metric.label))}</span><div class="project-card-actions">${demo?`<a class="project-demo-link" href="${escape(demo)}" aria-label="${escape(t('demoCard') + ': ' + pick(p.subtitle))}"><span aria-hidden="true">▶</span>${t('demoCard')}</a>`:''}<button class="project-detail-button" data-project="${p.id}" aria-label="${escape(t('detailButton') + ': ' + pick(p.subtitle))}">${t('detailButton')} <span aria-hidden="true">↗</span></button></div></div></div></article>`;
    }).join('');
  }
  function safeURL(value, video=false) {
    if(!value) return null;
    try {const u=new URL(value,location.href);return ['http:','https:'].includes(u.protocol) || (video && u.protocol==='file:') ? u.href : null;} catch{return null;}
  }
  function renderDetail() {
    const p = PORTFOLIO.projects.find(item=>item.id===activeProject);
    if(!p) return;
    const github=safeURL(p.githubUrl), video=safeURL(p.videoUrl,true), demo=safeURL(p.demoPageUrl), poster=video&&p.videoPoster?safeURL(p.videoPoster):null;
    $('#project-detail').innerHTML = `<h2 class="dialog-title" id="detail-title">${escape(pick(p.title))}</h2><p class="dialog-subtitle">${escape(pick(p.subtitle))}</p><div class="detail-metrics">${p.metrics.map(m=>`<div><strong>${escape(lang==='en'&&m.valueEn?m.valueEn:m.value)}</strong><span>${escape(pick(m.label))}</span></div>`).join('')}</div>${p.details.map(d=>`<section class="detail-section"><h3>${escape(pick(d.title))}</h3><p>${escape(pick(d.text))}</p></section>`).join('')}${video?`<video class="project-video" src="${escape(video)}"${poster?` poster="${escape(poster)}"`:''} controls preload="none" playsinline aria-label="${escape(pick(p.subtitle))}"></video>`:p.id==='evidence'?`<div class="video-placeholder"><strong>${t('videoTitle')}</strong><p>${t('videoText')}</p></div>`:''}${demo?`<a class="button primary project-repo" href="${escape(demo)}">${t('demoPage')} ↗</a>`:''}${github?`<a class="button primary project-repo" href="${escape(github)}" target="_blank" rel="noopener noreferrer">${t('viewCode')} ↗</a>`:''}<p class="detail-note">${escape(pick(p.note))}</p>`;
    projectDialog.setAttribute('aria-labelledby','detail-title');
  }
  function themeLabels() {
    $('#theme-toggle').setAttribute('aria-label',t(document.documentElement.dataset.theme==='dark'?'lightTheme':'darkTheme'));
    $('meta[name="theme-color"]').content=document.documentElement.dataset.theme==='dark'?'#111725':'#f7f9fc';
  }
  function renderLanguage() {
    document.documentElement.lang=lang==='en'?'en':'zh-CN';
    $('.wordmark').setAttribute('aria-label',lang==='en'?'Bingjun Long home':'Bingjun Long 首页');
    $$('[data-i18n]').forEach(el => {
      const key=el.dataset.i18n;
      if(key==='projectsTitle'||key==='projectsIntro') el.innerHTML=t(key);
      else el.textContent=t(key);
    });
    $$('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
    $$('[data-label]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.label)));
    $$('[data-alt]').forEach(el=>el.alt=t(el.dataset.alt));
    $('#language-toggle').textContent=lang==='zh'?'EN':'中文';
    $('#language-toggle').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换为中文');
    document.title=lang==='zh'?'龙秉君 Bingjun Long — 数据科学与 AI 应用':'Bingjun Long — Data Science & Applied AI';
    $('meta[name="description"]').content=lang==='zh'?'龙秉君的个人网站：数据科学、数据挖掘与可信 AI 应用。香港中文大学（深圳）数据科学硕士在读。':'Bingjun Long: data science, data mining and trustworthy AI applications. MSc student in Data Science at CUHK-Shenzhen.';
    renderProjects();
    if(projectDialog.open) renderDetail();
    if($('#basketball-art img')) $('#basketball-art img').alt=t('basketballAlt');
    $('#copy-status').textContent='';
    $('#cheer-status').textContent='';
    themeLabels();
    motionState();
  }
  $('#language-toggle').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';storage.set('bj-language',lang);renderLanguage();});
  $('#theme-toggle').addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;storage.set('bj-theme',theme);themeLabels();});
  systemTheme.addEventListener('change',e=>{if(!storage.get('bj-theme')){document.documentElement.dataset.theme=e.matches?'dark':'light';themeLabels();}});
  $('#project-grid').addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(!button)return;activeProject=button.dataset.project;renderDetail();projectDialog.showModal();document.body.classList.add('modal-open');});
  $('#close-project').addEventListener('click',()=>projectDialog.close());
  $('#close-basketball').addEventListener('click',()=>hobbyDialog.close());
  for(const dialog of [projectDialog,hobbyDialog]) {
    dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});
    dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');dialog.querySelector('video')?.pause();});
  }
  $('#basketball-button').addEventListener('click',()=>{
    if(!$('#basketball-art img')) $('#basketball-art').innerHTML=`<img src="assets/basketball.webp" width="1024" height="1536" alt="${escape(t('basketballAlt'))}">`;
    $('#cheer-status').textContent='';hobbyDialog.showModal();document.body.classList.add('modal-open');
  });
  $('#basketball-cheer').addEventListener('click',()=>{hobbyDialog.classList.remove('is-cheering');void hobbyDialog.offsetWidth;hobbyDialog.classList.add('is-cheering');$('#cheer-status').textContent=t('cheered');});
  $('#copy-email').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(PORTFOLIO.email);$('#copy-status').textContent=t('copied');}
    catch{$('#copy-status').textContent=t('copyFailed');}
  });
  $('#year').textContent=String(new Date().getFullYear());

  const avatar=$('.avatar-breathe');
  const blink = new Image();blink.src='assets/blink.webp';blink.className='avatar-image avatar-image-blink';blink.alt='';blink.setAttribute('aria-hidden','true');avatar.append(blink);
  const wave = new Image();wave.src='assets/wave.webp';wave.className='avatar-image avatar-wave';wave.alt='';wave.setAttribute('aria-hidden','true');avatar.append(wave);
  const motionButton=document.createElement('button');motionButton.id='motion-toggle';motionButton.className='motion-control';$('.avatar-zone').append(motionButton);
  motionButton.addEventListener('click',()=>{motionEnabled=!motionEnabled;storage.set('bj-motion',motionEnabled?'on':'off');motionState();});
  function motionState(){
    const active=motionEnabled&&!reducedMotion.matches;
    $('.avatar-zone').classList.toggle('motion-paused',!active);
    motionButton.textContent=active?'Ⅱ':'▷';motionButton.setAttribute('aria-label',t(active?'motionOn':'motionOff'));motionButton.setAttribute('aria-pressed',String(active));
  }
  function scheduleBlink(){clearTimeout(blinkTimer);blinkTimer=setTimeout(()=>{
    if(motionEnabled&&!reducedMotion.matches&&!document.hidden&&!$('.avatar-zone').classList.contains('is-waving')&&blink.complete){blink.classList.add('is-blinking');setTimeout(()=>blink.classList.remove('is-blinking'),150);}
    scheduleBlink();
  },3500+Math.random()*2500);}
  function greet(){
    clearTimeout(waveTimer);clearTimeout(greetingTimer);const bubble=$('#avatar-bubble');bubble.textContent=t('greeting');bubble.classList.add('visible');
    if(wave.complete&&wave.naturalWidth){$('.avatar-zone').classList.add('is-waving');waveTimer=setTimeout(()=>$('.avatar-zone').classList.remove('is-waving'),2200);}
    greetingTimer=setTimeout(()=>bubble.classList.remove('visible'),3000);
  }
  $('#avatar-button').addEventListener('click',greet);$('#greet-button').addEventListener('click',greet);
  document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('page-hidden',document.hidden);});
  reducedMotion.addEventListener('change',motionState);
  renderLanguage();scheduleBlink();
})();
