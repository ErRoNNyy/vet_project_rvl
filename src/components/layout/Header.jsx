import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollPosition, useSearch } from '../../hooks';
import { NAV_ITEMS } from '../../utils/constants';
import { Container } from '../../ui';
import { SearchResults, MobileSearch } from '../SearchResults';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  
  const { t, language, setLanguage, languages } = useLanguage();
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  
  const search = useSearch(300, 10);

  const navItems = NAV_ITEMS.filter(item => item.key !== 'home');

  useEffect(() => {
    setIsMenuOpen(false);
    search.closeSearch();
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsLangOpen(false);
        search.closeSearch();
      }
    };
    
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        search.openSearch();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (search.isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [search.isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        search.closeSearch();
      }
    };
    
    if (search.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [search.isOpen]);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <Container>
        <nav className="header__nav"> 
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">
              <span>RVL</span>
            </div>
            <div className="header__logo-text">
              <h1 className="header__logo-title">
                {language === 'kz' ? 'РВЗ' : language === 'ru' ? 'РВЛ' : 'RVL'}
              </h1>
              <p className="header__logo-subtitle">
                {language === 'kz' 
                  ? 'Республикалық ветеринариялық зертхана' 
                  : language === 'ru' 
                  ? 'Республиканская ветеринарная лаборатория'
                  : 'Republican Veterinary Laboratory'}
              </p>
            </div>
          </Link>

          <div className="header__menu">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`header__menu-link ${location.pathname === item.path ? 'header__menu-link--active' : ''}`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            
            <div className="header__dropdown">
              <button className="header__dropdown-btn">
                {t('common.viewAll')}
                <ChevronDown size={16} />
              </button>
              <div className="header__dropdown-menu">
                {navItems.slice(5).map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`header__dropdown-link ${location.pathname === item.path ? 'header__menu-link--active' : ''}`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="header__actions">
            <div className="search-container" ref={searchContainerRef}>
              <button 
                className="header__action-btn header__search-btn" 
                onClick={search.toggleSearch}
                aria-label={t('common.search')}
              >
                <Search size={20} />
                <span className="header__search-hint">{language === 'kz' ? 'Іздеу...' : language === 'ru' ? 'Поиск...' : 'Search...'}</span>
              </button>

              <SearchResults
                isOpen={search.isOpen}
                query={search.query}
                results={search.results}
                language={language}
                onQueryChange={search.handleQueryChange}
                onClear={search.clearQuery}
                onSelect={search.selectResult}
                inputRef={searchInputRef}
                placeholder={language === 'kz' ? 'Іздеу...' : language === 'ru' ? 'Поиск...' : 'Search...'}
              />
            </div>

            <div className="lang-selector">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="lang-selector__btn"
              >
                <Globe size={16} />
                <span className="lang-selector__code">
                  {currentLang?.flag} {currentLang?.code.toUpperCase()}
                </span>
                <ChevronDown size={16} />
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed"
                    style={{ inset: 0, zIndex: 10 }}
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="lang-selector__menu animate-scale-in">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`lang-selector__option ${language === lang.code ? 'lang-selector__option--active' : ''}`}
                      >
                        <span className="lang-selector__flag">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header__mobile-btn"
              aria-label={t('common.toggleMenu')}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="header__mobile-menu animate-slide-down">
            <div className="header__mobile-nav">
              <MobileSearch
                query={search.query}
                results={search.results}
                language={language}
                onQueryChange={search.handleQueryChange}
                onSelect={search.selectResult}
              />
              
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`header__mobile-link ${location.pathname === item.path ? 'header__mobile-link--active' : ''}`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
