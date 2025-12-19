import React, { useEffect, useState } from 'react';
import './ScoreDial.css';

interface ScoreDialProps {
  score: number;
  maxScore: number;
  title?: string;
  category: string;
}

export const ScoreDial: React.FC<ScoreDialProps> = ({ score, maxScore, title, category }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const end = score;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentScore = Math.floor(easeProgress * end);
      
      setAnimatedScore(currentScore);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [score]);

  // Calculate color based on percentage (100% is pure, 0% is corrupt)
  const getColor = (p: number) => {
    if (p >= 0.9) return 'var(--system-green)';
    if (p >= 0.7) return 'var(--system-yellow)';
    if (p >= 0.5) return 'var(--system-orange)';
    return 'var(--system-red)';
  };

  const percentage = score / maxScore;
  const color = getColor(percentage);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage * circumference);

  return (
    <div className="score-dial-container">
      {title && (
        <div className="score-title-badge">
          {title}
        </div>
      )}
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
            className="dial-progress animate-ring"
            cx="70"
            cy="70"
            r={radius}
            strokeWidth="10"
            stroke={color}
            strokeDasharray={circumference}
            style={{ 
               '--target-offset': offset, 
               '--circumference': circumference,
               transition: 'stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1), stroke 0.5s'
            } as React.CSSProperties}
            strokeLinecap="round"
            transform="rotate(-90 70 70)"
          />
        </svg>
        <div className="score-value">
            {animatedScore}
            <div className="score-max">/{maxScore}</div>
        </div>
      </div>
      <div className="score-description visible">
        {category}
      </div>
    </div>
  );
};
