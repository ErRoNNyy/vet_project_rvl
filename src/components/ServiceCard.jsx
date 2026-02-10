import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, ClipboardCheck, FlaskConical, MessageSquare, GraduationCap, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from '../ui';

const icons = {
  Microscope,
  ClipboardCheck,
  FlaskConical,
  MessageSquare,
  GraduationCap,
  FileCheck,
};

export function ServiceCard({ service, index = 0 }) {
  const { language } = useLanguage();
  const Icon = icons[service.icon] || Microscope;

  return (
    <Card 
      hover 
      className="service-card animate-slide-up" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="service-card__icon">
        <Icon />
      </div>

      <h3 className="service-card__title">
        {service.title[language]}
      </h3>

      <p className="service-card__description">
        {service.description[language]}
      </p>

      {service.features && (
        <ul className="service-card__features">
          {service.features[language].slice(0, 3).map((feature, i) => (
            <li key={i} className="service-card__feature">
              <span className="service-card__feature-dot"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link to={`/services#service-${service.id}`} className="service-card__link">
        Learn more
        <ArrowRight size={16} />
      </Link>
    </Card>
  );
}

export default ServiceCard;
