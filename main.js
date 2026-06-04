// ============================================================
//  Ahmed & Basmala — main.js  v2
//  Firebase Realtime DB via REST API
// ============================================================

const FIREBASE_URL = 'https://ahmad-basmala-invitation-default-rtdb.firebaseio.com/wishes';

// ======================== TRANSLATIONS ========================
const translations = {
  en: {
    "t-eyebrow":"— You Are Cordially Invited —",
    "t-name-ahmed":"Ahmed","t-name-basmala":"Basmala",
    "t-date-text":"Friday, the Twenty-Sixth of June",
    "t-cd-days":"Days","t-cd-hours":"Hours","t-cd-minutes":"Minutes","t-cd-seconds":"Seconds",
    "t-scroll":"Scroll",
    "t-tag-details":"Save The Date","t-h-details":"Wedding Details",
    "t-dc-date-lbl":"Date","t-dc-date-sub":"Friday",
    "t-dc-time-lbl":"Time","t-dc-time-sub":"Doors open 6:30 PM · Starts 7:00 PM",
    "t-dc-dress-lbl":"Dress Code","t-dc-dress-val":"Light Pastel Colors","t-dc-dress-sub":"🥰 Soft & Elegant",
    "t-dc-host-lbl":"Hosted By","t-dc-host-sub":"& Their Families",
    "t-tag-gallery":"Our Moments","t-h-gallery":"A Love Story",
    "t-verse":"And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
    "t-verse-source":"— Quran 30:21",
    "t-tag-notes":"Words to Cherish","t-h-notes":"Whispers of Love",
    "t-tag-venue":"Venue","t-h-venue":"Where To Find Us",
    "t-venue-badge":"📍 Ceremony & Reception","t-venue-name":"7 Sky Hall",
    "t-venue-addr":"Vehicles House, تقاطع صلاح سالم<br>شارع السكة البيضاء، Cairo",
    "t-directions":"↗ Get Directions",
    "t-tag-wishes":"Leave A Message","t-h-wishes":"Wishes For The Couple",
    "t-form-title":"✍️ Write Your Wish",
    "t-footer":"Made with ❤️ for a day to remember forever",
    "ln1":"A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.",
    "ln1_attr":"— Dave Meurer",
    "ln2":"The best thing to hold onto in life is each other.",
    "ln2_attr":"— Audrey Hepburn",
    "ln3":"He created you from one soul, and from that soul He created its mate, that he might find rest in her.",
    "ln3_attr":"— Quran 7:189",
    "ln4":"In all the world, there is no heart for me like yours.",
    "ln4_attr":"— Maya Angelou",
    "ln5":"Whatever our souls are made of, his and hers are the same.",
    "ln5_attr":"— Emily Brontë",
    "ln6":"May your love be modern enough to survive the times, and old-fashioned enough to last forever.",
    "ln6_attr":"— A Wedding Toast",
    "delete_confirm":"Delete this wish?","delete_btn":"Delete",
    "no_wishes":"No wishes yet — be the first!","error_wishes":"Error loading wishes",
    "loading_wishes":"Loading wishes...","fill_form":"Please fill name & message",
    "wish_sent":"Wish sent! Thank you 🎉","error_send":"Error sending wish. Please try again.",
    "submit_btn":"Send Wish →"
  },
  ar: {
    "t-eyebrow":"— أنتم مدعوون بكل حب —",
    "t-name-ahmed":"أحمد","t-name-basmala":"بسملة",
    "t-date-text":"الجمعة ٢٦ يونيه",
    "t-cd-days":"أيام","t-cd-hours":"ساعات","t-cd-minutes":"دقايق","t-cd-seconds":"ثواني",
    "t-scroll":"اسكرول",
    "t-tag-details":"احتفلوا معانا","t-h-details":"تفاصيل الفرح",
    "t-dc-date-lbl":"التاريخ","t-dc-date-sub":"الجمعة",
    "t-dc-time-lbl":"الميعاد","t-dc-time-sub":"الأبواب 6:30 · يبدأ 7:00 مساءً",
    "t-dc-dress-lbl":"اللبس","t-dc-dress-val":"ألوان باستيل فاتحة","t-dc-dress-sub":"🥰 ناعم وأنيق",
    "t-dc-host-lbl":"العرسان","t-dc-host-sub":"و أهلهم",
    "t-tag-gallery":"ذكرياتنا","t-h-gallery":"حكاية حب",
    "t-verse":"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    "t-verse-source":"— سورة الروم ٢١",
    "t-tag-notes":"كلمات تخلد","t-h-notes":"نجوى القلوب",
    "t-tag-venue":"المكان","t-h-venue":"هتلقونا فين",
    "t-venue-badge":"📍 قاعة الأفراح","t-venue-name":"7 Sky Hall",
    "t-venue-addr":"Vehicles House، تقاطع صلاح سالم<br>شارع السكة البيضاء، القاهرة",
    "t-directions":"↗ افتح الخريطة",
    "t-tag-wishes":"اكتب كلمة","t-h-wishes":"تهانيكم",
    "t-form-title":"✍️ اكتب تهنئتك",
    "t-footer":"اتعملت بحب في يوم هيتذكر للأبد ❤️",
    "ln1":"الزواج العظيم مش إن الاتنين 'المثاليين' يبقوا سوا، ده إن الاتنين غير المثاليين يتعلموا يتبسطوا باختلافاتهم.",
    "ln1_attr":"— ديف مورير",
    "ln2":"أحسن حاجة تتمسك بيها في الحياة هي بعض.",
    "ln2_attr":"— أودري هيبورن",
    "ln3":"خلقكم من نفس واحدة وخلق منها زوجها لتسكن إليها.",
    "ln3_attr":"— سورة الأعراف ١٨٩",
    "ln4":"في كل الدنيا، مفيش قلب زي قلبك.",
    "ln4_attr":"— مايا أنجيلو",
    "ln5":"مهما كانت أرواحنا معمولة من إيه، روحه وروحها من نفس الشيء.",
    "ln5_attr":"— إيميلي برونتي",
    "ln6":"يارب يكون حبكم عصري بما يكفي يعدي الأيام، وقديم بما يكفي يعيش للأبد.",
    "ln6_attr":"— نخب زفاف",
    "delete_confirm":"حذف التهنئة؟","delete_btn":"حذف",
    "no_wishes":"مفيش تهاني لسه — كن أول من يكتب!","error_wishes":"مشكلة في تحميل التهاني",
    "loading_wishes":"جارى التحميل...","fill_form":"اكتب اسمك ورسالتك!",
    "wish_sent":"تم الإرسال! شكراً 🎉","error_send":"حصل خطأ. جرب تاني.",
    "submit_btn":"ابعت التهنئة →"
  }
};

