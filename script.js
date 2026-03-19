
let currentLang='en';

function toggleLang(){
  currentLang=currentLang==='en'?'es':'en';
  document.querySelectorAll('[data-en]').forEach(el=>{
    el.innerText=el.getAttribute('data-'+currentLang);
  });
}

// CAROUSEL AUTO
let slides=document.querySelectorAll('.slide');
let index=0;

function showSlides(){
  slides.forEach(s=>s.classList.remove('active'));
  index=(index+1)%slides.length;
  slides[index].classList.add('active');
}

setInterval(showSlides,4000);

window.onload=()=>{
  toggleLang();
  slides[0].classList.add('active');
};
