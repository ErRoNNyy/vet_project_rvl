import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button, Container } from '../ui';

export function NotFoundPage() {
  const { language } = useLanguage();

  return (
    <div className="not-found">
      <Container>
        <div className="not-found__content animate-slide-up">
          <div className="not-found__number">
            <span className="not-found__number-bg">404</span>
            <span className="not-found__number-fg">404</span>
          </div>

          <h1 className="not-found__title">
            {language === 'kz' ? 'Бет табылмады' : language === 'ru' ? 'Страница не найдена' : 'Page Not Found'}
          </h1>
          <p className="not-found__text">
            {language === 'kz'
              ? 'Кешіріңіз, сіз іздеген бет жоқ немесе жойылған.'
              : language === 'ru'
              ? 'Извините, страница, которую вы ищете, не существует или была удалена.'
              : 'Sorry, the page you are looking for does not exist or has been removed.'}
          </p>

          <div className="not-found__actions">
            <Link to="/">
              <Button size="lg" icon={Home}>
                {language === 'kz' ? 'Басты бетке' : language === 'ru' ? 'На главную' : 'Go Home'}
              </Button>
            </Link>
            <Button variant="outline" size="lg" icon={ArrowLeft} onClick={() => window.history.back()}>
              {language === 'kz' ? 'Артқа' : language === 'ru' ? 'Назад' : 'Go Back'}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NotFoundPage;
