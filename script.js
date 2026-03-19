let currentLang='en';

function toggleLang(){
  currentLang=currentLang==='en'?'es':'en';

  document.querySelectorAll('[data-en]').forEach(el=>{
    el.innerText=el.getAttribute('data-'+currentLang);
  });
}

window.onload=()=>toggleLang();
