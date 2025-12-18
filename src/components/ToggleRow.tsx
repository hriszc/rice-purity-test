import React, { type KeyboardEvent } from 'react';
import './ToggleRow.css';

interface ToggleRowProps {
  label: string;
  index: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
  last?: boolean;
}

export const ToggleRow: React.FC<ToggleRowProps> = ({ label, index, checked, onChange, last }) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <label 
      className="toggle-row"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="checkbox"
      aria-checked={checked}
      aria-label={`${index}. ${label}`}
    >
      <input 
        type="checkbox" 
        className="hidden-checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        tabIndex={-1}
      />
      <div className="row-number">{index}.</div>
      <div className={`row-content ${last ? 'last' : ''}`}>
        <span className="row-label">{label}</span>
        <div className={`ios-switch ${checked ? 'checked' : ''}`} aria-hidden="true">
          <div className="switch-handle" />
        </div>
      </div>
    </label>
  );
};
