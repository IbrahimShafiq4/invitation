// ============================================================
//  Ahmed & Basmala — Main JS  (Firebase REST API version)
// ============================================================

const FIREBASE_URL = 'https://ahmad-basmala-invitation-default-rtdb.firebaseio.com/wishes';

// ======================== TRANSLATIONS ========================
const translations = {
  en: {
    "t-eyebrow": "— You Are Cordially Invited —",
    "t-name-ahmed": "Ahmed",
    "t-name-basmala": "Basmala",
    "t-date-text": "Friday, the Twenty-Sixth of June",
    "t-cd-days": "Days",
    "t-cd-hours": "Hours",
    "t-cd-minutes": "Minutes",
    "t-cd-seconds": "Seconds",
    "t-scroll": "Scroll",
    "t-tag-details": "Save The Date",
    "t-h-details": "Wedding Details",
    "t-dc-date-lbl": "Date",
    "t-dc-date-sub": "Friday",
    "t-dc-time-lbl": "Time",
    "t-dc-time-sub": "Doors open 5:30 PM",
    "t-dc-dress-lbl": "Dress Code",
    "t-dc-dress-val": "Formal Attire",
    "t-dc-dress-sub": "Gold & Ivory",
    "t-dc-host-lbl": "Hosted By",
    "t-dc-host-sub": "& Their Families",
    "t-tag-gallery": "Our Moments",
    "t-h-gallery": "A Love Story",
    "t-verse": "And among His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.",
    "t-verse-source": "— Quran 30:21",
    "t-tag-notes": "Words to Cherish",
    "t-h-notes": "Whispers of Love",
    "t-tag-venue": "Venue",
    "t-h-venue": "Where To Find Us",
    "t-venue-badge": "📍 Ceremony & Reception",
    "t-venue-name": "Al Sahaba Palace",
    "t-venue-addr": "New Cairo, 5th Settlement<br>Cairo, Egypt",
    "t-directions": "↗ Get Directions",
    "t-tag-wishes": "Leave A Message",
    "t-h-wishes": "Wishes For The Couple",
    "t-form-title": "✍️ Write Your Wish",
    "t-footer": "Made with ❤️ for a day to remember forever",
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
    "ln6_attr": "— A Wedding Toast",
    "delete_confirm": "Delete this wish?",
    "delete_btn": "Delete",
    "no_wishes": "No wishes yet — be the first!",
    "error_wishes": "Error loading wishes",
    "loading_wishes": "Loading wishes...",
    "fill_form": "Please fill name & message",
    "wish_sent": "Wish sent! Thank you 🎉",
    "error_send": "Error sending wish. Please try again."
  },
  ar: {
    "t-eyebrow": "— أنتم مدعوون بكل حب —",
    "t-name-ahmed": "أحمد",
    "t-name-basmala": "بسملة",
    "t-date-text": "الجمعة ٢٦ يونيه",
    "t-cd-days": "أيام",
    "t-cd-hours": "ساعات",
    "t-cd-minutes": "دقايق",
    "t-cd-seconds": "ثواني",
    "t-scroll": "اسكرول",
    "t-tag-details": "احتفلوا معانا",
    "t-h-details": "تفاصيل الفرح",
    "t-dc-date-lbl": "التاريخ",
    "t-dc-date-sub": "الجمعة",
    "t-dc-time-lbl": "الميعاد",
    "t-dc-time-sub": "الأبواب 5:30 مساءً",
    "t-dc-dress-lbl": "اللبس",
    "t-dc-dress-val": "كلاسيكي أنيق",
    "t-dc-dress-sub": "ذهبي وعاجي",
    "t-dc-host-lbl": "العرسان",
    "t-dc-host-sub": "و أهلهم",
    "t-tag-gallery": "ذكرياتنا",
    "t-h-gallery": "حكاية حب",
    "t-verse": "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    "t-verse-source": "— سورة الروم ٢١",
    "t-tag-notes": "كلمات تخلد",
    "t-h-notes": "نجوى القلوب",
    "t-tag-venue": "المكان",
    "t-h-venue": "هتلقونا فين",
    "t-venue-badge": "📍 قاعة الأفراح",
    "t-venue-name": "قصر السحابة",
    "t-venue-addr": "التجمع الخامس، القاهرة الجديدة",
    "t-directions": "↗ افتح الخريطة",
    "t-tag-wishes": "اكتب كلمة",
    "t-h-wishes": "تهانيكم",
    "t-form-title": "✍️ اكتب تهنئتك",
    "t-footer": "اتعملت بحب في يوم هيتذكر للأبد ❤️",
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
    "ln6_attr": "— نخب زفاف",
    "delete_confirm": "حذف التهنئة؟",
    "delete_btn": "حذف",
    "no_wishes": "مفيش تهاني لسه — كن أول من يكتب!",
    "error_wishes": "مشكلة في تحميل التهاني",
    "loading_wishes": "جارى التحميل...",
    "fill_form": "اكتب اسمك ورسالتك!",
    "wish_sent": "تم الإرسال! شكراً 🎉",
    "error_send": "حصل خطأ. جرب تاني."
  }
};

