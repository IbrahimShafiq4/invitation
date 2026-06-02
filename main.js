// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, serverTimestamp, orderBy, query } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEkp-hAMWgnttS83ziw_E3yUdL_P1dcXM",
  authDomain: "ahmad-basmala-invitation.firebaseapp.com",
  projectId: "ahmad-basmala-invitation",
  storageBucket: "ahmad-basmala-invitation.firebasestorage.app",
  messagingSenderId: "830863418890",
  appId: "1:830863418890:web:1723b9c3141e88592861f3",
  measurementId: "G-KNBTV3GEGG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// ======================== TRANSLATIONS (FULL) ========================
const translations = {
  en: {
    "t-eyebrow": "— You Are Cordially Invited —",
    "t-name-ahmed": "Ahmed", "t-name-basmala": "Basmala",
    "t-date-text": "Friday, the Twenty-Sixth of June",
    "t-cd-days": "Days", "t-cd-hours": "Hours", "t-cd-minutes": "Minutes", "t-cd-seconds": "Seconds",
    "t-scroll": "Scroll",
    "t-tag-details": "Save The Date", "t-h-details": "Wedding Details",
    "t-dc-date-lbl": "Date", "t-dc-date-sub": "Friday",
    "t-dc-time-lbl": "Time", "t-dc-time-sub": "Doors open 5:30 PM",
    "t-dc-dress-lbl": "Dress Code", "t-dc-dress-val": "Formal Attire", "t-dc-dress-sub": "Gold & Ivory",
    "t-dc-host-lbl": "Hosted By", "t-dc-host-sub": "& Their Families",
    "t-tag-gallery": "Our Moments", "t-h-gallery": "A Love Story",
    "t-verse": "And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
    "t-verse-source": "— Quran 30:21",
    "t-tag-notes": "Words to Cherish", "t-h-notes": "Romantic Whispers",
    "t-tag-venue": "Venue", "t-h-venue": "Where To Find Us",
    "t-venue-badge": "📍 Ceremony & Reception", "t-venue-name": "Al Sahaba Palace",
    "t-venue-addr": "New Cairo, 5th Settlement<br/>Cairo, Egypt",
    "t-directions": "↗ Get Directions",
    "t-tag-wishes": "Leave A Message", "t-h-wishes": "Wishes For The Couple",
    "t-form-title": "✍️ Write Your Wish", "t-submit": "Send Wish",
    "t-footer": "Made with ❤️ for a day to remember forever",
    "ctrl-title": "✦ CREATIVE ATMOSPHERE ✦",
    "ln1": "A great marriage is not when the 'perfect couple' comes together. It is when an imperfect couple learns to enjoy their differences.",
    "ln1_attr": "— Dave Meurer",
    "ln2": "The best thing to hold onto in life is each other.",
    "ln2_attr": "— Audrey Hepburn",
    "ln3": "He created you from one soul, and from that soul He created its mate, that he might find rest in her.",
    "ln3_attr": "— Quran 7:189",
    "ln4": "In all the world, there is no heart for me like yours.",
    "ln4_attr": "— Maya Angelou",
    "ln5": "Whatever our souls are made of, his and hers are the same.",
    "ln5_attr": "— Emily Brontë",
    "ln6": "May your love be modern enough to survive the times, and old-fashioned enough to last forever.",
    "ln6_attr": "— A Wedding Toast"
  },
  ar: {
    "t-eyebrow": "— أنتم مدعوون بكل حب —",
    "t-name-ahmed": "أحمد", "t-name-basmala": "بسملة",
    "t-date-text": "الجمعة ٢٦ يونيه",
    "t-cd-days": "أيام", "t-cd-hours": "ساعات", "t-cd-minutes": "دقايق", "t-cd-seconds": "ثواني",
    "t-scroll": "اسكرول",
    "t-tag-details": "احتفلوا معانا", "t-h-details": "تفاصيل الفرح",
    "t-dc-date-lbl": "التاريخ", "t-dc-date-sub": "الجمعة",
    "t-dc-time-lbl": "الميعاد", "t-dc-time-sub": "الأبواب 5:30 مساءً",
    "t-dc-dress-lbl": "اللبس", "t-dc-dress-val": "كلاسيكي أنيق", "t-dc-dress-sub": "ذهبي وعاجي",
    "t-dc-host-lbl": "العرسان", "t-dc-host-sub": "و أهلهم",
    "t-tag-gallery": "ذكرياتنا", "t-h-gallery": "حكاية حب",
    "t-verse": "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    "t-verse-source": "— سورة الروم ٢١",
    "t-tag-notes": "كلمات تخلد", "t-h-notes": "همسات رومانسية",
    "t-tag-venue": "المكان", "t-h-venue": "هتلقونا فين",
    "t-venue-badge": "📍 قاعة الأفراح", "t-venue-name": "قصر السحابة",
    "t-venue-addr": "التجمع الخامس، القاهرة الجديدة",
    "t-directions": "↗ افتح الخريطة",
    "t-tag-wishes": "اكتب كلمة", "t-h-wishes": "تهانيكم",
    "t-form-title": "✍️ اكتب تهنئتك", "t-submit": "ابعت التهنئة",
    "t-footer": "اتعملت بحب في يوم هيتذكر للأبد ❤️",
    "ctrl-title": "✦ الأجواء الإبداعية ✦",
    "ln1": "الزواج العظيم مش إن الاتنين 'المثاليين' يبقوا سوا، ده إن الاتنين غير المثاليين يتعلموا يتبسطوا باختلافاتهم.",
    "ln1_attr": "— ديف مورير",
    "ln2": "أحسن حاجة تتمسك بيها في الحياة هي بعض.",
    "ln2_attr": "— أودري هيبورن",
    "ln3": "خلقكم من نفس واحدة وخلق منها زوجها لتسكن إليها.",
    "ln3_attr": "— سورة الأعراف ١٨٩",
    "ln4": "في كل الدنيا، مفيش قلب زي قلبك. في كل الدنيا، مفيش حب زي حبي ليك.",
    "ln4_attr": "— مايا أنجيلو",
    "ln5": "مهما كانت أرواحنا معمولة من إيه، روحه وروحها من نفس الشيء.",
    "ln5_attr": "— إيميلي برونتي",
    "ln6": "يارب يكون حبكم عصري بما يكفي يعدي الأيام، وقديم بما يكفي يعيش للأبد.",
    "ln6_attr": "— نخب زفاف"
  }
};

