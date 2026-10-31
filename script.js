
'use strict';

// ==========================================
// EMAILJS — прежние настройки
// ==========================================

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
        'topline1': 'ЦЕНТР ПУТЕШЕСТВИЙ',
        'topline2': 'МАРШРУТЫ, КОТОРЫЕ ОСТАЮТСЯ С ТОБОЙ',

        'menu': 'Меню и настройки',
        'language': 'Язык сайта',
        'deals': 'Горящие предложения',
        'finder': 'Подобрать тур',
        'types': 'Виды отдыха',
        'faq': 'Частые вопросы',
        'reviews': 'Отзывы',
        'allDirections': 'Все направления',
        'contactsMenu': 'Контакты',

        'nav1': 'Направления',
        'nav2': 'О компании',
        'nav3': 'Журнал',
        'nav4': 'Связаться',

        'heroEyebrow': 'НЕ ЖДИ ИДЕАЛЬНОГО МОМЕНТА',
        'heroTitle': 'Мир больше,<br>чем кажется<span>.</span>',
        'heroLead': 'Необычные места, новые знакомства и впечатления, которые не помещаются в фотографии. Поможем выбрать поездку без лишних затрат.',
        'heroButton': 'Выбрать направление',
        'heroAbout': 'Узнать о нас',
        'heroNote': 'Путешествуй смелее.<br>Планируй разумно.',
        'photoLabel1': '01 / ВПЕЧАТЛЕНИЯ',
        'photoLabel2': 'ОТКРЫВАЙ НОВОЕ',
        'stamp1': 'ТВОЁ СЛЕДУЮЩЕЕ',
        'stamp2': 'ПРИКЛЮЧЕНИЕ',
        'stamp3': 'УЖЕ БЛИЖЕ ✳',
        'heroBottom1': 'БРАТЬ С СОБОЙ ТОЛЬКО ЛЮБОПЫТСТВО',
        'heroBottom2': '↓ ЛИСТАЙ НИЖЕ',

        'intro1': 'ПУТЕШЕСТВИЯ — ЭТО НЕ РОСКОШЬ',
        'intro2': 'Это способ увидеть, почувствовать и понять чуть больше.',

        'destEyebrow': 'КУДА ОТПРАВИМСЯ?',
        'destTitle': 'Выбирай свой<br><em>горизонт.</em>',
        'destAside': 'Собрали несколько идей для тех, кому хочется сменить привычный маршрут. Это только начало — найдём направление под твой запрос.',
        'filterAll': 'Все места',
        'filterSea': 'Море',
        'filterCity': 'Города',
        'filterNature': 'Природа',

        'destMeta1': 'МОРЕ / ОТДЫХ',
        'destMeta2': 'ГОРОД',
        'destMeta3': 'ПРИРОДА',
        'destMeta4': 'ГОРОД / ГОРЫ',
        'destMeta5': 'МОРЕ / ОСТРОВ',
        'destMeta6': 'ПРИРОДА',

        'destName1': 'Острова на паузе',
        'destDesc1': 'Тёплая вода, белый песок и время, которое наконец принадлежит тебе.',
        'destName2': 'На стыке миров',
        'destDesc2': 'Узкие улочки, шумные рынки и чай с видом на Босфор.',
        'destName3': 'Ближе к тишине',
        'destDesc3': 'Горные дороги, прозрачные реки и простор вокруг.',
        'destName4': 'Вкус долгих вечеров',
        'destDesc4': 'Гостеприимство, старые кварталы и дороги с красивыми видами.',
        'destName5': 'Другой ритм',
        'destDesc5': 'Зелёные террасы, океан и утро без спешки.',
        'destName6': 'Недалеко от дома',
        'destDesc6': 'Лесные тропы, озёра и свежий воздух на выходные.',

        'catalogFoot': 'НЕ НАШЁЛ СВОЁ МЕСТО?',
        'catalogLink': 'Расскажем о других вариантах',

        'dealsEyebrow': 'ПОДБОРКА ДЛЯ ВДОХНОВЕНИЯ',
        'dealsTitle': 'Идеи для <em>отпуска.</em>',
        'dealsAside': 'Несколько направлений, с которых можно начать планирование. Итоговая цена зависит от дат и условий поездки.',
        'dealTag1': 'МОРСКОЙ ОТДЫХ',
        'dealTag2': 'ГОРОДСКОЕ ПУТЕШЕСТВИЕ',
        'dealTag3': 'ПРИРОДА',
        'dealDesc1': 'Спокойный отдых у океана и красивые острова.',
        'dealDesc2': 'Архитектура, прогулки и новые вкусы.',
        'dealDesc3': 'Горы, озёра и маршруты на свежем воздухе.',
        'dealLink': 'Узнать условия',
        'disclaimer': 'Это примеры направлений, а не подтверждённые акции или фиксированные цены. Актуальную стоимость уточним по запросу.',

        'finderEyebrow': 'НЕ ЗНАЕШЬ, С ЧЕГО НАЧАТЬ?',
        'finderTitle': 'Подберём поездку<br><em>под твой ритм.</em>',
        'finderDesc': 'Укажи несколько деталей — заявка придёт нам на почту, и мы сможем обсудить подходящие варианты.',
        'destinationLabel': 'Куда хочешь поехать?',
        'peopleLabel': 'Сколько путешественников?',
        'budgetLabel': 'Примерный бюджет',
        'datesLabel': 'Когда планируешь поездку?',
        'nameLabel': 'Твоё имя',
        'contactLabel': 'Телефон или почта',
        'datesPlaceholder': 'Например, июль или даты пока неизвестны',
        'namePlaceholder': 'Как к тебе обращаться?',
        'contactPlaceholder': 'Как с тобой связаться?',
        'submitFinder': 'Отправить параметры',
        'finderHint': 'Отправка заявки не означает бронирование тура.',

        'typesEyebrow': 'КАКОЙ ОТДЫХ ТЕБЕ БЛИЖЕ?',
        'typesTitle': 'Выбери свой <em>формат.</em>',
        'type1': 'У моря',
        'typeDesc1': 'Пляжи, острова и спокойный отдых',
        'type2': 'В городе',
        'typeDesc2': 'Архитектура, музеи и прогулки',
        'type3': 'На природе',
        'typeDesc3': 'Горы, озёра и свежий воздух',
        'type4': 'Вдвоём или семьёй',
        'typeDesc4': 'Маршрут под вашу компанию',

        'faqEyebrow': 'ПЕРЕД ПОЕЗДКОЙ',
        'faqTitle': 'Частые <em>вопросы.</em>',
        'faqAside': 'Коротко отвечаем на то, о чём обычно спрашивают перед планированием путешествия.',
        'faqQ1': 'Сколько стоит подбор поездки?',
        'faqA1': 'Стоимость самого тура зависит от направления, дат, состава путешественников и выбранных условий. Оставь заявку — обсудим варианты.',
        'faqQ2': 'Можно ли подобрать поездку на двоих или с детьми?',
        'faqA2': 'Да. Укажи количество путешественников и пожелания в форме — это поможет подобрать подходящий формат.',
        'faqQ3': 'Что входит в стоимость тура?',
        'faqA3': 'Состав зависит от конкретного предложения. Перед выбором важно отдельно проверить перелёт, проживание, питание, трансферы и дополнительные услуги.',
        'faqQ4': 'Если я ещё не выбрал(а) направление?',
        'faqA4': 'Это нормально. Можно указать желаемый формат отдыха и примерный бюджет — начнём с нескольких идей.',

        'reviewsEyebrow': 'ВАЖНО ДОВЕРИЕ',
        'reviewsTitle': 'Истории путешествий<br><em>настоящих людей.</em>',
        'reviewsDesc': 'Здесь будут размещаться отзывы реальных клиентов с их согласия. Мы не публикуем вымышленные оценки и впечатления.',
        'reviewsButton': 'Оставить обращение',
        'reviewsNote': 'Ваш отзыв может стать<br>частью этой истории.',

        'aboutEyebrow': 'ЗНАКОМСТВО С «БЛЕСК»',
        'aboutTitle': 'Мы за поездки,<br>а не за <em>галочки.</em>',
        'aboutText1': '«Центр Блеск» помогает находить интересные направления и планировать путешествия с разумным бюджетом. Мы верим, что яркие впечатления не обязательно должны стоить целое состояние.',
        'aboutText2': 'Подскажем, с чего начать, сравним варианты и поможем собрать маршрут с учётом твоих пожеланий.',
        'aboutButton': 'Давай знакомиться',
        'aboutCaption': 'ХОРОШИЕ ИСТОРИИ НАЧИНАЮТСЯ С ДОРОГИ',
        'aboutSignature': 'Больше мира — меньше сомнений.',

        'valueTitle1': 'Разумный бюджет',
        'valueDesc1': 'Ищем подходящие варианты и не предлагаем лишнего.',
        'valueTitle2': 'Внимание к деталям',
        'valueDesc2': 'Учитываем пожелания, даты и формат отдыха.',
        'valueTitle3': 'Живые впечатления',
        'valueDesc3': 'Помогаем открыть места, о которых захочется рассказывать.',

        'journalEyebrow': 'НЕБОЛЬШОЙ ЖУРНАЛ',
        'journalTitle': 'Мысли <em>в дорогу.</em>',
        'journalAside': 'Немного полезного перед тем, как собрать рюкзак и выключить уведомления.',
        'journalTag1': 'ПОДГОТОВКА · 4 МИН',
        'journalTag2': 'БЮДЖЕТ · 3 МИН',
        'journalTag3': 'ВДОХНОВЕНИЕ · 5 МИН',
        'journalTitle1': 'Как спланировать первую самостоятельную поездку',
        'journalTitle2': 'На чём можно сэкономить, не портя отдых',
        'journalTitle3': 'Почему иногда стоит выбрать незнакомый маршрут',
        'journalLink': 'Обсудить с нами',

        'contactEyebrow': 'ТВОЯ ИСТОРИЯ МОЖЕТ НАЧАТЬСЯ ЗДЕСЬ',
        'contactTitle': 'Куда хочешь<br><em>сбежать?</em>',
        'contactDesc': 'Расскажи, о какой поездке думаешь. Вместе найдём подходящий вариант.',
        'contactNote': 'ОТВЕТИМ И ПОМОЖЕМ С ПЕРВЫМИ ШАГАМИ',
        'contactNameLabel': 'Как к тебе обращаться?',
        'contactNamePlaceholder': 'Твоё имя',
        'contactContactLabel': 'Куда написать или позвонить?',
        'contactContactPlaceholder': 'Телефон или почта',
        'messageLabel': 'О какой поездке мечтаешь?',
        'messagePlaceholder': 'Например: море в июле, на неделю...',
        'submit': 'Отправить заявку',
        'formHint': 'Нажимая кнопку, ты соглашаешься на обработку данных для ответа на обращение.',

        'footerText': 'Путешествуй смелее.<br>Остальное мы обсудим.',
        'footerNav1': 'Направления',
        'footerNav2': 'О компании',
        'footerNav3': 'Журнал',
        'footerNav4': 'Контакты',
        'footerBottom1': 'ЦЕНТР БЛЕСК',
        'footerBottom2': 'НАВЕРХ ↑',
        'footerBottom3': 'СДЕЛАНО С ЛЮБОПЫТСТВОМ'
    },

    en: {
        'topline1': 'TRAVEL CENTRE',
        'topline2': 'JOURNEYS THAT STAY WITH YOU',

        'menu': 'Menu & settings',
        'language': 'Website language',
        'deals': 'Travel ideas',
        'finder': 'Find a trip',
        'types': 'Travel styles',
        'faq': 'FAQ',
        'reviews': 'Reviews',
        'allDirections': 'All destinations',
        'contactsMenu': 'Contacts',

        'nav1': 'Destinations',
        'nav2': 'About us',
        'nav3': 'Journal',
        'nav4': 'Contact',

        'heroEyebrow': 'DON’T WAIT FOR THE PERFECT MOMENT',
        'heroTitle': 'The world is bigger<br>than it seems<span>.</span>',
        'heroLead': 'Unusual places, new connections and experiences that cannot fit into a photograph. We will help you plan a trip without unnecessary expenses.',
        'heroButton': 'Choose a destination',
        'heroAbout': 'About us',
        'heroNote': 'Travel boldly.<br>Plan wisely.',
        'photoLabel1': '01 / EXPERIENCES',
        'photoLabel2': 'DISCOVER SOMETHING NEW',
        'stamp1': 'YOUR NEXT',
        'stamp2': 'ADVENTURE',
        'stamp3': 'IS CLOSER ✳',
        'heroBottom1': 'BRING NOTHING BUT CURIOSITY',
        'heroBottom2': '↓ SCROLL DOWN',

        'intro1': 'TRAVEL IS NOT A LUXURY',
        'intro2': 'It is a way to see, feel and understand a little more.',

        'destEyebrow': 'WHERE SHALL WE GO?',
        'destTitle': 'Choose your<br><em>horizon.</em>',
        'destAside': 'We have gathered a few ideas for those who want to change their usual route. This is only the beginning — we will find a destination that suits you.',
        'filterAll': 'All places',
        'filterSea': 'Sea',
        'filterCity': 'Cities',
        'filterNature': 'Nature',

        'destMeta1': 'SEA / RELAXATION',
        'destMeta2': 'CITY',
        'destMeta3': 'NATURE',
        'destMeta4': 'CITY / MOUNTAINS',
        'destMeta5': 'SEA / ISLAND',
        'destMeta6': 'NATURE',

        'destName1': 'Islands on pause',
        'destDesc1': 'Warm water, white sand and time that finally belongs to you.',
        'destName2': 'Where worlds meet',
        'destDesc2': 'Narrow streets, lively markets and tea overlooking the Bosphorus.',
        'destName3': 'Closer to silence',
        'destDesc3': 'Mountain roads, clear rivers and open spaces.',
        'destName4': 'The taste of long evenings',
        'destDesc4': 'Hospitality, old neighbourhoods and scenic roads.',
        'destName5': 'A different rhythm',
        'destDesc5': 'Green terraces, the ocean and slow mornings.',
        'destName6': 'Close to home',
        'destDesc6': 'Forest trails, lakes and fresh air for a weekend getaway.',

        'catalogFoot': 'HAVEN’T FOUND YOUR PLACE?',
        'catalogLink': 'Ask us about other options',

        'dealsEyebrow': 'IDEAS FOR INSPIRATION',
        'dealsTitle': 'Ideas for your <em>holiday.</em>',
        'dealsAside': 'A few destinations to get your planning started. The final price depends on travel dates and conditions.',
        'dealTag1': 'SEASIDE HOLIDAY',
        'dealTag2': 'CITY BREAK',
        'dealTag3': 'NATURE',
        'dealDesc1': 'A peaceful stay by the ocean and beautiful islands.',
        'dealDesc2': 'Architecture, walks and new flavours.',
        'dealDesc3': 'Mountains, lakes and outdoor routes.',
        'dealLink': 'Check details',
        'disclaimer': 'These are example destinations, not confirmed deals or fixed prices. Ask us for the current cost.',

        'finderEyebrow': 'NOT SURE WHERE TO START?',
        'finderTitle': 'A trip that fits<br><em>your pace.</em>',
        'finderDesc': 'Share a few details. Your request will arrive by email, and we can discuss suitable options.',
        'destinationLabel': 'Where would you like to go?',
        'peopleLabel': 'How many travellers?',
        'budgetLabel': 'Approximate budget',
        'datesLabel': 'When are you planning to travel?',
        'nameLabel': 'Your name',
        'contactLabel': 'Phone or email',
        'datesPlaceholder': 'For example, July or dates not decided yet',
        'namePlaceholder': 'What should we call you?',
        'contactPlaceholder': 'How can we contact you?',
        'submitFinder': 'Send trip details',
        'finderHint': 'Sending a request does not mean that a trip is booked.',

        'typesEyebrow': 'WHAT KIND OF HOLIDAY DO YOU PREFER?',
        'typesTitle': 'Choose your <em>travel style.</em>',
        'type1': 'By the sea',
        'typeDesc1': 'Beaches, islands and peaceful relaxation',
        'type2': 'In the city',
        'typeDesc2': 'Architecture, museums and walks',
        'type3': 'In nature',
        'typeDesc3': 'Mountains, lakes and fresh air',
        'type4': 'As a couple or family',
        'typeDesc4': 'A route designed for your group',

        'faqEyebrow': 'BEFORE YOUR TRIP',
        'faqTitle': 'Frequently asked <em>questions.</em>',
        'faqAside': 'Here are short answers to questions people often ask when planning a trip.',
        'faqQ1': 'How much does trip planning cost?',
        'faqA1': 'The price of a trip depends on the destination, dates, number of travellers and chosen conditions. Send us a request and we will discuss the options.',
        'faqQ2': 'Can you plan a trip for two or with children?',
        'faqA2': 'Yes. Tell us the number of travellers and your preferences in the form to help us find the right option.',
        'faqQ3': 'What is included in the trip price?',
        'faqA3': 'It depends on the offer. Before choosing, check flights, accommodation, meals, transfers and additional services separately.',
        'faqQ4': 'What if I have not chosen a destination yet?',
        'faqA4': 'That is perfectly fine. Tell us what kind of holiday you prefer and your approximate budget — we will start with a few ideas.',

        'reviewsEyebrow': 'TRUST MATTERS',
        'reviewsTitle': 'Travel stories<br><em>from real people.</em>',
        'reviewsDesc': 'This section will feature reviews from real customers, published with their permission. We do not publish made-up ratings or experiences.',
        'reviewsButton': 'Send an enquiry',
        'reviewsNote': 'Your review could become<br>part of this story.',

        'aboutEyebrow': 'MEET BLESK',
        'aboutTitle': 'We believe in journeys,<br>not just <em>tick boxes.</em>',
        'aboutText1': 'Blesk Travel Centre helps you discover interesting destinations and plan trips on a sensible budget. We believe memorable experiences do not have to cost a fortune.',
        'aboutText2': 'We can suggest where to start, compare options and help build a route around your preferences.',
        'aboutButton': 'Let’s get acquainted',
        'aboutCaption': 'GREAT STORIES BEGIN ON THE ROAD',
        'aboutSignature': 'More of the world — fewer doubts.',

        'valueTitle1': 'A sensible budget',
        'valueDesc1': 'We look for suitable options and avoid unnecessary extras.',
        'valueTitle2': 'Attention to detail',
        'valueDesc2': 'We take your preferences, dates and travel style into account.',
        'valueTitle3': 'Real experiences',
        'valueDesc3': 'We help you discover places worth telling others about.',

        'journalEyebrow': 'A LITTLE TRAVEL JOURNAL',
        'journalTitle': 'Thoughts for <em>the road.</em>',
        'journalAside': 'A few useful tips before packing your backpack and switching off notifications.',
        'journalTag1': 'PREPARATION · 4 MIN',
        'journalTag2': 'BUDGET · 3 MIN',
        'journalTag3': 'INSPIRATION · 5 MIN',
        'journalTitle1': 'How to plan your first independent trip',
        'journalTitle2': 'How to save money without spoiling your holiday',
        'journalTitle3': 'Why it is sometimes worth choosing an unfamiliar route',
        'journalLink': 'Discuss it with us',

        'contactEyebrow': 'YOUR STORY COULD BEGIN HERE',
        'contactTitle': 'Where would you<br><em>like to escape?</em>',
        'contactDesc': 'Tell us about the trip you have in mind. Together, we will find an option that suits you.',
        'contactNote': 'WE WILL REPLY AND HELP YOU TAKE THE FIRST STEPS',
        'contactNameLabel': 'What should we call you?',
        'contactNamePlaceholder': 'Your name',
        'contactContactLabel': 'Where can we write or call you?',
        'contactContactPlaceholder': 'Phone or email',
        'messageLabel': 'What kind of trip are you dreaming of?',
        'messagePlaceholder': 'For example: a week by the sea in July...',
        'submit': 'Send request',
        'formHint': 'By clicking the button, you agree to the processing of your data so we can respond to your enquiry.',

        'footerText': 'Travel boldly.<br>We will discuss the rest.',
        'footerNav1': 'Destinations',
        'footerNav2': 'About us',
        'footerNav3': 'Journal',
        'footerNav4': 'Contacts',
        'footerBottom1': 'BLESK TRAVEL CENTRE',
        'footerBottom2': 'BACK TO TOP ↑',
        'footerBottom3': 'MADE WITH CURIOSITY'
    },

    zh: {
        'topline1': '布列斯克旅行中心',
        'topline2': '值得珍藏的旅行路线',

        'menu': '菜单与设置',
        'language': '网站语言',
        'deals': '旅行灵感',
        'finder': '定制旅行',
        'types': '旅行方式',
        'faq': '常见问题',
        'reviews': '客户评价',
        'allDirections': '所有目的地',
        'contactsMenu': '联系方式',

        'nav1': '目的地',
        'nav2': '关于我们',
        'nav3': '旅行日志',
        'nav4': '联系我们',

        'heroEyebrow': '不要等待所谓的完美时刻',
        'heroTitle': '世界比你想象的<br>更加广阔<span>。</span>',
        'heroLead': '探索特别的地方，结识新朋友，收获照片无法记录的体验。我们帮助你合理规划旅行，避免不必要的开支。',
        'heroButton': '选择目的地',
        'heroAbout': '了解我们',
        'heroNote': '勇敢去旅行。<br>理性做计划。',
        'photoLabel1': '01 / 美好体验',
        'photoLabel2': '探索新的世界',
        'stamp1': '你的下一次',
        'stamp2': '冒险之旅',
        'stamp3': '已经不远 ✳',
        'heroBottom1': '只带上你的好奇心',
        'heroBottom2': '↓ 向下滚动',

        'intro1': '旅行并不是奢侈品',
        'intro2': '旅行让我们看见、感受并理解更多。',

        'destEyebrow': '我们去哪里？',
        'destTitle': '选择你的<br><em>远方。</em>',
        'destAside': '这里收集了一些旅行灵感，适合想要改变日常路线的人。这只是开始，我们会根据你的需求寻找合适的目的地。',
        'filterAll': '全部地点',
        'filterSea': '海滨',
        'filterCity': '城市',
        'filterNature': '自然',

        'destMeta1': '海滨 / 休闲',
        'destMeta2': '城市',
        'destMeta3': '自然',
        'destMeta4': '城市 / 山脉',
        'destMeta5': '海滨 / 岛屿',
        'destMeta6': '自然',

        'destName1': '让时间停留在岛上',
        'destDesc1': '温暖的海水、洁白的沙滩，以及真正属于自己的时间。',
        'destName2': '世界交汇之处',
        'destDesc2': '狭窄的街道、热闹的集市，以及博斯普鲁斯海峡旁的茶。',
        'destName3': '靠近宁静',
        'destDesc3': '山间公路、清澈的河流和开阔的风景。',
        'destName4': '漫长夜晚的味道',
        'destDesc4': '热情好客的当地人、古老街区和美丽的道路。',
        'destName5': '不同的生活节奏',
        'destDesc5': '绿色梯田、海洋和悠闲的清晨。',
        'destName6': '离家不远',
        'destDesc6': '森林小径、湖泊和适合周末的清新空气。',

        'catalogFoot': '还没有找到喜欢的地方？',
        'catalogLink': '了解其他旅行选择',

        'dealsEyebrow': '旅行灵感精选',
        'dealsTitle': '假期的 <em>旅行灵感。</em>',
        'dealsAside': '从这些目的地开始计划旅行。最终价格取决于出行日期和具体条件。',
        'dealTag1': '海滨度假',
        'dealTag2': '城市旅行',
        'dealTag3': '自然风光',
        'dealDesc1': '在海边享受宁静时光，探索美丽的岛屿。',
        'dealDesc2': '欣赏建筑、散步并体验新的美食。',
        'dealDesc3': '山脉、湖泊和户外路线。',
        'dealLink': '了解详情',
        'disclaimer': '这些是目的地示例，并非已确认的优惠或固定价格。实际费用请向我们咨询。',

        'finderEyebrow': '不知道从哪里开始？',
        'finderTitle': '为你寻找合适的<br><em>旅行节奏。</em>',
        'finderDesc': '填写几个简单的信息，申请将发送到我们的邮箱，我们会与你讨论合适的旅行方案。',
        'destinationLabel': '你想去哪里？',
        'peopleLabel': '有几位旅行者？',
        'budgetLabel': '大概预算',
        'datesLabel': '计划什么时候出行？',
        'nameLabel': '你的姓名',
        'contactLabel': '电话或电子邮箱',
        'datesPlaceholder': '例如：七月，或日期尚未确定',
        'namePlaceholder': '我们该如何称呼你？',
        'contactPlaceholder': '如何联系你？',
        'submitFinder': '提交旅行信息',
        'finderHint': '提交申请并不代表已经预订旅行。',

        'typesEyebrow': '你喜欢哪种旅行？',
        'typesTitle': '选择你的 <em>旅行方式。</em>',
        'type1': '海滨度假',
        'typeDesc1': '沙滩、岛屿和轻松的休闲时光',
        'type2': '城市旅行',
        'typeDesc2': '建筑、博物馆和城市漫步',
        'type3': '亲近自然',
        'typeDesc3': '山脉、湖泊和清新的空气',
        'type4': '双人或家庭旅行',
        'typeDesc4': '为你的同行伙伴设计路线',

        'faqEyebrow': '出发之前',
        'faqTitle': '常见 <em>问题。</em>',
        'faqAside': '简要回答旅行计划中经常遇到的问题。',
        'faqQ1': '旅行规划需要多少钱？',
        'faqA1': '旅行费用取决于目的地、日期、旅行人数和所选择的条件。提交申请后，我们可以一起讨论不同方案。',
        'faqQ2': '可以为两个人或带孩子的家庭规划旅行吗？',
        'faqA2': '当然可以。请在表格中填写旅行人数和你的需求，这有助于我们找到合适的方案。',
        'faqQ3': '旅行费用包含哪些内容？',
        'faqA3': '具体内容取决于旅行方案。选择之前，请分别确认机票、住宿、餐饮、接送和其他附加服务。',
        'faqQ4': '如果我还没有决定目的地怎么办？',
        'faqA4': '完全没问题。你可以告诉我们喜欢的旅行方式和大概预算，我们会先提供几个想法。',

        'reviewsEyebrow': '信任很重要',
        'reviewsTitle': '来自真实旅行者的<br><em>旅行故事。</em>',
        'reviewsDesc': '这里将展示真实客户授权发布的评价。我们不会发布虚构的评分或旅行体验。',
        'reviewsButton': '提交咨询',
        'reviewsNote': '你的评价也可以成为<br>这个故事的一部分。',

        'aboutEyebrow': '认识「布列斯克」',
        'aboutTitle': '我们关注真正的旅行，<br>而不是简单的 <em>打卡。</em>',
        'aboutText1': '「布列斯克旅行中心」帮助你寻找有趣的目的地，并合理规划旅行预算。我们相信，难忘的体验不一定需要花费很多钱。',
        'aboutText2': '我们会告诉你如何开始、比较不同方案，并根据你的愿望规划路线。',
        'aboutButton': '认识我们',
        'aboutCaption': '美好的故事从旅途开始',
        'aboutSignature': '看见更大的世界，减少犹豫。',

        'valueTitle1': '合理的预算',
        'valueDesc1': '寻找合适的方案，不推荐不必要的额外服务。',
        'valueTitle2': '关注细节',
        'valueDesc2': '考虑你的需求、日期和旅行方式。',
        'valueTitle3': '真实的体验',
        'valueDesc3': '帮助你发现值得与别人分享的地方。',

        'journalEyebrow': '旅行小日志',
        'journalTitle': '旅途中的 <em>想法。</em>',
        'journalAside': '收拾背包、关闭通知之前，先看看这些实用的小建议。',
        'journalTag1': '行前准备 · 4 分钟',
        'journalTag2': '预算 · 3 分钟',
        'journalTag3': '灵感 · 5 分钟',
        'journalTitle1': '如何规划第一次独立旅行',
        'journalTitle2': '如何节省开支而不影响旅行体验',
        'journalTitle3': '为什么有时值得选择一条陌生的路线',
        'journalLink': '与我们讨论',

        'contactEyebrow': '你的旅行故事可以从这里开始',
        'contactTitle': '你想去哪里<br><em>放松一下？</em>',
        'contactDesc': '告诉我们你正在考虑怎样的旅行。我们会一起寻找合适的方案。',
        'contactNote': '我们会回复你，并帮助你迈出第一步',
        'contactNameLabel': '我们该如何称呼你？',
        'contactNamePlaceholder': '你的姓名',
        'contactContactLabel': '我们如何联系你？',
        'contactContactPlaceholder': '电话或电子邮箱',
        'messageLabel': '你梦想中的旅行是什么样的？',
        'messagePlaceholder': '例如：七月去海边，旅行一周……',
        'submit': '提交申请',
        'formHint': '点击按钮即表示你同意我们处理相关信息，以便回复你的咨询。',

        'footerText': '勇敢去旅行。<br>其他事情我们一起讨论。',
        'footerNav1': '目的地',
        'footerNav2': '关于我们',
        'footerNav3': '旅行日志',
        'footerNav4': '联系方式',
        'footerBottom1': '布列斯克旅行中心',
        'footerBottom2': '返回顶部 ↑',
        'footerBottom3': '带着好奇心制作'
    }
};

