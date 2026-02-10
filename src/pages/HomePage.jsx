import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Hero, NewsCard, ServiceCard } from '../components';
import { Section, SectionHeader, Button, Card, CardContent } from '../ui';
import { getLatestNews, servicesData } from '../data';

export function HomePage() {
  const { t, language } = useLanguage();
  const latestNews = getLatestNews(3);

  const features = [
    {
      icon: Shield,
      title: { kz: 'Сенімділік', ru: 'Надежность', en: 'Reliability' },
      desc: { kz: 'ISO 17025 аккредитациясы', ru: 'Аккредитация ISO 17025', en: 'ISO 17025 Accreditation' },
    },
    {
      icon: Award,
      title: { kz: 'Сапа', ru: 'Качество', en: 'Quality' },
      desc: { kz: 'Халықаралық стандарттар', ru: 'Международные стандарты', en: 'International Standards' },
    },
    {
      icon: Users,
      title: { kz: 'Тәжірибе', ru: 'Опыт', en: 'Experience' },
      desc: { kz: '500+ маман', ru: '500+ специалистов', en: '500+ Specialists' },
    },
    {
      icon: Building2,
      title: { kz: 'Қамту', ru: 'Охват', en: 'Coverage' },
      desc: { kz: '17 өңір', ru: '17 регионов', en: '17 Regions' },
    },
  ];

  return (
    <>
      <Hero />

      {/* Features Bar */}
      <Section background="white" className="section" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10, paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="grid grid--4">
          {features.map((feature, index) => (
            <Card key={index} className="animate-slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--radius-xl)', 
                  backgroundColor: 'var(--primary-100)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem'
                }}>
                  <feature.icon size={24} style={{ color: 'var(--primary-600)' }} />
                </div>
                <h3 style={{ fontWeight: 600, color: 'var(--secondary-900)' }}>{feature.title[language]}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--secondary-500)' }}>{feature.desc[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section background="light" id="about-preview">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div className="animate-slide-up">
            <span style={{ color: 'var(--primary-600)', fontWeight: 600, marginBottom: '0.5rem', display: 'block' }}>
              {t('about.title')}
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
              {t('about.mission')}
            </h2>
            <p style={{ color: 'var(--secondary-600)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              {t('about.description')}
            </p>
            <p style={{ color: 'var(--secondary-600)', marginBottom: '2rem', lineHeight: 1.7 }}>
              {t('about.missionText')}
            </p>

            <div className="grid grid--2" style={{ marginBottom: '2rem', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--primary-600)', marginBottom: '0.25rem' }}>30+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--secondary-600)' }}>
                  {language === 'kz' ? 'Жыл тәжірибе' : language === 'ru' ? 'Лет опыта' : 'Years Experience'}
                </div>
              </div>
              <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--accent-600)', marginBottom: '0.25rem' }}>100K+</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--secondary-600)' }}>
                  {language === 'kz' ? 'Жылына сынақ' : language === 'ru' ? 'Тестов в год' : 'Tests per year'}
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button icon={ArrowRight} iconPosition="right">
                {t('common.learnMore')}
              </Button>
            </Link>
          </div>

          <div className="animate-scale-in" style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&h=500&fit=crop"
              alt="Laboratory work"
              style={{ width: '100%', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)' }}
            />
            <div style={{ 
              position: 'absolute', 
              bottom: '-1.5rem', 
              right: '-1.5rem', 
              width: '12rem', 
              height: '12rem', 
              background: 'linear-gradient(135deg, var(--primary-400), var(--primary-600))', 
              borderRadius: 'var(--radius-2xl)', 
              zIndex: -1 
            }}></div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="white" id="services-preview">
        <SectionHeader title={t('services.title')} subtitle={t('services.subtitle')} />
        <div className="grid grid--3">
          {servicesData.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services">
            <Button variant="outline" icon={ArrowRight} iconPosition="right">
              {t('common.viewAll')}
            </Button>
          </Link>
        </div>
      </Section>

      {/* News Section */}
      <Section background="light" id="news-preview">
        <SectionHeader title={t('news.title')} subtitle={t('news.subtitle')} />
        <div className="grid grid--3">
          {latestNews.map((news, index) => (
            <div key={news.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/news">
            <Button variant="outline" icon={ArrowRight} iconPosition="right">
              {t('news.allNews')}
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="text-center">
        <div className="animate-slide-up" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
            {language === 'kz' ? 'Бізбен байланысыңыз' : language === 'ru' ? 'Свяжитесь с нами' : 'Get in Touch'}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--secondary-600)', marginBottom: '2rem' }}>
            {language === 'kz'
              ? 'Сұрақтарыңыз бар ма? Біздің мамандар көмектесуге дайын.'
              : language === 'ru'
              ? 'Есть вопросы? Наши специалисты готовы помочь.'
              : 'Have questions? Our specialists are ready to help.'}
          </p>
          <Link to="/contacts">
            <Button size="lg" icon={ArrowRight} iconPosition="right">
              {t('hero.contact')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

export default HomePage;
