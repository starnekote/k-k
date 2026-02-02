const burger = document.querySelector('.burger');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const body = document.body;
const menuLinks = document.querySelectorAll('.mobile-menu a');

function openMenu() {
  burger.classList.add('active');
  menu.classList.add('open');
  overlay.classList.add('show');
  body.classList.add('lock');
  burger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  burger.classList.remove('active');
  menu.classList.remove('open');
  overlay.classList.remove('show');
  body.classList.remove('lock');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('active');
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});