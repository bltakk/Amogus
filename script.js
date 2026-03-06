const pages = [
  "Թող գարունները գան ու չգնան… և որովհետև կինն է աշխարհի ամենաերկարատև գարունը։ Ու թող ձեր ժպիտներն ու դրական էներգիան միշտ լինեն բոլորի հարատև ուղեկիցը",
  "Սիրով ԸԲՖ Ֆակուլտետային խորհուրդ <span class='heart'>❤️</span>"
];

let current = 0;

const textEl = document.getElementById("text");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.querySelector("h1");

function updatePage(){
  textEl.innerHTML = pages[current];

  prevBtn.style.display = (current===0) ? "none" : "inline";
  nextBtn.style.display = (current===pages.length-1) ? "none" : "inline";

  if(current===0){
    title.style.display = "block";
    textEl.style.marginTop = "0px";
  } else {
    title.style.display = "none";
    textEl.style.marginTop = "40px";
  }
}

updatePage();

prevBtn.addEventListener("click",()=>{
  if(current>0){ current--; updatePage(); }
});

nextBtn.addEventListener("click",()=>{
  if(current<pages.length-1){ current++; updatePage(); }
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
  } else if(music.paused){
    music.play();
    btn.textContent="Կանգնեցնել 🎵";
  } else {
    music.pause();
    btn.textContent="Միացնել 🎵";
  }
});

const flowers=["🌸","🌷","❤️","🌺","💗"];

function createPetal(){
  const petal=document.createElement("div");
  petal.classList.add("petal");

  const symbol = flowers[Math.floor(Math.random()*flowers.length)];

  if(symbol==="❤️" || symbol==="💗"){
    const heartSpan = document.createElement("span");
    heartSpan.classList.add("heart-petal");
    heartSpan.innerHTML = symbol;
    petal.appendChild(heartSpan);
  } else {
    petal.innerHTML = symbol;
  }

  const left=Math.random()*window.innerWidth;
  petal.style.left=left+"px";

  const duration=4+Math.random()*6;
  petal.style.animationDuration=duration+"s";

  const size=14+Math.random()*18;
  petal.style.fontSize=size+"px";

  const offsetX=(Math.random()-0.5)*30;
  petal.style.transform=`translateX(${offsetX}px)`;

  document.body.appendChild(petal);

  setTimeout(()=>{ petal.remove(); }, duration*1000+1000);
}

setInterval(createPetal,800);