let currentLang = 'en';
const t = key => (translations[currentLang][key] ?? key);

function applyTranslations() {
  const tr = translations[currentLang];
  for (const [id, text] of Object.entries(tr)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
  }
  // Love note cards (dynamic)
  document.querySelectorAll('.love-note-card').forEach((card, idx) => {
    const q = card.querySelector('.ln-quote');
    const a = card.querySelector('.ln-attr');
    if (q) q.innerText = tr[`ln${idx+1}`] || '';
    if (a) a.innerText = tr[`ln${idx+1}_attr`] || '';
  });
  document.documentElement.setAttribute('data-lang', currentLang);
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('lang-toggle').innerText = currentLang === 'en' ? 'عربي' : 'English';
  // update submit button
  const sb = document.getElementById('submit-wish');
  if (sb && !sb.disabled) sb.innerText = t('submit_btn');
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyTranslations();
  loadWishes();
});

// ======================== COUNTDOWN ========================
function pad(n){ return String(n).padStart(2,'0'); }
function updateCountdown() {
  const diff = new Date('2026-06-26T18:00:00+02:00') - new Date();
  if (diff <= 0) { ['cd-days','cd-hours','cd-minutes','cd-seconds'].forEach(id => document.getElementById(id).innerText = '00'); return; }
  document.getElementById('cd-days').innerText    = pad(Math.floor(diff/864e5));
  document.getElementById('cd-hours').innerText   = pad(Math.floor((diff%864e5)/36e5));
  document.getElementById('cd-minutes').innerText = pad(Math.floor((diff%36e5)/6e4));
  document.getElementById('cd-seconds').innerText = pad(Math.floor((diff%6e4)/1000));
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ======================== THREE.JS (FIXED — full page) ========================
let scene, camera, renderer, threeObjects = [], currentScene3d = 'cubes';
const canvas3d = document.getElementById('three-canvas');

function initThree() {
  renderer = new THREE.WebGLRenderer({ canvas: canvas3d, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 300);
  camera.position.set(0, 4, 22);
  camera.lookAt(0, 1, 0);
  build3DScene('cubes');
  animateThree();
}

function clearScene() {
  threeObjects.forEach(o => scene.remove(o));
  threeObjects = [];
}

function addLights() {
  const a = new THREE.AmbientLight(0x1a0530, 1.8);
  const p1 = new THREE.PointLight(0xC084FC, 3, 60); p1.position.set(6, 12, 10);
  const p2 = new THREE.PointLight(0x7E22CE, 2, 50); p2.position.set(-8, -5, 8);
  const p3 = new THREE.PointLight(0xA855F7, 1.5, 40); p3.position.set(0, -8, -5);
  [a,p1,p2,p3].forEach(l => { scene.add(l); threeObjects.push(l); });
}

function build3DScene(type) {
  clearScene();
  currentScene3d = type;
  addLights();

  if (type === 'cubes') {
    buildScienceFoodObjects();
  } else if (type === 'stars') {
    const count = 2500;
    const pos = new Float32Array(count*3);
    for (let i=0;i<count*3;i++) pos[i]=(Math.random()-.5)*80;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos,3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({color:0xD8B4FE,size:.15,sizeAttenuation:true}));
    scene.add(pts); threeObjects.push(pts);
  } else if (type === 'spheres') {
    for (let i=0;i<60;i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(.18+Math.random()*.65,16,16),
        new THREE.MeshStandardMaterial({color:0xA855F7,emissive:0x4B0082,emissiveIntensity:.45,transparent:true,opacity:.65+Math.random()*.3,metalness:.6,roughness:.3}));
      m.position.set((Math.random()-.5)*38,(Math.random()-.5)*26,(Math.random()-.5)*28);
      m.userData={fo:Math.random()*Math.PI*2,fs:.4+Math.random()*.6,baseY:m.position.y};
      scene.add(m); threeObjects.push(m);
    }
  }
  const couple = buildCouple();
  scene.add(couple); threeObjects.push(couple);
}

