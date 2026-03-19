let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i){
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

setInterval(()=>{
  index = (index + 1) % slides.length;
  showSlide(index);
},4000);

// LANG
function toggleLang(){
  document.querySelectorAll('[data-en]').forEach(el=>{
    el.textContent =
      el.textContent === el.dataset.en
        ? el.dataset.es
        : el.dataset.en;
  });
}

// INIT TEXT
document.querySelectorAll('[data-en]').forEach(el=>{
  el.textContent = el.dataset.en;
});
