import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, FlaskConical } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button, Container } from '../ui';

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="hero">
      <div className="hero__blob-1 animate-pulse"></div>
      <div className="hero__blob-2 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <Container className="hero__content">
        <div className="hero__grid">
          <div className="hero__text">
            <h1 className="hero__title animate-slide-up">
              {t('hero.title')}
            </h1>
            
            <p className="hero__subtitle animate-slide-up stagger-1">
              {t('hero.subtitle')}
            </p>

            <div className="hero__actions animate-slide-up stagger-2">
              <Link to="/about">
                <Button size="lg" icon={ArrowRight} iconPosition="right">
                  {t('hero.cta')}
                </Button>
              </Link>
              <Link to="/contacts">
                <Button variant="outline" size="lg" icon={Phone}>
                  {t('hero.contact')}
                </Button>
              </Link>
            </div>

            <div className="hero__stats animate-slide-up stagger-3">
              <div className="hero__stat">
                <div className="hero__stat-value">30+</div>
                <div className="hero__stat-label">
                  {language === 'ru' ? 'лет опыта' : language === 'kz' ? 'жыл тәжірибе' : 'years experience'}
                </div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">17</div>
                <div className="hero__stat-label">
                  {language === 'ru' ? 'регионов' : language === 'kz' ? 'өңір' : 'regions'}
                </div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">500+</div>
                <div className="hero__stat-label">
                  {language === 'ru' ? 'специалистов' : language === 'kz' ? 'маман' : 'specialists'}
                </div>
              </div>
            </div>
          </div>

          <div className="hero__image-wrapper animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=700&fit=crop"
              alt="Laboratory"
              className="hero__image"
            />
            <div className="hero__float-card hero__float-card--bottom animate-slide-up stagger-4">
              <div className="hero__float-content">
                <div className="hero__float-icon hero__float-icon--green">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div className="hero__float-title">ISO 17025</div>
                  <div className="hero__float-text">
                    {language === 'ru' ? 'Аккредитовано' : language === 'kz' ? 'Аккредиттелген' : 'Accredited'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero__float-card hero__float-card--top animate-slide-down stagger-5">
              <div className="hero__float-content">
                <div className="hero__float-icon hero__float-icon--blue">
                  <FlaskConical size={24} />
                </div>
                <div>
                  <div className="hero__float-title">{
                    language === 'ru' ? '100 тыс+' : language === 'kz' ? '100 мың+' : '100K+'
                  }</div>
                  <div className="hero__float-text">
                    {language === 'ru' ? 'Тестов в год' : language === 'kz' ? 'Сынақ жылына' : 'Tests per year'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
