import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ContactForm } from '../components';
import { Section, Container, Card, CardContent } from '../ui';
import { CONTACT_INFO } from '../utils/constants';

export function ContactsPage() {
  const { t, language } = useLanguage();

  const contactItems = [
    { icon: MapPin, label: t('contact.address'), value: CONTACT_INFO.address[language], href: 'https://maps.google.com/?q=Astana' },
    { icon: Phone, label: t('contact.phone'), value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: t('contact.email'), value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { icon: Clock, label: t('contact.workHours'), value: CONTACT_INFO.workHours[language], href: null },
  ];

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('contact.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('contact.subtitle')}</p>
        </Container>
      </section>

      <Section background="white">
        <div className="grid grid--3" style={{ gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
              {language === 'kz' ? 'Байланыс ақпараты' : language === 'ru' ? 'Контактная информация' : 'Contact Information'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactItems.map((item, index) => (
                <Card key={index} hover className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ 
                        width: '48px', 
                        height: '48px', 
                        borderRadius: 'var(--radius-xl)', 
                        backgroundColor: 'var(--primary-100)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <item.icon size={24} style={{ color: 'var(--primary-600)' }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '0.875rem', color: 'var(--secondary-500)', marginBottom: '0.25rem' }}>
                          {item.label}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('https') ? '_blank' : undefined}
                            rel={item.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                            style={{ 
                              color: 'var(--secondary-900)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              transition: 'color var(--transition)'
                            }}
                          >
                            {item.value}
                            {item.href.startsWith('https') && <ExternalLink size={16} />}
                          </a>
                        ) : (
                          <span style={{ color: 'var(--secondary-900)' }}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card style={{ backgroundColor: 'var(--primary-50)', border: '1px solid var(--primary-100)', marginTop: '1rem' }}>
              <CardContent style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.5rem' }}>
                  {language === 'kz' ? 'Қосымша ақпарат' : language === 'ru' ? 'Дополнительная информация' : 'Additional Information'}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--secondary-600)' }}>
                  {language === 'kz'
                    ? 'Жедел желі 24/7 жұмыс істейді. Шұғыл сұрақтар бойынша кез келген уақытта хабарласа аласыз.'
                    : language === 'ru'
                    ? 'Горячая линия работает 24/7. По срочным вопросам можете обращаться в любое время.'
                    : 'Hotline operates 24/7. For urgent questions, you can contact us at any time.'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div style={{ gridColumn: 'span 2' }} className="animate-slide-up stagger-2">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
              {language === 'kz' ? 'Бізге жазыңыз' : language === 'ru' ? 'Напишите нам' : 'Write to Us'}
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section background="light" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem', textAlign: 'center' }}>
          {language === 'kz' ? 'Біздің мекенжай' : language === 'ru' ? 'Наш адрес' : 'Our Location'}
        </h2>
        <div style={{ 
          borderRadius: 'var(--radius-2xl)', 
          overflow: 'hidden', 
          boxShadow: 'var(--shadow-lg)', 
          height: '24rem',
          background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ textAlign: 'center' }}>
            <MapPin size={64} style={{ color: 'var(--primary-500)', marginBottom: '1rem' }} />
            <p style={{ color: 'var(--secondary-700)', fontWeight: 500 }}>{CONTACT_INFO.address[language]}</p>
            <a
              href="https://maps.google.com/?q=Astana+Republic+Avenue+60"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                marginTop: '1rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: 'var(--primary-600)' 
              }}
            >
              {language === 'kz' ? 'Картадан көру' : language === 'ru' ? 'Открыть на карте' : 'View on Map'}
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

export default ContactsPage;
