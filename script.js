const pages = [
  "Թող գարունները գան ու չգնան… և որովհետև կինն է աշխարհի ամենաերկարատև գարունը։ Ու թող ձեր ժպիտներն ու դրական էներգիան միշտ լինեն բոլորի հարատև ուղեկիցը",
  "Երկրորդ էջի տեքստ",
  "Երրորդ էջի տեքստ",
  "Չորրորդ էջի տեքստ",
  "Հինգերորդ էջի տեքստ"
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

// Массив цветов с сердечками вместо 3-го и 5-го
const flowers = ["🌸","🌷","❤️","🌺","💗"];

function createPetal(){
  const petal=document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

  // случайная позиция за пределами карточки
  let card = document.querySelector(".card");
  let cardRect = card.getBoundingClientRect();
  let left;
  do {
    left = Math.random() * window.innerWidth;
  } while(left > cardRect.left - 30 && left < cardRect.right + 30);

  petal.style.left = left + "px";
  petal.style.animationDuration=(5+Math.random()*5)+"s";
  petal.style.fontSize=(16+Math.random()*12)+"px";

  document.body.appendChild(petal);

  setTimeout(()=>{
    petal.remove();
  },11000);
}

setInterval(createPetal,600);