import { FileText, Download, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Section, SectionHeader, Container, Card, CardContent, Input, Badge } from '../ui';
import { documentsData } from '../data';
import { formatDate } from '../utils/helpers';

export function DocumentsPage() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: { kz: 'Барлығы', ru: 'Все', en: 'All' } },
    { key: 'laws', label: t('documents.laws') },
    { key: 'regulations', label: t('documents.regulations') },
    { key: 'standards', label: t('documents.standards') },
  ];

  const getAllDocuments = () => {
    const all = [];
    Object.entries(documentsData).forEach(([category, docs]) => {
      docs.forEach((doc) => all.push({ ...doc, category }));
    });
    return all;
  };

  const filteredDocuments = getAllDocuments().filter((doc) => {
    const matchesSearch = doc.title[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'laws': return 'primary';
      case 'regulations': return 'accent';
      case 'standards': return 'success';
      default: return 'default';
    }
  };

  return (
    <>
      <section className="page-hero">
        <Container className="page-hero__content">
          <h1 className="page-hero__title animate-slide-up">{t('documents.title')}</h1>
          <p className="page-hero__subtitle animate-slide-up stagger-1">{t('documents.subtitle')}</p>
        </Container>
      </section>

      {/* Filters */}
      <Section background="white" style={{ paddingTop: '2rem', paddingBottom: '2rem', position: 'sticky', top: '5rem', zIndex: 40, borderBottom: '1px solid var(--secondary-100)' }}>
        <div className="filter-bar">
          <div style={{ width: '100%', maxWidth: '24rem' }}>
            <Input placeholder={t('common.search')} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} icon={Search} />
          </div>
          <div className="filter-group">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`filter-btn ${selectedCategory === category.key ? 'filter-btn--active' : ''}`}
              >
                {typeof category.label === 'object' ? category.label[language] : category.label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Documents List */}
      <Section background="light">
        {filteredDocuments.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredDocuments.map((doc, index) => (
              <Card key={doc.id} hover className="document-card animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="document-card__icon">
                  <FileText />
                </div>
                <div className="document-card__content">
                  <div className="document-card__meta">
                    <Badge variant={getCategoryColor(doc.category)}>
                      {t(`documents.${doc.category === 'laws' ? 'laws' : doc.category === 'regulations' ? 'regulations' : 'standards'}`)}
                    </Badge>
                    <span className="document-card__date">{formatDate(doc.date, language)}</span>
                  </div>
                  <h3 className="document-card__title">{doc.title[language]}</h3>
                </div>
                <div className="document-card__actions">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="document-card__action" title={language === 'kz' ? 'Ашу' : language === 'ru' ? 'Открыть' : 'Open'}>
                    <ExternalLink size={20} />
                  </a>
                  <a href={doc.url} download className="document-card__action" title={language === 'kz' ? 'Жүктеу' : language === 'ru' ? 'Скачать' : 'Download'}>
                    <Download size={20} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state__icon"><FileText /></div>
            <h3 className="empty-state__title">{language === 'kz' ? 'Құжаттар табылмады' : language === 'ru' ? 'Документы не найдены' : 'No documents found'}</h3>
            <p className="empty-state__text">{language === 'kz' ? 'Іздеу сұрауын немесе санатты өзгертіп көріңіз' : language === 'ru' ? 'Попробуйте изменить поисковый запрос или категорию' : 'Try changing your search query or category'}</p>
          </div>
        )}
      </Section>

      {/* External Links */}
      <Section background="white">
        <SectionHeader title={language === 'kz' ? 'Сыртқы ресурстар' : language === 'ru' ? 'Внешние ресурсы' : 'External Resources'} subtitle={language === 'kz' ? 'Пайдалы сілтемелер' : language === 'ru' ? 'Полезные ссылки' : 'Useful Links'} />

        <div className="grid grid--2" style={{ gap: '1.5rem' }}>
          <Card hover className="animate-slide-up">
            <CardContent style={{ padding: '1.5rem' }}>
              <a href="https://adilet.zan.kz/rus" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={24} style={{ color: 'var(--primary-600)' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, color: 'var(--secondary-900)' }}>Adilet.zan.kz</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--secondary-600)' }}>{language === 'kz' ? 'Қазақстан Республикасының заңнамасы' : language === 'ru' ? 'Законодательство Республики Казахстан' : 'Legislation of the Republic of Kazakhstan'}</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card hover className="animate-slide-up stagger-1">
            <CardContent style={{ padding: '1.5rem' }}>
              <a href="https://goszakup.gov.kz/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--accent-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ExternalLink size={24} style={{ color: 'var(--accent-600)' }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, color: 'var(--secondary-900)' }}>Goszakup.gov.kz</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--secondary-600)' }}>{language === 'kz' ? 'Мемлекеттік сатып алу порталы' : language === 'ru' ? 'Портал государственных закупок' : 'Government Procurement Portal'}</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

export default DocumentsPage;
