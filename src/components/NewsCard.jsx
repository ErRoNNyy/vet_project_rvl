import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { formatDate } from '../utils/helpers';
import { Card, Badge } from '../ui';

export function NewsCard({ news, featured = false }) {
  const { t, language } = useLanguage();

  const categoryColors = {
    news: 'primary',
    events: 'accent',
    training: 'success',
  };

  return (
    <Card hover className={`news-card ${featured ? 'news-card--featured' : ''}`}>
      <div className="news-card__image-wrapper">
        <img
          src={news.image}
          alt={news.title[language]}
          className="news-card__image"
        />
        <Badge variant={categoryColors[news.category] || 'default'} className="news-card__badge">
          {news.category}
        </Badge>
      </div>
      <div className="news-card__content">
        <div className="news-card__date">
          <Calendar size={16} />
          <time dateTime={news.date}>{formatDate(news.date, language)}</time>
        </div>

        <h3 className="news-card__title">
          {news.title[language]}
        </h3>

        <p className="news-card__excerpt">
          {news.excerpt[language]}
        </p>

        <Link to={`/news/${news.slug}`} className="news-card__link">
          {t('news.readMore')}
          <ArrowRight size={16} className="news-card__link-icon" />
        </Link>
      </div>
    </Card>
  );
}

export default NewsCard;
