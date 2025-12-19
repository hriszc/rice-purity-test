import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sections, scoringCategories, introText } from '../data';
import { IOSLayout } from './IOSLayout';
import { ToggleRow } from './ToggleRow';
import { SEOContent } from './SEOContent';
import { toPng } from 'html-to-image';
import { ScoreDial } from './ScoreDial';
import { WidgetPoster, type WidgetPosterHandle } from './WidgetPoster';
import { RadarChart } from './RadarChart';
import { ScoreDistributionChart } from './ScoreDistributionChart';
import { getFullRankingData } from '../rankingData';
import { SEO_CONFIG } from '../seoConfig';
import './TestPage.css';

type View = 'test' | 'results';
const allRankingData = getFullRankingData();

export function TestPage() {
  const navigate = useNavigate();
  const posterRef = useRef<WidgetPosterHandle>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const allQuestions = useMemo(() => sections.flatMap(s => s.questions), []);
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(allQuestions.length).fill(false));

  const [isShortMode, setIsShortMode] = useState(false);
  const [view, setView] = useState<View>('test');
  const [showIntro, setShowIntro] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [bannerAnimate, setBannerAnimate] = useState(false);
  const [bannerClosing, setBannerClosing] = useState(false);

  // 1. Detect scroll to start the sequence
  useEffect(() => {
    if (view !== 'test' || bannerAnimate || bannerClosing || !showBanner) return;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setBannerAnimate(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view, bannerAnimate, bannerClosing, showBanner]);

  // 2. After animation starts, wait and then trigger closing
  useEffect(() => {
    if (bannerAnimate && !bannerClosing) {
      const timer = setTimeout(() => {
        setBannerClosing(true);
      }, 3500); // 3.5s after jump starts
      return () => clearTimeout(timer);
    }
  }, [bannerAnimate, bannerClosing]);

  // 3. After closing starts, wait for animation to finish then unmount
  useEffect(() => {
    if (bannerClosing) {
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 600); // match CSS transition time
      return () => clearTimeout(timer);
    }
  }, [bannerClosing]);

  const handleLinkClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
      e.preventDefault();
      navigate(target.getAttribute('href')!);
    }
  };

  const handleToggle = (index: number, checked: boolean) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
    if (checked && showHint) {
      setShowHint(false);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to clear all checks?')) {
      setCheckedState(new Array(allQuestions.length).fill(false));
      setView('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isQuestionIncluded = useCallback((index: number) => {
    if (!isShortMode) return true;
    return index % 5 === 0;
  }, [isShortMode]);

  const currentMaxScore = 150;

  const { displayScore, progress, categoryScores } = useMemo(() => {
     let count = 0;
     const catCounts: Record<string, { checked: number; total: number }> = {
       romance: { checked: 0, total: 0 },
       boldness: { checked: 0, total: 0 },
       curiosity: { checked: 0, total: 0 },
       rebellion: { checked: 0, total: 0 },
       experience: { checked: 0, total: 0 },
     };

     allQuestions.forEach((q, index) => {
        const included = isQuestionIncluded(index);
        if (included) {
          if (q.category) {
            catCounts[q.category].total++;
          }
          if (checkedState[index]) {
            count++;
            if (q.category) {
              catCounts[q.category].checked++;
            }
          }
        }
     });

     const radarData = Object.entries(catCounts).map(([key, val]) => ({
       label: key.charAt(0).toUpperCase() + key.slice(1),
       value: val.total > 0 ? (val.checked / val.total) * 100 : 0
     }));

     const totalIncluded = isShortMode ? 30 : 150;
     const scoreValue = isShortMode ? (30 - count) * 5 : (150 - count);

     return {
       displayScore: scoreValue,
       progress: (count / totalIncluded) * 100,
       categoryScores: radarData
     };
  }, [checkedState, allQuestions, isQuestionIncluded, isShortMode]);

  const currentCategory = useMemo(() => {
    return scoringCategories.find(c => displayScore >= c.min && displayScore <= c.max);
  }, [displayScore]);

  const handleSubmit = () => {
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { rankingLabel, fullVerdict, shareText, isFlipped, pPurerOrEqual, pLessPureOrEqual } = useMemo(() => {
    if (view !== 'results') return { rankingLabel: '', fullVerdict: '', shareText: '', isFlipped: false, pPurerOrEqual: 0, pLessPureOrEqual: 0 };
    
    const stat = allRankingData.find(d => d.score === displayScore);
    const userPercentile = stat?.percentile || 0;
    const userProb = stat?.prob || 0;
    
    // Percentile is P(S <= score)
    // pPurer is the proportion of people who scored >= current score
    // So if you score 149, and 2.66% got 150, and 4.28% got 149, you are in the top (2.66 + 4.28) = 6.94%
    const pPurer = (1 - userPercentile + userProb);
    const pLessPure = userPercentile;

    const flipped = pPurer > 0.5;
    const finalPercentage = (flipped ? pLessPure : pPurer) * 100;
    
    // Ensure we don't show 0.00%
    const displayPercentage = Math.max(finalPercentage, 0.01);
    const topPercentageStr = displayPercentage.toFixed(2);
    const label = `top ${topPercentageStr}% ${flipped ? 'most experienced' : 'purest'}`;
    
    const verdictTemplate = currentCategory?.verdict || '';
    const verdict = verdictTemplate.replace('{{ranking}}', label);
    
    // Convert "You" to "I" for sharing
    const shareVerdict = verdict
      .replace(/\bYou're\b/g, "I'm")
      .replace(/\byou're\b/g, "I'm")
      .replace(/\bYou rank\b/g, "I rank")
      .replace(/\byou rank\b/g, "I rank")
      .replace(/\bYou are\b/g, "I am")
      .replace(/\byou are\b/g, "I am")
      .replace(/\bYou\b/g, "I")
      .replace(/\byou\b/g, "I")
      .replace(/\bYour\b/g, "My")
      .replace(/\byour\b/g, "my");

    const text = `I scored ${displayScore}/150 on the Rice Purity Test! 🏆 ${shareVerdict} ✨ Check yours here:`;
    
    return { 
      rankingLabel: label, 
      fullVerdict: verdict,
      shareText: text,
      isFlipped: flipped,
      pPurerOrEqual: pPurer,
      pLessPureOrEqual: pLessPure
    };
  }, [view, displayScore, currentCategory]);

  const handleDownloadCard = useCallback(async () => {
    if (cardRef.current === null) return;
    
    try {
      // Hide buttons temporarily for cleaner screenshot
      const buttons = cardRef.current.querySelector('.hero-share-buttons') as HTMLElement;
      if (buttons) buttons.style.display = 'none';

      // Wait a bit for animations to settle (ScoreDial is 500ms)
      await new Promise(resolve => setTimeout(resolve, 700));

      // Get actual colors from CSS variables
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
          fill: textColor, // Ensure SVGs also pick up the text color if they use currentColor
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
    // ... (rest of handleShare)
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

  const renderLabel = (text: string) => {
    // ... (rest of renderLabel)
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

  let globalIndexCounter = 0;
  let displayedQuestionCounter = 1;

  if (view === 'results') {
    return (
      <IOSLayout title="Results" showLargeTitle={false} leftAction={<span className="back-button" onClick={() => setView('test')}>Back</span>}>
        <Helmet title={`My Rice Purity Test Score: ${displayScore}`}>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="results-view animate-fade-in" style={{ paddingBottom: '40px' }}>
           {/* 1. Integrated Hero Section: Score, Ranking, Verdict & Distribution */}
           <div 
             ref={cardRef}
             className="results-hero-card certificate-theme" 
             style={{
               background: 'var(--secondary-system-background)',
               borderRadius: '32px',
               padding: '32px 20px',
               boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
               textAlign: 'center',
               marginBottom: '24px',
               position: 'relative',
               border: '10px double var(--accent-color)', // The "Frame"
               overflow: 'hidden'
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

           {/* 2. Primary Action Button (The "Generate Certificate" part) */}
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

           {/* 3. Deep Dive Analysis */}
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
             {/* Embed Code Section */}
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
  }

  return (
    <IOSLayout 
      title="Rice Purity Test"
      rightAction={<span className="clear-button" onClick={handleReset}>Clear</span>}
    >
      <Helmet title={`${SEO_CONFIG.home.title}`}>
        <meta name="description" content={SEO_CONFIG.home.description} />
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
              <Link 
                to="/rice-purity-test-score-meanings"
                className="button-text-small"
                style={{ padding: '4px 0', color: 'var(--accent-color)', fontWeight: '500', display: 'inline-block' }}
              >
                Rice Purity Test Score Meanings →
              </Link>
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

        {sections.map((section, sIndex) => {
          const questionsToRender: { text: string; emoji: string; originalIndex: number; displayIndex: number; probability?: number }[] = [];
          
          section.questions.forEach((q) => {
             const currentOriginalIndex = globalIndexCounter;
             
             if (isQuestionIncluded(currentOriginalIndex)) {
               questionsToRender.push({
                 text: q.text,
                 emoji: q.emoji,
                 originalIndex: currentOriginalIndex,
                 displayIndex: displayedQuestionCounter,
                 probability: q.probability
               });
               displayedQuestionCounter++;
             }
             globalIndexCounter++;
          });

          if (questionsToRender.length === 0) return null;

          return (
            <div key={sIndex} className="section-container">
              {section.title && (
                <div className="section-title">
                  {section.title}
                </div>
              )}
              <div className="questions-group">
                {questionsToRender.map((q, i) => {
                   return (
                    <ToggleRow
                      key={q.originalIndex}
                      index={q.displayIndex}
                      emoji={q.emoji}
                      label={renderLabel(q.text)}
                      checked={checkedState[q.originalIndex]}
                      onChange={(c) => handleToggle(q.originalIndex, c)}
                      last={i === questionsToRender.length - 1}
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
}