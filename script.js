
<script>
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(()=>{
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
},4000);

function toggleLang(){
  document.querySelectorAll('[data-en]').forEach(el=>{
    el.textContent = el.textContent === el.dataset.en ? el.dataset.es : el.dataset.en;
  });
}

// inicializar texto
document.querySelectorAll('[data-en]').forEach(el=>{
  el.textContent = el.dataset.en;
});
</script>
