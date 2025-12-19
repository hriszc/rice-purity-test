import React, { useRef, useCallback } from 'react';
import './WidgetPoster.css';

interface WidgetPosterProps {
  score: number;
  maxScore: number;
  verdict?: string;
  title?: string;
}

export const WidgetPoster: React.FC<WidgetPosterProps> = ({ score, maxScore, verdict, title }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high resolution for better sharing quality
    const width = 1200;
    const height = 1600;
    canvas.width = width;
    canvas.height = height;

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const bgColor = isDark ? '#1C1C1E' : '#FFFFFF';
    const textColor = isDark ? '#FFFFFF' : '#1C1C1E';
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

    // 1. Background
    ctx.fillStyle = isDark ? '#000000' : '#F2F2F7';
    ctx.fillRect(0, 0, width, height);

    // 2. Main Certificate Card
    const margin = 60;
    const cardWidth = width - margin * 2;
    const cardHeight = height - margin * 2;
    const cardX = margin;
    const cardY = margin;
    const cardRadius = 40;

    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,0.15)';
    ctx.shadowBlur = 60;
    ctx.shadowOffsetY = 20;
    roundRect(cardX, cardY, cardWidth, cardHeight, cardRadius);
    ctx.fillStyle = bgColor;
    ctx.fill();
    
    // Border
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 12;
    ctx.stroke();
    
    // Inner border
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 2;
    roundRect(cardX + 30, cardY + 30, cardWidth - 60, cardHeight - 60, cardRadius - 10);
    ctx.stroke();
    ctx.restore();

    // 3. Content
    ctx.textAlign = 'center';
    
    // Title
    ctx.font = 'bold 80px -apple-system, BlinkMacSystemFont, "SF Pro Display"';
    ctx.fillStyle = textColor;
    ctx.fillText('CERTIFICATE OF PURITY', width / 2, cardY + 180);

    // Subtitle
    ctx.font = '500 40px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('THIS IS TO CERTIFY THAT THE SUBJECT SCORED', width / 2, cardY + 280);

    // Score
    ctx.font = '900 320px -apple-system';
    ctx.fillStyle = accentColor;
    ctx.fillText(score.toString(), width / 2, cardY + 600);
    
    ctx.font = 'bold 80px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText(`OUT OF ${maxScore}`, width / 2, cardY + 720);

    // Title Badge
    if (title) {
      const badgeW = 400;
      const badgeH = 80;
      const badgeX = (width - badgeW) / 2;
      const badgeY = cardY + 780;
      roundRect(badgeX, badgeY, badgeW, badgeH, 40);
      ctx.fillStyle = accentColor;
      ctx.fill();
      
      ctx.font = 'bold 44px -apple-system';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(title.toUpperCase(), width / 2, badgeY + 55);
    }

    // Verdict
    if (verdict) {
      const vMargin = 150;
      const vWidth = width - vMargin * 2;
      ctx.font = 'italic 44px -apple-system';
      ctx.fillStyle = textColor;
      
      // Simple text wrapping
      const words = verdict.split(' ');
      let line = '';
      let y = cardY + 980;
      const lineHeight = 60;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > vWidth && n > 0) {
          ctx.fillText(line, width / 2, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, width / 2, y);
    }

    // 4. Seal/Stamp (Bottom Left)
    const sealX = cardX + 200;
    const sealY = cardHeight - 150;
    
    ctx.save();
    ctx.translate(sealX, sealY);
    ctx.rotate(-0.2);
    
    // Outer circle of seal
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2);
    ctx.stroke();
    
    // Inner text of seal
    ctx.font = 'bold 24px -apple-system';
    ctx.fillStyle = accentColor;
    ctx.fillText('OFFICIAL', 0, -20);
    ctx.fillText('RICE TEST', 0, 10);
    ctx.fillText('2025', 0, 40);
    
    ctx.restore();

    // 5. Signature Line (Bottom Right)
    const sigX = cardWidth - 250;
    const sigY = cardHeight - 150;
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sigX - 150, sigY);
    ctx.lineTo(sigX + 150, sigY);
    ctx.stroke();
    
    ctx.font = '13 28px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('Willy the Owl', sigX, sigY + 40);

    // 6. Website Footer
    ctx.font = '400 32px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('ricepurity.online', width / 2, height - 100);

    // Trigger Download
    const link = document.createElement('a');
    link.download = `rice-purity-certificate-${score}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  }, [score, maxScore, verdict, title]);


  return (
    <div className="widget-poster-container">
      <button onClick={generateImage} className="button-secondary">
        <span style={{ marginRight: '8px' }}>📜</span>
        Generate Certificate
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};