let currentLang = 'en';
const t = (key) => translations[currentLang][key] || key;

function applyTranslations() {
  const trans = translations[currentLang];
  for (const [id, text] of Object.entries(trans)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
  }
  // Love note cards
  const loveCards = document.querySelectorAll('.love-note-card');
  const lnKeys = ['ln1', 'ln2', 'ln3', 'ln4', 'ln5', 'ln6'];
  const laKeys = ['ln1_attr', 'ln2_attr', 'ln3_attr', 'ln4_attr', 'ln5_attr', 'ln6_attr'];
  loveCards.forEach((card, idx) => {
    if (idx < lnKeys.length) {
      const q = card.querySelector('.ln-quote');
      const a = card.querySelector('.ln-attr');
      if (q) q.innerText = trans[lnKeys[idx]];
      if (a) a.innerText = trans[laKeys[idx]];
    }
  });
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
  if (diff <= 0) {
    ['cd-days', 'cd-hours', 'cd-minutes', 'cd-seconds'].forEach(id => {
      document.getElementById(id).innerText = '00';
    });
    return;
  }
  document.getElementById('cd-days').innerText = String(Math.floor(diff / 864e5)).padStart(2, '0');
  document.getElementById('cd-hours').innerText = String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0');
  document.getElementById('cd-minutes').innerText = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0');
  document.getElementById('cd-seconds').innerText = String(Math.floor((diff % 6e4) / 1000)).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ======================== THREE.JS ========================
let scene, camera, renderer, threeObjects = [], currentScene3d = 'cubes';
const canvas3d = document.getElementById('three-canvas');

function initThree() {
  renderer = new THREE.WebGLRenderer({ canvas: canvas3d, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 4, 20);
  camera.lookAt(0, 1, 0);
  build3DScene('cubes');
  animateThree();
}

function build3DScene(type) {
  threeObjects.forEach(obj => scene.remove(obj));
  threeObjects = [];
  currentScene3d = type;

  // Ambient + point lights
  const ambient = new THREE.AmbientLight(0x1a0530, 1.5);
  scene.add(ambient);
  const pt1 = new THREE.PointLight(0xC084FC, 2.5, 50);
  pt1.position.set(5, 10, 8);
  scene.add(pt1);
  const pt2 = new THREE.PointLight(0x7E22CE, 1.5, 40);
  pt2.position.set(-6, -4, 6);
  scene.add(pt2);
  threeObjects.push(ambient, pt1, pt2);

  if (type === 'cubes') {
    for (let i = 0; i < 90; i++) {
      const s = 0.25 + Math.random() * 0.55;
      const geo = new THREE.BoxGeometry(s, s, s);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xC084FC,
        emissive: 0x3D0080,
        emissiveIntensity: .3,
        metalness: .5,
        roughness: .4,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - .5) * 30,
        (Math.random() - .5) * 18,
        (Math.random() - .5) * 20
      );
      mesh.rotation.set(Math.random() * 6, Math.random() * 6, Math.random() * 6);
      mesh.userData = {
        rx: (Math.random() - .5) * .025,
        ry: (Math.random() - .5) * .025,
        rz: (Math.random() - .5) * .02,
        hueOffset: Math.random()
      };
      scene.add(mesh);
      threeObjects.push(mesh);
    }
  } else if (type === 'stars') {
    const starGeo = new THREE.BufferGeometry();
    const count = 1800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - .5) * 60;
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xD8B4FE, size: .12, sizeAttenuation: true });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);
    threeObjects.push(stars);
  } else if (type === 'spheres') {
    for (let i = 0; i < 45; i++) {
      const r = .2 + Math.random() * .6;
      const geo = new THREE.SphereGeometry(r, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xA855F7,
        emissive: 0x4B0082,
        emissiveIntensity: .4,
        transparent: true,
        opacity: .7 + Math.random() * .3,
        metalness: .6, roughness: .3
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - .5) * 28,
        (Math.random() - .5) * 16,
        (Math.random() - .5) * 18
      );
      mesh.userData = { floatOffset: Math.random() * Math.PI * 2, floatSpeed: .4 + Math.random() * .6 };
      scene.add(mesh);
      threeObjects.push(mesh);
    }
  }

  // Couple figures — always present
  const couple = buildCouple();
  scene.add(couple);
  threeObjects.push(couple);
}

