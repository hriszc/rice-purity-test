import React, { type KeyboardEvent, memo } from 'react';
import './ToggleRow.css';

interface ToggleRowProps {
  label: React.ReactNode;
  emoji?: string;
  index: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
  last?: boolean;
  probability?: number;
}

export const ToggleRow = memo(({ 
  label, 
  emoji, 
  index, 
  checked, 
  onChange, 
  last,
  probability 
}: ToggleRowProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onChange(!checked);
    }
  };

  const handleChange = (newChecked: boolean) => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10); // Light haptic feedback
    }
    onChange(newChecked);
  };

  return (
    <label 
      className={`toggle-row ${checked ? 'is-checked' : ''}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="checkbox"
      aria-checked={checked}
      aria-label={typeof label === 'string' ? `${index}. ${label}` : `Question ${index}`}
    >
      <input 
        type="checkbox" 
        className="hidden-checkbox"
        checked={checked}
        onChange={(e) => handleChange(e.target.checked)}
        tabIndex={-1}
      />
      <div className="row-number">{index}.</div>
      <div className={`row-content ${last ? 'last' : ''}`}>
        <div className="label-with-emoji">
          {emoji && <span className={`row-emoji ${checked ? 'animate-bounce' : ''}`}>{emoji}</span>}
          <div className="label-container">
            <span className="row-label">{label}</span>
            {checked && probability !== undefined && (
              <span className="probability-badge animate-badge-fade-in">
                {probability}% of people also checked this
              </span>
            )}
          </div>
        </div>
        <div className={`ios-switch ${checked ? 'checked' : ''}`} aria-hidden="true">
          <div className="switch-handle" />
        </div>
      </div>
    </label>
  );
});
