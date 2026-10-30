'use strict';

const EMAILJS_SERVICE_ID = 'service_fjk3fsj';
const EMAILJS_TEMPLATE_ID = 'template_9u2y1dh';
const EMAILJS_PUBLIC_KEY = '2trv3YbLGeSxu74qz';

const menuToggle = document.getElementById('menuToggle');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.querySelector('.settings-close');

function setMenuOpen(open) {
  if (!menuToggle || !settingsPanel) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  settingsPanel.hidden = !open;
}

menuToggle?.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
closeSettings?.addEventListener('click', () => setMenuOpen(false));
settingsPanel?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});
document.addEventListener('click', event => {
  if (settingsPanel && menuToggle && !settingsPanel.hidden &&
      !settingsPanel.contains(event.target) && !menuToggle.contains(event.target)) setMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenuOpen(false);
});

// Фильтр направлений
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

const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

// Перевод интерфейса: русский, английский и китайский.
const translations = {
  ru: {
    menu:'Меню и настройки', language:'Язык сайта', deals:'Горящие предложения', finder:'Подобрать тур', types:'Виды отдыха', faq:'Частые вопросы', reviews:'Отзывы',
    nav1:'Направления', nav2:'О компании', nav3:'Журнал', nav4:'Связаться',
    dealsEyebrow:'ПОДБОРКА ДЛЯ ВДОХНОВЕНИЯ', dealsTitle:'Идеи для отпуска.',
    finderEyebrow:'НЕ ЗНАЕШЬ, С ЧЕГО НАЧАТЬ?', finderTitle:'Подберём поездку под твой ритм.',
    typesEyebrow:'КАКОЙ ОТДЫХ ТЕБЕ БЛИЖЕ?', typesTitle:'Выбери свой формат.', faqTitle:'Частые вопросы.',
    reviewsEyebrow:'ВАЖНО ДОВЕРИЕ', reviewsTitle:'Истории путешествий настоящих людей.',
    submit:'Отправить заявку', submitFinder:'Отправить параметры',
    destinationLabel:'Куда хочешь поехать?', peopleLabel:'Сколько путешественников?', budgetLabel:'Примерный бюджет', datesLabel:'Когда планируешь поездку?', nameLabel:'Твоё имя', contactLabel:'Телефон или почта'
  },
  en: {
    menu:'Menu & settings', language:'Website language', deals:'Travel ideas', finder:'Find a trip', types:'Travel styles', faq:'FAQ', reviews:'Reviews',
    nav1:'Destinations', nav2:'About us', nav3:'Journal', nav4:'Contact',
    dealsEyebrow:'IDEAS FOR YOUR NEXT TRIP', dealsTitle:'Ideas for your holiday.',
    finderEyebrow:'NOT SURE WHERE TO START?', finderTitle:'A trip that fits your pace.',
    typesEyebrow:'WHAT KIND OF TRIP DO YOU PREFER?', typesTitle:'Choose your travel style.', faqTitle:'Frequently asked questions.',
    reviewsEyebrow:'TRUST MATTERS', reviewsTitle:'Stories from real travellers.',
    submit:'Send request', submitFinder:'Send trip details',
    destinationLabel:'Where would you like to go?', peopleLabel:'How many travellers?', budgetLabel:'Approximate budget', datesLabel:'When are you planning to travel?', nameLabel:'Your name', contactLabel:'Phone or email'
  },
  zh: {
    menu:'菜单与设置', language:'网站语言', deals:'旅行灵感', finder:'定制旅行', types:'旅行方式', faq:'常见问题', reviews:'客户评价',
    nav1:'目的地', nav2:'关于我们', nav3:'旅行日志', nav4:'联系我们',
    dealsEyebrow:'下一次旅行灵感', dealsTitle:'假期旅行灵感。',
    finderEyebrow:'不知道从哪里开始？', finderTitle:'为你寻找合适的旅程。',
    typesEyebrow:'你喜欢哪种旅行？', typesTitle:'选择旅行方式。', faqTitle:'常见问题。',
    reviewsEyebrow:'信任很重要', reviewsTitle:'真实旅行者的故事。',
    submit:'提交申请', submitFinder:'提交旅行信息',
    destinationLabel:'你想去哪里？', peopleLabel:'有几位旅行者？', budgetLabel:'大概预算', datesLabel:'计划什么时候出行？', nameLabel:'姓名', contactLabel:'电话或电子邮箱'
  }
};

