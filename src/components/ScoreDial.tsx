import React from 'react';
import './ScoreDial.css';

interface ScoreDialProps {
  score: number;
  category: string;
}

export const ScoreDial: React.FC<ScoreDialProps> = ({ score, category }) => {
  // Calculate color based on score (100 is pure, 0 is corrupt)
  // 100 -> Green, 50 -> Yellow, 0 -> Red
  const getColor = (s: number) => {
    if (s >= 90) return '#34c759'; // Green
    if (s >= 70) return '#ffcc00'; // Yellow
    if (s >= 50) return '#ff9500'; // Orange
    return '#ff3b30'; // Red
  };

  const color = getColor(score);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  // Wait, score is 0-150? No, usually 0-100.
  // "Subtract the total from 100". 
  // But this test has 150 questions. "Subtract the total from 150".
  // So score is 0-150.
  
  const percentage = score / 150;
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
            transform="rotate(-90 70 70)"
          />
        </svg>
        <div className="score-value">
            {score}
        </div>
      </div>
      <div className="score-category">
        {category}
      </div>
    </div>
  );
};
