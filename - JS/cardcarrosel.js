const container = document.querySelector('.carrossel-container');
const cards = document.querySelectorAll('.card-carrossel');
const btnEsquerda = document.querySelector('.seta.esquerda');
const btnDireita = document.querySelector('.seta.direita');

const total = cards.length;
let index = Math.floor(total / 2); // Começa no card do meio
const intervalo = 8000; // 8 segundos

function mostrarCard(indice) {
  const larguraCard = cards[0].offsetWidth + 20; // largura + gap
  // Ajusta para centralizar o card do meio:
  // desloca para que o card do índice fique centralizado na viewport
  const containerWidth = container.parentElement.offsetWidth;
  const deslocamento = indice * larguraCard - (containerWidth / 2 - larguraCard / 2);
  container.style.transform = `translateX(-${deslocamento}px)`;
}

btnDireita.addEventListener('click', () => {
  index = (index + 1) % total;
  mostrarCard(index);
});

btnEsquerda.addEventListener('click', () => {
  // para que o botão esquerda funcione "voltando", diminuímos o índice
  index = (index - 1 + total) % total;
  mostrarCard(index);
});

// Navegação automática só para a direita
let autoPlay = setInterval(() => {
  index = (index + 1) % total;
  mostrarCard(index);
}, intervalo);

// Pausar o autoplay ao passar o mouse
const carrossel = document.querySelector('.carrossel-principal');
carrossel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carrossel.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => {
    index = (index + 1) % total;
    mostrarCard(index);
  }, intervalo);
});

// Inicializa o carrossel centralizado no meio
mostrarCard(index);
