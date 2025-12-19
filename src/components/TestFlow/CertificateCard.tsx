import { forwardRef } from 'react';
import { ScoreDial } from '../ScoreDial';
import { ScoreDistributionChart } from '../ScoreDistributionChart';
import { type ScoringCategory } from '../../data';

interface CertificateCardProps {
  displayScore: number;
  currentMaxScore: number;
  currentCategory: ScoringCategory;
  rankingLabel: string;
  fullVerdict: string;
  isFlipped: boolean;
  pPurerOrEqual: number;
  pLessPureOrEqual: number;
  shareText: string;
  handleDownloadCard: () => void;
  handleShare: () => void;
}

export const CertificateCard = forwardRef<HTMLDivElement, CertificateCardProps>(
  (
    {
      displayScore,
      currentMaxScore,
      currentCategory,
      rankingLabel,
      fullVerdict,
      isFlipped,
      pPurerOrEqual,
      pLessPureOrEqual,
      shareText,
      handleDownloadCard,
      handleShare,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="results-hero-card certificate-theme"
        style={{
          background: 'var(--secondary-system-background)',
          borderRadius: '32px',
          padding: '32px 20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
          textAlign: 'center',
          marginBottom: '24px',
          position: 'relative',
          border: '10px double var(--accent-color)',
          overflow: 'hidden',
        }}
      >
        {/* Decorative Corner Elements */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', width: '30px', height: '30px', borderTop: '4px solid var(--accent-color)', borderLeft: '4px solid var(--accent-color)', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '30px', borderTop: '4px solid var(--accent-color)', borderRight: '4px solid var(--accent-color)', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '30px', height: '30px', borderBottom: '4px solid var(--accent-color)', borderLeft: '4px solid var(--accent-color)', opacity: 0.5 }}></div>
        <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '30px', height: '30px', borderBottom: '4px solid var(--accent-color)', borderRight: '4px solid var(--accent-color)', opacity: 0.5 }}></div>

        {/* CEO Watermark */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          right: '25px',
          fontSize: '11px',
          fontWeight: '600',
          color: 'var(--accent-color)',
          opacity: 0.4,
          fontStyle: 'italic',
          pointerEvents: 'none',
          zIndex: 5
        }}>
          by ricepurity.online CEO
        </div>

        {/* Website Domain Footer */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '0',
          right: '0',
          fontSize: '10px',
          fontWeight: '600',
          color: 'var(--secondary-label)',
          opacity: 0.5,
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>
          https://ricepurity.online
        </div>

        {/* Official Seal Mockup */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '20px',
          width: '70px',
          height: '70px',
          border: '2px dashed var(--accent-color)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          opacity: 0.3,
          transform: 'rotate(-15deg)',
          zIndex: 5
        }}>
          <span style={{ fontSize: '8px', fontWeight: 'bold' }}>OFFICIAL</span>
          <span style={{ fontSize: '10px', fontWeight: '900' }}>SEAL</span>
        </div>

        {/* Compact Circle Share Buttons in Top Right */}
        <div className="hero-share-buttons" style={{ 
          position: 'absolute', 
          top: '16px', 
          right: '16px', 
          display: 'flex', 
          flexDirection: 'column',
          gap: '8px',
          zIndex: 20
        }}>
          <button 
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.origin)}`, '_blank')}
            style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: '#1DA1F2', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}
            title="Share on X"
          >
            𝕏
          </button>
          <button 
            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + window.location.origin)}`, '_blank')}
            style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: '#25D366', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
            title="Share on WhatsApp"
          >
            💬
          </button>
          <button 
            onClick={handleDownloadCard}
            style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: 'var(--accent-color)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}
            title="Download Card Image"
          >
            💾
          </button>
          <button 
            onClick={handleShare}
            style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: 'var(--tertiary-system-background)', color: 'var(--label)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}
            title="More options"
          >
            ⋯
          </button>
        </div>

        <div style={{ fontSize: '11px', color: 'var(--secondary-label)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', textAlign: 'left', paddingLeft: '8px' }}>
          Purity Certificate
        </div>

        <ScoreDial 
          score={displayScore} 
          maxScore={currentMaxScore} 
          title={currentCategory?.title}
          category={currentCategory?.text || ""} 
        />

        <div style={{ marginTop: '4px', padding: '0 8px' }}>
           <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '4px' }}>
             {rankingLabel}
           </div>
           <p style={{ fontSize: '15px', lineHeight: '1.4', fontWeight: '600', color: 'var(--label)', fontStyle: 'italic', margin: '8px 0' }}>
             "{fullVerdict}"
           </p>
           <p style={{ fontSize: '12px', color: 'var(--secondary-label)', marginBottom: '16px' }}>
             {isFlipped 
               ? `More experience than ${( (1 - pLessPureOrEqual) * 100 ).toFixed(2)}% of people.`
               : `Purer than ${( (1 - pPurerOrEqual) * 100 ).toFixed(2)}% of participants.`}
           </p>
        </div>

        {/* Integrated Distribution Chart at the bottom of the card */}
        <div style={{ 
          borderTop: '1px solid var(--separator)', 
          paddingTop: '16px',
          marginTop: '16px'
        }}>
          <ScoreDistributionChart userScore={displayScore} />
        </div>
      </div>
    );
  }
);