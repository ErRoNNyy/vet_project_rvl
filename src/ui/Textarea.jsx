import { forwardRef } from 'react';

export const Textarea = forwardRef(function Textarea(
  { className = '', label, error, helperText, rows = 4, ...props },
  ref
) {
  const textareaClass = ['textarea', error && 'textarea--error', className].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <textarea
        className={textareaClass}
        rows={rows}
        ref={ref}
        {...props}
      />
      {error && <p className="input-error">{error}</p>}
      {helperText && !error && <p className="input-helper">{helperText}</p>}
    </div>
  );
});

export default Textarea;
