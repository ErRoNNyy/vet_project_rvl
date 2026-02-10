import { Shield, Phone, Mail, AlertTriangle, FileText, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Container, Card, CardContent, Button } from '../ui';
import { Link } from 'react-router-dom';

export function AnticorruptionPage() {
  const { t, language } = useLanguage();

  const principles = [
    { icon: Shield, title: { kz: 'Ашықтық', ru: 'Открытость', en: 'Transparency' }, desc: { kz: 'Барлық қызмет ашық және қол жетімді.', ru: 'Вся деятельность открыта и доступна.', en: 'All activities are open and accessible.' } },
    { icon: Users, title: { kz: 'Жауапкершілік', ru: 'Ответственность', en: 'Accountability' }, desc: { kz: 'Әрбір қызметкер өз әрекеттеріне жауапты.', ru: 'Каждый сотрудник несет ответственность за свои действия.', en: 'Every employee is responsible for their actions.' } },
    { icon: CheckCircle, title: { kz: 'Адалдық', ru: 'Честность', en: 'Integrity' }, desc: { kz: 'Барлық процестер заңдылық негізінде жүргізіледі.', ru: 'Все процессы ведутся на основе законности.', en: 'All processes are conducted on the basis of legality.' } },
  ];

  const contacts = [
    { icon: Phone, label: t('anticorruption.hotline'), value: '+7 (7172) 55-55-00', desc: { kz: '24/7 жұмыс істейді', ru: 'Работает 24/7', en: 'Available 24/7' } },
    { icon: Mail, label: { kz: 'Электрондық пошта', ru: 'Электронная почта', en: 'Email' }, value: 'anticorruption@rvl.kz', desc: { kz: 'Жауап 24 сағат ішінде', ru: 'Ответ в течение 24 часов', en: 'Response within 24 hours' } },
  ];

  const measures = [
    { kz: 'Ішкі аудит жүргізу', ru: 'Проведение внутреннего аудита', en: 'Internal audit' },
    { kz: 'Қызметкерлерді оқыту', ru: 'Обучение сотрудников', en: 'Staff training' },
    { kz: 'Ашық есептілік', ru: 'Открытая отчетность', en: 'Open reporting' },
    { kz: 'Анонимді хабарлау мүмкіндігі', ru: 'Возможность анонимного сообщения', en: 'Anonymous reporting option' },
    { kz: 'Мүдделер қақтығысын басқару', ru: 'Управление конфликтом интересов', en: 'Conflict of interest management' },
    { kz: 'Тәуелсіз тексерулер', ru: 'Независимые проверки', en: 'Independent inspections' },
  ];

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('anticorruption.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('anticorruption.subtitle')}</p>
        </Container>
      </section>

      <Section background="white">
        <SectionHeader title={language === 'kz' ? 'Біздің қағидаттарымыз' : language === 'ru' ? 'Наши принципы' : 'Our Principles'} subtitle={language === 'kz' ? 'Сыбайлас жемқорлыққа қарсы күрес негіздері' : language === 'ru' ? 'Основы борьбы с коррупцией' : 'Anti-corruption fundamentals'} />

        <div className="grid grid--3">
          {principles.map((principle, index) => (
            <Card key={index} hover className="animate-slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <principle.icon size={32} style={{ color: 'var(--primary-600)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.75rem' }}>{principle.title[language]}</h3>
                <p style={{ color: 'var(--secondary-600)' }}>{principle.desc[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div className="animate-slide-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <AlertTriangle size={32} style={{ color: 'var(--accent-500)' }} />
              <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--secondary-900)' }}>{t('anticorruption.report')}</h2>
            </div>
            <p style={{ color: 'var(--secondary-600)', marginBottom: '2rem', lineHeight: 1.7 }}>
              {language === 'kz' ? 'Егер сіз сыбайлас жемқорлық фактілері туралы білсеңіз, бізге хабарласыңыз. Барлық хабарламалар құпия түрде қаралады.' : language === 'ru' ? 'Если вам известны факты коррупции, сообщите нам. Все сообщения рассматриваются конфиденциально.' : 'If you know about corruption facts, please contact us. All reports are treated confidentially.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contacts.map((contact, index) => (
                <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--accent-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <contact.icon size={24} style={{ color: 'var(--accent-600)' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--secondary-500)' }}>{typeof contact.label === 'object' ? contact.label[language] : contact.label}</p>
                        <p style={{ fontWeight: 600, color: 'var(--secondary-900)' }}>{contact.value}</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--secondary-500)' }}>{contact.desc[language]}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-scale-in">
            <Card style={{ background: 'linear-gradient(135deg, var(--primary-50), var(--primary-100))', border: '1px solid var(--primary-200)' }}>
              <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                <Shield size={64} style={{ color: 'var(--primary-500)', margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '1rem' }}>
                  {language === 'kz' ? 'Құпиялылық кепілдігі' : language === 'ru' ? 'Гарантия конфиденциальности' : 'Confidentiality Guarantee'}
                </h3>
                <p style={{ color: 'var(--secondary-600)', marginBottom: '1.5rem' }}>
                  {language === 'kz' ? 'Барлық хабарламалар қатаң құпиялылық режимінде қаралады. Сіздің жеке деректеріңіз қорғалған.' : language === 'ru' ? 'Все сообщения рассматриваются в режиме строгой конфиденциальности. Ваши личные данные защищены.' : 'All reports are handled under strict confidentiality. Your personal data is protected.'}
                </p>
                <Link to="/contacts">
                  <Button className="btn--full">{language === 'kz' ? 'Хабарлама жіберу' : language === 'ru' ? 'Отправить сообщение' : 'Send Report'}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white">
        <SectionHeader title={language === 'kz' ? 'Алдын алу шаралары' : language === 'ru' ? 'Меры противодействия' : 'Preventive Measures'} subtitle={language === 'kz' ? 'Сыбайлас жемқорлықтың алдын алу бойынша жүргізілетін жұмыстар' : language === 'ru' ? 'Работа по предотвращению коррупции' : 'Corruption prevention activities'} />

        <div className="grid grid--3">
          {measures.map((measure, index) => (
            <div key={index} className="animate-slide-up" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--secondary-50)', borderRadius: 'var(--radius-xl)', animationDelay: `${index * 0.1}s` }}>
              <CheckCircle size={20} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
              <span style={{ color: 'var(--secondary-700)' }}>{measure[language]}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section background="gradient" className="text-center">
        <div className="animate-slide-up" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <FileText size={64} style={{ color: 'var(--primary-500)', margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1rem' }}>
            {language === 'kz' ? 'Нормативтік құжаттар' : language === 'ru' ? 'Нормативные документы' : 'Regulatory Documents'}
          </h2>
          <p style={{ color: 'var(--secondary-600)', marginBottom: '2rem' }}>
            {language === 'kz' ? 'Сыбайлас жемқорлыққа қарсы іс-шаралар бойынша барлық құжаттармен танысыңыз.' : language === 'ru' ? 'Ознакомьтесь со всеми документами по противодействию коррупции.' : 'Review all anti-corruption documents.'}
          </p>
          <Link to="/documents">
            <Button size="lg">{language === 'kz' ? 'Құжаттарды қарау' : language === 'ru' ? 'Просмотреть документы' : 'View Documents'}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

export default AnticorruptionPage;
