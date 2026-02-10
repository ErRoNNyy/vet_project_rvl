import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  kz: {
    nav: {
      home: 'Басты бет',
      about: 'Біз туралы',
      structure: 'Құрылым',
      services: 'Қызметтер',
      training: 'Оқу-әдістемелік орталық',
      documents: 'Құжаттар',
      anticorruption: 'Сыбайлас жемқорлыққа қарсы',
      news: 'Жаңалықтар',
      contacts: 'Байланыс',
      proposals: 'Ұсыныстар',
    },
    hero: {
      title: 'Республикалық ветеринариялық зертхана',
      subtitle: 'Қазақстан Республикасының ветеринариялық диагностика және сараптама саласындағы жетекші мекемесі',
      cta: 'Көбірек білу',
      contact: 'Бізбен байланысу',
    },
    about: {
      title: 'Зертхана туралы',
      description: 'Республикалық ветеринариялық зертхана – Қазақстан Республикасының ветеринариялық диагностика, сараптама және зерттеу саласындағы жетекші мемлекеттік мекеме.',
      mission: 'Біздің миссиямыз',
      missionText: 'Жануарлар денсаулығын қорғау және азық-түлік қауіпсіздігін қамтамасыз ету арқылы халықтың денсаулығын сақтау.',
      vision: 'Біздің көзқарасымыз',
      visionText: 'Халықаралық стандарттарға сай заманауи зертханалық қызметтер көрсету.',
      values: 'Біздің құндылықтарымыз',
      valuesText: 'Дәлдік, сапа, адалдық және кәсіпқойлық.',
    },
    services: {
      title: 'Біздің қызметтер',
      subtitle: 'Біз ұсынатын қызметтер спектрі',
      diagnostic: 'Диагностикалық зерттеулер',
      diagnosticDesc: 'Жануарлар ауруларын анықтауға арналған заманауи зертханалық диагностика.',
      expertise: 'Ветеринариялық сараптама',
      expertiseDesc: 'Азық-түлік өнімдерінің сапасы мен қауіпсіздігін бағалау.',
      research: 'Ғылыми зерттеулер',
      researchDesc: 'Ветеринария саласындағы инновациялық зерттеулер мен әзірлемелер.',
      consultation: 'Консультациялық қызметтер',
      consultationDesc: 'Ветеринария мәселелері бойынша кәсіби кеңес беру.',
    },
    news: {
      title: 'Жаңалықтар',
      subtitle: 'Соңғы жаңалықтар мен оқиғалар',
      readMore: 'Толығырақ',
      allNews: 'Барлық жаңалықтар',
    },
    contact: {
      title: 'Байланыс',
      subtitle: 'Бізбен байланысыңыз',
      address: 'Мекенжай',
      phone: 'Телефон',
      email: 'Электрондық пошта',
      workHours: 'Жұмыс уақыты',
      workHoursValue: 'Дс-Жм: 09:00 - 18:00',
      form: {
        name: 'Аты-жөніңіз',
        email: 'Email',
        subject: 'Тақырып',
        message: 'Хабарлама',
        send: 'Жіберу',
      },
    },
    footer: {
      rights: 'Барлық құқықтар қорғалған',
      privacy: 'Құпиялылық саясаты',
      terms: 'Пайдалану шарттары',
      sitemap: 'Сайт картасы',
      quickLinks: 'Жылдам сілтемелер',
      usefulLinks: 'Пайдалы сілтемелер',
      followUs: 'Бізді қадағалаңыз',
    },
    common: {
      learnMore: 'Көбірек білу',
      viewAll: 'Барлығын көру',
      search: 'Іздеу',
      loading: 'Жүктелуде...',
    },
    structure: {
      title: 'Ұйымдық құрылым',
      subtitle: 'Зертхананың басқару құрылымы',
      leadership: 'Басшылық',
      departments: 'Бөлімдер',
    },
    training: {
      title: 'Оқу-әдістемелік орталық',
      subtitle: 'Кәсіби даму және біліктілікті арттыру',
      courses: 'Курстар',
      programs: 'Бағдарламалар',
    },
    documents: {
      title: 'Құжаттар және нормативтік актілер',
      subtitle: 'Ресми құжаттар мен заңнамалар',
      laws: 'Заңдар',
      regulations: 'Ережелер',
      standards: 'Стандарттар',
    },
    anticorruption: {
      title: 'Сыбайлас жемқорлыққа қарсы іс-шаралар',
      subtitle: 'Ашықтық және жауапкершілік',
      hotline: 'Сенім телефоны',
      report: 'Хабарлау',
    },
    proposals: {
      title: 'Ұсыныстар',
      subtitle: 'Сайтты жақсарту бойынша ұсыныстар',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'О нас',
      structure: 'Структура',
      services: 'Услуги',
      training: 'Учебно-методический центр',
      documents: 'Документы',
      anticorruption: 'Антикоррупция',
      news: 'Новости',
      contacts: 'Контакты',
      proposals: 'Предложения',
    },
    hero: {
      title: 'Республиканская ветеринарная лаборатория',
      subtitle: 'Ведущее учреждение в области ветеринарной диагностики и экспертизы Республики Казахстан',
      cta: 'Узнать больше',
      contact: 'Связаться с нами',
    },
    about: {
      title: 'О лаборатории',
      description: 'Республиканская ветеринарная лаборатория – ведущее государственное учреждение Республики Казахстан в области ветеринарной диагностики, экспертизы и исследований.',
      mission: 'Наша миссия',
      missionText: 'Охрана здоровья населения путем защиты здоровья животных и обеспечения продовольственной безопасности.',
      vision: 'Наше видение',
      visionText: 'Предоставление современных лабораторных услуг, соответствующих международным стандартам.',
      values: 'Наши ценности',
      valuesText: 'Точность, качество, честность и профессионализм.',
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Спектр предоставляемых нами услуг',
      diagnostic: 'Диагностические исследования',
      diagnosticDesc: 'Современная лабораторная диагностика для выявления заболеваний животных.',
      expertise: 'Ветеринарная экспертиза',
      expertiseDesc: 'Оценка качества и безопасности продовольственных продуктов.',
      research: 'Научные исследования',
      researchDesc: 'Инновационные исследования и разработки в области ветеринарии.',
      consultation: 'Консультационные услуги',
      consultationDesc: 'Профессиональные консультации по вопросам ветеринарии.',
    },
    news: {
      title: 'Новости',
      subtitle: 'Последние новости и события',
      readMore: 'Подробнее',
      allNews: 'Все новости',
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Свяжитесь с нами',
      address: 'Адрес',
      phone: 'Телефон',
      email: 'Электронная почта',
      workHours: 'Режим работы',
      workHoursValue: 'Пн-Пт: 09:00 - 18:00',
      form: {
        name: 'Ваше имя',
        email: 'Email',
        subject: 'Тема',
        message: 'Сообщение',
        send: 'Отправить',
      },
    },
    footer: {
      rights: 'Все права защищены',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      sitemap: 'Карта сайта',
      quickLinks: 'Быстрые ссылки',
      usefulLinks: 'Полезные ссылки',
      followUs: 'Следите за нами',
    },
    common: {
      learnMore: 'Узнать больше',
      viewAll: 'Смотреть все',
      search: 'Поиск',
      loading: 'Загрузка...',
    },
    structure: {
      title: 'Организационная структура',
      subtitle: 'Структура управления лабораторией',
      leadership: 'Руководство',
      departments: 'Отделы',
    },
    training: {
      title: 'Учебно-методический центр',
      subtitle: 'Профессиональное развитие и повышение квалификации',
      courses: 'Курсы',
      programs: 'Программы',
    },
    documents: {
      title: 'Документы и нормативные акты',
      subtitle: 'Официальные документы и законодательство',
      laws: 'Законы',
      regulations: 'Положения',
      standards: 'Стандарты',
    },
    anticorruption: {
      title: 'Противодействие коррупции',
      subtitle: 'Открытость и ответственность',
      hotline: 'Телефон доверия',
      report: 'Сообщить',
    },
    proposals: {
      title: 'Предложения',
      subtitle: 'Предложения по улучшению сайта',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      structure: 'Structure',
      services: 'Services',
      training: 'Training Center',
      documents: 'Documents',
      anticorruption: 'Anti-corruption',
      news: 'News',
      contacts: 'Contacts',
      proposals: 'Proposals',
    },
    // Hero Section
    hero: {
      title: 'Republican Veterinary Laboratory',
      subtitle: 'Leading institution in veterinary diagnostics and expertise of the Republic of Kazakhstan',
      cta: 'Learn More',
      contact: 'Contact Us',
    },
    // About Section
    about: {
      title: 'About the Laboratory',
      description: 'The Republican Veterinary Laboratory is the leading state institution of the Republic of Kazakhstan in the field of veterinary diagnostics, expertise, and research.',
      mission: 'Our Mission',
      missionText: 'Protecting public health through animal health protection and food safety assurance.',
      vision: 'Our Vision',
      visionText: 'Providing modern laboratory services that meet international standards.',
      values: 'Our Values',
      valuesText: 'Accuracy, quality, integrity, and professionalism.',
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Range of services we provide',
      diagnostic: 'Diagnostic Research',
      diagnosticDesc: 'Modern laboratory diagnostics for detecting animal diseases.',
      expertise: 'Veterinary Expertise',
      expertiseDesc: 'Assessment of quality and safety of food products.',
      research: 'Scientific Research',
      researchDesc: 'Innovative research and development in veterinary science.',
      consultation: 'Consultation Services',
      consultationDesc: 'Professional advice on veterinary matters.',
    },
    // News Section
    news: {
      title: 'News',
      subtitle: 'Latest news and events',
      readMore: 'Read More',
      allNews: 'All News',
    },
    // Contact Section
    contact: {
      title: 'Contacts',
      subtitle: 'Get in touch with us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      workHours: 'Working Hours',
      workHoursValue: 'Mon-Fri: 09:00 - 18:00',
      form: {
        name: 'Your Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
      },
    },
    // Footer
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      sitemap: 'Site Map',
      quickLinks: 'Quick Links',
      usefulLinks: 'Useful Links',
      followUs: 'Follow Us',
    },
    // Common
    common: {
      learnMore: 'Learn More',
      viewAll: 'View All',
      search: 'Search',
      loading: 'Loading...',
    },
    // Structure Page
    structure: {
      title: 'Organizational Structure',
      subtitle: 'Laboratory management structure',
      leadership: 'Leadership',
      departments: 'Departments',
    },
    // Training Center
    training: {
      title: 'Training and Methodology Center',
      subtitle: 'Professional development and advanced training',
      courses: 'Courses',
      programs: 'Programs',
    },
    // Documents
    documents: {
      title: 'Documents and Regulations',
      subtitle: 'Official documents and legislation',
      laws: 'Laws',
      regulations: 'Regulations',
      standards: 'Standards',
    },
    // Anti-corruption
    anticorruption: {
      title: 'Anti-corruption Activities',
      subtitle: 'Transparency and accountability',
      hotline: 'Hotline',
      report: 'Report',
    },
    // Proposals
    proposals: {
      title: 'Proposals',
      subtitle: 'Suggestions for website improvement',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    languages: [
      { code: 'kz', name: 'Қазақша', flag: '🇰🇿' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'en', name: 'English', flag: '🇬🇧' },
    ],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;

