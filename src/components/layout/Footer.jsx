import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  Send,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { CONTACT_INFO, SOCIAL_LINKS, EXTERNAL_LINKS, NAV_ITEMS } from '../../utils/constants';
import { Container } from '../../ui';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <Container>
          <div className="footer__grid">
            <div>
              <Link to="/" className="footer__brand">
                <div className="footer__logo">
                  <span>RVL</span>
                </div>
                <div>
                  <h2 className="footer__brand-name">
                    {language === 'kz' ? 'РВЗ' : language === 'ru' ? 'РВЛ' : 'RVL'}
                  </h2>
                  <p className="footer__brand-desc">
                    {language === 'kz' 
                      ? 'Республикалық ветеринариялық зертхана' 
                      : language === 'ru' 
                      ? 'Республиканская ветеринарная лаборатория'
                      : 'Republican Veterinary Laboratory'}
                  </p>
                </div>
              </Link>
              <p className="footer__about">
                {t('about.description')}
              </p>
              
              <div className="footer__social">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Telegram">
                  <Send size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="footer__title">{t('footer.quickLinks')}</h3>
              <ul className="footer__links">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key}>
                    <Link to={item.path} className="footer__link">
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="footer__title">{t('footer.usefulLinks')}</h3>
              <ul className="footer__links">
                <li>
                  <a href={EXTERNAL_LINKS.egov} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--external">
                    eGov.kz
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href={EXTERNAL_LINKS.government} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--external">
                    {language === 'kz' ? 'Үкімет порталы' : language === 'ru' ? 'Портал правительства' : 'Government Portal'}
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href={EXTERNAL_LINKS.adilet} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--external">
                    Adilet.zan.kz
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href={EXTERNAL_LINKS.goszakup} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--external">
                    Goszakup.gov.kz
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
                
            <div>
              <h3 className="footer__title">{t('contact.title')}</h3>
              <ul>
                <li className="footer__contact-item">
                  <MapPin size={20} className="footer__contact-icon" />
                  <span className="footer__contact-text">{CONTACT_INFO.address[language]}</span>
                </li>
                <li className="footer__contact-item">
                  <Phone size={20} className="footer__contact-icon" />
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="footer__contact-link">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="footer__contact-item">
                  <Mail size={20} className="footer__contact-icon" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="footer__contact-link">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="footer__contact-item">
                  <Clock size={20} className="footer__contact-icon" />
                  <span className="footer__contact-text">{CONTACT_INFO.workHours[language]}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} {language === 'kz' ? 'РВЗ' : language === 'ru' ? 'РВЛ' : 'RVL'}. {t('footer.rights')}
            </p>
            <div className="footer__bottom-links">
              <Link to="/sitemap" className="footer__bottom-link">{t('footer.sitemap')}</Link>
              <Link to="/privacy" className="footer__bottom-link">{t('footer.privacy')}</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