function buildScienceFoodObjects() {
  const HUES = [0.75,0.80,0.70,0.65,0.82,0.60,0.55,0.88];

  function rnd(a,b){ return a+(Math.random()*(b-a)); }
  function rndPos(){ return [(Math.random()-.5)*40,(Math.random()-.5)*28,(Math.random()-.5)*30]; }
  function floatData(type='float',extra={}){
    return {fo:Math.random()*Math.PI*2,fs:rnd(.25,.6),baseY:0,type,...extra};
  }

  // ── BEAKERS (10) ──
  for(let i=0;i<10;i++){
    const g=new THREE.Group();
    // Body
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(.18,.22,.58,12),
      new THREE.MeshStandardMaterial({color:0xA78BFA,transparent:true,opacity:.65,metalness:.3,roughness:.2})));
    // Liquid with per-beaker hue
    const hue=HUES[i%HUES.length];
    const liq=new THREE.Mesh(new THREE.CylinderGeometry(.15,.19,.28,12),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,.9,.65),transparent:true,opacity:.9,
        emissive:new THREE.Color().setHSL(hue,.8,.3),emissiveIntensity:.7}));
    liq.position.y=-.13; g.add(liq);
    // Bubble on top
    const bub=new THREE.Mesh(new THREE.SphereGeometry(.06,8,8),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,.9,.8),transparent:true,opacity:.6,emissive:new THREE.Color().setHSL(hue,.9,.4),emissiveIntensity:.8}));
    bub.position.y=.34; g.add(bub);
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('float',{rx:rnd(-.008,.008)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── ATOMS (10) ──
  for(let i=0;i<10;i++){
    const g=new THREE.Group();
    const nucHue=HUES[i%HUES.length];
    g.add(new THREE.Mesh(new THREE.SphereGeometry(.15,14,14),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(nucHue,.9,.7),emissive:new THREE.Color().setHSL(nucHue,.8,.35),emissiveIntensity:.9})));
    for(let r=0;r<3;r++){
      const ring=new THREE.Mesh(new THREE.TorusGeometry(.36+r*.09,.022,8,32),
        new THREE.MeshStandardMaterial({color:0xC084FC,emissive:0x7E22CE,emissiveIntensity:.5,transparent:true,opacity:.75}));
      ring.rotation.x=(r/3)*Math.PI; ring.rotation.y=(r/3)*Math.PI*.7; g.add(ring);
      // Electron dots
      for(let e=0;e<2;e++){
        const el=new THREE.Mesh(new THREE.SphereGeometry(.05,6,6),
          new THREE.MeshStandardMaterial({color:0xF0ABFC,emissive:0xE879F9,emissiveIntensity:1}));
        const ang=e*Math.PI; const rad=.36+r*.09;
        el.position.set(Math.cos(ang)*rad,0,Math.sin(ang)*rad);
        el.userData={eAngle:ang,eRad:rad,eRing:r,type:'electron'};
        g.add(el);
      }
    }
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('atom'),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── DNA STRANDS (5) ──
  for(let s=0;s<5;s++){
    const g=new THREE.Group();
    const c1=new THREE.Color().setHSL(HUES[s%HUES.length],.9,.65);
    const c2=new THREE.Color().setHSL((HUES[s%HUES.length]+.35)%1,.9,.65);
    for(let j=0;j<14;j++){
      const ang=(j/14)*Math.PI*4;
      const y=j*.11-.75;
      const s1=new THREE.Mesh(new THREE.SphereGeometry(.07,8,8),
        new THREE.MeshStandardMaterial({color:c1,emissive:c1,emissiveIntensity:.6}));
      const s2=new THREE.Mesh(new THREE.SphereGeometry(.07,8,8),
        new THREE.MeshStandardMaterial({color:c2,emissive:c2,emissiveIntensity:.6}));
      s1.position.set(Math.cos(ang)*.3,y,Math.sin(ang)*.3);
      s2.position.set(-Math.cos(ang)*.3,y,-Math.sin(ang)*.3);
      if(j%2===0){
        const rung=new THREE.Mesh(new THREE.CylinderGeometry(.018,.018,.6,6),
          new THREE.MeshStandardMaterial({color:0xC084FC,transparent:true,opacity:.55}));
        rung.position.set(0,y,0); rung.rotation.z=Math.PI/2; rung.rotation.y=ang; g.add(rung);
      }
      g.add(s1,s2);
    }
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('dna'),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── MICROSCOPES (6) ──
  for(let i=0;i<6;i++){
    const g=new THREE.Group();
    const mm=new THREE.MeshStandardMaterial({color:0x9D4EDD,metalness:.6,roughness:.3});
    // Base
    g.add(new THREE.Mesh(new THREE.BoxGeometry(.4,.06,.3),mm));
    // Pillar
    const pillar=new THREE.Mesh(new THREE.CylinderGeometry(.045,.055,.65,10),mm);
    pillar.position.set(0,.36,-.05); g.add(pillar);
    // Arm
    const arm=new THREE.Mesh(new THREE.BoxGeometry(.08,.35,.06),mm);
    arm.position.set(0,.72,-.05); g.add(arm);
    // Eyepiece (angled cylinder)
    const eye=new THREE.Mesh(new THREE.CylinderGeometry(.05,.04,.22,10),mm);
    eye.position.set(.1,.82,-.05); eye.rotation.z=-.4; g.add(eye);
    // Lens (glowing)
    const lens=new THREE.Mesh(new THREE.SphereGeometry(.08,10,10),
      new THREE.MeshStandardMaterial({color:0xA5F3FC,emissive:0x0EA5E9,emissiveIntensity:.9,transparent:true,opacity:.8}));
    lens.position.set(0,.36,.1); g.add(lens);
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('float',{ry:rnd(-.01,.01)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── FLASKS / ERLENMEYER (7) ──
  for(let i=0;i<7;i++){
    const g=new THREE.Group();
    const hue=HUES[(i+2)%HUES.length];
    const fm=new THREE.MeshStandardMaterial({color:0xC4B5FD,transparent:true,opacity:.6,metalness:.2,roughness:.2});
    // Wide bottom sphere
    g.add(new THREE.Mesh(new THREE.SphereGeometry(.22,12,12),fm));
    // Narrow neck
    const neck=new THREE.Mesh(new THREE.CylinderGeometry(.07,.14,.28,10),fm);
    neck.position.y=.28; g.add(neck);
    // Liquid
    const liq=new THREE.Mesh(new THREE.SphereGeometry(.18,12,8),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,.95,.6),transparent:true,opacity:.85,
        emissive:new THREE.Color().setHSL(hue,.9,.3),emissiveIntensity:.8}));
    liq.scale.y=.5; liq.position.y=-.08; g.add(liq);
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('float',{rx:rnd(-.007,.007)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── PIZZA SLICES (8) ──
  for(let i=0;i<8;i++){
    const g=new THREE.Group();
    // Crust (wedge via CylinderGeometry with arc)
    const crust=new THREE.Mesh(
      new THREE.CylinderGeometry(.0,.35,.08,3,1,false,0,Math.PI*.55),
      new THREE.MeshStandardMaterial({color:0xD4914A,roughness:.8,metalness:.0}));
    crust.rotation.y=Math.PI*.73; g.add(crust);
    // Sauce layer
    const sauce=new THREE.Mesh(
      new THREE.CylinderGeometry(.0,.32,.03,3,1,false,0,Math.PI*.55),
      new THREE.MeshStandardMaterial({color:0xE05050,emissive:0x8B1A1A,emissiveIntensity:.3,roughness:.7}));
    sauce.position.y=.055; sauce.rotation.y=Math.PI*.73; g.add(sauce);
    // Cheese
    const cheese=new THREE.Mesh(
      new THREE.CylinderGeometry(.0,.29,.025,3,1,false,0,Math.PI*.55),
      new THREE.MeshStandardMaterial({color:0xF5CF6A,emissive:0xB8860B,emissiveIntensity:.2,roughness:.6}));
    cheese.position.y=.075; cheese.rotation.y=Math.PI*.73; g.add(cheese);
    // Toppings (small spheres — pepperoni / olives alternating)
    const tColors=[0xCC2200,0x1A1A1A,0xA01010,0x222222];
    for(let t=0;t<4;t++){
      const top=new THREE.Mesh(new THREE.SphereGeometry(.04,6,6),
        new THREE.MeshStandardMaterial({color:tColors[t%tColors.length],roughness:.7}));
      const a=(t*.18+.12); const rad=.1+t*.04;
      top.position.set(Math.cos(a)*rad,.1,Math.sin(a)*rad); g.add(top);
    }
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('float',{ry:rnd(-.012,.012),rx:rnd(-.006,.006)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── CHEF HATS (6) ──
  for(let i=0;i<6;i++){
    const g=new THREE.Group();
    const wm=new THREE.MeshStandardMaterial({color:0xF8F4FF,roughness:.45});
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(.32,.32,.1,16),wm));
    const top=new THREE.Mesh(new THREE.CylinderGeometry(.22,.3,.52,16),wm);
    top.position.y=.3; g.add(top);
    const stripe=new THREE.Mesh(new THREE.CylinderGeometry(.305,.305,.05,16),
      new THREE.MeshStandardMaterial({color:0xC084FC,emissive:0x7E22CE,emissiveIntensity:.7}));
    stripe.position.y=.06; g.add(stripe);
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('float',{ry:rnd(-.012,.012)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── COOKING POTS (5) ──
  for(let i=0;i<5;i++){
    const g=new THREE.Group();
    const hue=HUES[i%HUES.length];
    const pm=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,.6,.6),metalness:.65,roughness:.3});
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(.28,.24,.35,14),pm));
    const lid=new THREE.Mesh(new THREE.SphereGeometry(.29,14,8,0,Math.PI*2,0,Math.PI*.5),pm);
    lid.position.y=.2; g.add(lid);
    const handle=new THREE.Mesh(new THREE.TorusGeometry(.08,.025,6,12),
      new THREE.MeshStandardMaterial({color:0xC084FC,emissive:0x7E22CE,emissiveIntensity:.5}));
    handle.position.y=.38; handle.rotation.x=Math.PI/2; g.add(handle);
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('float',{rx:rnd(-.007,.007)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── TEST TUBES (8) ──
  for(let i=0;i<8;i++){
    const g=new THREE.Group();
    const hue=HUES[(i+1)%HUES.length];
    const tm=new THREE.MeshStandardMaterial({color:0xDDD6FE,transparent:true,opacity:.7,metalness:.2,roughness:.15});
    // Tube body
    g.add(new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,.45,10),tm));
    // Round bottom
    const bot=new THREE.Mesh(new THREE.SphereGeometry(.07,10,6,0,Math.PI*2,0,Math.PI*.5),tm);
    bot.position.y=-.225; bot.rotation.x=Math.PI; g.add(bot);
    // Colored liquid
    const liq=new THREE.Mesh(new THREE.CylinderGeometry(.06,.06,.18,10),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,.95,.6),transparent:true,opacity:.9,
        emissive:new THREE.Color().setHSL(hue,.9,.3),emissiveIntensity:.7}));
    liq.position.y=-.13; g.add(liq);
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    // Tilt test tube
    g.rotation.z=rnd(-.3,.3); g.rotation.x=rnd(-.2,.2);
    g.userData={...floatData('float',{ry:rnd(-.009,.009)}),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── MOLECULES (H2O shape, 5) ──
  for(let i=0;i<5;i++){
    const g=new THREE.Group();
    const hue=HUES[(i+3)%HUES.length];
    // Central atom
    const center=new THREE.Mesh(new THREE.SphereGeometry(.16,12,12),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(hue,.9,.65),emissive:new THREE.Color().setHSL(hue,.8,.3),emissiveIntensity:.8}));
    g.add(center);
    // Two bonded atoms at angle
    const bColor=new THREE.Color().setHSL((hue+.25)%1,.9,.7);
    const bMat=new THREE.MeshStandardMaterial({color:bColor,emissive:bColor,emissiveIntensity:.5});
    const bondMat=new THREE.MeshStandardMaterial({color:0xC084FC,transparent:true,opacity:.5});
    [-.55,.55].forEach(side=>{
      const atom=new THREE.Mesh(new THREE.SphereGeometry(.1,10,10),bMat);
      atom.position.set(side*.28,.18,0); g.add(atom);
      const bond=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.32,6),bondMat);
      bond.position.set(side*.14,.09,0); bond.rotation.z=side>0?-.5:.5; g.add(bond);
    });
    const [x,y,z]=rndPos(); g.position.set(x,y,z);
    g.userData={...floatData('atom'),baseY:y};
    scene.add(g); threeObjects.push(g);
  }

  // ── FORMULA CUBES (spinning, 15) ──
  for(let i=0;i<15;i++){
    const h=.7+Math.random()*.2;
    const m=new THREE.Mesh(new THREE.BoxGeometry(.22+Math.random()*.2,.22+Math.random()*.2,.22+Math.random()*.2),
      new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(h,.88,.65),
        emissive:new THREE.Color().setHSL(h,.8,.28),emissiveIntensity:.5,metalness:.4,roughness:.35}));
    const [x,y,z]=rndPos(); m.position.set(x,y,z);
    m.userData={fo:Math.random()*Math.PI*2,fs:rnd(.35,.65),baseY:y,
      rx:rnd(-.025,.025),ry:rnd(-.022,.022),type:'spin',hue:h};
    scene.add(m); threeObjects.push(m);
  }
}

