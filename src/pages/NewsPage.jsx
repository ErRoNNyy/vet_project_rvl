import { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NewsCard } from '../components';
import { Section, Container, Input } from '../ui';
import { newsData } from '../data';

export function NewsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: { kz: 'Барлығы', ru: 'Все', en: 'All' } },
    { key: 'news', label: { kz: 'Жаңалықтар', ru: 'Новости', en: 'News' } },
    { key: 'events', label: { kz: 'Оқиғалар', ru: 'События', en: 'Events' } },
    { key: 'training', label: { kz: 'Оқыту', ru: 'Обучение', en: 'Training' } },
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesSearch = news.title[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('news.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('news.subtitle')}</p>
        </Container>
      </section>

      {/* Filters */}
      <Section background="white" style={{ paddingTop: '2rem', paddingBottom: '2rem', position: 'sticky', top: '5rem', zIndex: 40, borderBottom: '1px solid var(--secondary-100)' }}>
        <div className="filter-bar">
          <div style={{ width: '100%', maxWidth: '24rem' }}>
            <Input
              placeholder={t('common.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={Search}
            />
          </div>

          <div className="filter-group">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`filter-btn ${selectedCategory === category.key ? 'filter-btn--active' : ''}`}
              >
                {category.label[language]}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* News Grid */}
      <Section background="light">
        {filteredNews.length > 0 ? (
          <>
            {filteredNews.length > 0 && (
              <div style={{ marginBottom: '3rem' }} className="animate-slide-up">
                <NewsCard news={filteredNews[0]} featured />
              </div>
            )}

            <div className="grid grid--3">
              {filteredNews.slice(1).map((news, index) => (
                <div key={news.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NewsCard news={news} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-state__icon">
              <Search />
            </div>
            <h3 className="empty-state__title">
              {language === 'kz' ? 'Жаңалықтар табылмады' : language === 'ru' ? 'Новости не найдены' : 'No news found'}
            </h3>
            <p className="empty-state__text">
              {language === 'kz'
                ? 'Іздеу сұрауын немесе санатты өзгертіп көріңіз'
                : language === 'ru'
                ? 'Попробуйте изменить поисковый запрос или категорию'
                : 'Try changing your search query or category'}
            </p>
          </div>
        )}
      </Section>
    </>
  );
}

export default NewsPage;