let currentLang = 'en';
function applyTranslations() {
  const t = translations[currentLang];
  for (const [id, text] of Object.entries(t)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
  }
  // تحديث بطاقات الحب الديناميكية
  const loveCards = document.querySelectorAll('.love-note-card');
  if (loveCards.length) {
    const lnTexts = ['ln1', 'ln2', 'ln3', 'ln4', 'ln5', 'ln6'];
    const lnAttrs = ['ln1_attr', 'ln2_attr', 'ln3_attr', 'ln4_attr', 'ln5_attr', 'ln6_attr'];
    loveCards.forEach((card, idx) => {
      if (idx < lnTexts.length) {
        const quoteEl = card.querySelector('.ln-quote');
        const attrEl = card.querySelector('.ln-attr');
        if (quoteEl) quoteEl.innerText = t[lnTexts[idx]];
        if (attrEl) attrEl.innerText = t[lnAttrs[idx]];
      }
    });
  }
  document.documentElement.setAttribute('data-lang', currentLang);
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('lang-toggle').innerText = currentLang === 'en' ? 'عربي' : 'English';
}
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyTranslations();
  loadWishes();
});

// ======================== COUNTDOWN ========================
function updateCountdown() {
  const target = new Date('2026-06-26T18:00:00+02:00');
  const diff = target - new Date();
  if (diff <= 0) return;
  document.getElementById('cd-days').innerText = Math.floor(diff / 864e5);
  document.getElementById('cd-hours').innerText = Math.floor((diff % 864e5) / 36e5);
  document.getElementById('cd-minutes').innerText = Math.floor((diff % 36e5) / 6e4);
  document.getElementById('cd-seconds').innerText = Math.floor((diff % 6e4) / 1000);
}
setInterval(updateCountdown, 1000);

// ======================== THREE.JS SCENE (CUBES + COUPLE FIGURES) ========================
let scene, camera, renderer, threeObjects = [], currentScene = 'cubes', goldHex = 0xC084FC;
const canvas = document.getElementById('three-canvas');
function initThree() {
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(10, 8, 20);
  camera.lookAt(0, 0, 0);
  build3DScene('cubes');
  animateThree();
}

