import { Microscope, ClipboardCheck, FlaskConical, MessageSquare, GraduationCap, FileCheck, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Container, Button } from '../ui';
import { servicesData } from '../data';
import { Link } from 'react-router-dom';

const icons = {
  Microscope,
  ClipboardCheck,
  FlaskConical,
  MessageSquare,
  GraduationCap,
  FileCheck,
};

export function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('services.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('services.subtitle')}</p>
        </Container>
      </section>

      <Section background="white">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {servicesData.map((service, index) => {
            const Icon = icons[service.icon] || Microscope;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="grid grid--2"
                style={{ alignItems: 'center' }}
              >
                <div className="animate-slide-up" style={{ order: isEven ? 1 : 2 }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: 'var(--radius-2xl)', 
                    background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <Icon size={32} style={{ color: 'var(--primary-600)' }} />
                  </div>
                  
                  <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1rem' }}>
                    {service.title[language]}
                  </h2>
                  
                  <p style={{ fontSize: '1.125rem', color: 'var(--secondary-600)', marginBottom: '2rem', lineHeight: 1.7 }}>
                    {service.description[language]}
                  </p>

                  {service.features && (
                    <div style={{ marginBottom: '2rem' }}>
                      {service.features[language].map((feature, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                          <CheckCircle size={20} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                          <span style={{ color: 'var(--secondary-700)' }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/contacts">
                    <Button>
                      {language === 'kz' ? 'Кеңес алу' : language === 'ru' ? 'Получить консультацию' : 'Get Consultation'}
                    </Button>
                  </Link>
                </div>

                <div className="animate-scale-in" style={{ position: 'relative', order: isEven ? 2 : 1 }}>
                  <div style={{ 
                    background: 'linear-gradient(135deg, var(--primary-50), var(--primary-100))', 
                    borderRadius: 'var(--radius-2xl)', 
                    padding: '2rem',
                    aspectRatio: '4/3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={128} style={{ color: 'var(--primary-300)' }} />
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    width: '8rem', 
                    height: '8rem', 
                    background: 'linear-gradient(135deg, var(--accent-400), var(--accent-600))', 
                    borderRadius: 'var(--radius-2xl)', 
                    zIndex: -1,
                    bottom: '-1rem',
                    [isEven ? 'right' : 'left']: '-1rem'
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="gradient" className="text-center">
        <div className="animate-slide-up" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
            {language === 'kz' ? 'Қызметке тапсырыс беру' : language === 'ru' ? 'Заказать услугу' : 'Order a Service'}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--secondary-600)', marginBottom: '2rem' }}>
            {language === 'kz'
              ? 'Біздің мамандармен байланысып, сіздің қажеттіліктеріңізге сай қызметті таңдаңыз.'
              : language === 'ru'
              ? 'Свяжитесь с нашими специалистами и выберите услугу, соответствующую вашим потребностям.'
              : 'Contact our specialists and choose a service that suits your needs.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contacts">
              <Button size="lg">{t('hero.contact')}</Button>
            </Link>
            <a href="tel:+77172555555">
              <Button variant="outline" size="lg">+7 (7172) 55-55-55</Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

export default ServicesPage;
