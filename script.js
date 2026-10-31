'use strict';

// EMAILJS — прежние настройки
const EMAILJS_SERVICE_ID = 'service_fjk3fsj';
const EMAILJS_TEMPLATE_ID = 'template_9u2y1dh';
const EMAILJS_PUBLIC_KEY = '2trv3YbLGeSxu74qz';

// ==========================================
// МЕНЮ
// ==========================================

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
    if (
        settingsPanel &&
        menuToggle &&
        !settingsPanel.hidden &&
        !settingsPanel.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        setMenuOpen(false);
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuOpen(false);
});

// ==========================================
// ФИЛЬТР НАПРАВЛЕНИЙ
// ==========================================

const filterButtons = document.querySelectorAll('.filter');
const destinationCards = document.querySelectorAll('.destination-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selected = button.dataset.filter;

        filterButtons.forEach(item => {
            item.classList.toggle('active', item === button);
        });

        destinationCards.forEach(card => {
            card.hidden =
                selected !== 'all' &&
                card.dataset.category !== selected;
        });
    });
});

// ==========================================
// ПЕРЕВОДЫ
// ==========================================

const translations = {
    ru: {
        menu: 'Меню и настройки',
        language: 'Язык сайта',
        deals: 'Горящие предложения',
        finder: 'Подобрать тур',
        types: 'Виды отдыха',
        faq: 'Частые вопросы',
        reviews: 'Отзывы',

        nav1: 'Направления',
        nav2: 'О компании',
        nav3: 'Журнал',
        nav4: 'Связаться',

        dealsEyebrow: 'ПОДБОРКА ДЛЯ ВДОХНОВЕНИЯ',
        dealsTitle: 'Идеи для отпуска.',

        finderEyebrow: 'НЕ ЗНАЕШЬ, С ЧЕГО НАЧАТЬ?',
        finderTitle: 'Подберём поездку под твой ритм.',

        typesEyebrow: 'КАКОЙ ОТДЫХ ТЕБЕ БЛИЖЕ?',
        typesTitle: 'Выбери свой формат.',

        faqTitle: 'Частые вопросы.',

        reviewsEyebrow: 'ВАЖНО ДОВЕРИЕ',
        reviewsTitle: 'Истории путешествий настоящих людей.',

        submit: 'Отправить заявку',
        submitFinder: 'Отправить параметры',

        destinationLabel: 'Куда хочешь поехать?',
        peopleLabel: 'Сколько путешественников?',
        budgetLabel: 'Примерный бюджет',
        datesLabel: 'Когда планируешь поездку?',
        nameLabel: 'Твоё имя',
        contactLabel: 'Телефон или почта'
    },

    en: {
        menu: 'Menu & settings',
        language: 'Website language',
        deals: 'Travel ideas',
        finder: 'Find a trip',
        types: 'Travel styles',
        faq: 'FAQ',
        reviews: 'Reviews',

        nav1: 'Destinations',
        nav2: 'About us',
        nav3: 'Journal',
        nav4: 'Contact',

        dealsEyebrow: 'IDEAS FOR YOUR NEXT TRIP',
        dealsTitle: 'Ideas for your holiday.',

        finderEyebrow: 'NOT SURE WHERE TO START?',
        finderTitle: 'A trip that fits your pace.',

        typesEyebrow: 'WHAT KIND OF TRIP DO YOU PREFER?',
        typesTitle: 'Choose your travel style.',

        faqTitle: 'Frequently asked questions.',

        reviewsEyebrow: 'TRUST MATTERS',
        reviewsTitle: 'Stories from real travellers.',

        submit: 'Send request',
        submitFinder: 'Send trip details',

        destinationLabel: 'Where would you like to go?',
        peopleLabel: 'How many travellers?',
        budgetLabel: 'Approximate budget',
        datesLabel: 'When are you planning to travel?',
        nameLabel: 'Your name',
        contactLabel: 'Phone or email'
    },

    zh: {
        menu: '菜单与设置',
        language: '网站语言',
        deals: '旅行灵感',
        finder: '定制旅行',
        types: '旅行方式',
        faq: '常见问题',
        reviews: '客户评价',

        nav1: '目的地',
        nav2: '关于我们',
        nav3: '旅行日志',
        nav4: '联系我们',

        dealsEyebrow: '下一次旅行灵感',
        dealsTitle: '假期旅行灵感。',

        finderEyebrow: '不知道从哪里开始？',
        finderTitle: '为你寻找合适的旅程。',

        typesEyebrow: '你喜欢哪种旅行？',
        typesTitle: '选择旅行方式。',

        faqTitle: '常见问题。',

        reviewsEyebrow: '信任很重要',
        reviewsTitle: '真实旅行者的故事。',

        submit: '提交申请',
        submitFinder: '提交旅行信息',

        destinationLabel: '你想去哪里？',
        peopleLabel: '有几位旅行者？',
        budgetLabel: '大概预算',
        datesLabel: '计划什么时候出行？',
        nameLabel: '姓名',
        contactLabel: '电话或电子邮箱'
    }
};

