import { useRef, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { toPng } from 'html-to-image';
import { IOSLayout } from '../IOSLayout';
import { SEOContent } from '../SEOContent';
import { RadarChart } from '../RadarChart';
import { WidgetPoster, type WidgetPosterHandle } from '../WidgetPoster';
import { CertificateCard } from './CertificateCard';
import { getRankingDetails } from '../../utils/rankingDetails';
import './ResultsView.css';

interface CategoryScore {
  label: string;
  value: number;
}

interface ResultsViewProps {
  displayScore: number;
  categoryScores: CategoryScore[];
  handleRetake: () => void;
  handleReset: () => void;
  setView: (view: 'test' | 'results') => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  displayScore,
  categoryScores,
  handleRetake,
  handleReset,
  setView,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<WidgetPosterHandle>(null);
  const rankingDetails = useMemo(() => getRankingDetails(displayScore), [displayScore]);

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
           <div className="embed-section" style={{ 
             background: 'var(--tertiary-system-background)', 
             padding: '20px', 
             borderRadius: '24px', 
             border: '1px solid var(--separator)',
             marginTop: '32px'
           }}>
             <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px', color: 'var(--label)' }}>Share as a Badge</h3>
             <p style={{ fontSize: '0.9rem', color: 'var(--secondary-label)', marginBottom: '20px' }}>
               Display your achievement on your personal blog, forum profile, or website.
             </p>

             {/* Style 1: Modern Card */}
             <div style={{ marginBottom: '24px' }}>
               <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--secondary-label)', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>Style 1: Modern Card</div>
               <div className="preview-container" style={{ 
                 padding: '16px', 
                 background: 'var(--secondary-system-background)', 
                 borderRadius: '16px', 
                 display: 'flex', 
                 justifyContent: 'center',
                 marginBottom: '12px'
               }}>
                 {/* Preview */}
                 <div style={{
                   background: 'linear-gradient(135deg, #007aff 0%, #00c6ff 100%)',
                   color: 'white',
                   padding: '12px 20px',
                   borderRadius: '16px',
                   boxShadow: '0 4px 15px rgba(0,122,255,0.3)',
                   fontFamily: '-apple-system, sans-serif',
                   display: 'inline-flex',
                   alignItems: 'center',
                   gap: '12px'
                 }}>
                   <div style={{ fontSize: '1.2rem' }}>🍚</div>
                   <div>
                     <div style={{ fontSize: '10px', opacity: 0.8, fontWeight: 600, textTransform: 'uppercase' }}>Rice Purity: {displayScore}/150</div>
                     <div style={{ fontSize: '18px', fontWeight: 800 }}>{currentCategory?.title || 'Pure'}</div>
                   </div>
                 </div>
               </div>
               
               <div style={{ position: 'relative' }}>
                 <textarea 
                   readOnly 
                   style={{
                     width: '100%',
                     height: '80px',
                     padding: '12px',
                     borderRadius: '12px',
                     border: '1px solid var(--separator)',
                     fontSize: '0.75rem',
                     fontFamily: 'monospace',
                     background: 'var(--system-background)',
                     color: 'var(--label)',
                     resize: 'none'
                   }}
                   value={`<a href="https://ricepurity.online/" style="text-decoration:none;display:inline-block"><div style="background:linear-gradient(135deg,#007aff 0%,#00c6ff 100%);color:white;padding:12px 20px;border-radius:16px;box-shadow:0 4px 15px rgba(0,122,255,0.3);font-family:sans-serif;display:inline-flex;align-items:center;gap:12px"><div><div style="font-size:10px;opacity:0.8;font-weight:600;text-transform:uppercase">Rice Purity: ${displayScore}/150</div><div style="font-size:18px;font-weight:800">${currentCategory?.title || 'Pure'}</div></div></div></a>`}
                   onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                 />
                 <button 
                   onClick={() => {
                     const code = `<a href="https://ricepurity.online/" style="text-decoration:none;display:inline-block"><div style="background:linear-gradient(135deg,#007aff 0%,#00c6ff 100%);color:white;padding:12px 20px;border-radius:16px;box-shadow:0 4px 15px rgba(0,122,255,0.3);font-family:sans-serif;display:inline-flex;align-items:center;gap:12px"><div><div style="font-size:10px;opacity:0.8;font-weight:600;text-transform:uppercase">Rice Purity: ${displayScore}/150</div><div style="font-size:18px;font-weight:800">${currentCategory?.title || 'Pure'}</div></div></div></a>`;
                     navigator.clipboard.writeText(code);
                     alert('Modern Card code copied!');
                   }}
                   style={{
                     position: 'absolute',
                     right: '8px',
                     bottom: '8px',
                     padding: '6px 12px',
                     borderRadius: '8px',
                     border: 'none',
                     backgroundColor: 'var(--accent-color)',
                     color: 'white',
                     fontSize: '0.8rem',
                     fontWeight: '600',
                     cursor: 'pointer'
                   }}
                 >
                   Copy
                 </button>
               </div>
             </div>

             {/* Style 2: Flat Badge */}
             <div>
               <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--secondary-label)', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '0.5px' }}>Style 2: Minimalist Badge</div>
               <div className="preview-container" style={{ 
                 padding: '16px', 
                 background: 'var(--secondary-system-background)', 
                 borderRadius: '16px', 
                 display: 'flex', 
                 justifyContent: 'center',
                 marginBottom: '12px'
               }}>
                 {/* Preview */}
                 <div style={{
                   display: 'inline-flex',
                   borderRadius: '4px',
                   overflow: 'hidden',
                   fontFamily: 'Verdana, Geneva, sans-serif',
                   fontSize: '11px'
                 }}>
                   <div style={{ background: '#555', color: '#fff', padding: '4px 8px' }}>Rice Purity</div>
                   <div style={{ background: '#34c759', color: '#fff', padding: '4px 8px', fontWeight: 'bold' }}>{currentCategory?.title || displayScore}</div>
                 </div>
               </div>
               
               <div style={{ position: 'relative' }}>
                 <textarea 
                   readOnly 
                   style={{
                     width: '100%',
                     height: '60px',
                     padding: '12px',
                     borderRadius: '12px',
                     border: '1px solid var(--separator)',
                     fontSize: '0.75rem',
                     fontFamily: 'monospace',
                     background: 'var(--system-background)',
                     color: 'var(--label)',
                     resize: 'none'
                   }}
                   value={`<a href="https://ricepurity.online/" style="text-decoration:none;display:inline-flex;border-radius:4px;overflow:hidden;font-family:Verdana,sans-serif;font-size:11px"><div style="background:#555;color:#fff;padding:4px 8px">Rice Purity</div><div style="background:#34c759;color:#fff;padding:4px 8px;font-weight:bold">${currentCategory?.title || displayScore}</div></a>`}
                   onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                 />
                 <button 
                   onClick={() => {
                     const code = `<a href="https://ricepurity.online/" style="text-decoration:none;display:inline-flex;border-radius:4px;overflow:hidden;font-family:Verdana,sans-serif;font-size:11px"><div style="background:#555;color:#fff;padding:4px 8px">Rice Purity</div><div style="background:#34c759;color:#fff;padding:4px 8px;font-weight:bold">${currentCategory?.title || displayScore}</div></a>`;
                     navigator.clipboard.writeText(code);
                     alert('Flat Badge code copied!');
                   }}
                   style={{
                     position: 'absolute',
                     right: '8px',
                     bottom: '8px',
                     padding: '6px 12px',
                     borderRadius: '8px',
                     border: 'none',
                     backgroundColor: 'var(--accent-color)',
                     color: 'white',
                     fontSize: '0.8rem',
                     fontWeight: '600',
                     cursor: 'pointer'
                   }}
                 >
                   Copy
                 </button>
               </div>
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
