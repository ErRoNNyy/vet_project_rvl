import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { isValidEmail } from '../utils/helpers';
import { Button, Input, Textarea, Card } from '../ui';

export function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (isSubmitted) {
    return (
      <Card className="contact-form">
        <div className="contact-form__success">
          <div className="contact-form__success-icon">
            <CheckCircle />
          </div>
          <h3 className="contact-form__success-title">
            {language === 'kz' ? 'Хабарлама жіберілді!' : 
             language === 'ru' ? 'Сообщение отправлено!' : 
             'Message Sent!'}
          </h3>
          <p className="contact-form__success-text">
            {language === 'kz' ? 'Біз сізге жақын арада жауап береміз.' : 
             language === 'ru' ? 'Мы ответим вам в ближайшее время.' : 
             'We will get back to you soon.'}
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            {language === 'kz' ? 'Жаңа хабарлама' : 
             language === 'ru' ? 'Новое сообщение' : 
             'Send Another'}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="contact-form__grid">
          <Input
            label={t('contact.form.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder={t('contact.form.name')}
          />
          <Input
            label={t('contact.form.email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="example@email.com"
          />

          <div className="contact-form__row">
            <Input
              label={t('contact.form.subject')}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder={t('contact.form.subject')}
            />
          </div>

          <div className="contact-form__row">
            <Textarea
              label={t('contact.form.message')}
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder={t('contact.form.message')}
              rows={5}
            />
          </div>

          <div className="contact-form__row">
            <Button type="submit" size="lg" icon={Send} loading={isSubmitting}>
              {t('contact.form.send')}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default ContactForm;
