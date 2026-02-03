const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const replyBtn = document.getElementById("replyBtn");
const messageInput = document.getElementById("msg");

let petalInterval;
let heartInterval;

function startExperience(e) {
  createRipple(e);
  createFloatingHeart(e);
  document.querySelector(".story").scrollIntoView({ behavior: "smooth" });

   if (!petalInterval && !heartInterval) {
    petalInterval = setInterval(createPetal, 1000);
    heartInterval = setInterval(createHeart, 1200);
  }

  if (!typingStarted) {
    typingStarted = true;
    typeParagraph();
  }
}



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




window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    let top = el.getBoundingClientRect().top;
    let winHeight = window.innerHeight;
    if (top < winHeight - 100) {
      el.classList.add("active");
    }
  });
});


function createRipple(e) {
  const button = e.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.offsetX - radius}px`;
  circle.style.top = `${e.offsetY - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);
}


function createFloatingHeart(e) {
  const heart = document.createElement("span");
  heart.classList.add("float-heart");
  heart.innerHTML = "💗";

  const rect = e.currentTarget.getBoundingClientRect();
  heart.style.left = e.clientX - rect.left + "px";
  heart.style.top = e.clientY - rect.top + "px";

  e.currentTarget.appendChild(heart);

  setTimeout(() => heart.remove(), 1500);
}




function typeParagraph() {
  if (pIndex < texts.length) {
    if (charIndex < texts[pIndex].length) {
      typeElements[pIndex].innerHTML += texts[pIndex].charAt(charIndex);
      charIndex++;


      setTimeout(typeParagraph, 70);
    } else {
      charIndex = 0;
      pIndex++;
      setTimeout(typeParagraph, 500);
    }
  } else {
    
    typeFinal();
  }
}

function typeFinal() {
  if (finalIndex < finalTexts.length) {
    if (finalChar < finalTexts[finalIndex].length) {
      finalElements[finalIndex].innerHTML += finalTexts[finalIndex].charAt(finalChar);
      finalChar++;

      

      setTimeout(typeFinal, 70);
    } else {
      finalChar = 0;
      finalIndex++;
      setTimeout(typeFinal, 600);
    }
  }
}



const typeElements = document.querySelectorAll(".type");

const texts = [
`The more I come to know you, the more I realize how truly rare you are.
You are the most beautiful woman I have ever seen, yet what makes you exceptional to me reaches far beyond appearance. I cherish the way you think, the way you seek to understand people and things rather than judge them, and how you instinctively look for the good in things first.`,

`I adore your calmness, the quiet peace you carry within you, and even your endless bak-bak that makes everything feel lighter. I love listening to you speak about serious matters, random little thoughts, or simply about your day, because whenever you talk, I feel deeply connected to you. Without even realizing it, I began wanting to hear you every single day.`,

`You matter to me in ways I could never confine to a single sentence. You inspire me to be gentler, wiser, and more understanding. I don’t like you for just one reason. There is so much about you that I can’t even put into words. But what I fall for the most is your thoughts, your heart and your presence.`,

`When I imagine the future, I do not picture perfection 👉🏻👈🏻 I picture you. I think of us growing together, exchanging thoughts, listening you, and creating something truly meaningful. To me, you are not just beautiful to look at(beauty of your face is beyond my wildest dream 🤌🏻), you are beautiful in your thoughts, in your kindness, and in the way you are.`
];

let pIndex = 0;
let charIndex = 0;
let typingStarted = false;

const finalElements = document.querySelectorAll(".final-type");

const finalTexts = [
`You are someone I want in my tomorrow…`,

`I want to listen to you when I wake up, after a hard day, and after a beautiful one(everyday would be beautiful with you). I want you to be part of all my days, and I want to be part of your daily life. And honestly, if the world was ending I'd wanna be next to you`,

`Would you like to walk this path with me?`
];

let finalIndex = 0;
let finalChar = 0;





