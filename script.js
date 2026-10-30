const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mainNav.classList.toggle('open', !isOpen);
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

// Фильтр карточек направлений
const filterButtons = document.querySelectorAll('.filter');
const destinationCards = document.querySelectorAll('.destination-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    destinationCards.forEach(card => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  });
});

// Год в подвале
document.getElementById('year').textContent = new Date().getFullYear();

// Форма работает без сервера: открывает почтовое приложение пользователя.
// Перед публикацией укажи реальную почту в переменной CONTACT_EMAIL.
const CONTACT_EMAIL = 'cte4689@gmail.com';

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = encodeURIComponent('Заявка с сайта Центр Блеск');
  const body = encodeURIComponent(
    `Имя: ${data.get('name')}\nКонтакт: ${data.get('contact')}\nПожелания: ${data.get('message')}`
  );

  if (CONTACT_EMAIL) {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  } else {
    document.getElementById('formHint').textContent =
      'Форма заполнена. Чтобы отправка работала, добавьте свою почту в CONTACT_EMAIL в файле script.js.';
    document.getElementById('formHint').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});
