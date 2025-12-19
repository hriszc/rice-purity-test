import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { introText } from '../../data';
import { IOSLayout } from '../IOSLayout';
import { ToggleRow } from '../ToggleRow';
import { SEOContent } from '../SEOContent';
import { SEO_CONFIG } from '../../seoConfig';

interface TestViewProps {
  progress: number;
  displayScore: number;
  currentCategory: any;
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
  isShortMode: boolean;
  setIsShortMode: (short: boolean) => void;
  showHint: boolean;
  checkedState: boolean[];
  handleToggle: (index: number, checked: boolean) => void;
  handleReset: () => void;
  handleSubmit: () => void;
  showBanner: boolean;
  bannerAnimate: boolean;
  bannerClosing: boolean;
  setShowBanner: (show: boolean) => void;
  setBannerClosing: (closing: boolean) => void;
  isQuestionIncluded: (index: number) => boolean;
  processedSections: any[];
}

export const TestView: React.FC<TestViewProps> = ({
  progress,
  displayScore,
  currentCategory,
  showIntro,
  setShowIntro,
  isShortMode,
  setIsShortMode,
  showHint,
  checkedState,
  handleToggle,
  handleReset,
  handleSubmit,
  showBanner,
  bannerAnimate,
  bannerClosing,
  setShowBanner,
  setBannerClosing,
  processedSections,
}) => {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
      e.preventDefault();
      navigate(target.getAttribute('href')!);
    }
  };

  const renderLabel = (text: string) => {
    if (text.includes("French kissed")) {
      const parts = text.split("French kissed");
      return (
        <>
          {parts[0]}
          <Link 
            to="/what-is-french-kissing" 
            onClick={(e) => e.stopPropagation()} 
            style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}
          >
            French kissed
          </Link>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <IOSLayout 
      title="Rice Purity Test"
      rightAction={<span className="clear-button" onClick={handleReset}>Clear</span>}
    >
      <Helmet title={`${SEO_CONFIG.home.title}`}>
        <meta name="description" content={SEO_CONFIG.home.description} />
        <meta name="keywords" content={SEO_CONFIG.home.keywords} />
      </Helmet>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="realtime-status">
        <div className="status-label">
          Purity Score: <span className="status-value">{displayScore}</span>
        </div>
        {currentCategory && (
          <div className="status-title-badge">
            {currentCategory.title}
          </div>
        )}
      </div>

      <div className="app-container animate-fade-in">
        <div className="privacy-badge">
          <span role="img" aria-label="shield">🛡️</span>
          <span>Runs entirely locally and can work offline</span>
        </div>
        
        {/* Intro Card */}
        {showIntro && (
          <div className="intro-card">
            <h2 className="intro-title">{introText.title}</h2>
            <p className="intro-desc">
              {introText.description}
            </p>
            
            <div className="intro-section">
              <h4 className="intro-subtitle">Instructions</h4>
              <p 
                className="intro-text-small" 
                dangerouslySetInnerHTML={{ __html: introText.instructions }}
                onClick={handleLinkClick}
              ></p>
            </div>

            <div className="intro-section">
              <h4 className="intro-subtitle">Definitions</h4>
              {introText.definitions.map((def, i) => (
                <div key={i} className="definition-item">
                  <span className="term">{def.term}:</span> <span className="definition">{def.definition}</span>
                </div>
              ))}
            </div>

            <div className="intro-section">
              <h4 className="intro-subtitle">Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <Link 
                  to="/rice-purity-test-score-meanings"
                  className="button-text-small"
                  style={{ padding: '4px 0', color: 'var(--accent-color)', fontWeight: '500', display: 'inline-block' }}
                >
                  Rice Purity Test Score Meanings →
                </Link>
                <Link 
                  to="/about#embed"
                  className="button-text-small"
                  style={{ padding: '4px 0', color: 'var(--accent-color)', fontWeight: '500', display: 'inline-block' }}
                >
                  Embed this test on your site →
                </Link>
              </div>
            </div>
            
            <button 
              onClick={() => setShowIntro(false)}
              className="button-secondary-small"
              style={{ marginTop: '12px' }}
            >
              Hide Info
            </button>
          </div>
        )}

        {!showIntro && (
          <div className="info-toggle-container" style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
             <button 
               onClick={() => setShowIntro(true)} 
               className="info-toggle-button"
             >
               Show Instructions
             </button>
             <Link 
               to="/rice-purity-test-score-meanings"
               className="info-toggle-button"
               style={{ textDecoration: 'none' }}
             >
               Score Meanings
             </Link>
          </div>
        )}

        <div className="mode-selector">
          <button 
            className={`mode-button ${!isShortMode ? 'active' : ''}`}
            onClick={() => setIsShortMode(false)}
          >
            Full (150)
          </button>
          <button 
            className={`mode-button ${isShortMode ? 'active' : ''}`}
            onClick={() => setIsShortMode(true)}
          >
            Short (30)
          </button>
        </div>

        {showHint && (
          <div className="check-guide-hint animate-bounce-subtle">
            <span className="hint-icon">💡</span>
            <span className="hint-text">Tap any item to reveal peer stats</span>
            <span className="hint-arrow">⬇️</span>
          </div>
        )}

        {processedSections.map((section, sIndex) => {
          return (
            <div key={sIndex} className="section-container">
              {section.title && (
                <div className="section-title">
                  {section.title}
                </div>
              )}
              <div className="questions-group">
                {section.questionsToRender.map((q: any, i: number) => {
                   return (
                    <ToggleRow
                      key={q.originalIndex}
                      index={q.displayIndex}
                      emoji={q.emoji}
                      label={renderLabel(q.text)}
                      checked={checkedState[q.originalIndex]}
                      onChange={(c) => handleToggle(q.originalIndex, c)}
                      last={i === section.questionsToRender.length - 1}
                      probability={q.probability}
                    />
                   );
                })}
              </div>
            </div>
          );
        })}

        <div className="submit-container">
          <button 
            onClick={handleSubmit}
            className="button-primary-large"
          >
            Calculate Score
          </button>
        </div>

        <SEOContent />
      </div>
      
      <div className="footer-notice" style={{ marginBottom: showBanner ? '60px' : '0' }}>
        Caution: This is the 1988 version. Definitions may vary. 
        <Link to="/about#embed" style={{ color: 'var(--secondary-label)', marginLeft: '8px', textDecoration: 'underline' }}>Embed code</Link>
      </div>

      {showBanner && (
        <div className={`fixed-ranking-banner ${bannerAnimate ? 'banner-jump' : ''} ${bannerClosing ? 'banner-slide-out' : ''}`}>
          <div className="banner-icon-container">
            <span>🏆</span>
          </div>
          <div className="banner-content">
            <span className="banner-text-title">Ready for your rank?</span>
            <span className="banner-text-sub">Finish the test to unlock your global purity percentile!</span>
          </div>
          <button className="banner-close" onClick={() => {
            setBannerClosing(true);
            setTimeout(() => setShowBanner(false), 600);
          }}>✕</button>
        </div>
      )}
    </IOSLayout>
  );
};