const languageSelect = document.getElementById('languageSelect');
const translatable = [
  ['.settings-top strong','menu'], ['.language-label','language'],
  ['.settings-links a:nth-child(1)','deals'], ['.settings-links a:nth-child(2)','finder'],
  ['.settings-links a:nth-child(3)','types'], ['.settings-links a:nth-child(4)','faq'], ['.settings-links a:nth-child(5)','reviews'],
  ['.main-nav a:nth-child(1)','nav1'], ['.main-nav a:nth-child(2)','nav2'], ['.main-nav a:nth-child(3)','nav3'], ['.main-nav .nav-contact','nav4'],
  ['#deals .eyebrow','dealsEyebrow'], ['#deals h2','dealsTitle'],
  ['#tourFinder .eyebrow','finderEyebrow'], ['#tourFinder h2','finderTitle'],
  ['#travelTypes .eyebrow','typesEyebrow'], ['#travelTypes h2','typesTitle'], ['#faq h2','faqTitle'],
  ['#reviews .eyebrow','reviewsEyebrow'], ['#reviews h2','reviewsTitle'],
  ['#contactForm button','submit'], ['#tourFinderForm button','submitFinder'],
  ['label[for="tourDestination"]','destinationLabel'], ['label[for="tourPeople"]','peopleLabel'],
  ['label[for="tourBudget"]','budgetLabel'], ['label[for="tourDates"]','datesLabel'],
  ['label[for="tourName"]','nameLabel'], ['label[for="tourContact"]','contactLabel']
];
function applyLanguage(lang) {
  const dictionary = translations[lang] || translations.ru;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  translatable.forEach(([selector, key]) => {
    const node = document.querySelector(selector);
    if (node && dictionary[key]) {
      if (node.matches('button')) node.innerHTML = `${dictionary[key]} <span>↗</span>`;
      else if (node.matches('h2') && key.endsWith('Title')) {
        node.textContent = dictionary[key];
      } else node.textContent = dictionary[key];
    }
  });
  try { localStorage.setItem('centerBleskLanguage', lang); } catch (_) { /* storage may be disabled */ }
}
let savedLanguage = 'ru';
try { savedLanguage = localStorage.getItem('centerBleskLanguage') || 'ru'; } catch (_) { /* ignore */ }
if (languageSelect) {
  languageSelect.value = translations[savedLanguage] ? savedLanguage : 'ru';
  applyLanguage(languageSelect.value);
  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));
}

// Отправка обеих форм через EmailJS (без открытия почтового приложения).
const emailReady = Boolean(window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
if (emailReady) {
  try { window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); }
  catch (error) { console.error('EmailJS initialization error:', error); }
}

async function sendRequest({ name, contact, message }, statusNode, button) {
  if (!name || !contact || !message) {
    if (statusNode) statusNode.textContent = 'Заполни, пожалуйста, обязательные поля.';
    return;
  }
  if (!emailReady) {
    if (statusNode) statusNode.textContent = 'Сервис отправки не загрузился. Обнови страницу и попробуй ещё раз.';
    return;
  }
  const originalText = button ? button.textContent : '';
  if (button) { button.disabled = true; button.textContent = 'Отправляем…'; }
  if (statusNode) statusNode.textContent = 'Отправляем заявку…';
  try {
    await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, contact, message });
    if (statusNode) statusNode.textContent = 'Заявка отправлена! Спасибо, скоро свяжемся.';
  } catch (error) {
    console.error('EmailJS send error:', error);
    if (statusNode) statusNode.textContent = 'Не удалось отправить заявку. Проверь подключение и попробуй ещё раз.';
  } finally {
    if (button) { button.disabled = false; button.textContent = originalText; }
  }
}

const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const data = new FormData(contactForm);
  const button = contactForm.querySelector('button[type="submit"]');
  await sendRequest({
    name: String(data.get('name') || '').trim(),
    contact: String(data.get('contact') || '').trim(),
    message: String(data.get('message') || '').trim()
  }, document.getElementById('formHint'), button);
  if (document.getElementById('formHint')?.textContent.startsWith('Заявка отправлена')) contactForm.reset();
});

const finderForm = document.getElementById('tourFinderForm');
finderForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!finderForm.reportValidity()) return;
  const data = new FormData(finderForm);
  const message = [
    'Заявка на подбор тура:',
    `Направление: ${data.get('destination')}`,
    `Путешественники: ${data.get('people')}`,
    `Бюджет: ${data.get('budget')}`,
    `Даты: ${data.get('dates') || 'Не указаны'}`
  ].join('\n');
  await sendRequest({
    name: String(data.get('name') || '').trim(),
    contact: String(data.get('contact') || '').trim(),
    message
  }, document.getElementById('finderHint'), finderForm.querySelector('button[type="submit"]'));
  if (document.getElementById('finderHint')?.textContent.startsWith('Заявка отправлена')) finderForm.reset();
});