function build3DScene(type) {
  threeObjects.forEach(obj => scene.remove(obj));
  threeObjects = [];
  currentScene = type;
  
  // مكعبات متغيرة الألوان
  for (let i = 0; i < 80; i++) {
    const size = 0.3 + Math.random() * 0.5;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ color: 0xC084FC, emissive: 0x330066, emissiveIntensity: 0.2 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = (Math.random() - 0.5) * 22;
    cube.position.y = (Math.random() - 0.5) * 14;
    cube.position.z = (Math.random() - 0.5) * 18;
    cube.userData = { speedX: (Math.random() - 0.5) * 0.02, speedY: (Math.random() - 0.5) * 0.02, speedZ: (Math.random() - 0.5) * 0.02 };
    scene.add(cube);
    threeObjects.push(cube);
  }
  
  // شخصيات العروسين (مجموعتان)
  const groomGroup = new THREE.Group();
  const brideGroup = new THREE.Group();
  
  // الجسم
  const bodyGeo = new THREE.CylinderGeometry(0.6, 0.6, 1.2, 8);
  const groomBody = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0x5D3A1A }));
  const brideBody = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0xE8C4A0 }));
  groomBody.position.y = 0.6;
  brideBody.position.y = 0.6;
  groomGroup.add(groomBody);
  brideGroup.add(brideBody);
  
  // الرأس
  const headGeo = new THREE.SphereGeometry(0.5, 16, 16);
  const groomHead = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: 0xD4A373 }));
  const brideHead = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: 0xF4D0A8 }));
  groomHead.position.y = 1.3;
  brideHead.position.y = 1.3;
  groomGroup.add(groomHead);
  brideGroup.add(brideHead);
  
  // تاج / حجاب
  const crownGeo = new THREE.CylinderGeometry(0.55, 0.65, 0.2, 8);
  const groomCrown = new THREE.Mesh(crownGeo, new THREE.MeshStandardMaterial({ color: 0xC084FC, emissive: 0x5500AA }));
  const brideVeil = new THREE.Mesh(crownGeo, new THREE.MeshStandardMaterial({ color: 0xD8B4FE, emissive: 0x6600BB }));
  groomCrown.position.y = 1.7;
  brideVeil.position.y = 1.7;
  groomGroup.add(groomCrown);
  brideGroup.add(brideVeil);
  
  groomGroup.position.set(-2.2, -0.8, 0);
  brideGroup.position.set(2.2, -0.8, 0);
  scene.add(groomGroup);
  scene.add(brideGroup);
  threeObjects.push(groomGroup, brideGroup);
  
  // إضاءة
  const ambientLight = new THREE.AmbientLight(0x404060);
  const pointLight = new THREE.PointLight(0xC084FC, 1, 30);
  pointLight.position.set(5, 10, 7);
  scene.add(ambientLight);
  scene.add(pointLight);
}

function animateThree() {
  requestAnimationFrame(animateThree);
  const time = Date.now() * 0.002;
  threeObjects.forEach(obj => {
    if (obj.isGroup) {
      obj.rotation.y = Math.sin(time) * 0.4;
      obj.position.y = -0.8 + Math.sin(time * 1.2) * 0.06;
    } else if (obj.isMesh && obj.geometry.type === 'BoxGeometry') {
      obj.rotation.x += obj.userData.speedX;
      obj.rotation.y += obj.userData.speedY;
      obj.rotation.z += obj.userData.speedZ;
      const hue = (time + obj.position.x * 0.5) % 1;
      obj.material.color.setHSL(hue, 0.8, 0.6);
    }
  });
  camera.position.x = Math.sin(time * 0.2) * 3;
  camera.position.y = 8 + Math.cos(time * 0.3) * 1.2;
  camera.lookAt(0, 1, 0);
  renderer.render(scene, camera);
}
initThree();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ======================== GALLERY (8 images) ========================
const galleryUrls = Array.from({ length: 8 }, (_, i) => `assets/${String(i + 1).padStart(2, '0')}.jpeg`);
const galleryContainer = document.getElementById('gallery-grid');
galleryUrls.forEach((url, idx) => {
  const div = document.createElement('div');
  div.className = 'gallery-item';
  div.dataset.idx = idx;
  div.innerHTML = `<img src="${url}" loading="lazy"><div class="gallery-overlay"><span class="gallery-zoom-icon">View</span></div>`;
  galleryContainer.appendChild(div);
});
let lightboxIndex = 0;
function openLightbox(i) {
  lightboxIndex = i;
  document.getElementById('lb-img').src = galleryUrls[i];
  document.getElementById('lb-counter').innerText = `${i + 1}/${galleryUrls.length}`;
  document.getElementById('lightbox').classList.add('open');
}
document.querySelectorAll('.gallery-item').forEach(el => el.addEventListener('click', () => openLightbox(parseInt(el.dataset.idx))));
document.getElementById('lb-close').addEventListener('click', () => document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lb-prev').addEventListener('click', () => { lightboxIndex = (lightboxIndex - 1 + galleryUrls.length) % galleryUrls.length; openLightbox(lightboxIndex); });
document.getElementById('lb-next').addEventListener('click', () => { lightboxIndex = (lightboxIndex + 1) % galleryUrls.length; openLightbox(lightboxIndex); });

// ======================== LOVE NOTES (Dynamic) ========================
const loveNotesGrid = document.getElementById('love-notes-grid');
function buildLoveNotes() {
  loveNotesGrid.innerHTML = '';
  const emojis = ['💍', '🌹', '🤲', '✨', '🌸', '🥂'];
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.className = 'love-note-card';
    card.innerHTML = `<span class="ln-emoji">${emojis[i]}</span><p class="ln-quote"></p><p class="ln-attr"></p>`;
    loveNotesGrid.appendChild(card);
  }
  applyTranslations();
}
buildLoveNotes();

