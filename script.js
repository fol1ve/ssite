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

// Фильтр направлений
const filterButtons = document.querySelectorAll('.filter');
const destinationCards = document.querySelectorAll('.destination-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach(item =>
      item.classList.toggle('active', item === button)
    );

    destinationCards.forEach(card => {
      card.hidden =
        selected !== 'all' &&
        card.dataset.category !== selected;
    });
  });
});

// Текущий год
document.getElementById('year').textContent =
  new Date().getFullYear();

// EmailJS
const EMAILJS_PUBLIC_KEY = '2trv3YbLGeSxu74qz';
const EMAILJS_SERVICE_ID = 'service_fjk3fsj';
const EMAILJS_TEMPLATE_ID = 'template_9u2y1dh';

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY
});

const contactForm = document.getElementById('contactForm');
const formHint = document.getElementById('formHint');
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const data = new FormData(contactForm);

  const templateParams = {
    name: data.get('name'),
    contact: data.get('contact'),
    message: data.get('message')
  };

  submitButton.disabled = true;
  submitButton.textContent = 'Отправляем...';
  formHint.textContent = 'Отправляем заявку...';

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    contactForm.reset();
    formHint.textContent =
      'Заявка успешно отправлена! Спасибо, скоро с тобой свяжутся.';

  } catch (error) {
    console.error('EmailJS error:', error);

    formHint.textContent =
      'Ошибка отправки. Попробуйте ещё раз немного позже.';

  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML =
      'Отправить заявку <span>↗</span>';
  }
});
