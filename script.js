const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const replyBtn = document.getElementById("replyBtn");
const messageInput = document.getElementById("msg");


if(name){
  document.getElementById("herName").innerText = "Hey " + name + " 🌸";
}

function scrollToSection() {
  document.querySelector(".story").scrollIntoView({ behavior: "smooth" });
}

function sendToWhatsApp() {
  let msg = document.getElementById("msg").value;
  let phone = "918700299851"; 
  let url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  setTimeout(() => {
    window.location.href = "thankyou.html";
  }, 500);
}

// Scroll animation
const reveals = document.querySelectorAll(".reveal");
const petalContainer = document.querySelector(".petals");
const heartContainer = document.querySelector(".hearts");

function createPetal() {
  const petal = document.createElement("span");
  petal.innerHTML = "🌸";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 10 + Math.random() * 5 + "s";
  petal.style.fontSize = 12 + Math.random() * 15 + "px";
  petalContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 10000);
}

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 10 + Math.random() * 4 + "s";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

messageInput.addEventListener("input", function () {
    if (messageInput.value.trim() !== "") {
      replyBtn.classList.add("show");   
    } else {
      replyBtn.classList.remove("show");    
    }
});


setInterval(createPetal, 1000);
setInterval(createHeart, 1200);

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;
    let winHeight = window.innerHeight;
    if (top < winHeight - 100) {
      el.classList.add("active");
    }
  });
});
