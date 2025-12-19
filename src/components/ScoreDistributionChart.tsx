import React from 'react';
import { getFullRankingData } from '../rankingData';
import './ScoreDistributionChart.css';

interface ScoreDistributionChartProps {
  userScore: number;
}

const allRankingData = getFullRankingData();

export const ScoreDistributionChart: React.FC<ScoreDistributionChartProps> = ({ userScore }) => {
  // We use the prob from rankingData to show the distribution
  // We'll normalize the scores to 0-150 range for the chart
  const maxProb = Math.max(...allRankingData.map(d => d.prob));
  
  // Grouping by 5 points for better visualization if needed, 
  // but let's try showing the raw curve first.
  
  return (
    <div className="distribution-chart-container">
      <h3 className="chart-title">Global Score Distribution</h3>
      <div className="chart-wrapper">
        <div className="chart-area">
          {allRankingData.map((d) => {
            const height = (d.prob / maxProb) * 100;
            const isUserScore = d.score === userScore;
            
            return (
              <div 
                key={d.score} 
                className={`chart-bar ${isUserScore ? 'user-bar' : ''}`}
                style={{ 
                  height: `${height}%`,
                  left: `${((150 - d.score) / 150) * 100}%`
                }}
              >
                {isUserScore && (
                  <div className="user-indicator">
                    <div className="user-label">You</div>
                    <div className="user-dot"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="chart-x-axis">
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
      </div>
      <p className="chart-legend">
        Higher scores mean more pure. Most users score in the 110-150 range.
      </p>
    </div>
  );
};