// ======================== WISHES (CRUD + Firebase) ========================
let selectedEmoji = '💕';
let selectedFile = null;
const emojiOptions = ['💕', '💍', '🌹', '🥂', '✨', '🎊', '🌸', '🤲'];
const emojiRow = document.getElementById('emoji-row');
emojiOptions.forEach(emoji => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'emoji-pill';
  btn.innerText = emoji;
  if (emoji === '💕') btn.classList.add('selected');
  btn.addEventListener('click', () => {
    document.querySelectorAll('.emoji-pill').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedEmoji = emoji;
  });
  emojiRow.appendChild(btn);
});

document.getElementById('wish-image').addEventListener('change', e => { selectedFile = e.target.files[0]; });
document.getElementById('submit-wish').addEventListener('click', async () => {
  const name = document.getElementById('wish-name').value.trim();
  const message = document.getElementById('wish-message').value.trim();
  if (!name || !message) return alert(currentLang === 'ar' ? 'اكتب اسمك ورسالتك!' : 'Please fill name & message');
  const btn = document.getElementById('submit-wish');
  btn.disabled = true;
  try {
    let imageUrl = null;
    if (selectedFile) {
      const storageRef = ref(storage, `wishes/${Date.now()}_${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);
      imageUrl = await getDownloadURL(storageRef);
    }
    await addDoc(collection(db, 'wishes'), { name, message, emoji: selectedEmoji, imageUrl, timestamp: serverTimestamp() });
    document.getElementById('wish-name').value = '';
    document.getElementById('wish-message').value = '';
    selectedFile = null;
    loadWishes();
    const msgDiv = document.getElementById('form-message');
    msgDiv.innerText = currentLang === 'ar' ? 'تم الإرسال! شكراً 🎉' : 'Wish sent! Thank you 🎉';
    msgDiv.className = 'form-message success';
    setTimeout(() => msgDiv.classList.add('hidden'), 3000);
  } catch (err) { alert('Error sending wish'); }
  btn.disabled = false;
});

async function loadWishes() {
  const wall = document.getElementById('wishes-wall');
  try {
    const q = query(collection(db, 'wishes'), orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) { wall.innerHTML = `<div class="wall-loading">✨ ${currentLang === 'ar' ? 'مفيش تهاني لسه — كن أول من يكتب!' : 'No wishes yet — be the first!'} ✨</div>`; return; }
    wall.innerHTML = '';
    snapshot.forEach(docSnap => {
      const d = docSnap.data();
      const card = document.createElement('div');
      card.className = 'wish-card';
      card.innerHTML = `
        <div class="wc-header"><strong class="wc-name">${escapeHtml(d.name)}</strong><span class="wc-emoji">${d.emoji || '💕'}</span></div>
        ${d.imageUrl ? `<img src="${d.imageUrl}" class="wc-image" loading="lazy">` : ''}
        <p class="wc-message">${escapeHtml(d.message)}</p>
        <button class="wc-delete" data-id="${docSnap.id}">🗑️ ${currentLang === 'ar' ? 'حذف' : 'Delete'}</button>
      `;
      wall.appendChild(card);
    });
    document.querySelectorAll('.wc-delete').forEach(btn => btn.addEventListener('click', async () => {
      if (confirm(currentLang === 'ar' ? 'حذف التهنئة؟' : 'Delete this wish?')) {
        await deleteDoc(doc(db, 'wishes', btn.dataset.id));
        loadWishes();
      }
    }));
  } catch (err) { wall.innerHTML = `<div class="wall-loading">⚠️ ${currentLang === 'ar' ? 'مشكلة في تحميل التهاني' : 'Error loading wishes'}</div>`; }
}
function escapeHtml(str) { return str.replace(/[&<>]/g, function(m) { if (m === '&') return '&amp;'; if (m === '<') return '&lt;'; if (m === '>') return '&gt;'; return m; }); }
loadWishes();

// ======================== MUSIC PLAYER ========================
const audio = document.getElementById('wedding-audio');
let isPlaying = false;
document.getElementById('btn-play-pause').addEventListener('click', () => {
  if (isPlaying) { audio.pause(); document.getElementById('btn-play-pause').innerText = '▶'; }
  else { audio.play().catch(() => {}); document.getElementById('btn-play-pause').innerText = '⏸'; }
  isPlaying = !isPlaying;
});
document.getElementById('music-fab').addEventListener('click', () => document.getElementById('music-panel').classList.toggle('open'));
document.getElementById('btn-skip-back').addEventListener('click', () => audio.currentTime -= 10);
document.getElementById('btn-skip-fwd').addEventListener('click', () => audio.currentTime += 10);
document.getElementById('volume-slider').addEventListener('input', e => audio.volume = e.target.value / 100);
document.getElementById('ctrl-speed').addEventListener('input', e => audio.playbackRate = parseFloat(e.target.value));

// ======================== CREATIVE CONTROLLER ========================
document.getElementById('ctrl-fs').addEventListener('input', e => document.documentElement.style.setProperty('--fs-base', e.target.value + 'px'));
document.getElementById('ctrl-ls').addEventListener('input', e => document.documentElement.style.setProperty('--ls-heading', (e.target.value / 100) + 'em'));
document.getElementById('ctrl-font-h').addEventListener('change', e => document.documentElement.style.setProperty('--font-heading', e.target.value));
document.getElementById('ctrl-font-b').addEventListener('change', e => document.documentElement.style.setProperty('--font-body', e.target.value));
document.querySelectorAll('.ctrl-swatch').forEach(sw => sw.addEventListener('click', () => {
  const gold = sw.dataset.gold;
  if (gold) {
    document.documentElement.style.setProperty('--gold', gold);
    goldHex = parseInt(gold.slice(1), 16);
    build3DScene(currentScene);
  }
}));
let particleInterval;
function setParticleType(type) {
  if (particleInterval) clearInterval(particleInterval);
  document.querySelectorAll('.petal').forEach(p => p.remove());
  if (type === 'none') return;
  particleInterval = setInterval(() => {
    const p = document.createElement('div');
    p.className = 'petal';
    p.innerText = type === 'petals' ? '🌹' : (type === 'sparkles' ? '✦' : '💕');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = 6 + Math.random() * 8 + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 10000);
  }, 1200);
}
document.getElementById('ctrl-particles').addEventListener('change', e => setParticleType(e.target.value));
document.getElementById('ctrl-gallery-anim').addEventListener('change', e => {
  const anim = e.target.value;
  document.querySelectorAll('.gallery-item').forEach((el, i) => {
    anime({ targets: el, opacity: [0, 1], translateY: anim === 'slide' ? [30, 0] : 0, scale: anim === 'zoom' ? [0.8, 1] : 1, delay: i * 70, duration: 600 });
  });
});
document.getElementById('ctrl-3d-scene').addEventListener('change', e => build3DScene(e.target.value));
document.getElementById('ctrl-toggle').addEventListener('click', () => document.getElementById('ctrl-panel').classList.toggle('open'));
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('theme-toggle').innerText = isDark ? '☀️' : '🌙';
});

// ======================== GSAP SCROLL ANIMATIONS ========================
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 });
gsap.fromTo('.hero-names', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.5 });
gsap.fromTo('.hero-ornament', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.9 });
gsap.fromTo('.hero-date-text', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1.1 });
gsap.fromTo('.hero-year', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1.2 });
gsap.fromTo('.countdown-wrap', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1.3 });
gsap.fromTo('.scroll-cue', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.5 });

gsap.utils.toArray('.detail-card, .venue-card, .map-wrapper, .wish-form-card, .love-note-card').forEach(el => {
  gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, scrollTrigger: { trigger: el, start: 'top 85%' } });
});
gsap.fromTo('.wedding-quote', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '.quote-section', start: 'top 75%' } });

// Initial particle effect & language
setParticleType('petals');
applyTranslations();