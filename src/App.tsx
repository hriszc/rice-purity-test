import { useState, useMemo, useCallback } from 'react';
import './App.css';
import { sections, scoringCategories, introText } from './data';
import { IOSLayout } from './components/IOSLayout';
import { ToggleRow } from './components/ToggleRow';
import { SEOContent } from './components/SEOContent';
import { ScoreDial } from './components/ScoreDial';
import { WidgetPoster } from './components/WidgetPoster';

function App() {
  // Flatten questions for easy state management
  const allQuestions = useMemo(() => sections.flatMap(s => s.questions), []);
  
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(allQuestions.length).fill(false));
  const [isShortMode, setIsShortMode] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const handleToggle = (index: number, checked: boolean) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = checked;
    setCheckedState(newCheckedState);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to clear all checks?')) {
      setCheckedState(new Array(allQuestions.length).fill(false));
      setIsSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Selection Logic: Every 5th question if Short Mode
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
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let globalIndexCounter = 0;
  let displayedQuestionCounter = 1;

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

  if (isSubmitted) {
    return (
      <IOSLayout title="Results" showLargeTitle={false}>
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
               category={category} 
             />
             <button onClick={handleShare} className="button-primary">
               Share Result
             </button>
             <button onClick={handleRetake} className="button-secondary">
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
            
            <button 
              onClick={() => setShowIntro(false)}
              className="button-secondary-small"
            >
              Hide Info
            </button>
          </div>
        )}

        {!showIntro && (
          <div className="info-toggle-container">
             <button 
               onClick={() => setShowIntro(true)} 
               className="info-toggle-button"
             >
               Show Instructions & Definitions
             </button>
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
          // Filter questions in this section based on inclusion logic
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

export default App;