function buildCouple() {
  const group = new THREE.Group();

  // Shared materials
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xD4A373, roughness: .8 });
  const groomSuitMat = new THREE.MeshStandardMaterial({ color: 0x2D1B4E, metalness: .3, roughness: .6 });
  const brideDressMat = new THREE.MeshStandardMaterial({ color: 0xF8F0FF, metalness: .1, roughness: .5 });
  const accentMat = new THREE.MeshStandardMaterial({ color: 0xC084FC, emissive: 0x5500AA, emissiveIntensity: .6, metalness: .7 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x1A0A00, roughness: .9 });

  // ─ GROOM ─
  const groomGroup = new THREE.Group();

  // Body (suit)
  const groomBody = new THREE.Mesh(new THREE.CylinderGeometry(.45, .5, 1.3, 10), groomSuitMat);
  groomBody.position.y = .65;
  groomGroup.add(groomBody);

  // Head
  const groomHead = new THREE.Mesh(new THREE.SphereGeometry(.38, 20, 20), skinMat);
  groomHead.position.y = 1.7;
  groomGroup.add(groomHead);

  // Hair
  const groomHair = new THREE.Mesh(new THREE.SphereGeometry(.4, 20, 10, 0, Math.PI * 2, 0, Math.PI * .5), hairMat);
  groomHair.position.y = 1.88;
  groomGroup.add(groomHair);

  // Bow tie
  const tieGeo = new THREE.BoxGeometry(.28, .1, .06);
  const tie = new THREE.Mesh(tieGeo, accentMat);
  tie.position.set(0, 1.27, .45);
  groomGroup.add(tie);

  // Arms
  const armGeo = new THREE.CylinderGeometry(.12, .1, .9, 8);
  const leftArm = new THREE.Mesh(armGeo, groomSuitMat);
  leftArm.position.set(.62, .85, 0); leftArm.rotation.z = .35;
  const rightArm = new THREE.Mesh(armGeo, groomSuitMat);
  rightArm.position.set(-.62, .85, 0); rightArm.rotation.z = -.35;
  groomGroup.add(leftArm, rightArm);

  groomGroup.position.set(-1.6, -1.2, 0);
  group.add(groomGroup);

  // ─ BRIDE ─
  const brideGroup = new THREE.Group();

  // Dress (wider cone)
  const brideDress = new THREE.Mesh(new THREE.CylinderGeometry(.2, .9, 1.5, 16), brideDressMat);
  brideDress.position.y = .75;
  brideGroup.add(brideDress);

  // Body upper
  const brideUpper = new THREE.Mesh(new THREE.CylinderGeometry(.38, .2, .6, 12), brideDressMat);
  brideUpper.position.y = 1.5;
  brideGroup.add(brideUpper);

  // Head
  const brideHead = new THREE.Mesh(new THREE.SphereGeometry(.36, 20, 20), new THREE.MeshStandardMaterial({ color: 0xF4D0A8, roughness: .7 }));
  brideHead.position.y = 2.1;
  brideGroup.add(brideHead);

  // Veil / crown
  const veilGeo = new THREE.ConeGeometry(.45, .35, 16);
  const veil = new THREE.Mesh(veilGeo, accentMat);
  veil.position.y = 2.55;
  brideGroup.add(veil);

  // Hair (long)
  const brideHair = new THREE.Mesh(
    new THREE.CylinderGeometry(.37, .22, .9, 12),
    new THREE.MeshStandardMaterial({ color: 0x1A0A00, roughness: .9 })
  );
  brideHair.position.set(0, 1.85, -.1);
  brideGroup.add(brideHair);

  // Arms reaching toward groom
  const bArmGeo = new THREE.CylinderGeometry(.1, .08, .85, 8);
  const bLeftArm = new THREE.Mesh(bArmGeo, brideDressMat);
  bLeftArm.position.set(-.55, 1.6, 0); bLeftArm.rotation.z = .4;
  brideGroup.add(bLeftArm);

  brideGroup.position.set(1.6, -1.2, 0);
  group.add(brideGroup);

  // Linked hands (small sphere in center)
  const handGeo = new THREE.SphereGeometry(.12, 10, 10);
  const handMat = new THREE.MeshStandardMaterial({ color: 0xC084FC, emissive: 0x7E22CE, emissiveIntensity: .8 });
  const joinHand = new THREE.Mesh(handGeo, handMat);
  joinHand.position.set(0, -.25, 0);
  group.add(joinHand);

  // Floating hearts above couple
  for (let i = 0; i < 4; i++) {
    const heartGeo = new THREE.SphereGeometry(.07 + i * .02, 8, 8);
    const heartMat = new THREE.MeshStandardMaterial({ color: 0xE080F0, emissive: 0xC040E0, emissiveIntensity: .9, transparent: true, opacity: .8 });
    const heart = new THREE.Mesh(heartGeo, heartMat);
    heart.position.set((i - 1.5) * .55, 2.3 + i * .2, 0);
    heart.userData = { floatOffset: i * 1.2, floatSpeed: .7 };
    group.add(heart);
    threeObjects.push(heart); // so they animate
  }

  group.userData.isCouple = true;
  return group;
}

