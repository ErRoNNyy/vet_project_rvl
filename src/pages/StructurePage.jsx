import { Users, Building2, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Container, Card, CardContent } from '../ui';
import { leadershipData, departmentsData } from '../data';

export function StructurePage() {
  const { t, language } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('structure.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('structure.subtitle')}</p>
        </Container>
      </section>

      {/* Leadership Section */}
      <Section background="white">
        <SectionHeader
          title={t('structure.leadership')}
          subtitle={language === 'kz' ? 'Зертхана басшылығы' : language === 'ru' ? 'Руководство лаборатории' : 'Laboratory Leadership'}
        />

        <div className="grid grid--3">
          {leadershipData.map((leader, index) => (
            <Card key={leader.id} hover className="leadership-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="leadership-card__image-wrapper">
                <img src={leader.image} alt={leader.name[language]} className="leadership-card__image" />
              </div>
              <div className="leadership-card__content">
                <h3 className="leadership-card__name">{leader.name[language]}</h3>
                <p className="leadership-card__position">{leader.position[language]}</p>
                <div className="leadership-card__contacts">
                  <a href={`tel:${leader.phone.replace(/\s/g, '')}`} className="leadership-card__contact-link" title={leader.phone}>
                    <Phone size={20} />
                  </a>
                  <a href={`mailto:${leader.email}`} className="leadership-card__contact-link" title={leader.email}>
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Departments Section */}
      <Section background="light">
        <SectionHeader
          title={t('structure.departments')}
          subtitle={language === 'kz' ? 'Зертхана бөлімдері' : language === 'ru' ? 'Отделы лаборатории' : 'Laboratory Departments'}
        />

        <div className="grid grid--2">
          {departmentsData.map((dept, index) => (
            <Card key={dept.id} hover className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: 'var(--radius-xl)', 
                    background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Building2 size={28} style={{ color: 'var(--primary-600)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.5rem' }}>
                      {dept.name[language]}
                    </h3>
                    <p style={{ color: 'var(--secondary-600)', marginBottom: '1rem' }}>
                      {dept.description[language]}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--secondary-500)' }}>
                      <Users size={16} />
                      <span>
                        {dept.employees} {language === 'kz' ? 'қызметкер' : language === 'ru' ? 'сотрудников' : 'employees'}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Org Chart */}
      <Section background="white">
        <SectionHeader title={language === 'kz' ? 'Ұйымдық схема' : language === 'ru' ? 'Организационная схема' : 'Organizational Chart'} />

        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          {/* Director */}
          <div style={{ 
            display: 'inline-block', 
            padding: '1.5rem', 
            background: 'linear-gradient(135deg, var(--primary-500), var(--primary-700))', 
            color: 'white', 
            borderRadius: 'var(--radius-xl)', 
            boxShadow: 'var(--shadow-lg)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontWeight: 600, fontSize: '1.125rem' }}>{leadershipData[0]?.position[language]}</h3>
          </div>

          {/* Line */}
          <div style={{ width: '2px', height: '2rem', backgroundColor: 'var(--primary-300)', margin: '0 auto' }}></div>

          {/* Deputies */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {leadershipData.slice(1).map((leader, index) => (
              <div key={index}>
                <div style={{ width: '2px', height: '2rem', backgroundColor: 'var(--primary-300)', margin: '0 auto' }}></div>
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--primary-100)', 
                  color: 'var(--primary-800)', 
                  borderRadius: 'var(--radius-xl)',
                  border: '2px solid var(--primary-200)'
                }}>
                  <h4 style={{ fontWeight: 500, fontSize: '0.875rem' }}>{leader.position[language]}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Departments line */}
          <div style={{ width: '100%', height: '2px', backgroundColor: 'var(--primary-200)', marginBottom: '2rem' }}></div>
          
          {/* Departments */}
          <div className="grid grid--4" style={{ gap: '1rem' }}>
            {departmentsData.map((dept, index) => (
              <div
                key={dept.id}
                className="animate-slide-up"
                style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--secondary-50)', 
                  borderRadius: 'var(--radius-xl)', 
                  border: '1px solid var(--secondary-200)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <h5 style={{ fontWeight: 500, fontSize: '0.875rem', color: 'var(--secondary-800)' }}>
                  {dept.name[language]}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export default StructurePage;
