// Déclaration de la variable audio (initialisée au chargement)
let music = null;
// si vous voulez 'just the snow', mettez true. Cela désactive autres effets visuels.
const SNOW_ONLY = true;

const poems = {
  page1: [ // أشعر بالحب 💙 (35+ قصيدة)
    "أنتِ النجومُ التي في الأفقِ ضاحكةٌ.. والقمرُ الذي يمحو ظلامَ مسافاتي",
    "سأحبكِ حتى يملّ الحب من حبه.. وأعشقكِ حتى يذوب العشق في قلبي",
    "يا من سرقتِ القلبَ بابتسامةٍ.. أنتِ الحياةُ وما سواكِ سرابُ",
    "أنتِ أجملُ سرٍ خبأتهُ الأيامُ لي.. وأعظمُ فوزٍ نالهُ قلبي",
    "عيناكِ مدرسةٌ تعلمتُ فيها.. أنَّ الغرامَ بلا حدودٍ يسكنُني",
    "أحبكِ فوقَ الحبِ حباً.. وفوقَ العشقِ عشقاً لا ينتهي",
    "أنتِ القصيدةُ التي لم أكتبها بعد.. واللحنُ الذي يعزفُ في دمي",
    "سأبقى على عهدِ الهوى ما حييتُ.. فأنتِ البدايةُ وأنتِ الختامُ",
    "كلُّ نبضةٍ في صدري تهمسُ باسمكِ.. وكلُّ نفسٍ يخرجُ يحملُ عطركِ",
    "أنتِ وطني الصغيرُ الذي ألجأُ إليه.. من ضجيجِ هذا العالمِ الكبير",
    "من نهار عرفتك وعقلي غايب معاك.. وليت كنشوف الدنيا كلها زوينة بحلاك",
    "حبك في قلبي محفور بحال الوشم.. يا أغلى حاجة عندي في هاد الكون",
    "أنتِ الروح اللي كنت كنقلب عليها.. والضحكة اللي كترجع لي الروح",
    "كل ثانية معاك هي عيد.. وكل كلمة منك هي حياة جديدة",
    "لو كان الحب كيتوزن بالذهب.. راه حبك أغلى من كنوز الدنيا كاملة",
    "عشقتك من أول نظرة.. ولقيت فيك كاع داكشي اللي كنت كنحلم بيه",
    "أنتِ الملاك اللي نزل من السما.. باش ينور لي حياتي ويحلي أيامي",
    "ما كيهمنيش العالم كامل.. المهم هو نكون حداك ونشوف فرحتك",
    "قلبي اختارك أنتِ من وسط الملايين.. حيت أنتِ بوحدك اللي كتشبهي لأحلامي",
    "أنتِ القمر ديالي في الليالي المظلمة.. والشمس اللي كتشرق في صباحي",
    "يا مالكة قلبي وعقلي.. حبك هو الأكسجين اللي كنتنفس بيه",
    "معاك عرفت معنى السعادة الحقيقية.. ومعاك بغيت نكمل عمري كامل",
    "كل نهار كيدوز كنزيد نبغيك كتر.. يا أجمل صدفة وقعات لي في حياتي",
    "أنتِ هي النفس اللي كنطلع.. وأنتِ هي الدم اللي كيجري في عروقي",
    "لو طلبتي عيني نعطيهم ليك.. ولو طلبتي عمري راه قليل في حقك",
    "أحببتكِ وكأنكِ النور الوحيد في هذا العالم المظلم",
    "أنتِ حكايتي الجميلة التي أرويها للنجوم كل ليلة",
    "في عيونك أرى مستقبلي.. وفي حضنك أجد أماني",
    "أنتِ المرأة التي لا تتكرر.. والجمال الذي لا ينتهي",
    "يا بسمةً زينت أيامي.. ويا نبضاً أحيى فؤادي",
  "أحبك بكل لغات العالم.. وبكل أحاسيس البشر",
  "أنتِ ملكة قلبي المتربعة على عرشه.. للأبد",
  "معاك تعلمت نضحك من قلبي.. ومعاك نسيت كاع هموم الدنيا",
    "أنتِ هي الأمان اللي كنت كنقلب عليه.. والراحة اللي لقيتها بين يديك"
  ],
  page2: [ // أشعر بالحنين 💔 (30+ قصيدة)
    "غابت ملامحُ مَن أهوى عنِ النظرِ.. وظلّ طيفُها محفوراً في ذاكرةِ السهرِ",
    "شوقي إليكِ كشوقِ الأرضِ للمطرِ.. يذبلُ قلبي إذا غبتِ عن البصرِ",
    "بيني وبينكِ ألفُ مِيلٍ ومسافةٌ.. لكنّ روحكِ في وريدي تسكنُ",
    "يا وجعَ الحنينِ الذي لا يهدأ.. متى تجمعنا الأيامُ والدروبُ؟",
    "أكتبُ اسمكِ في الهواءِ لعلهُ.. يصلُ إليكِ مع نسيمِ المساء",
    "كلُّ الأماكنِ تشتاقُ إليكِ.. والكرسيُّ الخالي يحكي قصةَ انتظار",
    "الليل طويل بلا بيك.. والوقت مابغاش يدوز بلا بيك",
    "توحشت الضحكة ديالك اللي كانت كتنسيني الهم.. وتوحشت عيونك اللي كانوا كينوروا طريقي",
    "الدار خاوية بلا بيك.. والقلب كيبكي على فراقك كل دقيقة",
    "فينك يا غايبة على العين وحاضرة في القلب.. راه الشوق قتلني والحنين عذبني",
    "كنتمنى نكون حداك دابا.. غير باش نشوف وجهك ونسمع صوتك",
    "كل ذكرياتنا باقة محفورة في عقلي.. وكل بلاصة مشينا ليها كتفكرني بيك",
    "يا ليت المسافات كتذوب.. باش نكون حداك في هاد اللحظة",
    "صعب بزاف نعيش بلا بيك.. وأنتِ كنتِ كاع دنيتي",
    "أفتقدكِ وكأنني أفتقدُ نفسي.. وكأنّ نبضَ قلبي معلقٌ بخطواتكِ",
    "الليلُ طويلٌ بدونِ صوتكِ.. والصبحُ باهتٌ دونَ نورِ وجهكِ",
    "أسيرُ في الطرقاتِ وحدي.. وخيالي يرسُمُ وجهكِ في السحاب",
    "لو تعلمينَ ما يفعلُ الشوقُ بي.. لبكيتِ حزناً على حالِ قلبي",
    "أعدُّ الدقائقَ والثواني في غيابكِ.. وكأنّ الزمنَ قد توقفَ",
    "يا ليتني كنتُ نسمةً تمرُّ بداركِ.. أو طيراً يغردُ عند نافذتكِ",
    "أشتاقُ إليكِ شوقاً لا يوصفُ.. شوقاً هزَّ أركانَ قلبي المتعب",
    "الذكرياتُ معكِ هي زادي في البعاد.. وهي ناري في ليالي الشتاء",
    "كيفَ حالُ قلبكِ بعيداً عني؟.. أما زال يذكرُ وعدنا والوفاء؟",
    "الحنينُ إليكِ هو الموتُ البطيء.. واللقاءُ بكِ هو البعثُ من جديد",
    "باقي كنستنى النهار اللي نرجعو فيه.. ونعوضو كل لحظة ضاعت منا",
    "صورتك ديما قدام عيني.. وصوتك ديما في ودني.. توحشتك بزاف"
  ],
  page3: [ // أحتاج للأمل 🌟 (30+ قصيدة)
    "صبراً جميلاً يا نبضَ الفؤادِ فما.. ضاقت دروبٌ إلا واللهُ يُوسِعُها",
    "غداً تضحكُ لنا الأيامُ ونلتقي.. وننسى وجعَ البعدِ في عيناكِ",
    "أنتِ الأملُ الذي أحيا به.. ونورُ الفجرِ بعد ليلٍ طويل",
    "لا تحزني يا أميرتي ففي قلبكِ حياة.. وفي ابتسامتكِ يشرقُ الصبحُ",
    "سنبني غداً من أحلامنا وطناً.. لا يعرفُ الحزنَ ولا مرارةَ البعدِ",
    "خلفَ السحابِ شمسٌ تنتظرُ.. وخلفَ الصبرِ فرحٌ لا يُحصى",
    "أنتِ قويةٌ بما يكفي لتزهري.. حتى في أكثرِ الأيامِ جفافاً",
    "يدي بيدِكِ حتى النهاية.. ولن يغلبنا زمانٌ ما دمنا معاً",
    "ابتسمي ليرتاحَ قلبي.. ففي وجهكِ يكمنُ تفاؤلي بالحياة",
    "كلُّ عُسرٍ مآلهُ اليُسر.. وحبنا هو الضياءُ الذي يهدينا",
    "ما تفقديش الأمل يا عمري.. راه ربي كبير وغادي يجمعنا في الحلال",
    "الشدة كدوز والفرح جاي.. المهم هو نبقاو صابرين ومتمسكين ببعضنا",
    "ضحكتك هي اللي كتعطيني القوة.. باش نواجه كاع مشاكل الحياة",
    "غادي يجي واحد النهار ونكونو مع بعضياتنا.. ونضحكو على هاد الايام الصعبة",
    "أنتِ زينة الدنيا وما تستهليش الحزن.. خليك ديما ضاحكة حيت ضحكتك غالية",
    "الدنيا مازال فيها الخير.. وحبنا هو أكبر دليل على هاد الخير",
    "كل حاجة صعيبة غادي تهون.. غير خلي ثقتك فيا وفي ربي كبيرة",
    "أنتِ هي النور اللي في لخر ديال النفق.. قربنا نوصلو للأحلام ديالنا",
    "المستقبل كينادينا.. وموجد لينا أحسن المفاجآت اللي كنتمناو",
    "خليك قوية يا حبيبتي.. راه الصبر مفتاح الفرج واللقاء قريب",
    "لا تدعي الحزنَ يطفئُ نورَكِ.. فأنتِ شمسٌ لا تعرفُ الأفول",
    "المستقبلُ لنا، والقدرُ سينصفنا.. واللقاءُ آتٍ لا محالةَ",
    "ثقي بأنّ اللهَ سيجمعنا.. كما جمعَ الأرواحَ في عالمِ الذر",
    "أنتِ حلمي الذي سيتحقق.. ووعدي الذي لن أنكثه أبداً",
    "دائماً هناكَ أملٌ ما دامَ القلبُ ينبضُ.. وما دمنا نحبُّ بصدقٍ",
    "الحياةُ مستمرةٌ وبقربكِ تكونُ أجمل.. فكوني بخيرٍ لأجلي",
    "صباح الخير على أجمل قلب.. ان شاء الله نهارك يكون عامر بالأمل والفرح",
    "أنتِ القوة ديالي وقت الضعف.. والأمل ديالي وقت اليأس",
    "الحياة قصيرة.. خلينا نعيشوها في الفرح والحب ونتفائلوا بالخير"
  ]
};

