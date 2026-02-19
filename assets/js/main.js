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

document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {

        const id = entry.target.getAttribute("id");

        navLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });

      }
    });

  }, {
    threshold: 0.6   // 60% секції у viewport
  });

  sections.forEach(section => observer.observe(section));

});