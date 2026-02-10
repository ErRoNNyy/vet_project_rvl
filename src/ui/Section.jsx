import { Container } from './Container';

export function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  background = 'white',
  ...props
}) {
  const bgClass = `section--${background}`;
  const classes = ['section', bgClass, className].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true, className = '' }) {
  const classes = ['section-header', !centered && 'text-left', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}

export default Section;