// Single onload handler: initialise audio, musique par page et afficher un poème
window.addEventListener('load', () => {
  // initialiser la référence à l'audio (s'il existe)
  music = document.getElementById("bgMusic");

  const pageKey = document.body.getAttribute("data-page") || "main";

  // choisir la musique de page si l'élément audio existe
  if (music && pageMusic[pageKey]) {
    music.src = pageMusic[pageKey];
  } else if (!music) {
    console.warn('Element #bgMusic introuvable — la lecture audio est désactivée.');
  }

  // restaurer l'état muet partagé (si présent)
  try {
    const stored = localStorage.getItem('love-music-muted');
    if (stored) {
      const data = JSON.parse(stored);
      if (data && typeof data.muted !== 'undefined' && music) {
        music.muted = !!data.muted;
        const icon = document.getElementById('muteIcon');
        if (icon) icon.innerText = music.muted ? '🔈' : '🔊';
      }
    }
  } catch (e) { /* ignore */ }

  // choisir un poème de manière sûre
  const poemElement = document.getElementById("randomPoem");
  if (poemElement) {
    const pagePoems = poems[pageKey];
    if (pagePoems && Array.isArray(pagePoems) && pagePoems.length > 0) {
      const randomIndex = Math.floor(Math.random() * pagePoems.length);
      const selectedPoem = pagePoems[randomIndex];
      // Effet de saisie si l'élément supporte l'opération
      typeWriter(selectedPoem, poemElement, 60);
    } else {
      poemElement.innerText = "Bienvenue — aucun poème disponible pour cette page.";
    }
  }
});

