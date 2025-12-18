import React, { useRef, useCallback } from 'react';
import './WidgetPoster.css';

interface WidgetPosterProps {
  score: number;
  maxScore: number;
  category: string;
}

export const WidgetPoster: React.FC<WidgetPosterProps> = ({ score, maxScore, category }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high resolution
    const width = 800;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const bgColor = isDark ? '#1C1C1E' : '#FFFFFF';
    const textColor = isDark ? '#FFFFFF' : '#000000';
    const secondaryTextColor = '#8E8E93';
    const accentColor = '#007AFF';

    // Helper: Rounded Rect
    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    };

    // Helper: Wrap Text
    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
      const words = text.split(' ');
      let line = '';
      let currentY = y;
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + ' ';
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
      return currentY;
    };

    // 1. Full Canvas Background
    ctx.fillStyle = isDark ? '#000000' : '#F2F2F7';
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Widget Card
    const wSize = 500;
    const wX = (width - wSize) / 2;
    const wY = (height - wSize) / 2;
    const wRadius = 80;

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.12)';
    ctx.shadowBlur = 50;
    ctx.shadowOffsetY = 15;
    roundRect(wX, wY, wSize, wSize, wRadius);
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.restore();

    // 3. Header: Icon + Title
    const iconSize = 64;
    const iconX = wX + 40;
    const iconY = wY + 40;
    
    // Icon Background (Gradient)
    const iconGrad = ctx.createLinearGradient(iconX, iconY, iconX, iconY + iconSize);
    iconGrad.addColorStop(0, '#5AC8FA');
    iconGrad.addColorStop(1, '#007AFF');
    roundRect(iconX, iconY, iconSize, iconSize, 16);
    ctx.fillStyle = iconGrad;
    ctx.fill();

    // Icon Symbol (Simplified Rice Bowl)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(iconX + 32, iconY + 38, 18, 0, Math.PI, false);
    ctx.fill();
    ctx.fillRect(iconX + 20, iconY + 18, 24, 4);
    ctx.fillRect(iconX + 26, iconY + 26, 12, 4);

    // Title
    ctx.textAlign = 'left';
    ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "SF Pro Display"';
    ctx.fillStyle = textColor;
    ctx.fillText('Rice Purity', iconX + 85, iconY + 44);

    // 4. Score Display (Centered in the card)
    const cardContentCenterY = wY + wSize / 2 + 30; // Slightly adjusted for visual balance
    
    // Large Score
    ctx.textAlign = 'center';
    ctx.font = '900 180px -apple-system, BlinkMacSystemFont, "SF Pro Display"';
    ctx.fillStyle = textColor;
    ctx.fillText(score.toString(), wX + wSize / 2, cardContentCenterY);

    // Max Score
    ctx.font = '600 40px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText(`/${maxScore}`, wX + wSize / 2, cardContentCenterY + 65);

    // 5. Footer
    ctx.textAlign = 'center';
    ctx.font = '500 24px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('ricepurity.online', width / 2, wY + wSize + 65);

    // Download
    const link = document.createElement('a');
    link.download = `rice-purity-score-${score}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  }, [score, maxScore, category]);


  return (
    <div className="widget-poster-container">
      <button onClick={generateImage} className="button-secondary">
        <span style={{ marginRight: '8px' }}>🖼️</span>
        Download Poster
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};
