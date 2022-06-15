const menuBtn = document.getElementById('menu-btn');
const closeMenu = document.getElementById('menu-close');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menuAnimation();
})

closeMenu.addEventListener('click', () => {
  menu.classList.remove('active');
})

if (window.innerWidth < 600) {
  window.onscroll = () => menu.classList.remove('active');
}

const menuAnimation = () => {
  let tl = gsap.timeline();

  tl.from('.menu__links li a', 1, {
    delay: 0.6,
    x: 50,
    opacity: 0,
    stagger: {
      amount: 0.4
    }
  })
}