// تأثير المفرقعات (Fireworks) عند الضغط — protège l'absence de document.body
document.addEventListener('click', (e) => {
  if (SNOW_ONLY) return; // disable other click effects when snow-only mode active
  // si l'événement n'a pas de coordonnées (rare), on skip
  if (!e || typeof e.clientX !== 'number') return;

  const particleCount = 12;
  const colors = ['#ff0000', '#00f2fe', '#ffffff', '#ff00d4', '#ffff00'];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = color;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = `0 0 10px ${color}`;
    particle.style.zIndex = '1000';

    const destinationX = (Math.random() - 0.5) * 300;
    const destinationY = (Math.random() - 0.5) * 300;

    const animation = particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 1000 + Math.random() * 1000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      fill: 'forwards'
    });

    document.body.appendChild(particle);
    animation.onfinish = () => particle.remove();
  }
});

// مصفوفة الموسيقى لكل صفحة
const pageMusic = {
  page1: "page1.mp3",
  page2: "page2.mp3",
  page3: "page3.mp3",
  main: "Love.mp3"
};

// وظيفة التلاشي للداخل (Fade-in)
function fadeInMusic(audioElement) {
  if (!audioElement) return;
  // demander aux autres onglets de mettre la musique en pause
  try { broadcastPause(); } catch (e) { /* broadcast not yet defined early, safe to ignore */ }
  try {
    audioElement.volume = 0;
    const p = audioElement.play();
    if (p && typeof p.catch === 'function') p.catch(() => console.log('play() blocked, waiting for gesture'));
  } catch (e) {
    console.warn('Impossible de lancer la lecture:', e);
  }

  let vol = 0;
  const interval = setInterval(() => {
    if (vol < 0.5) {
      vol = Math.min(0.5, vol + 0.05);
      audioElement.volume = vol;
    } else {
      clearInterval(interval);
    }
  }, 200);
}

