/* Auto Fullscreen */
document.addEventListener("click", () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  document.getElementById("bgMusic").play();
}, { once: true });

/* Typing Effect */
const mainText = "Will you be my Valentine? 💌";
let tIndex = 0;
function typeMain() {
  if (tIndex < mainText.length) {
    typing.innerHTML += mainText.charAt(tIndex++);
    setTimeout(typeMain, 90);
  }
}
typeMain();

/* NO Logic */
let noCount = 0;
const texts = [
  "Pls bby 🥺",
  "Why nah 😭",
  "You dey break my heart 💔",
  "I’m begging 😢",
  "Think about us 🥹",
  "Chocolate included 🍫",
  "I won’t survive this 😩",
  "Okay last last 😭",
  "You win… I tried 💘"
];

const images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img1.jpg","img2.jpg","img3.jpg","img4.jpg","img1.jpg"];

function noClicked() {
  noCount++;

  noBtn.style.left = Math.random() * 75 + "%";
  noBtn.style.top = Math.random() * 70 + "%";

  typing.innerHTML = "";
  let text = texts[noCount - 1];
  let i = 0;
  (function type() {
    if (i < text.length) {
      typing.innerHTML += text.charAt(i++);
      setTimeout(type, 70);
    }
  })();

  displayImg.src = images[noCount - 1];

  yesBtn.style.fontSize = (18 + noCount * 5) + "px";
  yesBtn.style.padding = (12 + noCount * 3) + "px " + (26 + noCount * 5) + "px";

  if (noCount === 9) noBtn.style.display = "none";
}

/* YES follows finger */
document.addEventListener("mousemove", e => {
  yesBtn.style.left = e.clientX - 50 + "px";
  yesBtn.style.top = e.clientY - 30 + "px";
});

/* YES Click */
function yesClicked() {
  main.classList.add("hidden");
  final.classList.remove("hidden");

  bgMusic.pause();
  yesMusic.play();

  const emojis = ["💖","💘","❤️","😍","✨","🌸"];
  for (let i = 0; i < 50; i++) {
    let span = document.createElement("span");
    span.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.getElementById("float").appendChild(span);
  }

  for (let i = 0; i < 60; i++) {
    let conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = `hsl(${Math.random()*360},100%,70%)`;
    conf.style.animationDuration = (2 + Math.random()*3) + "s";
    document.body.appendChild(conf);
  }
}