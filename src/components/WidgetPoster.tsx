import React, { useRef, useCallback } from 'react';
import './WidgetPoster.css';

interface WidgetPosterProps {
  score: number;
  maxScore: number;
  verdict?: string;
  title?: string;
  rankingLabel?: string;
}

export const WidgetPoster: React.FC<WidgetPosterProps> = ({ score, maxScore, verdict, title, rankingLabel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

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
    ctx.font = '500 36px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('THIS IS TO CERTIFY THAT THE SUBJECT SCORED', width / 2, cardY + 280);

    // Score
    ctx.font = '900 360px -apple-system';
    ctx.fillStyle = accentColor;
    ctx.fillText(score.toString(), width / 2, cardY + 620);
    
    ctx.font = 'bold 80px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText(`OUT OF ${maxScore}`, width / 2, cardY + 740);

    // Title Badge & Ranking
    let yOffset = cardY + 820;
    
    if (title) {
      const badgeW = 450;
      const badgeH = 90;
      const badgeX = (width - badgeW) / 2;
      roundRect(badgeX, yOffset, badgeW, badgeH, 45);
      ctx.fillStyle = accentColor;
      ctx.fill();
      
      ctx.font = 'bold 48px -apple-system';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(title.toUpperCase(), width / 2, yOffset + 60);
      yOffset += 140;
    }

    if (rankingLabel) {
      ctx.font = 'bold 54px -apple-system';
      ctx.fillStyle = accentColor;
      ctx.fillText(rankingLabel.toUpperCase(), width / 2, yOffset);
      yOffset += 70;
      
      ctx.font = '500 32px -apple-system';
      ctx.fillStyle = secondaryTextColor;
      ctx.fillText('GLOBAL PERCENTILE RANKING', width / 2, yOffset);
      yOffset += 120;
    } else {
      yOffset += 50;
    }

    // Verdict
    if (verdict) {
      const vMargin = 180;
      const vWidth = width - vMargin * 2;
      ctx.font = 'italic 42px -apple-system';
      ctx.fillStyle = textColor;
      
      // Simple text wrapping
      const words = verdict.split(' ');
      let line = '';
      let y = yOffset;
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
    const sealX = cardX + 220;
    const sealY = cardHeight - 120;
    
    ctx.save();
    ctx.translate(sealX, sealY);
    ctx.rotate(-0.15);
    
    // Outer circle of seal
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 0, 110, 0, Math.PI * 2);
    ctx.stroke();
    
    // Inner text of seal
    ctx.font = 'bold 26px -apple-system';
    ctx.fillStyle = accentColor;
    ctx.fillText('OFFICIAL', 0, -25);
    ctx.fillText('RICE TEST', 0, 10);
    ctx.fillText('2025', 0, 45);
    
    ctx.restore();

    // 5. Signature Line (Bottom Right)
    const sigX = cardWidth - 250;
    const sigY = cardHeight - 120;
    ctx.strokeStyle = textColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sigX - 180, sigY);
    ctx.lineTo(sigX + 180, sigY);
    ctx.stroke();
    
    ctx.font = 'italic 42px "Cursive", "Apple Chancery", "Snell Roundhand", serif';
    ctx.fillStyle = textColor;
    ctx.fillText('Willy the Owl', sigX, sigY - 20);
    
    ctx.font = '500 28px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('Chief Purity Officer', sigX, sigY + 45);

    // 6. Website Footer
    ctx.font = '600 36px -apple-system';
    ctx.fillStyle = secondaryTextColor;
    ctx.fillText('ricepurity.online', width / 2, height - 100);

    return canvas;
  }, [score, maxScore, verdict, title, rankingLabel]);

  const generateImage = useCallback(() => {
    const canvas = drawCanvas();
    if (!canvas) return;

    // Trigger Download
    const link = document.createElement('a');
    link.download = `rice-purity-certificate-${score}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.click();
  }, [drawCanvas, score]);

  const shareImage = useCallback(async () => {
    const canvas = drawCanvas();
    if (!canvas) return;

    try {
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/png'));
      if (!blob) return;

      const file = new File([blob], `rice-purity-certificate-${score}.png`, { type: 'image/png' });
      
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'My Rice Purity Test Certificate',
          text: `I scored ${score}/150 on the Rice Purity Test! 🏆 #RicePurityTest`,
        });
      } else {
        // Fallback to download if sharing is not supported
        generateImage();
        alert('Sharing files is not supported on this browser. Certificate downloaded instead!');
      }
    } catch (err) {
      console.error('Error sharing image:', err);
    }
  }, [drawCanvas, score, generateImage]);


  return (
    <div className="widget-poster-container">
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <button onClick={generateImage} className="button-secondary" style={{ flex: 1 }}>
          <span style={{ marginRight: '8px' }}>💾</span>
          Save Image
        </button>
        <button onClick={shareImage} className="button-primary" style={{ flex: 1, backgroundColor: '#007AFF', color: 'white' }}>
          <span style={{ marginRight: '8px' }}>𝕏</span>
          Share to X
        </button>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};
