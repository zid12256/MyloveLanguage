// اختياري: تشغيل الموسيقى عند الضغط على أي زر
const music = document.getElementById("bgMusic");

// اختياري: تشغيل تلقائي عند دخول الصفحة (قد يحتاج تفاعل المستخدم على بعض المتصفحات)
window.addEventListener("load", () => {
  // محاولة تشغيل الموسيقى
  music.play().catch((e) => {
    console.log("Audio blocked, will start on button click.", e);
  });
});

// تشغيل الموسيقى عند الضغط على أي زر من buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    music.play();
  });
});
