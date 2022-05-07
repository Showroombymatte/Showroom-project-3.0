const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('menu-close');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
})

window.onscroll = () => menu.classList.remove('active');