function buildCouple() {
  const group = new THREE.Group();
  const skinMat=new THREE.MeshStandardMaterial({color:0xD4A373,roughness:.75});
  const hairMat=new THREE.MeshStandardMaterial({color:0x140800,roughness:.9});
  const whiteMat=new THREE.MeshStandardMaterial({color:0xF8F8FF,roughness:.5});
  const accentMat=new THREE.MeshStandardMaterial({color:0xC084FC,emissive:0x6600AA,emissiveIntensity:.7,metalness:.7});

  // ── GROOM (Science Teacher): dark purple suit + glasses + book ──
  const g=new THREE.Group();
  const suitMat=new THREE.MeshStandardMaterial({color:0x3B1A6B,metalness:.25,roughness:.6});
  // Legs
  [.17,-.17].forEach(x=>{const leg=new THREE.Mesh(new THREE.CylinderGeometry(.13,.11,.8,8),suitMat);leg.position.set(x,-.4,0);g.add(leg);});
  // Body
  const gBody=new THREE.Mesh(new THREE.CylinderGeometry(.42,.46,1.2,10),suitMat); gBody.position.y=.6; g.add(gBody);
  // White shirt + tie
  const shirt=new THREE.Mesh(new THREE.BoxGeometry(.26,.7,.08),whiteMat); shirt.position.set(0,.65,.43); g.add(shirt);
  const tie=new THREE.Mesh(new THREE.BoxGeometry(.09,.5,.06),
    new THREE.MeshStandardMaterial({color:0xA855F7,emissive:0x5B21B6,emissiveIntensity:.4})); tie.position.set(0,.7,.46); g.add(tie);
  // Head + hair
  const gHead=new THREE.Mesh(new THREE.SphereGeometry(.36,20,20),skinMat); gHead.position.y=1.68; g.add(gHead);
  const gHair=new THREE.Mesh(new THREE.SphereGeometry(.38,20,10,0,Math.PI*2,0,Math.PI*.5),hairMat); gHair.position.set(0,1.85,0); g.add(gHair);
  // Glasses
  const gm=new THREE.MeshStandardMaterial({color:0xC084FC,emissive:0x7E22CE,emissiveIntensity:.5,metalness:.8});
  const lL=new THREE.Mesh(new THREE.TorusGeometry(.11,.018,8,20),gm); lL.position.set(.15,1.68,.36); lL.rotation.y=.1; g.add(lL);
  const rL=new THREE.Mesh(new THREE.TorusGeometry(.11,.018,8,20),gm); rL.position.set(-.15,1.68,.36); rL.rotation.y=-.1; g.add(rL);
  const br=new THREE.Mesh(new THREE.CylinderGeometry(.012,.012,.14,6),gm); br.position.set(0,1.68,.38); br.rotation.z=Math.PI/2; g.add(br);
  // Science book
  const book=new THREE.Mesh(new THREE.BoxGeometry(.25,.32,.06),
    new THREE.MeshStandardMaterial({color:0x7C3AED,emissive:0x4C1D95,emissiveIntensity:.3}));
  book.position.set(.65,.7,.1); book.rotation.z=.2; book.rotation.y=-.3; g.add(book);
  // Arms
  const gLA=new THREE.Mesh(new THREE.CylinderGeometry(.11,.09,.85,8),suitMat); gLA.position.set(.56,.8,0); gLA.rotation.z=.38; g.add(gLA);
  const gRA=new THREE.Mesh(new THREE.CylinderGeometry(.11,.09,.85,8),suitMat); gRA.position.set(-.56,.8,0); gRA.rotation.z=-.38; g.add(gRA);
  g.position.set(-1.7,-1.5,0); group.add(g);

  // ── BRIDE (Chef): white apron dress + chef hat + spoon ──
  const b=new THREE.Group();
  const chefMat=new THREE.MeshStandardMaterial({color:0xFDF4FF,metalness:.05,roughness:.5});
  const apronMat=new THREE.MeshStandardMaterial({color:0xE9D5FF,metalness:.05,roughness:.55});
  // Skirt + apron
  const skirt=new THREE.Mesh(new THREE.CylinderGeometry(.18,.9,1.6,18),chefMat); skirt.position.y=.8; b.add(skirt);
  const apron=new THREE.Mesh(new THREE.BoxGeometry(.55,1.1,.07),apronMat); apron.position.set(0,.85,.45); b.add(apron);
  [.13,-.13].forEach(x=>{const bow=new THREE.Mesh(new THREE.BoxGeometry(.18,.09,.06),accentMat); bow.position.set(x,.42,.46); b.add(bow);});
  // Upper body
  const bUp=new THREE.Mesh(new THREE.CylinderGeometry(.35,.18,.65,12),chefMat); bUp.position.y=1.52; b.add(bUp);
  // Head + hair
  const bHead=new THREE.Mesh(new THREE.SphereGeometry(.34,20,20),new THREE.MeshStandardMaterial({color:0xF4D0A8,roughness:.65})); bHead.position.y=2.1; b.add(bHead);
  const bHair=new THREE.Mesh(new THREE.CylinderGeometry(.35,.2,.95,12),hairMat); bHair.position.set(0,1.88,-.06); b.add(bHair);
  // Chef hat
  const hatBrim=new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.1,16),whiteMat); hatBrim.position.set(0,2.5,0); b.add(hatBrim);
  const hatTop=new THREE.Mesh(new THREE.CylinderGeometry(.3,.38,.55,16),whiteMat); hatTop.position.set(0,2.82,0); b.add(hatTop);
  const hatStripe=new THREE.Mesh(new THREE.CylinderGeometry(.385,.385,.06,16),accentMat); hatStripe.position.set(0,2.57,0); b.add(hatStripe);
  // Spoon
  const spH=new THREE.Mesh(new THREE.CylinderGeometry(.03,.025,.7,8),
    new THREE.MeshStandardMaterial({color:0xD8B4FE,metalness:.7,roughness:.2}));
  spH.position.set(-.58,1.5,.1); spH.rotation.z=-.35; spH.rotation.y=.2; b.add(spH);
  const spHd=new THREE.Mesh(new THREE.SphereGeometry(.1,10,10),
    new THREE.MeshStandardMaterial({color:0xE9D5FF,metalness:.8,roughness:.1}));
  spHd.position.set(-.75,1.85,.1); b.add(spHd);
  // Arms
  const bLA=new THREE.Mesh(new THREE.CylinderGeometry(.1,.08,.8,8),chefMat); bLA.position.set(-.52,1.55,0); bLA.rotation.z=.42; b.add(bLA);
  const bRA=new THREE.Mesh(new THREE.CylinderGeometry(.1,.08,.8,8),chefMat); bRA.position.set(.52,1.55,0); bRA.rotation.z=-.42; b.add(bRA);
  b.position.set(1.7,-1.5,0); group.add(b);

  // Hand glow
  const hg=new THREE.Mesh(new THREE.SphereGeometry(.18,12,12),
    new THREE.MeshStandardMaterial({color:0xC084FC,emissive:0x8800DD,emissiveIntensity:1.2,transparent:true,opacity:.85}));
  hg.position.set(0,-.5,0); group.add(hg);

  // Floating hearts
  for(let i=0;i<5;i++){
    const hm=new THREE.Mesh(new THREE.SphereGeometry(.07+i*.015,8,8),
      new THREE.MeshStandardMaterial({color:0xE070F8,emissive:0xCC33EE,emissiveIntensity:1.1,transparent:true,opacity:.8}));
    hm.position.set((i-2)*.55,3.0+i*.18,0);
    hm.userData={fo:i*1.3,fs:.65+i*.1,type:'heart'};
    group.add(hm);
  }
  group.userData.isCouple=true;
  return group;
}

