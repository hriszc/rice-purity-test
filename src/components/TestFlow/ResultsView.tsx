import React, { useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { toPng } from 'html-to-image';
import { IOSLayout } from '../IOSLayout';
import { SEOContent } from '../SEOContent';
import { RadarChart } from '../RadarChart';
import { WidgetPoster, type WidgetPosterHandle } from '../WidgetPoster';
import { CertificateCard } from './CertificateCard';

interface ResultsViewProps {
  displayScore: number;
  rankingDetails: any;
  categoryScores: any[];
  handleRetake: () => void;
  handleReset: () => void;
  setView: (view: 'test' | 'results') => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  displayScore,
  rankingDetails,
  categoryScores,
  handleRetake,
  handleReset,
  setView,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<WidgetPosterHandle>(null);

  const {
    rankingLabel,
    fullVerdict,
    shareText,
    isFlipped,
    pPurerOrEqual,
    pLessPureOrEqual,
    currentCategory,
  } = rankingDetails;

  const currentMaxScore = 150;

  const handleDownloadCard = useCallback(async () => {
    if (cardRef.current === null) return;
    
    try {
      const buttons = cardRef.current.querySelector('.hero-share-buttons') as HTMLElement;
      if (buttons) buttons.style.display = 'none';

      await new Promise(resolve => setTimeout(resolve, 700));

      const style = window.getComputedStyle(cardRef.current);
      const bgColor = style.getPropertyValue('--secondary-system-background').trim() || '#f2f2f7';
      const textColor = style.getPropertyValue('--label').trim() || '#000000';

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: bgColor,
        pixelRatio: 3,
        style: {
          borderRadius: '32px',
          color: textColor,
          background: bgColor,
          fill: textColor,
        },
        filter: (node: Node) => {
          return !(node instanceof HTMLElement && node.classList.contains('hero-share-buttons'));
        }
      });
      
      if (buttons) buttons.style.display = 'flex';

      const link = document.createElement('a');
      link.download = `rice-purity-result-${displayScore}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('oops, something went wrong!', err);
      alert('Failed to generate image. Please try again or take a screenshot.');
    }
  }, [displayScore]);

  const handleShare = async () => {
    const shareData = {
      title: 'Rice Purity Test Result',
      text: shareText,
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert('Score copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <IOSLayout 
      title="Results" 
      showLargeTitle={false} 
      leftAction={<span className="back-button" onClick={() => setView('test')}>Back</span>}
    >
      <Helmet title={`My Rice Purity Test Score: ${displayScore}`}>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="results-view animate-fade-in" style={{ paddingBottom: '40px' }}>
         <CertificateCard 
           ref={cardRef}
           displayScore={displayScore}
           currentMaxScore={currentMaxScore}
           currentCategory={currentCategory}
           rankingLabel={rankingLabel}
           fullVerdict={fullVerdict}
           isFlipped={isFlipped}
           pPurerOrEqual={pPurerOrEqual}
           pLessPureOrEqual={pLessPureOrEqual}
           shareText={shareText}
           handleDownloadCard={handleDownloadCard}
           handleShare={handleShare}
         />

         <div style={{ marginBottom: '32px' }}>
           <WidgetPoster 
             ref={posterRef}
             score={displayScore} 
             maxScore={currentMaxScore} 
             verdict={fullVerdict}
             title={currentCategory?.title}
             rankingLabel={rankingLabel}
           />
         </div>

         <div className="analysis-card" style={{ background: 'transparent', boxShadow: 'none', padding: '0', marginTop: '32px' }}>
            <h3 className="analysis-title" style={{ textAlign: 'left', paddingLeft: '8px' }}>Personality Analysis</h3>
            <RadarChart data={categoryScores} />
            <div className="category-legend" style={{ background: 'var(--secondary-system-background)', borderRadius: '16px', padding: '16px', marginTop: '16px' }}>
              {categoryScores.map(cs => (
                <div key={cs.label} className="legend-item">
                  <span className="legend-label">{cs.label}:</span>
                  <span className="legend-value">{Math.round(cs.value)}%</span>
                </div>
              ))}
            </div>
         </div>

         <div className="action-buttons">
           <div className="embed-section">
             <h3 className="share-title">Add badge to your website</h3>
             <p className="embed-desc">Copy this code to show off your score on your blog or profile:</p>
             <div className="embed-box">
               <textarea 
                 readOnly 
                 value={`<a href="${window.location.origin}" style="display:inline-block;padding:8px 16px;background:#007aff;color:white;text-decoration:none;border-radius:20px;font-family:system-ui;font-weight:bold;">Rice Purity Score: ${displayScore}</a>`}
                 onClick={(e) => (e.target as HTMLTextAreaElement).select()}
               />
               <button 
                 className="copy-btn"
                 onClick={() => {
                   navigator.clipboard.writeText(`<a href="${window.location.origin}" style="display:inline-block;padding:8px 16px;background:#007aff;color:white;text-decoration:none;border-radius:20px;font-family:system-ui;font-weight:bold;">Rice Purity Score: ${displayScore}</a>`);
                   alert('Embed code copied!');
                 }}
               >
                 Copy
               </button>
             </div>
           </div>

           <button onClick={handleRetake} className="button-secondary" style={{ marginTop: '24px' }}>
             Review Answers
           </button>
           <button onClick={handleReset} className="button-text-danger">
             Start Over
           </button>
         </div>
         
         <div className="seo-wrapper">
           <SEOContent />
         </div>
      </div>
    </IOSLayout>
  );
};