function animateThree() {
  requestAnimationFrame(animateThree);
  const time = Date.now() * 0.001;

  threeObjects.forEach(obj => {
    if (obj.isGroup && obj.userData.isCouple) {
      // Gentle couple sway
      obj.rotation.y = Math.sin(time * .4) * .15;
      obj.position.y = Math.sin(time * .6) * .08;
    } else if (obj.isMesh) {
      const geo = obj.geometry;
      if (geo.type === 'BoxGeometry' && obj.userData.rx !== undefined) {
        obj.rotation.x += obj.userData.rx;
        obj.rotation.y += obj.userData.ry;
        obj.rotation.z += obj.userData.rz;
        // Rainbow hue cycle
        const hue = ((time * .12 + obj.userData.hueOffset) % 1);
        obj.material.color.setHSL(hue, .85, .65);
        obj.material.emissive.setHSL((hue + .5) % 1, .7, .25);
      } else if (obj.userData.floatOffset !== undefined) {
        obj.position.y += Math.sin(time * obj.userData.floatSpeed + obj.userData.floatOffset) * .003;
        obj.material.opacity = .6 + Math.sin(time * 1.2 + obj.userData.floatOffset) * .2;
      }
    } else if (obj.isPoints) {
      obj.rotation.y += .0003;
      obj.rotation.x += .0001;
    }
  });

  // Slow orbital camera
  camera.position.x = Math.sin(time * .15) * 4;
  camera.position.y = 4 + Math.cos(time * .2) * 1.5;
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
const galleryUrls = Array.from({ length: 8 }, (_, i) => `assets/${String(i + 1).padStart(2, '0')}.jpeg`);
const galleryContainer = document.getElementById('gallery-grid');
galleryUrls.forEach((url, idx) => {
  const div = document.createElement('div');
  div.className = 'gallery-item';
  div.dataset.idx = idx;
  div.innerHTML = `<img src="${url}" loading="lazy" alt="Wedding photo ${idx + 1}"><div class="gallery-overlay"><span class="gallery-zoom-icon">View</span></div>`;
  galleryContainer.appendChild(div);
});

let lightboxIndex = 0;
function openLightbox(i) {
  lightboxIndex = i;
  const img = document.getElementById('lb-img');
  img.src = galleryUrls[i];
  document.getElementById('lb-counter').innerText = `${i + 1} / ${galleryUrls.length}`;
  document.getElementById('lightbox').classList.add('open');
}
document.querySelectorAll('.gallery-item').forEach(el =>
  el.addEventListener('click', () => openLightbox(parseInt(el.dataset.idx)))
);
document.getElementById('lb-close').addEventListener('click', () =>
  document.getElementById('lightbox').classList.remove('open')
);
document.getElementById('lb-prev').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + galleryUrls.length) % galleryUrls.length;
  openLightbox(lightboxIndex);
});
document.getElementById('lb-next').addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % galleryUrls.length;
  openLightbox(lightboxIndex);
});
document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) document.getElementById('lightbox').classList.remove('open');
});

