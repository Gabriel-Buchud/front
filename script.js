// Função para alternar entre os temas claro e escuro
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Adiciona evento de clique ao botão de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Função para mostrar um alerta ao clicar em um link de navegação
function showAlert(event) {
  event.preventDefault(); // Evita que o link seja seguido
  alert('Você clicou em um link de navegação!');
}

// Adiciona o evento de clique a todos os links de navegação
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', showAlert);
});
