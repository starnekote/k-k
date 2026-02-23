// НАВБАР
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  const options = {
    // rootMargin створює "відступи" для перевірки перетину.
    // -20% зверху і -40% знизу змушують код реагувати саме на центр екрана.
    rootMargin: "-20% 0px -40% 0px",
    threshold: 0 // Спрацьовує одразу, як тільки секція потрапляє в rootMargin
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // isIntersecting спрацює коректно навіть при зміні висоти
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
  }, options);

  sections.forEach(section => observer.observe(section));
});

// КНОПКА ВІДКРИВАННЯ БРИФА
const button = document.querySelector('.brief-toggle');
const brief = document.querySelector('.brief');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    brief.classList.toggle('open');
});

// ПІДКАЗКИ В БРИФІ
const tooltipIcons = document.querySelectorAll('.tooltip-icon');

// Обробник кліку для мобільних пристроїв
tooltipIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        // Перевіряємо ширину екрана
        if (window.innerWidth <= 768) {
            e.stopPropagation(); 

            // 1. Знаходимо саме ту підказку, яка йде відразу ПІСЛЯ цієї іконки
            const currentText = this.nextElementSibling;

            // 2. (Опціонально) Закриваємо всі інші відкриті підказки, щоб вони не накладалися
            document.querySelectorAll('.tooltip-text').forEach(text => {
                if (text !== currentText) {
                    text.classList.remove('is-active');
                }
            });

            // 3. Перемикаємо клас тільки для поточної підказки
            if (currentText && currentText.classList.contains('tooltip-text')) {
                currentText.classList.toggle('is-active');
            }
        }
    });
});

// Закриваємо всі підказки, якщо клікнути в будь-якому іншому місці екрана
document.addEventListener('click', function() {
    document.querySelectorAll('.tooltip-text').forEach(text => {
        text.classList.remove('is-active');
    });
});

// FAQ
const questions = document.querySelectorAll('.question');

questions.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Закриваємо всі інші
        document.querySelectorAll('.answear').forEach(item => {
            if (item !== answer) {
                item.style.maxHeight = null;
                item.classList.remove('open');
            }
        });

        document.querySelectorAll('.question').forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('open');
            }
        });

        // Toggle поточного
        button.classList.toggle('open');

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.classList.remove('open');
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.classList.add('open');
        }
    });
});