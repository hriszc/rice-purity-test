import React from 'react';
import './ScoreDial.css';

interface ScoreDialProps {
  score: number;
  maxScore: number;
  title?: string;
  category: string;
}

export const ScoreDial: React.FC<ScoreDialProps> = ({ score, maxScore, title, category }) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Hardcoded hex values for reliable image capture
  const colors = {
    green: isDark ? '#30d158' : '#34c759',
    yellow: isDark ? '#ffd60a' : '#ffcc00',
    orange: isDark ? '#ff9f0a' : '#ff9500',
    red: isDark ? '#ff453a' : '#ff3b30',
    label: isDark ? '#ffffff' : '#000000',
    secondaryLabel: '#8e8e93',
    separator: isDark ? '#38383a' : '#c6c6c8',
    accent: isDark ? '#0a84ff' : '#007aff',
  };

  const getColor = (p: number) => {
    if (p >= 0.9) return colors.green;
    if (p >= 0.7) return colors.yellow;
    if (p >= 0.5) return colors.orange;
    return colors.red;
  };

  const percentage = score / maxScore;
  const ringColor = getColor(percentage);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage * circumference);

  return (
    <div className="score-dial-container">
      {title && (
        <div className="score-title-badge" style={{ backgroundColor: colors.accent, color: '#ffffff' }}>
          {title}
        </div>
      )}
      <div className="score-dial">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle
            cx="70"
            cy="70"
            r={radius}
            strokeWidth="10"
            fill="none"
            stroke={colors.separator}
          />
          <circle
            cx="70"
            cy="70"
            r={radius}
            strokeWidth="10"
            fill="none"
            stroke={ringColor}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <div className="score-value" style={{ color: colors.label }}>
            {score}
            <div className="score-max" style={{ color: colors.secondaryLabel }}>/{maxScore}</div>
        </div>
      </div>
      <div className="score-description visible" style={{ color: colors.secondaryLabel }}>
        {category}
      </div>
    </div>
  );
};
