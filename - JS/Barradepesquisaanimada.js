const inputPesquisa = document.getElementById('campo-pesquisa');
const placeholderAnimado = document.getElementById('placeholder-animado');
const palavras = ["Pesca", "Cultura", "Informação", "Aquicultura", "PesqBrasil", "Defeso", "Pescador", "Clima"];
let indice = 0;

function trocarPlaceholder() {
  placeholderAnimado.style.opacity = '0';
  setTimeout(() => {
    indice = (indice + 1) % palavras.length;
    placeholderAnimado.textContent = palavras[indice];
    placeholderAnimado.style.opacity = '1';
  }, 500);
}

inputPesquisa.addEventListener('focus', () => {
  placeholderAnimado.style.opacity = '0';
});

inputPesquisa.addEventListener('blur', () => {
  if (!inputPesquisa.value) {
    placeholderAnimado.style.opacity = '1';
  }
});

setInterval(trocarPlaceholder, 3000);
