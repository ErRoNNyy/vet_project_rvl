import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Newspaper, Beaker } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useDebounce } from './useDebounce';
import { servicesData } from '../data/services';
import { newsData } from '../data/news';
import { getAllDocuments } from '../data/documents';

export const categoryLabels = {
  services: { kz: 'Қызмет', ru: 'Услуга', en: 'Service' },
  news: { kz: 'Жаңалық', ru: 'Новость', en: 'News' },
  documents: { kz: 'Құжат', ru: 'Документ', en: 'Document' },
};

const buildSearchData = (language) => {
  const results = [];
  
  servicesData.forEach(service => {
    const searchableText = [
      service.title.kz, service.title.ru, service.title.en,
      service.description.kz, service.description.ru, service.description.en,
      ...service.features.kz, ...service.features.ru, ...service.features.en,
    ].join(' ').toLowerCase();
    
    results.push({
      id: `service-${service.id}`,
      title: service.title[language],
      subtitle: service.description[language].slice(0, 80) + '...',
      path: '/services',
      searchableText,
      category: 'services',
      icon: Beaker,
    });
  });
  
  newsData.forEach(news => {
    const searchableText = [
      news.title.kz, news.title.ru, news.title.en,
      news.excerpt.kz, news.excerpt.ru, news.excerpt.en,
      news.category, news.slug,
    ].join(' ').toLowerCase();
    
    results.push({
      id: `news-${news.id}`,
      title: news.title[language],
      subtitle: news.excerpt[language].slice(0, 80) + '...',
      path: '/news',
      searchableText,
      category: 'news',
      icon: Newspaper,
      date: news.date,
    });
  });
  
  const allDocs = getAllDocuments();
  allDocs.forEach(doc => {
    const searchableText = [
      doc.title.kz, doc.title.ru, doc.title.en,
    ].join(' ').toLowerCase();
    
    results.push({
      id: `doc-${doc.id}`,
      title: doc.title[language],
      subtitle: doc.url !== '#' ? doc.url : null,
      path: '/documents',
      searchableText,
      category: 'documents',
      icon: FileText,
      url: doc.url,
      date: doc.date,
    });
  });
  
  return results;
};


const calculateRelevance = (item, searchTerm) => {
  const title = item.title.toLowerCase();
  const term = searchTerm.toLowerCase();
  
  if (title === term) return 100;
  
  if (title.startsWith(term)) return 80;
  
  if (title.includes(` ${term}`) || title.includes(`${term} `)) return 60;
  
  if (title.includes(term)) return 40;
  
  if (item.searchableText.includes(term)) return 20;
  
  return 0;
};


export function useSearch(debounceDelay = 150, maxResults = 8) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const searchData = useMemo(() => buildSearchData(language), [language]);
  
  const debouncedQuery = useDebounce(query, debounceDelay);
  
  useEffect(() => {
    if (debouncedQuery.trim().length >= 2) {
      const searchTerm = debouncedQuery.toLowerCase();
      
      const matched = searchData
        .map(item => ({
          ...item,
          relevance: calculateRelevance(item, searchTerm),
        }))
        .filter(item => item.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, maxResults);
      
      setResults(matched);
    } else {
      setResults([]);
    }
  }, [debouncedQuery, searchData, maxResults]);
  
  const openSearch = () => setIsOpen(true);
  
  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };
  
  const toggleSearch = () => {
    if (isOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  };
  
  const handleQueryChange = (value) => {
    setQuery(value);
  };
  
  const clearQuery = () => {
    setQuery('');
    setResults([]);
  };
  
  const selectResult = (path) => {
    navigate(path);
    closeSearch();
  };
  
  return {
    isOpen,
    query,
    results,
    language,
    
    openSearch,
    closeSearch,
    toggleSearch,
    handleQueryChange,
    clearQuery,
    selectResult,
    setIsOpen,
  };
}

export default useSearch;

