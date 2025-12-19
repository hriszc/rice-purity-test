import React from 'react';
import './RadarChart.css';

interface RadarChartProps {
  data: {
    label: string;
    value: number; // 0 to 100
  }[];
}

export const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
  const size = 350;
  const center = size / 2;
  const radius = 100;
  const angleStep = (Math.PI * 2) / data.length;

  const points = data.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (d.value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      labelX: center + (radius + 35) * Math.cos(angle),
      labelY: center + (radius + 25) * Math.sin(angle),
    };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  // Grid lines (levels)
  const levels = [0.2, 0.4, 0.6, 0.8, 1];
  const gridLines = levels.map((level) => {
    const r = level * radius;
    return data.map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;
      return `${i === 0 ? 'M' : 'L'} ${center + r * Math.cos(angle)} ${center + r * Math.sin(angle)}`;
    }).join(' ') + ' Z';
  });

  return (
    <div className="radar-chart-container">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Grids */}
        {gridLines.map((gl, i) => (
          <path key={i} d={gl} className="radar-grid" />
        ))}
        
        {/* Axis Lines */}
        {data.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              className="radar-axis"
            />
          );
        })}

        {/* Data Area */}
        <path d={pathData} className="radar-area" />
        
        {/* Data Points */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" className="radar-point" />
        ))}

        {/* Labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={points[i].labelX}
            y={points[i].labelY}
            textAnchor="middle"
            className="radar-label"
          >
            {d.label}
          </text>
        ))}
      </svg>
    </div>
  );
};
