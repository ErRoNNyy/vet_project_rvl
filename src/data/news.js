export const newsData = [
  {
    id: 1,
    slug: 'veterinary-conference-2026',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    date: '2026-02-05',
    category: 'events',
    title: {
      kz: 'Халықаралық ветеринариялық конференция',
      ru: 'Международная ветеринарная конференция',
      en: 'International Veterinary Conference',
    },
    excerpt: {
      kz: 'Республикалық ветеринариялық зертхана халықаралық ветеринариялық конференцияға қатысты.',
      ru: 'Республиканская ветеринарная лаборатория приняла участие в международной ветеринарной конференции.',
      en: 'The Republican Veterinary Laboratory participated in the international veterinary conference.',
    },
    content: {
      kz: 'Толық мәтін...',
      ru: 'Полный текст...',
      en: 'Full text...',
    },
  },
  {
    id: 2,
    slug: 'new-diagnostic-equipment',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop',
    date: '2026-01-28',
    category: 'news',
    title: {
      kz: 'Жаңа диагностикалық жабдықтар',
      ru: 'Новое диагностическое оборудование',
      en: 'New Diagnostic Equipment',
    },
    excerpt: {
      kz: 'Зертханаға заманауи диагностикалық жабдықтар орнатылды.',
      ru: 'В лаборатории установлено современное диагностическое оборудование.',
      en: 'Modern diagnostic equipment has been installed in the laboratory.',
    },
    content: {
      kz: 'Толық мәтін...',
      ru: 'Полный текст...',
      en: 'Full text...',
    },
  },
  {
    id: 3,
    slug: 'staff-training-program',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
    date: '2026-01-20',
    category: 'training',
    title: {
      kz: 'Қызметкерлерді оқыту бағдарламасы',
      ru: 'Программа обучения сотрудников',
      en: 'Staff Training Program',
    },
    excerpt: {
      kz: 'Зертхана қызметкерлері үшін жаңа оқу бағдарламасы іске қосылды.',
      ru: 'Запущена новая программа обучения для сотрудников лаборатории.',
      en: 'A new training program for laboratory staff has been launched.',
    },
    content: {
      kz: 'Толық мәтін...',
      ru: 'Полный текст...',
      en: 'Full text...',
    },
  },
  {
    id: 4,
    slug: 'accreditation-success',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop',
    date: '2026-01-15',
    category: 'news',
    title: {
      kz: 'Халықаралық аккредитация',
      ru: 'Международная аккредитация',
      en: 'International Accreditation',
    },
    excerpt: {
      kz: 'Зертхана халықаралық ISO 17025 аккредитациясын алды.',
      ru: 'Лаборатория получила международную аккредитацию ISO 17025.',
      en: 'The laboratory received international ISO 17025 accreditation.',
    },
    content: {
      kz: 'Толық мәтін...',
      ru: 'Полный текст...',
      en: 'Full text...',
    },
  },
  {
    id: 5,
    slug: 'regional-cooperation',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    date: '2026-01-10',
    category: 'events',
    title: {
      kz: 'Аймақтық ынтымақтастық',
      ru: 'Региональное сотрудничество',
      en: 'Regional Cooperation',
    },
    excerpt: {
      kz: 'Орталық Азия елдерімен ветеринариялық ынтымақтастық келісімі жасалды.',
      ru: 'Подписано соглашение о ветеринарном сотрудничестве со странами Центральной Азии.',
      en: 'A veterinary cooperation agreement was signed with Central Asian countries.',
    },
    content: {
      kz: 'Толық мәтін...',
      ru: 'Полный текст...',
      en: 'Full text...',
    },
  },
  {
    id: 6,
    slug: 'open-day-2026',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f5?w=800&h=500&fit=crop',
    date: '2026-01-05',
    category: 'events',
    title: {
      kz: 'Ашық есік күні',
      ru: 'День открытых дверей',
      en: 'Open Day 2026',
    },
    excerpt: {
      kz: 'Зертханада ашық есік күні өткізіледі.',
      ru: 'В лаборатории пройдет день открытых дверей.',
      en: 'The laboratory will hold an open day.',
    },
    content: {
      kz: 'Толық мәтін...',
      ru: 'Полный текст...',
      en: 'Full text...',
    },
  },
];

export const getNewsById = (id) => newsData.find((news) => news.id === id);
export const getNewsBySlug = (slug) => newsData.find((news) => news.slug === slug);
export const getLatestNews = (count = 3) => newsData.slice(0, count);

