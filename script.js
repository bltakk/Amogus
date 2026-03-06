const pages = [
  "Թող գարունները գան ու չգնան… և որովհետև կինն է աշխարհի ամենաերկարատև գարունը։ Ու թող ձեր ժպիտներն ու դրական էներգիան միշտ լինեն բոլորի հարատև ուղեկիցը",
  "Սիրով ԸԲՖ Ֆակուլտետային խորհուրդ ❤️" // Вторая страница с поздравлением
];

let current = 0;

const textEl = document.getElementById("text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updatePage(){
  textEl.textContent = pages[current];
  prevBtn.style.display = (current === 0) ? "none" : "inline";
  nextBtn.style.display = (current === pages.length-1) ? "none" : "inline";
}

updatePage();

prevBtn.addEventListener("click",()=>{
  if(current>0){
    current--;
    updatePage();
  }
});

nextBtn.addEventListener("click",()=>{
  if(current<pages.length-1){
    current++;
    updatePage();
  }
});

let music;
const btn=document.getElementById("playBtn");

btn.addEventListener("click",()=>{
  if(!music){
    music=new Audio("music.mp3");
    music.loop=true;
    music.volume=0.2;
    music.play();
    btn.textContent="Կանգնեցնել 🎵";
  }
  else if(music.paused){
    music.play();
    btn.textContent="Կանգնեցնել 🎵";
  }
  else{
    music.pause();
    btn.textContent="Միացնել 🎵";
  }
});

// Цветы и сердечки
const flowers = ["🌸","🌷","❤️","🌺","💗"];

function createPetal(){
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

  const left = Math.random() * window.innerWidth;
  petal.style.left = left + "px";

  const duration = 4 + Math.random() * 6; // скорость падения
  petal.style.animationDuration = duration + "s";

  const size = 14 + Math.random() * 18; // размер
  petal.style.fontSize = size + "px";

  const offsetX = (Math.random() - 0.5) * 30; // колебание ±15px
  petal.style.transform = `translateX(${offsetX}px)`;

  document.body.appendChild(petal);

  setTimeout(()=>{
    petal.remove();
  }, duration * 1000 + 1000);
}

setInterval(createPetal,800);