function animateThree() {
  requestAnimationFrame(animateThree);
  const time = Date.now() * .001;

  threeObjects.forEach(obj => {
    // Couple group
    if (obj.isGroup && obj.userData.isCouple) {
      obj.rotation.y = Math.sin(time*.35)*.18;
      obj.position.y = Math.sin(time*.55)*.1;
      obj.children.forEach(child => {
        if (child.userData && child.userData.type === 'heart') {
          child.position.y += Math.sin(time*child.userData.fs + child.userData.fo)*.003;
          if (child.material) child.material.opacity = .5+Math.sin(time*1.1+child.userData.fo)*.3;
        }
      });
    // Science/food Groups (beakers, hats, pots, atoms, DNA)
    } else if (obj.isGroup && obj.userData.fo !== undefined) {
      const ud = obj.userData;
      // float up/down
      obj.position.y = ud.baseY + Math.sin(time*ud.fs + ud.fo)*.5;
      if (ud.type === 'atom') {
        obj.rotation.y += .012;
        obj.rotation.x = Math.sin(time*.4 + ud.fo)*.3;
      } else if (ud.type === 'dna') {
        obj.rotation.y += .008;
        obj.position.y = ud.baseY + Math.sin(time*ud.fs + ud.fo)*.6;
      } else {
        if (ud.rx) obj.rotation.x += ud.rx;
        if (ud.ry) obj.rotation.y += ud.ry;
      }
    // Spinning tetrahedra
    } else if (obj.isMesh && obj.userData.type === 'spin') {
      obj.rotation.x += obj.userData.rx;
      obj.rotation.y += obj.userData.ry;
      obj.position.y = obj.userData.baseY + Math.sin(time*obj.userData.fs + obj.userData.fo)*.4;
      const h = ((time*.08 + obj.userData.hue) % 1);
      obj.material.color.setHSL(h,.88,.68);
      obj.material.emissive.setHSL((h+.5)%1,.75,.25);
    // Floating spheres (spheres scene)
    } else if (obj.isMesh && obj.userData.fo !== undefined && obj.userData.baseY !== undefined) {
      obj.position.y = obj.userData.baseY + Math.sin(time*obj.userData.fs + obj.userData.fo)*.4;
    // Star points
    } else if (obj.isPoints) {
      obj.rotation.y += .00025;
      obj.rotation.x += .00010;
    }
  });

  // Slow orbital camera drift
  camera.position.x = Math.sin(time*.12)*5;
  camera.position.y = 4 + Math.cos(time*.18)*2;
  camera.lookAt(0, .5, 0);
  renderer.render(scene, camera);
}

