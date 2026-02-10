import { GraduationCap, BookOpen, Users, Clock, CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Container, Card, CardContent, Button } from '../ui';
import { Link } from 'react-router-dom';

export function TrainingPage() {
  const { t, language } = useLanguage();

  const courses = [
    {
      id: 1,
      title: { kz: 'ПТР-диагностика негіздері', ru: 'Основы ПЦР-диагностики', en: 'PCR Diagnostics Fundamentals' },
      description: { kz: 'Молекулалық диагностиканың теориясы мен практикасы.', ru: 'Теория и практика молекулярной диагностики.', en: 'Theory and practice of molecular diagnostics.' },
      duration: { kz: '40 сағат', ru: '40 часов', en: '40 hours' },
      participants: 15,
    },
    {
      id: 2,
      title: { kz: 'Серологиялық зерттеулер', ru: 'Серологические исследования', en: 'Serological Studies' },
      description: { kz: 'Антитела мен антигендерді анықтау әдістері.', ru: 'Методы определения антител и антигенов.', en: 'Methods for detecting antibodies and antigens.' },
      duration: { kz: '32 сағат', ru: '32 часа', en: '32 hours' },
      participants: 12,
    },
    {
      id: 3,
      title: { kz: 'Бактериологиялық талдау', ru: 'Бактериологический анализ', en: 'Bacteriological Analysis' },
      description: { kz: 'Микробиологиялық зерттеу әдістері.', ru: 'Методы микробиологических исследований.', en: 'Microbiological research methods.' },
      duration: { kz: '36 сағат', ru: '36 часов', en: '36 hours' },
      participants: 10,
    },
    {
      id: 4,
      title: { kz: 'Азық-түлік сараптамасы', ru: 'Экспертиза продовольствия', en: 'Food Product Expertise' },
      description: { kz: 'Азық-түлік өнімдерін сараптау әдістері мен стандарттары.', ru: 'Методы и стандарты экспертизы продовольственных продуктов.', en: 'Methods and standards for food product expertise.' },
      duration: { kz: '24 сағат', ru: '24 часа', en: '24 hours' },
      participants: 20,
    },
  ];

  const programs = [
    { title: { kz: 'Біліктілікті арттыру', ru: 'Повышение квалификации', en: 'Professional Development' }, desc: { kz: 'Мамандар үшін қысқа мерзімді курстар', ru: 'Краткосрочные курсы для специалистов', en: 'Short-term courses for specialists' }, duration: { kz: '72-144 сағат', ru: '72-144 часа', en: '72-144 hours' } },
    { title: { kz: 'Қайта даярлау', ru: 'Переподготовка', en: 'Retraining' }, desc: { kz: 'Жаңа мамандық бойынша толық курс', ru: 'Полный курс по новой специальности', en: 'Full course in a new specialty' }, duration: { kz: '250+ сағат', ru: '250+ часов', en: '250+ hours' } },
    { title: { kz: 'Семинарлар', ru: 'Семинары', en: 'Seminars' }, desc: { kz: 'Өзекті тақырыптар бойынша қысқа семинарлар', ru: 'Короткие семинары по актуальным темам', en: 'Short seminars on relevant topics' }, duration: { kz: '8-16 сағат', ru: '8-16 часов', en: '8-16 hours' } },
  ];

  const benefits = [
    { kz: 'Халықаралық деңгейдегі сертификат', ru: 'Сертификат международного образца', en: 'International certificate' },
    { kz: 'Тәжірибелі оқытушылар', ru: 'Опытные преподаватели', en: 'Experienced instructors' },
    { kz: 'Практикалық сабақтар', ru: 'Практические занятия', en: 'Practical classes' },
    { kz: 'Заманауи жабдықтар', ru: 'Современное оборудование', en: 'Modern equipment' },
    { kz: 'Оқу материалдары', ru: 'Учебные материалы', en: 'Training materials' },
    { kz: 'Онлайн қолдау', ru: 'Онлайн поддержка', en: 'Online support' },
  ];

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('training.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('training.subtitle')}</p>
        </Container>
      </section>

      {/* Programs Section */}
      <Section background="white">
        <SectionHeader title={t('training.programs')} subtitle={language === 'kz' ? 'Біздің оқу бағдарламалары' : language === 'ru' ? 'Наши образовательные программы' : 'Our Educational Programs'} />

        <div className="grid grid--3">
          {programs.map((program, index) => (
            <Card key={index} hover className="animate-slide-up text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <GraduationCap size={32} style={{ color: 'var(--primary-600)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.75rem' }}>{program.title[language]}</h3>
                <p style={{ color: 'var(--secondary-600)', marginBottom: '1rem' }}>{program.desc[language]}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--primary-600)' }}>
                  <Clock size={16} />
                  <span style={{ fontWeight: 500 }}>{program.duration[language]}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Courses Section */}
      <Section background="light">
        <SectionHeader title={t('training.courses')} subtitle={language === 'kz' ? 'Қолжетімді курстар' : language === 'ru' ? 'Доступные курсы' : 'Available Courses'} />

        <div className="grid grid--2">
          {courses.map((course, index) => (
            <Card key={course.id} hover className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--accent-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BookOpen size={28} style={{ color: 'var(--accent-600)' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--secondary-900)', marginBottom: '0.5rem' }}>{course.title[language]}</h3>
                    <p style={{ color: 'var(--secondary-600)', marginBottom: '1rem' }}>{course.description[language]}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: 'var(--secondary-500)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={16} />
                        {course.duration[language]}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Users size={16} />
                        {course.participants} {language === 'kz' ? 'қатысушы' : language === 'ru' ? 'участников' : 'participants'}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div className="animate-slide-up">
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
              {language === 'kz' ? 'Неліктен бізді таңдау керек?' : language === 'ru' ? 'Почему выбирают нас?' : 'Why Choose Us?'}
            </h2>
            <p style={{ color: 'var(--secondary-600)', marginBottom: '2rem' }}>
              {language === 'kz' ? 'Біздің оқу-әдістемелік орталық заманауи білім мен практикалық дағдыларды үйретеді.' : language === 'ru' ? 'Наш учебно-методический центр обучает современным знаниям и практическим навыкам.' : 'Our training center teaches modern knowledge and practical skills.'}
            </p>

            <div className="grid grid--2" style={{ gap: '1rem' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="animate-slide-up" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle size={20} style={{ color: 'var(--green-500)', flexShrink: 0 }} />
                  <span style={{ color: 'var(--secondary-700)' }}>{benefit[language]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-scale-in" style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=500&fit=crop" alt="Training center" style={{ width: '100%', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)' }} />
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={40} style={{ color: 'var(--accent-500)' }} />
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--secondary-900)' }}>1000+</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--secondary-500)' }}>{language === 'kz' ? 'Түлектер' : language === 'ru' ? 'Выпускников' : 'Graduates'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="text-center">
        <div className="animate-slide-up" style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-900)', marginBottom: '1.5rem' }}>
            {language === 'kz' ? 'Курсқа жазылу' : language === 'ru' ? 'Записаться на курс' : 'Enroll in a Course'}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--secondary-600)', marginBottom: '2rem' }}>
            {language === 'kz' ? 'Бізбен байланысып, өзіңізге сай курсты таңдаңыз.' : language === 'ru' ? 'Свяжитесь с нами и выберите подходящий курс.' : 'Contact us and choose a suitable course.'}
          </p>
          <Link to="/contacts">
            <Button size="lg">{language === 'kz' ? 'Өтініш жіберу' : language === 'ru' ? 'Подать заявку' : 'Submit Application'}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}

export default TrainingPage;