// ==========================================
// ВАРИАНТЫ ВЫПАДАЮЩИХ СПИСКОВ
// ==========================================

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
// ПРИВЯЗКА ПЕРЕВОДОВ К HTML
// ==========================================

const languageSelect = document.getElementById('languageSelect');

const translationTargets = {
    'topline span:nth-child(1)': 'topline1',
    'topline span:nth-child(2)': 'topline2',

    '.settings-top strong': 'menu',
    '.language-label': 'language',

    '.settings-links a:nth-child(1)': 'deals',
    '.settings-links a:nth-child(2)': 'finder',
    '.settings-links a:nth-child(3)': 'types',
    '.settings-links a:nth-child(4)': 'faq',
    '.settings-links a:nth-child(5)': 'reviews',
    '.settings-links a:nth-child(6)': 'allDirections',
    '.settings-links a:nth-child(9)': 'contactsMenu',

    '.main-nav a:nth-child(1)': 'nav1',
    '.main-nav a:nth-child(2)': 'nav2',
    '.main-nav a:nth-child(3)': 'nav3',
    '.main-nav .nav-contact': 'nav4',

    '.hero-copy .eyebrow': 'heroEyebrow',
    '.hero-copy h1': 'heroTitle',
    '.hero-lead': 'heroLead',
    '.hero-actions .button': 'heroButton',
    '.hero-actions .text-link': 'heroAbout',
    '.hero-note span:nth-child(2)': 'heroNote',

    '.photo-label span:nth-child(1)': 'photoLabel1',
    '.photo-label span:nth-child(2)': 'photoLabel2',
    '.round-stamp span:nth-child(1)': 'stamp1',
    '.round-stamp b': 'stamp2',
    '.round-stamp span:nth-child(3)': 'stamp3',
    '.hero-bottom span:nth-child(1)': 'heroBottom1',
    '.hero-bottom span:nth-child(2)': 'heroBottom2',

    '.intro-strip p:nth-child(1)': 'intro1',
    '.intro-strip p:nth-child(2)': 'intro2',

    '#destinations .section-heading .eyebrow': 'destEyebrow',
    '#destinations .section-heading h2': 'destTitle',
    '#destinations .heading-aside': 'destAside',

    '.filter[data-filter="all"]': 'filterAll',
    '.filter[data-filter="sea"]': 'filterSea',
    '.filter[data-filter="city"]': 'filterCity',
    '.filter[data-filter="nature"]': 'filterNature',

    '.destination-card:nth-child(1) .destination-meta span:nth-child(2)': 'destMeta1',
    '.destination-card:nth-child(2) .destination-meta span:nth-child(2)': 'destMeta2',
    '.destination-card:nth-child(3) .destination-meta span:nth-child(2)': 'destMeta3',
    '.destination-card:nth-child(4) .destination-meta span:nth-child(2)': 'destMeta4',
    '.destination-card:nth-child(5) .destination-meta span:nth-child(2)': 'destMeta5',
    '.destination-card:nth-child(6) .destination-meta span:nth-child(2)': 'destMeta6',

    '.destination-card:nth-child(1) h3': 'destName1',
    '.destination-card:nth-child(1) > p': 'destDesc1',
    '.destination-card:nth-child(2) h3': 'destName2',
    '.destination-card:nth-child(2) > p': 'destDesc2',
    '.destination-card:nth-child(3) h3': 'destName3',
    '.destination-card:nth-child(3) > p': 'destDesc3',
    '.destination-card:nth-child(4) h3': 'destName4',
    '.destination-card:nth-child(4) > p': 'destDesc4',
    '.destination-card:nth-child(5) h3': 'destName5',
    '.destination-card:nth-child(5) > p': 'destDesc5',
    '.destination-card:nth-child(6) h3': 'destName6',
    '.destination-card:nth-child(6) > p': 'destDesc6',

    '.catalog-foot > span': 'catalogFoot',
    '.catalog-foot .text-link': 'catalogLink',

    '#deals .eyebrow': 'dealsEyebrow',
    '#deals h2': 'dealsTitle',
    '#deals .heading-aside': 'dealsAside',

    '.deal-card:nth-child(1) .deal-tag': 'dealTag1',
    '.deal-card:nth-child(2) .deal-tag': 'dealTag2',
    '.deal-card:nth-child(3) .deal-tag': 'dealTag3',
    '.deal-card:nth-child(1) p': 'dealDesc1',
    '.deal-card:nth-child(2) p': 'dealDesc2',
    '.deal-card:nth-child(3) p': 'dealDesc3',
    '.deal-card:nth-child(1) .text-link': 'dealLink',
    '.deal-card:nth-child(2) .text-link': 'dealLink',
    '.deal-card:nth-child(3) .text-link': 'dealLink',
    '.section-disclaimer': 'disclaimer',

    '#tourFinder .eyebrow': 'finderEyebrow',
    '#tourFinder h2': 'finderTitle',
    '.tour-finder-copy > p:not(.eyebrow)': 'finderDesc',

    'label[for="tourDestination"]': 'destinationLabel',
    'label[for="tourPeople"]': 'peopleLabel',
    'label[for="tourBudget"]': 'budgetLabel',
    'label[for="tourDates"]': 'datesLabel',
    'label[for="tourName"]': 'nameLabel',
    'label[for="tourContact"]': 'contactLabel',

    '#tourFinderForm button': 'submitFinder',
    '#finderHint': 'finderHint',

    '#travelTypes .eyebrow': 'typesEyebrow',
    '#travelTypes h2': 'typesTitle',

    '.travel-type-grid a:nth-child(1) b': 'type1',
    '.travel-type-grid a:nth-child(1) small': 'typeDesc1',
    '.travel-type-grid a:nth-child(2) b': 'type2',
    '.travel-type-grid a:nth-child(2) small': 'typeDesc2',
    '.travel-type-grid a:nth-child(3) b': 'type3',
    '.travel-type-grid a:nth-child(3) small': 'typeDesc3',
    '.travel-type-grid a:nth-child(4) b': 'type4',
    '.travel-type-grid a:nth-child(4) small': 'typeDesc4',

    '#faq .eyebrow': 'faqEyebrow',
    '#faq h2': 'faqTitle',
    '#faq .heading-aside': 'faqAside',

    '.faq-list details:nth-child(1) summary': 'faqQ1',
    '.faq-list details:nth-child(1) > p': 'faqA1',
    '.faq-list details:nth-child(2) summary': 'faqQ2',
    '.faq-list details:nth-child(2) > p': 'faqA2',
    '.faq-list details:nth-child(3) summary': 'faqQ3',
    '.faq-list details:nth-child(3) > p': 'faqA3',
    '.faq-list details:nth-child(4) summary': 'faqQ4',
    '.faq-list details:nth-child(4) > p': 'faqA4',

    '#reviews .eyebrow': 'reviewsEyebrow',
    '#reviews h2': 'reviewsTitle',
    '#reviews > div:first-child > p:not(.eyebrow)': 'reviewsDesc',
    '#reviews .button': 'reviewsButton',
    '.reviews-note b': 'reviewsNote',

    '#about .eyebrow': 'aboutEyebrow',
    '#about h2': 'aboutTitle',
    '#about .about-text:nth-of-type(1)': 'aboutText1',
    '#about .about-text:nth-of-type(2)': 'aboutText2',
    '#about .button': 'aboutButton',
    '.about-image-caption': 'aboutCaption',
    '.about-signature': 'aboutSignature',

    '.value-item:nth-child(1) h3': 'valueTitle1',
    '.value-item:nth-child(1) p': 'valueDesc1',
    '.value-item:nth-child(2) h3': 'valueTitle2',
    '.value-item:nth-child(2) p': 'valueDesc2',
    '.value-item:nth-child(3) h3': 'valueTitle3',
    '.value-item:nth-child(3) p': 'valueDesc3',

    '#journal .eyebrow': 'journalEyebrow',
    '#journal h2': 'journalTitle',
    '#journal .heading-aside': 'journalAside',

    '.journal-card:nth-child(1) .journal-info > span': 'journalTag1',
    '.journal-card:nth-child(2) .journal-info > span': 'journalTag2',
    '.journal-card:nth-child(3) .journal-info > span': 'journalTag3',
    '.journal-card:nth-child(1) h3': 'journalTitle1',
    '.journal-card:nth-child(2) h3': 'journalTitle2',
    '.journal-card:nth-child(3) h3': 'journalTitle3',
    '.journal-card:nth-child(1) .journal-info > a': 'journalLink',
    '.journal-card:nth-child(2) .journal-info > a': 'journalLink',
    '.journal-card:nth-child(3) .journal-info > a': 'journalLink',

    '#contacts .eyebrow': 'contactEyebrow',
    '#contacts h2': 'contactTitle',
    '.contact-left > p:not(.eyebrow)': 'contactDesc',
    '.contact-note': 'contactNote',

    'label[for="name"]': 'contactNameLabel',
    'label[for="contact"]': 'contactContactLabel',
    'label[for="message"]': 'messageLabel',

    '#contactForm button': 'submit',
    '#formHint': 'formHint',

    '.footer > p': 'footerText',
    '.footer-links a:nth-child(1)': 'footerNav1',
    '.footer-links a:nth-child(2)': 'footerNav2',
    '.footer-links a:nth-child(3)': 'footerNav3',
    '.footer-links a:nth-child(4)': 'footerNav4',
    '.footer-bottom span:nth-child(2)': 'footerBottom1',
    '.footer-bottom a': 'footerBottom2',
    '.footer-bottom span:nth-child(3)': 'footerBottom3'
};

