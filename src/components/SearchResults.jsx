import { forwardRef } from 'react';
import { Search, X } from 'lucide-react';
import { categoryLabels } from '../hooks/useSearch';

export const SearchResults = forwardRef(function SearchResults({
  isOpen,
  query,
  results,
  language,
  onQueryChange,
  onClear,
  onSelect,
  inputRef,
  placeholder,
}, ref) {
  if (!isOpen) return null;

  const placeholderText = placeholder || (
    language === 'kz' ? 'Іздеу (мысалы: диагностика, вакцина, ISO)' 
    : language === 'ru' ? 'Поиск (например: диагностика, вакцина, ISO)' 
    : 'Search (e.g., diagnostics, vaccine, ISO)'
  );

  const noResultsText = language === 'kz' ? 'Нәтиже табылмады' 
    : language === 'ru' ? 'Ничего не найдено' 
    : 'No results found';

  const hintText = language === 'kz' ? 'Кемінде 2 әріп теріңіз...' 
    : language === 'ru' ? 'Введите минимум 2 буквы...' 
    : 'Type at least 2 characters...';

  const minCharsNeeded = query.length > 0 && query.length < 2;

  return (
    <div className="search-dropdown animate-scale-in" ref={ref}>
      <div className="search-dropdown__input-wrapper">
        <Search size={20} className="search-dropdown__icon" />
        <input
          ref={inputRef}
          type="text"
          className="search-dropdown__input"
          placeholder={placeholderText}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query && (
          <button 
            className="search-dropdown__clear"
            onClick={onClear}
            type="button"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      {results.length > 0 ? (
        <div className="search-dropdown__results">
          {results.map((result) => {
            const IconComponent = result.icon;
            return (
              <button
                key={result.id}
                className="search-dropdown__result"
                onClick={() => onSelect(result.path)}
                type="button"
              >
                <div className="search-dropdown__result-left">
                  <span className="search-dropdown__result-icon">
                    <IconComponent size={18} />
                  </span>
                  <div className="search-dropdown__result-info">
                    <span className="search-dropdown__result-title">{result.title}</span>
                    {result.subtitle && (
                      <span className="search-dropdown__result-subtitle">{result.subtitle}</span>
                    )}
                  </div>
                </div>
                <span className="search-dropdown__result-badge">
                  {categoryLabels[result.category]?.[language]}
                </span>
              </button>
            );
          })}
        </div>
      ) : minCharsNeeded ? (
        <div className="search-dropdown__hint">{hintText}</div>
      ) : query.length >= 2 ? (
        <div className="search-dropdown__empty">{noResultsText}</div>
      ) : (
        <div className="search-dropdown__hint">{hintText}</div>
      )}
    </div>
  );
});

export function MobileSearch({
  query,
  results,
  language,
  onQueryChange,
  onSelect,
}) {
  const placeholderText = language === 'kz' ? 'Іздеу...' 
    : language === 'ru' ? 'Поиск...' 
    : 'Search...';

  return (
    <div className="header__mobile-search">
      <div className="search-dropdown__input-wrapper">
        <Search size={20} className="search-dropdown__icon" />
        <input
          type="text"
          className="search-dropdown__input"
          placeholder={placeholderText}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
      {results.length > 0 && (
        <div className="search-dropdown__results">
          {results.map((result) => {
            const IconComponent = result.icon;
            return (
              <button
                key={result.id}
                className="search-dropdown__result"
                onClick={() => onSelect(result.path)}
                type="button"
              >
                <div className="search-dropdown__result-left">
                  <span className="search-dropdown__result-icon">
                    <IconComponent size={18} />
                  </span>
                  <div className="search-dropdown__result-info">
                    <span className="search-dropdown__result-title">{result.title}</span>
                    <span className="search-dropdown__result-badge">
                      {categoryLabels[result.category]?.[language]}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchResults;

