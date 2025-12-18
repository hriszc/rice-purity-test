import { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { sections, scoringCategories, introText } from '../data';
import { IOSLayout } from './IOSLayout';
import { ToggleRow } from './ToggleRow';
import { SEOContent } from './SEOContent';
import { ScoreDial } from './ScoreDial';
import { WidgetPoster } from './WidgetPoster';
import { Link } from 'react-router-dom';

type View = 'test' | 'results';

export function TestPage() {
  const allQuestions = useMemo(() => sections.flatMap(s => s.questions), []);
  
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(allQuestions.length).fill(false));
  const [isShortMode, setIsShortMode] = useState(false);
  const [view, setView] = useState<View>('test');
  const [showIntro, setShowIntro] = useState(false);

  const handleToggle = (index: number, checked: boolean) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
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

  const { displayScore, progress } = useMemo(() => {
     let count = 0;
     allQuestions.forEach((_, index) => {
        const included = isQuestionIncluded(index);
        if (included && checkedState[index]) {
          count++;
        }
     });
     return {
       displayScore: currentMaxScore - count,
       progress: (count / currentMaxScore) * 100
     };
  }, [checkedState, currentMaxScore, allQuestions, isQuestionIncluded]);

  const category = useMemo(() => {
    const scoreToLookup = isShortMode ? displayScore * 5 : displayScore;
    const found = scoringCategories.find(c => scoreToLookup >= c.min && scoreToLookup <= c.max);
    return found ? found.text : (isShortMode ? "Short Test Mode" : "");
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

  let globalIndexCounter = 0;
  let displayedQuestionCounter = 1;

  if (view === 'results') {
    return (
      <IOSLayout title="Results" showLargeTitle={false} leftAction={<span className="back-button" onClick={() => setView('test')}>Back</span>}>
        <Helmet>
          <title>My Rice Purity Test Score: {displayScore}</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="results-view animate-fade-in">
           <ScoreDial 
             score={displayScore} 
             maxScore={currentMaxScore} 
             category={category} 
           />

           <div className="action-buttons">
             <WidgetPoster 
               score={displayScore} 
               maxScore={currentMaxScore} 
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
      <Helmet>
        <title>Rice Purity Test - The 1988 Original Version</title>
        <meta name="description" content="Take the original 1988 Rice Purity Test. 150 questions to calculate your purity score. Works offline and on mobile." />
      </Helmet>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
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
              <p className="intro-text-small" dangerouslySetInnerHTML={{ __html: introText.instructions }}></p>
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

        {sections.map((section, sIndex) => {
          const questionsToRender: { text: string; originalIndex: number; displayIndex: number }[] = [];
          
          section.questions.forEach((q) => {
             const currentOriginalIndex = globalIndexCounter;
             
             if (isQuestionIncluded(currentOriginalIndex)) {
               questionsToRender.push({
                 text: q,
                 originalIndex: currentOriginalIndex,
                 displayIndex: displayedQuestionCounter
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
                      label={q.text}
                      checked={checkedState[q.originalIndex]}
                      onChange={(c) => handleToggle(q.originalIndex, c)}
                      last={i === questionsToRender.length - 1}
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
      
      <div className="footer-notice">
        Caution: This is the 1988 version. Definitions may vary.
      </div>
    </IOSLayout>
  );
}