// ---------- Coordination cross-onglets pour la musique ----------
// Utilise BroadcastChannel quand disponible, sinon fallback vers localStorage events
const musicChannel = (typeof BroadcastChannel !== 'undefined') ? new BroadcastChannel('love-music') : null;

function handleRemoteMessage(msg) {
  if (!msg || !msg.type) return;
  if (msg.type === 'pause') {
    try {
      if (music && !music.paused) {
        music.pause();
      }
    } catch (e) { /* ignore */ }
  } else if (msg.type === 'set-muted') {
    try {
      const muted = !!msg.muted;
      if (music) music.muted = muted;
      const icon = document.getElementById('muteIcon');
      if (icon) icon.innerText = muted ? '🔈' : '🔊';
    } catch (e) { /* ignore */ }
  }
}

if (musicChannel) {
  musicChannel.onmessage = (ev) => {
    handleRemoteMessage(ev.data);
  };
} else {
  // fallback: écoute les événements storage (cross-tab)
  window.addEventListener('storage', (e) => {
    if (e.key === 'love-music' && e.newValue) {
      try {
        const data = JSON.parse(e.newValue);
        handleRemoteMessage(data);
      } catch (err) { /* ignore invalid JSON */ }
    }
  });
}

function broadcastPause() {
  const payload = { type: 'pause', ts: Date.now() };
  if (musicChannel) {
    try { musicChannel.postMessage(payload); } catch (e) { /* ignore */ }
  } else {
    try { localStorage.setItem('love-music', JSON.stringify(payload)); } catch (e) { /* ignore */ }
  }
}

function broadcastSetMuted(muted) {
  const payload = { type: 'set-muted', muted: !!muted, ts: Date.now() };
  if (musicChannel) {
    try { musicChannel.postMessage(payload); } catch (e) { /* ignore */ }
  } else {
    try { localStorage.setItem('love-music-muted', JSON.stringify(payload)); } catch (e) { /* ignore */ }
  }
}

// تشغيل الموسيقى بتأثير التلاشي عند أول ضغطة (si l'audio existe)
document.addEventListener("click", () => {
  if (music && music.paused) {
    fadeInMusic(music);
  }
}, { once: false });

