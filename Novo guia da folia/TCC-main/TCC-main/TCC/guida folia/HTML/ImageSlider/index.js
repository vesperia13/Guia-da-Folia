const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slide');

// Configuração do autoplay
const auto = true;
// Intervalo de transição
const intervalo = 5000;
// Exibição  do intervalo
let temporizador;

// Eventos
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function prevSlide() {
      // Localizando a classe atual
   const atual = document.querySelector('.atual');
   // remover a classe atual do emento selecionado
   atual.classList.remove('atual');

   // Verificar se existe um próximo elemento
   if (atual.previousElementSibling) {
       atual.previousElementSibling.classList.add('atual');
   } else {
    slides[slides.length-1].classList.add('atual');
   }
}

function nextSlide() {
   // Localizando a classe atual
   const atual = document.querySelector('.atual');
   // remover a classe atual do emento selecionado
   atual.classList.remove('atual');

   // Verificar se existe um próximo elemento
   if (atual.nextElementSibling) {
       atual.nextElementSibling.classList.add('atual');
   } else {
    slides[0].classList.add('atual');
   }
}

// Controle do autoplay
if (auto) {
    // Ativa a função nextSlide() a cada tempo de intervalo
    temporizador = setInterval(nextSlide, intervalo);
}