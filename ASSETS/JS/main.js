const botaoMenu = document.querySelector('.hamburguer');
const menuLateral = document.querySelector('.menuLateral');

botaoMenu.addEventListener('click', function escondeMenu() {
    menuLateral.classList.toggle('active');
});
