import { Target, Eye, Heart, Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Card, CardContent, Container } from '../ui';

export function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: { kz: 'Дәлдік', ru: 'Точность', en: 'Accuracy' },
      desc: {
        kz: 'Барлық зерттеулер мен сынақтар жоғары дәлдікпен жүргізіледі.',
        ru: 'Все исследования и испытания проводятся с высокой точностью.',
        en: 'All research and tests are conducted with high accuracy.',
      },
    },
    {
      icon: Award,
      title: { kz: 'Сапа', ru: 'Качество', en: 'Quality' },
      desc: {
        kz: 'Халықаралық стандарттарға сәйкес сапа менеджменті жүйесі.',
        ru: 'Система менеджмента качества в соответствии с международными стандартами.',
        en: 'Quality management system in accordance with international standards.',
      },
    },
    {
      icon: Heart,
      title: { kz: 'Адалдық', ru: 'Честность', en: 'Integrity' },
      desc: {
        kz: 'Ашық және адал қызмет көрсету.',
        ru: 'Открытое и честное обслуживание.',
        en: 'Open and honest service.',
      },
    },
    {
      icon: Eye,
      title: { kz: 'Кәсіпқойлық', ru: 'Профессионализм', en: 'Professionalism' },
      desc: {
        kz: 'Тәжірибелі мамандар командасы.',
        ru: 'Команда опытных специалистов.',
        en: 'Team of experienced specialists.',
      },
    },
  ];

  const achievements = [
    { kz: 'ISO 17025 халықаралық аккредитациясы', ru: 'Международная аккредитация ISO 17025', en: 'International ISO 17025 accreditation' },
    { kz: '30+ жыл тәжірибе', ru: '30+ лет опыта', en: '30+ years of experience' },
    { kz: '500+ білікті маман', ru: '500+ квалифицированных специалистов', en: '500+ qualified specialists' },
    { kz: '17 өңірде қызмет көрсету', ru: 'Обслуживание в 17 регионах', en: 'Service in 17 regions' },
    { kz: 'Жылына 100 000+ сынақ', ru: '100 000+ испытаний в год', en: '100,000+ tests per year' },
    { kz: 'Заманауи жабдықтар', ru: 'Современное оборудование', en: 'Modern equipment' },
  ];

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('about.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('about.description')}</p>
        </Container>
      </section>

      <Section background="white">
        <div className="grid grid--2">
          <Card className="animate-slide-up">
            <CardContent style={{ padding: '2rem' }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: 'var(--radius-xl)', 
                backgroundColor: 'var(--primary-100)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Target size={28} style={{ color: 'var(--primary-600)' }} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1rem' }}>
                {t('about.mission')}
              </h2>
              <p style={{ color: 'var(--secondary-600)', lineHeight: 1.7 }}>
                {t('about.missionText')}
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up stagger-1">
            <CardContent style={{ padding: '2rem' }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: 'var(--radius-xl)', 
                backgroundColor: 'var(--accent-100)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Eye size={28} style={{ color: 'var(--accent-600)' }} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1rem' }}>
                {t('about.vision')}
              </h2>
              <p style={{ color: 'var(--secondary-600)', lineHeight: 1.7 }}>
                {t('about.visionText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section background="light">
        <SectionHeader title={t('about.values')} subtitle={t('about.valuesText')} />
        <div className="grid grid--4">
          {values.map((value, index) => (
            <Card key={index} hover className="animate-slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: 'var(--radius-xl)', 
                  background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <value.icon size={28} style={{ color: 'var(--primary-600)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.75rem' }}>
                  {value.title[language]}
                </h3>
                <p style={{ color: 'var(--secondary-600)' }}>
                  {value.desc[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div className="animate-slide-up">
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
              {language === 'kz' ? 'Біздің жетістіктеріміз' : language === 'ru' ? 'Наши достижения' : 'Our Achievements'}
            </h2>
            <p style={{ color: 'var(--secondary-600)', marginBottom: '2rem' }}>
              {language === 'kz'
                ? 'Республикалық ветеринариялық зертхана Қазақстанның ветеринариялық диагностика саласындағы көшбасшысы.'
                : language === 'ru'
                ? 'Республиканская ветеринарная лаборатория - лидер в области ветеринарной диагностики в Казахстане.'
                : 'The Republican Veterinary Laboratory is a leader in veterinary diagnostics in Kazakhstan.'}
            </p>

            <ul style={{ listStyle: 'none' }}>
              {achievements.map((achievement, index) => (
                <li 
                  key={index} 
                  className="animate-slide-up"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <CheckCircle size={20} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--secondary-700)' }}>{achievement[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-scale-in" style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop"
              alt="Laboratory equipment"
              style={{ width: '100%', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)' }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '-1.5rem', 
              left: '-1.5rem', 
              width: '12rem', 
              height: '12rem', 
              background: 'linear-gradient(135deg, var(--accent-400), var(--accent-600))', 
              borderRadius: 'var(--radius-2xl)', 
              zIndex: -1 
            }}></div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default AboutPage;