// Сохраняем исходный HTML, чтобы не терять стрелки,
// иконки и другие вложенные элементы при переключении.

const originalHTML = new Map();

function rememberOriginalHTML() {
    Object.keys(translationTargets).forEach(selector => {
        document.querySelectorAll(selector).forEach(node => {
            if (!originalHTML.has(node)) {
                originalHTML.set(node, node.innerHTML);
            }
        });
    });
}

rememberOriginalHTML();

// ==========================================
// ПЕРЕВОД ВЫПАДАЮЩИХ СПИСКОВ
// ==========================================

function rememberOptions() {
    document.querySelectorAll('select option').forEach(option => {
        if (!option.dataset.originalText) {
            option.dataset.originalText = option.textContent;
        }
    });
}

function translateOptions(lang) {
    rememberOptions();

    const dictionary = optionTranslations[lang] || {};

    document.querySelectorAll('select option').forEach(option => {
        const original = option.dataset.originalText;
        option.textContent = dictionary[original] || original;
    });
}

// ==========================================
// ПЕРЕВОД ФИЛЬТРОВ
// ==========================================

function rememberFilters() {
    document.querySelectorAll('.filter').forEach(button => {
        if (!button.dataset.originalHTML) {
            button.dataset.originalHTML = button.innerHTML;
        }

        if (!button.dataset.originalText) {
            const textNode = [...button.childNodes].find(
                node => node.nodeType === Node.TEXT_NODE &&
                    node.textContent.trim()
            );

            button.dataset.originalText = textNode
                ? textNode.textContent.trim()
                : '';
        }
    });
}

