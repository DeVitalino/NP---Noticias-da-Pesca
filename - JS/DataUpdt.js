document.addEventListener("DOMContentLoaded", function() {
  const dataAtual = new Date();
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const dia = dataAtual.getDate();
  const mes = meses[dataAtual.getMonth()];
  const ano = dataAtual.getFullYear();

  const dataFormatada = `${dia} de ${mes} de ${ano}`;

  const spanData = document.getElementById('data-atualizacao');
  if (spanData) {
    spanData.textContent = dataFormatada;
  }
});
