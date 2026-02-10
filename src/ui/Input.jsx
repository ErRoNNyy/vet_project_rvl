import { forwardRef } from 'react';

export const Input = forwardRef(function Input(
  { className = '', type = 'text', label, error, helperText, icon: Icon, ...props },
  ref
) {
  const inputClass = ['input', error && 'input--error', Icon && 'input--with-icon', className].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <div className="input-field">
        {Icon && (
          <div className="input-icon">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          className={inputClass}
          ref={ref}
          {...props}
        />
      </div>
      {error && <p className="input-error">{error}</p>}
      {helperText && !error && <p className="input-helper">{helperText}</p>}
    </div>
  );
});

export default Input;