function translateFilters(lang) {
    rememberFilters();

    const dictionary = filterTranslations[lang] || {};

    document.querySelectorAll('.filter').forEach(button => {
        const original = button.dataset.originalText;
        const translated = dictionary[original] || original;

        const textNode = [...button.childNodes].find(
            node => node.nodeType === Node.TEXT_NODE &&
                node.textContent.trim()
        );

        if (textNode) {
            textNode.textContent = translated + ' ';
        }
    });
}

// ==========================================
// PLACEHOLDER
// ==========================================

const placeholders = {
    ru: {
        tourDates: 'Например, июль или даты пока неизвестны',
        tourName: 'Как к тебе обращаться?',
        tourContact: 'Как с тобой связаться?',
        name: 'Твоё имя',
        contact: 'Телефон или почта',
        message: 'Например: море в июле, на неделю...'
    },
    en: {
        tourDates: 'For example, July or dates not decided yet',
        tourName: 'What should we call you?',
        tourContact: 'How can we contact you?',
        name: 'Your name',
        contact: 'Phone or email',
        message: 'For example: a week by the sea in July...'
    },
    zh: {
        tourDates: '例如：七月，或日期尚未确定',
        tourName: '我们该如何称呼你？',
        tourContact: '如何联系你？',
        name: '你的姓名',
        contact: '电话或电子邮箱',
        message: '例如：七月去海边，旅行一周……'
    }
};