// دالة تأثير الكتابة (Typing Effect) — prend l'élément DOM au lieu d'ID
function typeWriter(text, element, speed) {
  // Amélioration pour l'arabe : utiliser textContent avec slice
  // et forcer la direction RTL + white-space pour préserver les espaces
  if (!element || typeof text !== 'string') return;
  element.dir = element.dir || 'rtl';
  element.style.whiteSpace = 'pre-wrap';
  element.textContent = '';
  let i = 0;
  function type() {
    if (i <= text.length) {
      // mettre tout le préfixe en une fois évite les problèmes de ligatures/combining
      element.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
// وظيفة إنشاء الشهب العشوائية
function createShootingStar() {
  const container = document.querySelector('.star-container');
  if (!container) return;

  const star = document.createElement('div');
  star.className = 'shooting-star';
  

// ---------- Love timer (compteur) ----------
// petit compteur qui s'incrémente depuis l'ouverture de la page
function createLoveTimer() {
  const timer = document.createElement('div');
  timer.className = 'love-timer';
  timer.id = 'loveTimer';
  timer.textContent = '00:00';
  document.body.appendChild(timer);

  let seconds = 0;
  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  // update every second
  const intervalId = setInterval(() => {
    seconds += 1;
    timer.textContent = formatTime(seconds);
  }, 1000);

  // expose stop function in case on veut l'arrêter plus tard
  return { timer, stop: () => clearInterval(intervalId) };
}

// créer le timer au chargement
window.addEventListener('load', () => {
  // si déjà présent (pages multiples), ne pas doubler
  if (!document.getElementById('loveTimer')) {
    createLoveTimer();
  }
});
  // تحديد مكان البدء عشوائياً في النصف العلوي
  star.style.top = Math.random() * 50 + '%';
  star.style.left = Math.random() * 100 + '%';
  
  // مدة عشوائية للحركة
  const duration = Math.random() * 3 + 2;
  star.style.animationDuration = `${duration}s`;

  container.appendChild(star);

  // إزالة الشهاب بعد انتهاء الأنيميشن
  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

// إطلاق شهاب جديد كل 4 ثوانٍ (désactivé en mode snow-only)
if (!SNOW_ONLY) {
  setInterval(createShootingStar, 2000);
}
// تاريخ بداية علاقتكما (سنة، شهر -1، يوم، ساعة، دقيقة)
// ملاحظة: الشهور تبدأ من 0 (يناير = 0، فبراير = 1...)
// تاريخ البداية: 20 ديسمبر 2025
const startDate = new Date(2025, 11, 20, 0, 0, 0);
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `${days} يوم و ${hours} ساعة و ${minutes} دقيقة و ${seconds} ثانية`;
    }
}

// تحديث العداد كل ثانية
setInterval(updateTimer, 1000);
updateTimer(); // تشغيل فوري عند التحميل
// تأثير المفرقعات الملونة حسب الصفحة
document.addEventListener('click', (e) => {
  if (SNOW_ONLY) return; // disable colored particles when snow-only
  const pageKey = document.body.getAttribute("data-page") || "main";
  
  // تحديد لوحة الألوان حسب الصفحة
  const colorPalettes = {
    page1: ['#a8d8ff', '#ffffff', '#00f2fe', '#4facfe'], // ألوان الحب (أزرق وسماوي)
    page2: ['#ff9a9e', '#fad0c4', '#ffecd2', '#ffffff'], // ألوان الحنين (وردي ودافئ)
    page3: ['#f6d365', '#fda085', '#fff', '#ffff00'],    // ألوان الأمل (ذهبي وأصفر)
    main:  ['#ffffff', '#a8d8ff', '#00f2fe']             // الألوان الافتراضية
  };

  const currentPalette = colorPalettes[pageKey];
  const particleCount = 15; // زيادة عدد الشرارات قليلاً

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
    
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.backgroundColor = color;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = `0 0 12px ${color}`; // زيادة التوهج
    particle.style.zIndex = '1000';
    
    const destinationX = (Math.random() - 0.5) * 400;
    const destinationY = (Math.random() - 0.5) * 400;

    const animation = particle.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, opacity: 0 }
    ], {
      duration: 800 + Math.random() * 1000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      fill: 'forwards'
    });

    document.body.appendChild(particle);
    animation.onfinish = () => particle.remove();
  }
});
function createTwinklingStars() {
  const body = document.body;
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'twinkle';
    const size = Math.random() * 3 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDelay = Math.random() * 2 + 's';
    body.appendChild(star);
  }
}
if (!SNOW_ONLY) createTwinklingStars(); // تشغيل عند تحميل الصفحة (désactivé en mode snow-only)
const timerClickEl = document.getElementById("timer");
if (timerClickEl) {
  timerClickEl.addEventListener("click", () => {
    alert("كل ثانية معاك هي حياة جديدة.. شكراً حيت كاينا في حياتي 💙");
  });
}

