import { useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { sections, scoringCategories, introText } from '../data';
import { IOSLayout } from './IOSLayout';
import { ToggleRow } from './ToggleRow';
import { SEOContent } from './SEOContent';
import { ScoreDial } from './ScoreDial';
import { WidgetPoster } from './WidgetPoster';
import { RadarChart } from './RadarChart';
import { ScoreDistributionChart } from './ScoreDistributionChart';
import { rankingData } from '../rankingData';
import { SEO_CONFIG } from '../seoConfig';

type View = 'test' | 'results';

export function TestPage() {
  const allQuestions = useMemo(() => sections.flatMap(s => s.questions), []);
  const navigate = useNavigate();
  
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

  const currentMaxScore = isShortMode ? 30 : 150;

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

     return {
       displayScore: currentMaxScore - count,
       progress: (count / currentMaxScore) * 100,
       categoryScores: radarData
     };
  }, [checkedState, currentMaxScore, allQuestions, isQuestionIncluded]);

  const currentCategory = useMemo(() => {
    const scoreToLookup = isShortMode ? displayScore * 5 : displayScore;
    return scoringCategories.find(c => scoreToLookup >= c.min && scoreToLookup <= c.max);
  }, [displayScore, isShortMode]);

  const handleSubmit = () => {
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Rice Purity Test Result',
      text: `I scored a ${displayScore}/${currentMaxScore} on the Rice Purity Test! Check your score here:`,
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
    const stat = rankingData.find(d => d.score === displayScore);
    const userPercentile = stat?.percentile || 0;
    const userProb = stat?.prob || 0;
    
    // Original Top Pure: P(S >= score)
    const pPurerOrEqual = (1 - userPercentile + userProb);
    // Top Experienced: P(S <= score)
    const pLessPureOrEqual = userPercentile;

    const isFlipped = pPurerOrEqual > 0.5;
    const finalPercentage = (isFlipped ? pLessPureOrEqual : pPurerOrEqual) * 100;
    const topPercentageStr = finalPercentage.toFixed(2);
    const rankingLabel = `top ${topPercentageStr}% ${isFlipped ? 'most experienced' : 'purest'}`;

    return (
      <IOSLayout title="Results" showLargeTitle={false} leftAction={<span className="back-button" onClick={() => setView('test')}>Back</span>}>
        <Helmet title={`My Rice Purity Test Score: ${displayScore}`}>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="results-view animate-fade-in">
           <ScoreDial 
             score={displayScore} 
             maxScore={currentMaxScore} 
             title={currentCategory?.title}
             category={currentCategory?.text || ""} 
           />

           <div className="verdict-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: 'var(--secondary-label)', marginBottom: '4px' }}>Percentile Ranking</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent-color)', textTransform: 'capitalize' }}>
                {rankingLabel}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--secondary-label)', marginTop: '4px' }}>
                {isFlipped 
                  ? `You have more life experience than ${( (1 - pLessPureOrEqual) * 100 ).toFixed(2)}% of people.`
                  : `You are more pure than ${( (1 - pPurerOrEqual) * 100 ).toFixed(2)}% of participants.`}
              </p>
           </div>

           <ScoreDistributionChart userScore={displayScore} />

           <div className="verdict-card">
              <h3 className="verdict-title">Our Verdict</h3>
              <p className="verdict-text">
                {currentCategory?.verdict.replace('{{ranking}}', rankingLabel)}
              </p>
           </div>

           <div className="analysis-card">
              <h3 className="analysis-title">Personality Analysis</h3>
              <RadarChart data={categoryScores} />
              <div className="category-legend">
                {categoryScores.map(cs => (
                  <div key={cs.label} className="legend-item">
                    <span className="legend-label">{cs.label}:</span>
                    <span className="legend-value">{Math.round(cs.value)}%</span>
                  </div>
                ))}
              </div>
           </div>

           <div className="action-buttons">
             <WidgetPoster 
               score={displayScore} 
               maxScore={currentMaxScore} 
               verdict={currentCategory?.verdict.replace('{{ranking}}', rankingLabel)}
               title={currentCategory?.title}
             />

             {/* Social Sharing Section */}
             <div className="share-section">
               <h3 className="share-title">Share your result</h3>
               <div className="social-buttons-grid">
                 <button 
                   onClick={() => window.open(`https://twitter.com/intent/tweet?text=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!%20See%20your%20score%20here:%20&url=${window.location.origin}`, '_blank')}
                   className="social-button twitter"
                 >
                   Twitter
                 </button>
                 <button 
                   onClick={() => window.open(`https://www.reddit.com/submit?title=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!&url=${window.location.origin}`, '_blank')}
                   className="social-button reddit"
                 >
                   Reddit
                 </button>
                 <button 
                   onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}&quote=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!`, '_blank')}
                   className="social-button facebook"
                 >
                   Facebook
                 </button>
                 <button 
                   onClick={() => window.open(`https://wa.me/?text=I%20scored%20a%20${displayScore}/${currentMaxScore}%20on%20the%20Rice%20Purity%20Test!%20Check%20yours%20here:%20${window.location.origin}`, '_blank')}
                   className="social-button whatsapp"
                 >
                   WhatsApp
                 </button>
               </div>
               
               <button onClick={handleShare} className="button-secondary" style={{ marginTop: '12px' }}>
                 More Options...
               </button>
             </div>

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