function translatePlaceholders(lang) {
    const dictionary = placeholders[lang] || placeholders.ru;

    const fields = {
        tourDates: document.getElementById('tourDates'),
        tourName: document.getElementById('tourName'),
        tourContact: document.getElementById('tourContact'),
        name: document.getElementById('name'),
        contact: document.getElementById('contact'),
        message: document.getElementById('message')
    };

    Object.entries(fields).forEach(([key, node]) => {
        if (node && dictionary[key]) {
            node.placeholder = dictionary[key];
        }
    });
}

// ==========================================
// ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
// ==========================================

const pageTitles = {
    ru: 'Центр Блеск — путешествия ближе, чем кажется',
    en: 'Blesk Travel Centre — journeys closer than you think',
    zh: '布列斯克旅行中心 — 旅行比想象更近'
};

const pageDescriptions = {
    ru: 'Центр Блеск — путешествия, которые запоминаются. Подбираем необычные направления по доступным ценам.',
    en: 'Blesk Travel Centre — memorable journeys. We help you find unusual destinations at reasonable prices.',
    zh: '布列斯克旅行中心 — 难忘的旅行体验。为你寻找价格合理的特色目的地。'
};

function applyLanguage(lang) {
    if (!translations[lang]) {
        lang = 'ru';
    }

    const dictionary = translations[lang];

    document.documentElement.lang =
        lang === 'zh' ? 'zh-CN' : lang;

    // Переводим основные элементы.
    Object.entries(translationTargets).forEach(([selector, key]) => {
        const nodes = document.querySelectorAll(selector);

        nodes.forEach(node => {
            const value = dictionary[key];

            if (value === undefined) return;

            // Восстанавливаем исходную разметку перед переводом.
            if (!originalHTML.has(node)) {
                originalHTML.set(node, node.innerHTML);
            }

            // Сохраняем стрелки в кнопках и ссылках.
            if (
                node.matches('.button, .nav-contact, .text-link') &&
                originalHTML.get(node).includes('<span')
            ) {
                const arrow = node.querySelector('span');

                if (arrow) {
                    node.innerHTML = `${value} <span>${arrow.textContent}</span>`;
                } else {
                    node.innerHTML = value;
                }
            } else if (
                node.matches('.filter') ||
                node.matches('.faq-list summary') ||
                node.matches('.about-signature') ||
                node.matches('.contact-note')
            ) {
                // Эти элементы имеют вложенные декоративные элементы.
                const original = originalHTML.get(node);
                const temp = document.createElement('div');
                temp.innerHTML = original;

                const textNode = [...temp.childNodes].find(
                    child => child.nodeType === Node.TEXT_NODE &&
                        child.textContent.trim()
                );

                if (textNode) {
                    textNode.textContent = value + ' ';
                    node.innerHTML = temp.innerHTML;
                } else {
                    node.innerHTML = value;
                }
            } else {
                node.innerHTML = value;
            }
        });
    });

    translateOptions(lang);
    translateFilters(lang);
    translatePlaceholders(lang);

    // Заголовок и описание страницы.
    document.title = pageTitles[lang];

    const description = document.querySelector('meta[name="description"]');

    if (description) {
        description.setAttribute('content', pageDescriptions[lang]);
    }

    // Подписи доступности.
    if (menuToggle) {
        const labels = {
            ru: 'Открыть настройки и меню',
            en: 'Open menu and settings',
            zh: '打开菜单与设置'
        };

        menuToggle.setAttribute('aria-label', labels[lang]);
    }

    if (closeSettings) {
        const labels = {
            ru: 'Закрыть меню',
            en: 'Close menu',
            zh: '关闭菜单'
        };

        closeSettings.setAttribute('aria-label', labels[lang]);
    }

    // Сохраняем выбранный язык.
    try {
        localStorage.setItem('centerBleskLanguage', lang);
    } catch (_) {
        // Хранилище может быть недоступно.
    }
}