// ==========================================
// ПЕРЕВОД ВЫПАДАЮЩИХ СПИСКОВ
// ==========================================

// Здесь находятся именно варианты из блока
// «Куда хочешь поехать?»

const optionTranslations = {
    en: {
        'Выбери направление': 'Choose a destination',
        'Море': 'Sea',
        'Город': 'City',
        'Горы и природа': 'Mountains and nature',
        'Пока не решил(а)': 'Not sure yet',

        '1 человек': '1 traveller',
        '2 человека': '2 travellers',
        '3 человека': '3 travellers',
        '4 и более': '4 or more',

        'Выбери бюджет': 'Choose a budget',
        'До 100 000 ₽': 'Up to RUB 100,000',
        '100 000–200 000 ₽': 'RUB 100,000–200,000',
        '200 000–350 000 ₽': 'RUB 200,000–350,000',
        'Более 350 000 ₽': 'Over RUB 350,000',
        'Нужно обсудить': 'Let’s discuss'
    },

    zh: {
        'Выбери направление': '选择目的地',
        'Море': '海滨',
        'Город': '城市',
        'Горы и природа': '山脉与自然',
        'Пока не решил(а)': '还没决定',

        '1 человек': '1 位',
        '2 человека': '2 位',
        '3 человека': '3 位',
        '4 и более': '4 位或更多',

        'Выбери бюджет': '选择预算',
        'До 100 000 ₽': '不超过 100,000 卢布',
        '100 000–200 000 ₽': '100,000–200,000 卢布',
        '200 000–350 000 ₽': '200,000–350,000 卢布',
        'Более 350 000 ₽': '超过 350,000 卢布',
        'Нужно обсудить': '需要讨论'
    }
};

// Перевод фильтров на странице направлений

const filterTranslations = {
    en: {
        'Все места': 'All places',
        'Море': 'Sea',
        'Города': 'Cities',
        'Природа': 'Nature'
    },

    zh: {
        'Все места': '全部地点',
        'Море': '海滨',
        'Города': '城市',
        'Природа': '自然'
    }
};

// ==========================================
// ЭЛЕМЕНТЫ, КОТОРЫЕ ПЕРЕВОДЯТСЯ
// ==========================================

const languageSelect = document.getElementById('languageSelect');

const translatable = [
    ['.settings-top strong', 'menu'],
    ['.language-label', 'language'],

    ['.settings-links a:nth-child(1)', 'deals'],
    ['.settings-links a:nth-child(2)', 'finder'],
    ['.settings-links a:nth-child(3)', 'types'],
    ['.settings-links a:nth-child(4)', 'faq'],
    ['.settings-links a:nth-child(5)', 'reviews'],

    ['.main-nav a:nth-child(1)', 'nav1'],
    ['.main-nav a:nth-child(2)', 'nav2'],
    ['.main-nav a:nth-child(3)', 'nav3'],
    ['.main-nav .nav-contact', 'nav4'],

    ['#deals .eyebrow', 'dealsEyebrow'],
    ['#deals h2', 'dealsTitle'],

    ['#tourFinder .eyebrow', 'finderEyebrow'],
    ['#tourFinder h2', 'finderTitle'],

    ['#travelTypes .eyebrow', 'typesEyebrow'],
    ['#travelTypes h2', 'typesTitle'],

    ['#faq h2', 'faqTitle'],

    ['#reviews .eyebrow', 'reviewsEyebrow'],
    ['#reviews h2', 'reviewsTitle'],

    ['#contactForm button', 'submit'],
    ['#tourFinderForm button', 'submitFinder'],

    ['label[for="tourDestination"]', 'destinationLabel'],
    ['label[for="tourPeople"]', 'peopleLabel'],
    ['label[for="tourBudget"]', 'budgetLabel'],
    ['label[for="tourDates"]', 'datesLabel'],
    ['label[for="tourName"]', 'nameLabel'],
    ['label[for="tourContact"]', 'contactLabel']
];

// Запоминаем исходные подписи выпадающих списков
function rememberOptions() {
    document.querySelectorAll('select option').forEach(option => {
        if (!option.dataset.originalText) {
            option.dataset.originalText = option.textContent;
        }
    });
}

// Переводим выпадающие списки
function translateOptions(lang) {
    rememberOptions();

    const dictionary = optionTranslations[lang] || {};

    document.querySelectorAll('select option').forEach(option => {
        const original = option.dataset.originalText;
        option.textContent = dictionary[original] || original;
    });
}

// Переводим фильтры
function translateFilters(lang) {
    const dictionary = filterTranslations[lang] || {};

    document.querySelectorAll('.filter').forEach(button => {
        if (!button.dataset.originalText) {
            button.dataset.originalText = button.childNodes[0]?.textContent.trim() || '';
        }

        const original = button.dataset.originalText;
        const translated = dictionary[original] || original;

        const textNode = [...button.childNodes].find(
            node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()
        );

        if (textNode) {
            textNode.textContent = translated + ' ';
        }
    });
}

// ==========================================
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
// ==========================================

