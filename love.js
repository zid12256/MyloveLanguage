const btn = document.getElementById("loveBtn");
const message = document.getElementById("loveMessage");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  message.classList.remove("hidden");

  music.volume = 0.7; // نقص شوية الصوت
  music.play().catch((e) => {
    console.log("Audio blocked:", e);
  });
});
