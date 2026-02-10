import { Lightbulb, Send, CheckCircle, Sparkles, Code, Palette, Layout, Zap } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Container, Card, CardContent, Button, Input, Textarea } from '../ui';

export function ProposalsPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', category: 'design', proposal: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { key: 'design', label: { kz: 'Дизайн', ru: 'Дизайн', en: 'Design' }, icon: Palette },
    { key: 'functionality', label: { kz: 'Функционалдылық', ru: 'Функциональность', en: 'Functionality' }, icon: Code },
    { key: 'usability', label: { kz: 'Қолайлылық', ru: 'Удобство', en: 'Usability' }, icon: Layout },
    { key: 'performance', label: { kz: 'Өнімділік', ru: 'Производительность', en: 'Performance' }, icon: Zap },
  ];

  const features = [
    { icon: Sparkles, title: { kz: 'Инновациялар', ru: 'Инновации', en: 'Innovations' }, desc: { kz: 'Жаңа функциялар мен мүмкіндіктер ұсынысы.', ru: 'Предложения по новым функциям и возможностям.', en: 'Suggestions for new features and capabilities.' } },
    { icon: Palette, title: { kz: 'Дизайн шешімдері', ru: 'Дизайнерские решения', en: 'Design Solutions' }, desc: { kz: 'Визуалды жақсартулар бойынша идеялар.', ru: 'Идеи по визуальным улучшениям.', en: 'Ideas for visual improvements.' } },
    { icon: Code, title: { kz: 'Техникалық шешімдер', ru: 'Технические решения', en: 'Technical Solutions' }, desc: { kz: 'Техникалық жақсартулар ұсыныстары.', ru: 'Предложения по техническим улучшениям.', en: 'Suggestions for technical improvements.' } },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', category: 'design', proposal: '' });
  };

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('proposals.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('proposals.subtitle')}</p>
        </Container>
      </section>

      {/* Features */}
      <Section background="white">
        <SectionHeader title={language === 'kz' ? 'Ұсыныс түрлері' : language === 'ru' ? 'Типы предложений' : 'Types of Proposals'} subtitle={language === 'kz' ? 'Қандай ұсыныстар қабылданады' : language === 'ru' ? 'Какие предложения принимаются' : 'What proposals are accepted'} />

        <div className="grid grid--3" style={{ marginBottom: '4rem' }}>
          {features.map((feature, index) => (
            <Card key={index} hover className="animate-slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, var(--accent-100), var(--accent-200))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <feature.icon size={32} style={{ color: 'var(--accent-600)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.75rem' }}>{feature.title[language]}</h3>
                <p style={{ color: 'var(--secondary-600)' }}>{feature.desc[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Proposal Form */}
      <Section background="light">
        <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Lightbulb size={48} style={{ color: 'var(--accent-500)', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1rem' }}>
              {language === 'kz' ? 'Ұсыныс жіберу' : language === 'ru' ? 'Отправить предложение' : 'Submit Proposal'}
            </h2>
            <p style={{ color: 'var(--secondary-600)' }}>
              {language === 'kz' ? 'Сайтты жақсарту бойынша өз идеяларыңызбен бөлісіңіз.' : language === 'ru' ? 'Поделитесь своими идеями по улучшению сайта.' : 'Share your ideas for improving the website.'}
            </p>
          </div>

          {isSubmitted ? (
            <Card className="animate-scale-in">
              <CardContent style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--green-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <CheckCircle size={32} style={{ color: 'var(--green-600)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.5rem' }}>
                  {language === 'kz' ? 'Ұсыныс жіберілді!' : language === 'ru' ? 'Предложение отправлено!' : 'Proposal Submitted!'}
                </h3>
                <p style={{ color: 'var(--secondary-600)', marginBottom: '1.5rem' }}>
                  {language === 'kz' ? 'Ұсынысыңыз үшін рахмет! Біз оны қарастырамыз.' : language === 'ru' ? 'Спасибо за ваше предложение! Мы его рассмотрим.' : 'Thank you for your proposal! We will review it.'}
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  {language === 'kz' ? 'Жаңа ұсыныс' : language === 'ru' ? 'Новое предложение' : 'New Proposal'}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="animate-slide-up">
              <CardContent style={{ padding: '2rem' }}>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid--2" style={{ marginBottom: '1.5rem' }}>
                    <Input label={t('contact.form.name')} name="name" value={formData.name} onChange={handleChange} placeholder={t('contact.form.name')} required />
                    <Input label={t('contact.form.email')} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" required />
                  </div>

                  {/* Category Selection */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--secondary-700)', marginBottom: '0.75rem' }}>
                      {language === 'kz' ? 'Санат' : language === 'ru' ? 'Категория' : 'Category'}
                    </label>
                    <div className="grid grid--4" style={{ gap: '0.75rem' }}>
                      {categories.map((cat) => (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, category: cat.key }))}
                          style={{
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-xl)',
                            border: `2px solid ${formData.category === cat.key ? 'var(--primary-500)' : 'var(--secondary-200)'}`,
                            backgroundColor: formData.category === cat.key ? 'var(--primary-50)' : 'transparent',
                            color: formData.category === cat.key ? 'var(--primary-700)' : 'var(--secondary-600)',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all var(--transition)'
                          }}
                        >
                          <cat.icon size={20} />
                          <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{cat.label[language]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <Textarea
                      label={language === 'kz' ? 'Ұсыныс' : language === 'ru' ? 'Предложение' : 'Proposal'}
                      name="proposal"
                      value={formData.proposal}
                      onChange={handleChange}
                      placeholder={language === 'kz' ? 'Ұсынысыңызды сипаттаңыз...' : language === 'ru' ? 'Опишите ваше предложение...' : 'Describe your proposal...'}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" icon={Send} loading={isSubmitting} className="btn--full">
                    {language === 'kz' ? 'Жіберу' : language === 'ru' ? 'Отправить' : 'Submit'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>
    </>
  );
}

export default ProposalsPage;