function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.ru;

    document.documentElement.lang =
        lang === 'zh' ? 'zh-CN' : lang;

    // Основные элементы сайта
    translatable.forEach(([selector, key]) => {
        const node = document.querySelector(selector);

        if (!node || !dictionary[key]) return;

        if (node.matches('button')) {
            node.innerHTML = `${dictionary[key]} <span>↗</span>`;
        } else {
            node.textContent = dictionary[key];
        }
    });

    // Выпадающие списки и фильтры
    translateOptions(lang);
    translateFilters(lang);

    // Заголовок страницы
    const titles = {
        ru: 'Центр Блеск — путешествия ближе, чем кажется',
        en: 'Blesk Travel Centre — journeys closer than you think',
        zh: 'Blesk 旅行中心 — 旅行比想象更近'
    };

    document.title = titles[lang] || titles.ru;

    try {
        localStorage.setItem('centerBleskLanguage', lang);
    } catch (_) {
        // Хранилище может быть недоступно
    }
}

// Восстанавливаем выбранный язык
let savedLanguage = 'ru';

try {
    savedLanguage =
        localStorage.getItem('centerBleskLanguage') || 'ru';
} catch (_) {
    savedLanguage = 'ru';
}

if (!translations[savedLanguage]) {
    savedLanguage = 'ru';
}

if (languageSelect) {
    languageSelect.value = savedLanguage;
    applyLanguage(savedLanguage);

    languageSelect.addEventListener('change', () => {
        applyLanguage(languageSelect.value);
    });
} else {
    applyLanguage('ru');
}

// ==========================================
// ГОД В ПОДВАЛЕ
// ==========================================

const yearNode = document.getElementById('year');

if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
}

// ==========================================
// EMAILJS
// ==========================================

const emailReady = Boolean(
    window.emailjs &&
    EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY
);

if (emailReady) {
    try {
        window.emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY
        });
    } catch (error) {
        console.error('EmailJS initialization error:', error);
    }
}

// Тексты сообщений на трёх языках

const messages = {
    ru: {
        required: 'Заполни, пожалуйста, обязательные поля.',
        unavailable: 'Сервис отправки не загрузился. Обнови страницу и попробуй ещё раз.',
        sending: 'Отправляем…',
        sendingRequest: 'Отправляем заявку…',
        success: 'Заявка отправлена! Спасибо, скоро свяжемся.',
        error: 'Не удалось отправить заявку. Проверь подключение и попробуй ещё раз.'
    },

    en: {
        required: 'Please complete all required fields.',
        unavailable: 'The sending service did not load. Refresh the page and try again.',
        sending: 'Sending…',
        sendingRequest: 'Sending your request…',
        success: 'Your request has been sent! Thank you — we’ll be in touch soon.',
        error: 'Could not send your request. Check your connection and try again.'
    },

    zh: {
        required: '请填写所有必填项。',
        unavailable: '发送服务未能加载，请刷新页面后重试。',
        sending: '正在发送…',
        sendingRequest: '正在提交申请…',
        success: '申请已发送！谢谢，我们会尽快联系你。',
        error: '发送失败，请检查网络连接后重试。'
    }
};

function currentMessages() {
    const lang = languageSelect?.value || 'ru';
    return messages[lang] || messages.ru;
}

// Отправка заявки

async function sendRequest({ name, contact, message }, statusNode, button) {
    const text = currentMessages();

    if (!name || !contact || !message) {
        if (statusNode) {
            statusNode.textContent = text.required;
        }
        return false;
    }

    if (!emailReady) {
        if (statusNode) {
            statusNode.textContent = text.unavailable;
        }
        return false;
    }

    const originalText = button
        ? button.textContent
        : '';

    if (button) {
        button.disabled = true;
        button.textContent = text.sending;
    }

    if (statusNode) {
        statusNode.textContent = text.sendingRequest;
    }

    try {
        await window.emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                name,
                contact,
                message
            }
        );

        if (statusNode) {
            statusNode.textContent = text.success;
        }

        return true;

    } catch (error) {
        console.error('EmailJS send error:', error);

        if (statusNode) {
            statusNode.textContent = currentMessages().error;
        }

        return false;

    } finally {
        if (button) {
            button.disabled = false;
            button.textContent = originalText;
        }
    }
}

// ==========================================
// КОНТАКТНАЯ ФОРМА
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', async event => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);

    const button = contactForm.querySelector(
        'button[type="submit"]'
    );

    const success = await sendRequest(
        {
            name: String(data.get('name') || '').trim(),
            contact: String(data.get('contact') || '').trim(),
            message: String(data.get('message') || '').trim()
        },
        document.getElementById('formHint'),
        button
    );

    if (success) {
        contactForm.reset();
    }
});

// ==========================================
// ФОРМА ПОДБОРА ТУРА
// ==========================================

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

    const button = finderForm.querySelector(
        'button[type="submit"]'
    );

    const success = await sendRequest(
        {
            name: String(data.get('name') || '').trim(),
            contact: String(data.get('contact') || '').trim(),
            message
        },
        document.getElementById('finderHint'),
        button
    );

    if (success) {
        finderForm.reset();
    }
});