// ==========================================
// ВОССТАНОВЛЕНИЕ ЯЗЫКА
// ==========================================

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

// ==========================================
// СООБЩЕНИЯ ФОРМ НА ТРЁХ ЯЗЫКАХ
// ==========================================

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

// ==========================================
// ОТПРАВКА ЗАЯВКИ
// ==========================================

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
        ? button.innerHTML
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
            statusNode.textContent = currentMessages().success;
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
            button.innerHTML = originalText;
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
    const lang = languageSelect?.value || 'ru';

    const finderMessages = {
        ru: {
            title: 'Заявка на подбор тура:',
            destination: 'Направление:',
            people: 'Путешественники:',
            budget: 'Бюджет:',
            dates: 'Даты:',
            noDates: 'Не указаны'
        },
        en: {
            title: 'Trip planning request:',
            destination: 'Destination:',
            people: 'Travellers:',
            budget: 'Budget:',
            dates: 'Dates:',
            noDates: 'Not specified'
        },
        zh: {
            title: '旅行规划申请：',
            destination: '目的地：',
            people: '旅行人数：',
            budget: '预算：',
            dates: '日期：',
            noDates: '未填写'
        }
    };

    const labels = finderMessages[lang] || finderMessages.ru;

    const message = [
        labels.title,
        `${labels.destination} ${data.get('destination')}`,
        `${labels.people} ${data.get('people')}`,
        `${labels.budget} ${data.get('budget')}`,
        `${labels.dates} ${data.get('dates') || labels.noDates}`
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
