import React from 'react';
import './ToggleRow.css';

interface ToggleRowProps {
  label: string;
  index: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
  last?: boolean;
}

export const ToggleRow: React.FC<ToggleRowProps> = ({ label, index, checked, onChange, last }) => {
  return (
    <div className="toggle-row" onClick={() => onChange(!checked)}>
      <div className="row-number">{index}.</div>
      <div className={`row-content ${last ? 'last' : ''}`}>
        <span className="row-label">{label}</span>
        <div className={`ios-switch ${checked ? 'checked' : ''}`}>
          <div className="switch-handle" />
        </div>
      </div>
    </div>
  );
};
