document.addEventListener('DOMContentLoaded', () => {
  const inputPesquisa = document.getElementById('input-pesquisa');
  const cards = document.querySelectorAll('.card');

  inputPesquisa.addEventListener('input', () => {
    const filtro = inputPesquisa.value.toLowerCase();

    cards.forEach(card => {
      const titulo = card.querySelector('h2').textContent.toLowerCase();
      const texto = card.querySelector('p').textContent.toLowerCase();

      if (titulo.includes(filtro) || texto.includes(filtro)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
