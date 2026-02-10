export const documentsData = {
  laws: [
    {
      id: 1,
      title: {
        kz: 'Қазақстан Республикасының Ветеринария туралы Заңы',
        ru: 'Закон Республики Казахстан о ветеринарии',
        en: 'Law of the Republic of Kazakhstan on Veterinary Medicine',
      },
      date: '2024-07-15',
      url: 'https://adilet.zan.kz/rus',
      type: 'pdf',
    },
    {
      id: 2,
      title: {
        kz: 'Азық-түлік қауіпсіздігі туралы Заң',
        ru: 'Закон о безопасности пищевой продукции',
        en: 'Law on Food Safety',
      },
      date: '2023-12-20',
      url: 'https://adilet.zan.kz/rus',
      type: 'pdf',
    },
  ],
  regulations: [
    {
      id: 3,
      title: {
        kz: 'Ветеринариялық зертханалар туралы ереже',
        ru: 'Положение о ветеринарных лабораториях',
        en: 'Regulations on Veterinary Laboratories',
      },
      date: '2025-03-10',
      url: '#',
      type: 'pdf',
    },
    {
      id: 4,
      title: {
        kz: 'Жануарлар ауруларын диагностикалау ережелері',
        ru: 'Правила диагностики болезней животных',
        en: 'Rules for Diagnosis of Animal Diseases',
      },
      date: '2025-01-05',
      url: '#',
      type: 'pdf',
    },
  ],
  standards: [
    {
      id: 5,
      title: {
        kz: 'ISO 17025 стандарты',
        ru: 'Стандарт ISO 17025',
        en: 'ISO 17025 Standard',
      },
      date: '2024-06-15',
      url: '#',
      type: 'pdf',
    },
    {
      id: 6,
      title: {
        kz: 'Зертханалық сынақтардың сапа стандарттары',
        ru: 'Стандарты качества лабораторных испытаний',
        en: 'Quality Standards for Laboratory Testing',
      },
      date: '2024-04-20',
      url: '#',
      type: 'pdf',
    },
  ],
};

export const getAllDocuments = () => {
  return [
    ...documentsData.laws,
    ...documentsData.regulations,
    ...documentsData.standards,
  ];
};