initThree();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ======================== GALLERY ========================
const galleryUrls = Array.from({length:8},(_,i)=>`assets/${String(i+1).padStart(2,'0')}.jpeg`);
const galleryContainer = document.getElementById('gallery-grid');
galleryUrls.forEach((url,idx) => {
  const div = document.createElement('div');
  div.className = 'gallery-item'; div.dataset.idx = idx;
  div.innerHTML = `<img src="${url}" loading="lazy" alt="Wedding photo ${idx+1}"><div class="gallery-overlay"><span class="gallery-zoom-icon">View</span></div>`;
  galleryContainer.appendChild(div);
});
let lbIdx = 0;
function openLightbox(i) {
  lbIdx = i;
  document.getElementById('lb-img').src = galleryUrls[i];
  document.getElementById('lb-counter').innerText = `${i+1} / ${galleryUrls.length}`;
  document.getElementById('lightbox').classList.add('open');
}
document.querySelectorAll('.gallery-item').forEach(el => el.addEventListener('click',()=>openLightbox(+el.dataset.idx)));
document.getElementById('lb-close').addEventListener('click',()=>document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lb-prev').addEventListener('click',()=>openLightbox((lbIdx-1+galleryUrls.length)%galleryUrls.length));
document.getElementById('lb-next').addEventListener('click',()=>openLightbox((lbIdx+1)%galleryUrls.length));
document.getElementById('lightbox').addEventListener('click',e=>{ if(e.target===e.currentTarget) e.currentTarget.classList.remove('open'); });

// ======================== LOVE NOTES ========================
const loveNotesGrid = document.getElementById('love-notes-grid');
const LN_EMOJIS = ['💍','🌹','🤲','✨','🌸','🥂'];

function buildLoveNotes() {
  loveNotesGrid.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.className = 'love-note-card';
    card.innerHTML = `
      <div class="ln-top">
        <div class="ln-emoji-wrap">${LN_EMOJIS[i]}</div>
        <div class="ln-divider"></div>
      </div>
      <p class="ln-quote"></p>
      <p class="ln-attr"></p>`;
    loveNotesGrid.appendChild(card);
  }
}

