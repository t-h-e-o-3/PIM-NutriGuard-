// Seleciona os elementos
const btnAbrirMenu = document.querySelector('.btn-abrir-menu i');
const btnFecharMenu = document.querySelector('.btn-fechar i');
const menuMobile = document.querySelector('.menu-mobile');

// Evento para abrir o menu
btnAbrirMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir-menu'); // Adiciona a classe que exibe o menu
});

// Evento para fechar o menu
btnFecharMenu.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu'); // Remove a classe que exibe o menu
});

const menuOverlay = document.querySelector('.menu-overlay');

// Evento para abrir o menu
btnAbrirMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir-menu');
  menuOverlay.style.display = 'block'; // Exibe o overlay
});

// Evento para fechar o menu
btnFecharMenu.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu');
  menuOverlay.style.display = 'none'; // Oculta o overlay
});