const muteBtn = document.getElementById("muteBtn");
const muteIcon = document.getElementById("muteIcon");
if (muteBtn && muteIcon) {
  // initial icon reflect (in case music was set earlier)
  if (music) muteIcon.innerText = music.muted ? '🔈' : '🔊';
  muteBtn.addEventListener("click", () => {
    if (!music) return;
    const newMuted = !music.muted;
    music.muted = newMuted;
    muteIcon.innerText = newMuted ? '🔈' : '🔊';
    // persist and broadcast the new muted state
    try { localStorage.setItem('love-music-muted', JSON.stringify({ muted: newMuted, ts: Date.now() })); } catch (e) { /* ignore */ }
    try { broadcastSetMuted(newMuted); } catch (e) { /* ignore */ }
  });
}
document.addEventListener('mousemove', (e) => {
  if (SNOW_ONLY) return; // disable heart effect in snow-only mode
  if (Math.random() > 0.9) { // يظهر القلب بنسبة بسيطة لكي لا يزدحم الموقع
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '10px';
        heart.style.pointerEvents = 'none';
        heart.style.opacity = '0.7';
        heart.style.zIndex = '999';
        
        document.body.appendChild(heart);
        
        heart.animate([
            { transform: 'translateY(0) scale(1)', opacity: 0.7 },
            { transform: 'translateY(-50px) scale(0)', opacity: 0 }
        ], { duration: 1000 });
        
        setTimeout(() => heart.remove(), 1000);
    }
});
const timerDiv = document.getElementById("timer");
if (timerDiv) {
    timerDiv.style.cursor = "pointer";
    timerDiv.addEventListener("click", () => {
        const messages = ["أنتِ أجمل صدفة", "حبك كيكبر كل ثانية", "معاك الوقت كيدوز زوين"];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMsg);
    });
}
function setDynamicGreeting() {
    const hours = new Date().getHours();
    const greetingElement = document.getElementById("dynamicGreeting");
    if (!greetingElement) return;

    if (hours >= 5 && hours < 12) {
        greetingElement.innerText = "صباح الخير يا أجمل ما في يومي ☀️";
    } else if (hours >= 12 && hours < 18) {
        greetingElement.innerText = "مساء النور.. كيداز نهارك؟ ✨";
    } else {
        greetingElement.innerText = "تصبحي على خير وأحلام سعيدة بحالك 🌙";
    }
}
setDynamicGreeting();

// voice note (flower) — safe hookup
const voiceNote = new Audio('your-voice.mp3'); // ارفع ملف صوتك بهذا الاسم
const flowerIcon = document.querySelector('.flower-icon');
if (flowerIcon) {
  flowerIcon.addEventListener('click', () => {
    // If snow-only mode is enabled, don't play the voice note
    if (typeof SNOW_ONLY !== 'undefined' && SNOW_ONLY) return;

    // Attempt to play the voice note (ignore promise rejection from autoplay policies)
    voiceNote.play().catch(() => {});

    // تقليل صوت الموسيقى الخلفية مؤقتاً
    if (typeof music !== 'undefined' && music) music.volume = 0.1;
    voiceNote.onended = () => { if (typeof music !== 'undefined' && music) music.volume = 0.5; };
  });
}

let snowHeight = 0;
const maxPileHeight = 30; // أقصى ارتفاع للثلج لكي لا يغطي المحتوى

function accumulateSnow() {
    const pile = document.getElementById('snowPile');
    if (pile && snowHeight < maxPileHeight) {
        // increase by a small, visible step
        snowHeight = Math.min(maxPileHeight, +(snowHeight + 0.25).toFixed(2));
        pile.style.height = snowHeight + 'px';
    }
}

// create snowflake implementation
function createSnowFlake() {
    const flake = document.createElement('div');
    flake.className = 'snow-flake';

    const size = 2 + Math.random() * 8; // px
    flake.style.width = size + 'px';
    flake.style.height = size + 'px';
    flake.style.left = (Math.random() * 100) + 'vw';
    flake.style.top = '-12px';
    flake.style.opacity = (0.6 + Math.random() * 0.4).toString();
    flake.style.pointerEvents = 'none';
    flake.style.zIndex = '4';

    const duration = 6 + Math.random() * 8; // seconds
    flake.style.animationDuration = duration + 's';
    flake.style.animationDelay = (Math.random() * 2) + 's';

    document.body.appendChild(flake);

    flake.addEventListener('animationend', () => {
        accumulateSnow();
        flake.remove();
    });
}

// spawn snow more often when snow-only is enabled
setInterval(createSnowFlake, SNOW_ONLY ? 160 : 800);