// Auto-cycle love note heading every 4s
const NOTE_HEADINGS_EN = ['Whispers of Love','Words That Last Forever','From Heart to Heart','Timeless Sentiments','Love in Every Word','Our Favourite Quotes'];
const NOTE_HEADINGS_AR = ['نجوى القلوب','كلام يعيش للأبد','من قلب لقلب','مشاعر لا تُنسى','الحب في كل كلمة','أجمل ما قيل في الحب'];
let noteHeadIdx = 0;
function cycleNoteHeading() {
  const el = document.getElementById('t-h-notes');
  if (!el) return;
  const list = currentLang === 'ar' ? NOTE_HEADINGS_AR : NOTE_HEADINGS_EN;
  noteHeadIdx = (noteHeadIdx + 1) % list.length;
  el.style.opacity = '0';
  el.style.transform = 'translateY(-8px)';
  el.style.transition = 'opacity .4s, transform .4s';
  setTimeout(()=>{
    el.innerText = list[noteHeadIdx];
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 420);
}
setInterval(cycleNoteHeading, 4000);

buildLoveNotes();

// ======================== WISHES — Firebase REST ========================
let selectedEmoji = '💕';
const EMOJI_OPTIONS = ['💕','💍','🌹','🥂','✨','🎊','🌸','🤲'];
const emojiRow = document.getElementById('emoji-row');

EMOJI_OPTIONS.forEach(emoji => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'emoji-pill' + (emoji==='💕'?' selected':'');
  btn.innerText = emoji;
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.emoji-pill').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedEmoji = emoji;
  });
  emojiRow.appendChild(btn);
});

document.getElementById('submit-wish').addEventListener('click', async () => {
  const name    = document.getElementById('wish-name').value.trim();
  const message = document.getElementById('wish-message').value.trim();
  if (!name||!message) { alert(t('fill_form')); return; }

  const btn = document.getElementById('submit-wish');
  btn.disabled = true; btn.innerText = '...';

  try {
    await fetch(`${FIREBASE_URL}.json`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name, message, emoji: selectedEmoji, timestamp: Date.now() })
    });
    document.getElementById('wish-name').value = '';
    document.getElementById('wish-message').value = '';
    const msgDiv = document.getElementById('form-message');
    msgDiv.innerText = t('wish_sent');
    msgDiv.className = 'form-message success';
    setTimeout(()=>msgDiv.classList.add('hidden'), 3500);
    loadWishes();
  } catch { alert(t('error_send')); }

  btn.disabled = false;
  btn.innerText = t('submit_btn');
});

function formatTimestamp(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  return d.toLocaleDateString(currentLang==='ar'?'ar-EG':'en-GB', {day:'numeric',month:'short',year:'numeric'});
}

async function loadWishes() {
  const wall = document.getElementById('wishes-wall');
  wall.innerHTML = `<div class="wall-loading">✨ ${t('loading_wishes')}</div>`;
  try {
    const res = await fetch(`${FIREBASE_URL}.json`);
    if (!res.ok) throw new Error();
    const data = await res.json();

    if (!data || Object.keys(data).length === 0) {
      wall.innerHTML = `<div class="wall-loading">✨ ${t('no_wishes')} ✨</div>`;
      return;
    }

    const wishes = Object.entries(data)
      .map(([id,val])=>({id,...val}))
      .sort((a,b)=>(b.timestamp||0)-(a.timestamp||0));

    wall.innerHTML = '';
    wishes.forEach(wish => {
      const card = document.createElement('div');
      card.className = 'wish-card';
      // Avatar initial (first letter of name)
      const initial = [...wish.name.trim()][0] || '?';
      card.innerHTML = `
        <div class="wish-card-body">
          <div class="wc-header">
            <div class="wc-left">
              <div class="wc-avatar">${initial}</div>
              <strong class="wc-name">${escapeHtml(wish.name)}</strong>
            </div>
            <span class="wc-emoji">${wish.emoji||'💕'}</span>
          </div>
          <p class="wc-message">${escapeHtml(wish.message)}</p>
          <div class="wc-footer">
            <span class="wc-timestamp">${formatTimestamp(wish.timestamp)}</span>
            <button class="wc-delete" data-id="${wish.id}">🗑️ ${t('delete_btn')}</button>
          </div>
        </div>`;
      wall.appendChild(card);
    });

    document.querySelectorAll('.wc-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(t('delete_confirm'))) return;
        try {
          await fetch(`${FIREBASE_URL}/${btn.dataset.id}.json`, {method:'DELETE'});
          loadWishes();
        } catch { /* ignore */ }
      });
    });
  } catch {
    wall.innerHTML = `<div class="wall-loading">⚠️ ${t('error_wishes')}</div>`;
  }
}

function escapeHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
loadWishes();

// ======================== MUSIC ========================
const audio = document.getElementById('wedding-audio');
let isPlaying = false;
const ppBtn = document.getElementById('btn-play-pause');
ppBtn.addEventListener('click',()=>{
  if(isPlaying){audio.pause();ppBtn.innerText='▶';}
  else{audio.play().catch(()=>{});ppBtn.innerText='⏸';}
  isPlaying=!isPlaying;
});
document.getElementById('music-fab').addEventListener('click',()=>document.getElementById('music-panel').classList.toggle('open'));
document.getElementById('btn-skip-back').addEventListener('click',()=>audio.currentTime-=10);
document.getElementById('btn-skip-fwd').addEventListener('click',()=>audio.currentTime+=10);
document.getElementById('volume-slider').addEventListener('input',e=>audio.volume=e.target.value/100);
document.getElementById('ctrl-speed').addEventListener('input',e=>audio.playbackRate=parseFloat(e.target.value));

// ======================== CREATIVE CONTROLLER ========================
document.getElementById('ctrl-fs').addEventListener('input',e=>document.documentElement.style.setProperty('--fs-base',e.target.value+'px'));
document.getElementById('ctrl-ls').addEventListener('input',e=>document.documentElement.style.setProperty('--ls-heading',(e.target.value/100)+'em'));
document.getElementById('ctrl-font-h').addEventListener('change',e=>document.documentElement.style.setProperty('--font-heading',e.target.value));
document.getElementById('ctrl-font-b').addEventListener('change',e=>document.documentElement.style.setProperty('--font-body',e.target.value));

document.querySelectorAll('.ctrl-swatch').forEach(sw => {
  sw.addEventListener('click',()=>{
    document.querySelectorAll('.ctrl-swatch').forEach(s=>s.classList.remove('active'));
    sw.classList.add('active');
    const r = document.documentElement;
    ['gold','gold2','gold3','gold4'].forEach(k=>{ if(sw.dataset[k]) r.style.setProperty('--'+k, sw.dataset[k]); });
  });
});

let particleTimer;
function setParticleType(type) {
  clearInterval(particleTimer);
  document.querySelectorAll('.petal').forEach(p=>p.remove());
  if(type==='none') return;
  const map={petals:'🌹',sparkles:'✦',hearts:'💕'};
  particleTimer = setInterval(()=>{
    const p=document.createElement('div');
    p.className='petal';
    p.innerText=map[type]||'✦';
    p.style.left=Math.random()*100+'vw';
    p.style.animationDuration=(6+Math.random()*9)+'s';
    p.style.fontSize=(.6+Math.random()*.9)+'rem';
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),13000);
  },1400);
}

document.getElementById('ctrl-particles').addEventListener('change',e=>setParticleType(e.target.value));
document.getElementById('ctrl-gallery-anim').addEventListener('change',e=>{
  const anim=e.target.value;
  document.querySelectorAll('.gallery-item').forEach((el,i)=>{
    anime({targets:el, opacity:[0,1],
      translateY:anim==='slide'?[40,0]:0,
      scale:anim==='zoom'?[.75,1]:1,
      delay:i*60, duration:650, easing:'easeOutCubic'});
  });
});
document.getElementById('ctrl-3d-scene').addEventListener('change',e=>build3DScene(e.target.value));
document.getElementById('ctrl-toggle').addEventListener('click',()=>document.getElementById('ctrl-panel').classList.toggle('open'));
document.getElementById('theme-toggle').addEventListener('click',()=>{
  const light = document.documentElement.getAttribute('data-theme')==='light';
  document.documentElement.setAttribute('data-theme', light?'dark':'light');
  document.getElementById('theme-toggle').innerText = light?'🌙':'☀️';
});

// ======================== GSAP SCROLL ANIMATIONS ========================
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.hero-eyebrow',   {opacity:0,y:20},{opacity:1,y:0,duration:1,   delay:.2});
gsap.fromTo('.hero-names',     {opacity:0,y:45},{opacity:1,y:0,duration:1.3, delay:.5});
gsap.fromTo('.hero-ornament',  {opacity:0},     {opacity:1,   duration:.9,   delay:1});
gsap.fromTo('.hero-date-text', {opacity:0},     {opacity:1,   duration:.8,   delay:1.1});
gsap.fromTo('.hero-year',      {opacity:0,y:15},{opacity:1,y:0,duration:.8,  delay:1.25});
gsap.fromTo('.countdown-wrap', {opacity:0,y:20},{opacity:1,y:0,duration:.9,  delay:1.4});
gsap.fromTo('.scroll-cue',     {opacity:0},     {opacity:1,   duration:.7,   delay:1.7});

gsap.utils.toArray('.detail-card,.venue-card,.map-wrapper,.wish-form-card,.love-note-card').forEach((el,i)=>{
  gsap.fromTo(el,{opacity:0,y:35},{
    opacity:1,y:0,duration:.95,
    scrollTrigger:{trigger:el,start:'top 88%'},
    delay:(i%3)*.07
  });
});
gsap.fromTo('.wedding-quote',{opacity:0,y:25},{
  opacity:1,y:0,duration:1.2,
  scrollTrigger:{trigger:'.quote-section',start:'top 72%'}
});

// ======================== INIT ========================
setParticleType('petals');
applyTranslations();