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

const button = document.querySelector('.brief-toggle');
const brief = document.querySelector('.brief');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    brief.classList.toggle('open');
});