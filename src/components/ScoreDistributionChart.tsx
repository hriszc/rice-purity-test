import React, { useMemo } from 'react';
import { getFullRankingData } from '../rankingData';
import './ScoreDistributionChart.css';

interface ScoreDistributionChartProps {
  userScore: number;
}

const allRankingData = getFullRankingData();

export const ScoreDistributionChart: React.FC<ScoreDistributionChartProps> = ({ userScore }) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const colors = {
    accent: isDark ? '#0a84ff' : '#007aff',
    user: isDark ? '#ff453a' : '#ff3b30',
    labelBg: isDark ? '#2c2c2e' : '#ffffff',
    text: isDark ? '#ffffff' : '#000000',
    secondaryText: '#8e8e93',
    separator: isDark ? '#38383a' : '#c6c6c8'
  };

  // Group by 2 points to reduce bar count and make them more visible in captures
  const groupedData = useMemo(() => {
    const groups: { score: number; prob: number; hasUser: boolean }[] = [];
    for (let i = 150; i >= 0; i -= 2) {
      const d1 = allRankingData.find(d => d.score === i);
      const d2 = allRankingData.find(d => d.score === i - 1);
      const prob = (d1?.prob || 0) + (d2?.prob || 0);
      groups.push({
        score: i,
        prob,
        hasUser: i === userScore || (i - 1) === userScore
      });
    }
    return groups;
  }, [userScore]);

  const maxProb = Math.max(...groupedData.map(d => d.prob));
  
  return (
    <div className="distribution-chart-container">
      <h3 className="chart-title" style={{ color: colors.text }}>Global Score Distribution</h3>
      <div className="chart-wrapper">
        <div className="chart-area" style={{ borderBottom: `1px solid ${colors.separator}` }}>
          {groupedData.map((d) => {
            const height = (d.prob / maxProb) * 100;
            const isUserGroup = d.hasUser;
            
            return (
              <div 
                key={d.score} 
                className={`chart-bar ${isUserGroup ? 'user-bar' : ''}`}
                style={{ 
                  height: `${height}%`,
                  backgroundColor: isUserGroup ? colors.user : colors.accent
                }}
              >
                {isUserGroup && (
                  <div className="user-indicator">
                    <div className="user-label" style={{ backgroundColor: colors.labelBg, color: colors.user }}>You</div>
                    <div className="user-dot" style={{ backgroundColor: colors.user }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="chart-x-axis" style={{ color: colors.secondaryText }}>
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
      </div>
      <p className="chart-legend" style={{ color: colors.secondaryText }}>
        Higher scores mean more pure. Most users score in the 110-150 range.
      </p>
    </div>
  );
};