// ======================== LOVE NOTES ========================
const loveNotesGrid = document.getElementById('love-notes-grid');
function buildLoveNotes() {
  loveNotesGrid.innerHTML = '';
  const emojis = ['💍', '🌹', '🤲', '✨', '🌸', '🥂'];
  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    card.className = 'love-note-card';
    card.innerHTML = `
      <div class="ln-top">
        <div class="ln-emoji-wrap">${emojis[i]}</div>
        <div class="ln-divider"></div>
      </div>
      <p class="ln-quote"></p>
      <p class="ln-attr"></p>
    `;
    loveNotesGrid.appendChild(card);
  }
  applyTranslations();
}
buildLoveNotes();

// ======================== WISHES — Firebase REST API ========================
let selectedEmoji = '💕';
let selectedFile = null;
const emojiOptions = ['💕', '💍', '🌹', '🥂', '✨', '🎊', '🌸', '🤲'];
const emojiRow = document.getElementById('emoji-row');

emojiOptions.forEach(emoji => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'emoji-pill' + (emoji === '💕' ? ' selected' : '');
  btn.innerText = emoji;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.emoji-pill').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedEmoji = emoji;
  });
  emojiRow.appendChild(btn);
});

document.getElementById('submit-wish').addEventListener('click', async () => {
  const name = document.getElementById('wish-name').value.trim();
  const message = document.getElementById('wish-message').value.trim();
  if (!name || !message) { alert(t('fill_form')); return; }

  const btn = document.getElementById('submit-wish');
  btn.disabled = true;
  btn.innerText = '...';

  try {
    const payload = {
      name,
      message,
      emoji: selectedEmoji,
      timestamp: Date.now()
    };

    // Image upload via Cloudinary or skip (Firebase REST doesn't support Storage)
    // For now we store base64 thumbnail if file selected
    if (selectedFile && selectedFile.size < 600000) {
      const base64 = await fileToBase64(selectedFile);
      payload.imageUrl = base64;
    }

    const res = await fetch(`${FIREBASE_URL}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Network error');

    document.getElementById('wish-name').value = '';
    document.getElementById('wish-message').value = '';
    selectedFile = null;

    const msgDiv = document.getElementById('form-message');
    msgDiv.innerText = t('wish_sent');
    msgDiv.className = 'form-message success';
    setTimeout(() => { msgDiv.classList.add('hidden'); }, 3500);

    loadWishes();
  } catch (err) {
    alert(t('error_send'));
  }
  btn.disabled = false;
  btn.innerText = t('t-submit') || 'Send Wish →';
});

function fileToBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
}

// Load and display wishes
async function loadWishes() {
  const wall = document.getElementById('wishes-wall');
  wall.innerHTML = `<div class="wall-loading">✨ ${translations[currentLang]?.loading_wishes || 'Loading wishes...'}</div>`;
  try {
    const res = await fetch(`${FIREBASE_URL}.json?orderBy="timestamp"&limitToLast=50`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (!data) {
      wall.innerHTML = `<div class="wall-loading">✨ ${translations[currentLang]?.no_wishes || 'No wishes yet — be the first!'} ✨</div>`;
      return;
    }
    // Convert to array and sort newest first
    const wishes = Object.entries(data)
      .map(([id, val]) => ({ id, ...val }))
      .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    wall.innerHTML = '';
    wishes.forEach(wish => {
      const date = wish.timestamp
        ? new Date(wish.timestamp).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US')
        : '';
      const card = document.createElement('div');
      card.className = 'wish-card';
      card.innerHTML = `
        <div class="wc-header">
          <strong class="wc-name">${escapeHtml(wish.name)}</strong>
          <span class="wc-emoji">${wish.emoji || '💕'}</span>
        </div>
        <p class="wc-message">${escapeHtml(wish.message)}</p>
        <div class="wc-timestamp">📅 ${date}</div>
        <button class="wc-delete" data-id="${wish.id}">🗑️ ${translations[currentLang]?.delete_btn || 'Delete'}</button>
      `;
      wall.appendChild(card);
    });
    // Attach delete handlers
    document.querySelectorAll('.wc-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!confirm(translations[currentLang]?.delete_confirm || 'Delete this wish?')) return;
        try {
          await fetch(`${FIREBASE_URL}/${btn.dataset.id}.json`, { method: 'DELETE' });
          loadWishes(); // refresh after deletion
        } catch (err) { /* ignore */ }
      });
    });
  } catch (err) {
    wall.innerHTML = `<div class="wall-loading">⚠️ ${translations[currentLang]?.error_wishes || 'Error loading wishes'}</div>`;
  }
}

// Helper: escape HTML to prevent XSS
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Initial load
loadWishes();

// ======================== MUSIC PLAYER ========================
const audio = document.getElementById('wedding-audio');
let isPlaying = false;
const playPauseBtn = document.getElementById('btn-play-pause');

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) { audio.pause(); playPauseBtn.innerText = '▶'; }
  else { audio.play().catch(() => { }); playPauseBtn.innerText = '⏸'; }
  isPlaying = !isPlaying;
});
document.getElementById('music-fab').addEventListener('click', () =>
  document.getElementById('music-panel').classList.toggle('open')
);
document.getElementById('btn-skip-back').addEventListener('click', () => audio.currentTime -= 10);
document.getElementById('btn-skip-fwd').addEventListener('click', () => audio.currentTime += 10);
document.getElementById('volume-slider').addEventListener('input', e => audio.volume = e.target.value / 100);
document.getElementById('ctrl-speed').addEventListener('input', e => audio.playbackRate = parseFloat(e.target.value));

// ======================== CREATIVE CONTROLLER ========================
document.getElementById('ctrl-fs').addEventListener('input', e =>
  document.documentElement.style.setProperty('--fs-base', e.target.value + 'px')
);
document.getElementById('ctrl-ls').addEventListener('input', e =>
  document.documentElement.style.setProperty('--ls-heading', (e.target.value / 100) + 'em')
);
document.getElementById('ctrl-font-h').addEventListener('change', e =>
  document.documentElement.style.setProperty('--font-heading', e.target.value)
);
document.getElementById('ctrl-font-b').addEventListener('change', e =>
  document.documentElement.style.setProperty('--font-body', e.target.value)
);
document.querySelectorAll('.ctrl-swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    document.querySelectorAll('.ctrl-swatch').forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
    const root = document.documentElement;
    if (sw.dataset.gold) root.style.setProperty('--gold', sw.dataset.gold);
    if (sw.dataset.gold2) root.style.setProperty('--gold2', sw.dataset.gold2);
    if (sw.dataset.gold3) root.style.setProperty('--gold3', sw.dataset.gold3);
    if (sw.dataset.gold4) root.style.setProperty('--gold4', sw.dataset.gold4);
  });
});

let particleInterval;
function setParticleType(type) {
  if (particleInterval) clearInterval(particleInterval);
  document.querySelectorAll('.petal').forEach(p => p.remove());
  if (type === 'none') return;
  const map = { petals: '🌹', sparkles: '✦', hearts: '💕' };
  particleInterval = setInterval(() => {
    const p = document.createElement('div');
    p.className = 'petal';
    p.innerText = map[type] || '✦';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (6 + Math.random() * 8) + 's';
    p.style.fontSize = (.7 + Math.random() * .8) + 'rem';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 12000);
  }, 1400);
}

document.getElementById('ctrl-particles').addEventListener('change', e => setParticleType(e.target.value));
document.getElementById('ctrl-gallery-anim').addEventListener('change', e => {
  const anim = e.target.value;
  document.querySelectorAll('.gallery-item').forEach((el, i) => {
    anime({
      targets: el, opacity: [0, 1],
      translateY: anim === 'slide' ? [40, 0] : 0,
      scale: anim === 'zoom' ? [.75, 1] : 1,
      delay: i * 60, duration: 650, easing: 'easeOutCubic'
    });
  });
});
document.getElementById('ctrl-3d-scene').addEventListener('change', e => build3DScene(e.target.value));

document.getElementById('ctrl-toggle').addEventListener('click', () =>
  document.getElementById('ctrl-panel').classList.toggle('open')
);
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
  document.getElementById('theme-toggle').innerText = isLight ? '🌙' : '☀️';
});

// ======================== GSAP SCROLL ANIMATIONS ========================
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
gsap.fromTo('.hero-eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: .2 });
gsap.fromTo('.hero-names', { opacity: 0, y: 45 }, { opacity: 1, y: 0, duration: 1.3, delay: .5 });
gsap.fromTo('.hero-ornament', { opacity: 0 }, { opacity: 1, duration: .9, delay: 1 });
gsap.fromTo('.hero-date-text', { opacity: 0 }, { opacity: 1, duration: .8, delay: 1.1 });
gsap.fromTo('.hero-year', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: .8, delay: 1.25 });
gsap.fromTo('.countdown-wrap', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .9, delay: 1.4 });
gsap.fromTo('.scroll-cue', { opacity: 0 }, { opacity: 1, duration: .7, delay: 1.7 });

// Scroll-triggered
gsap.utils.toArray('.detail-card, .venue-card, .map-wrapper, .wish-form-card, .love-note-card').forEach((el, i) => {
  gsap.fromTo(el, { opacity: 0, y: 35 }, {
    opacity: 1, y: 0, duration: .95,
    scrollTrigger: { trigger: el, start: 'top 87%' },
    delay: (i % 3) * .08
  });
});
gsap.fromTo('.wedding-quote', { opacity: 0, y: 25 }, {
  opacity: 1, y: 0, duration: 1.2,
  scrollTrigger: { trigger: '.quote-section', start: 'top 72%' }
});

// ======================== INIT ========================
setParticleType('petals');
applyTranslations();