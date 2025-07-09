
const inputPesquisa = document.getElementById('campo-pesquisa');
const palavras = ["Pesca", "Cultura", "Informação", "Aquicultura" ];
let indice = 0;

function trocarPlaceholder() {
  // efeito sumir (fade out)
  inputPesquisa.style.setProperty('--placeholder-opacity', '0');

  setTimeout(() => {
    // troca o texto do placeholder
    inputPesquisa.placeholder = palavras[indice];
    // efeito aparecer (fade in)
    inputPesquisa.style.setProperty('--placeholder-opacity', '1');

    // próximo índice, volta ao início ao chegar no fim
    indice = (indice + 1) % palavras.length;
  }, 500); // 500ms = tempo do fade out
}

// Inicializa
inputPesquisa.placeholder = palavras[0];
inputPesquisa.style.setProperty('--placeholder-opacity', '1');

// Troca a cada 3 segundos (3000ms)
setInterval(trocarPlaceholder, 3000);
