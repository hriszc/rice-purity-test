import React from 'react';
import './ScoreDial.css';

interface ScoreDialProps {
  score: number;
  maxScore: number;
  category: string;
}

export const ScoreDial: React.FC<ScoreDialProps> = ({ score, maxScore, category }) => {
  // Calculate color based on percentage (100% is pure, 0% is corrupt)
  const getColor = (p: number) => {
    if (p >= 0.9) return '#34c759'; // Green
    if (p >= 0.7) return '#ffcc00'; // Yellow
    if (p >= 0.5) return '#ff9500'; // Orange
    return '#ff3b30'; // Red
  };

  const percentage = score / maxScore;
  const color = getColor(percentage);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage * circumference);

  return (
    <div className="score-dial-container">
      <div className="score-dial">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle
            className="dial-bg"
            cx="70"
            cy="70"
            r={radius}
            strokeWidth="10"
          />
          <circle
            className="dial-progress"
            cx="70"
            cy="70"
            r={radius}
            strokeWidth="10"
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
          />
        </svg>
        <div className="score-value">
            {score}
            <div className="score-max">/{maxScore}</div>
        </div>
      </div>
      <div className="score-category">
        {category}
      </div>
    </div>
  );
};
