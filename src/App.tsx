import { useState, useMemo } from 'react';
import './App.css';
import { sections, scoringCategories, introText } from './data';
import { IOSLayout } from './components/IOSLayout';
import { ToggleRow } from './components/ToggleRow';
import { SEOContent } from './components/SEOContent';

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
      window.scrollTo(0, 0);
    }
  };

  // Selection Logic: Every 5th question if Short Mode
  const isQuestionIncluded = (index: number) => {
    if (!isShortMode) return true;
    return index % 5 === 0;
  };

  const currentMaxScore = isShortMode ? 30 : 150;

  const displayScore = useMemo(() => {
     let checkedCount = 0;
     allQuestions.forEach((_, index) => {
        if (isQuestionIncluded(index) && checkedState[index]) {
          checkedCount++;
        }
     });
     return currentMaxScore - checkedCount;
  }, [checkedState, isShortMode, currentMaxScore, allQuestions]);

  const category = useMemo(() => {
    if (isShortMode) {
      // Scale short score (0-30) to full scale (0-150) for category lookup
      const scaledScore = displayScore * 5;
      const found = scoringCategories.find(c => scaledScore >= c.min && scaledScore <= c.max);
      return found ? found.text : "Short Test Mode";
    }
    const found = scoringCategories.find(c => displayScore >= c.min && displayScore <= c.max);
    return found ? found.text : "";
  }, [displayScore, isShortMode]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleRetake = () => {
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  };

  // Rendering Helper
  // We need to track a "global index" to match the flat checkedState array
  // We also need to calculate which question number to display (1, 2, 3...) based on the mode.
  // Let's pre-calculate the indices to render.
  
  // No, we can just iterate through sections and filter.
  // But we need to maintain the original global index for handleToggle.

  let globalIndexCounter = 0; // Tracks index in allQuestions (0 to 149)
  let displayedQuestionCounter = 1; // Tracks 1..30 or 1..150

  if (isSubmitted) {
    return (
      <IOSLayout title="Result">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '40px 20px',
          textAlign: 'center',
          minHeight: '60vh'
        }}>
           <div style={{ fontSize: '18px', color: '#8e8e93', marginBottom: '20px' }}>Your Score</div>
           <div style={{ 
             fontSize: '80px', 
             fontWeight: '700', 
             color: '#007aff',
             lineHeight: 1,
             marginBottom: '10px'
           }}>
             {displayScore}
             <span style={{ fontSize: '24px', color: '#8e8e93', fontWeight: 400 }}>/{currentMaxScore}</span>
           </div>
           
           <div style={{ 
             fontSize: '20px', 
             fontWeight: '600', 
             marginTop: '30px', 
             marginBottom: '10px'
           }}>
             Purity Category
           </div>
           
           <div style={{ 
             fontSize: '16px', 
             color: '#1c1c1e', 
             maxWidth: '90%', 
             lineHeight: '1.5' 
           }}>
             {category}
           </div>

           <div style={{ marginTop: '60px', width: '100%', maxWidth: '300px' }}>
             <button 
               onClick={handleRetake}
               style={{
                 width: '100%',
                 padding: '16px',
                 backgroundColor: '#007aff',
                 color: 'white',
                 border: 'none',
                 borderRadius: '12px',
                 fontSize: '17px',
                 fontWeight: '600',
                 cursor: 'pointer',
                 marginBottom: '12px'
               }}
             >
               Review Answers
             </button>
             <button 
               onClick={handleReset}
               style={{
                 width: '100%',
                 padding: '16px',
                 backgroundColor: 'transparent',
                 color: '#ff3b30',
                 border: 'none',
                 borderRadius: '12px',
                 fontSize: '17px',
                 fontWeight: '600',
                 cursor: 'pointer'
               }}
             >
               Start Over
             </button>
           </div>
        </div>
      </IOSLayout>
    );
  }

  return (
    <IOSLayout 
      title="Rice Purity test"
      rightAction={<span onClick={handleReset}>Clear</span>}
    >
      <div style={{ padding: '0 16px 16px' }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '18px',
          padding: '12px 14px',
          backgroundColor: '#f2f8ff',
          border: '1px solid #d6e6ff',
          borderRadius: '12px',
          color: '#0f4471',
          fontSize: '14px',
          fontWeight: 600
        }}>
          <span role="img" aria-label="shield">🛡️</span>
          <span>Runs entirely locally and can work offline</span>
        </div>
        
        {/* Intro Card */}
        {showIntro && (
          <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '12px', 
            padding: '20px', 
            marginBottom: '24px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '20px' }}>{introText.title}</h2>
            <p style={{ fontSize: '14px', color: '#3c3c43', lineHeight: '1.4', marginBottom: '16px' }}>
              {introText.description}
            </p>
            
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>Instructions</h4>
              <p style={{ fontSize: '13px', color: '#666', margin: 0 }} dangerouslySetInnerHTML={{ __html: introText.instructions }}></p>
            </div>

            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Definitions</h4>
              {introText.definitions.map((def, i) => (
                <div key={i} style={{ marginBottom: '6px', fontSize: '13px' }}>
                  <span style={{ fontWeight: 600 }}>{def.term}:</span> <span style={{ color: '#666' }}>{def.definition}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setShowIntro(false)}
              style={{
                marginTop: '16px',
                width: '100%',
                padding: '10px',
                backgroundColor: '#f2f2f7',
                color: '#007aff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Hide Info
            </button>
          </div>
        )}

        {!showIntro && (
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
             <button 
               onClick={() => setShowIntro(true)} 
               style={{ background: 'none', border: 'none', color: '#007aff', fontSize: '14px', cursor: 'pointer' }}
             >
               Show Instructions & Definitions
             </button>
          </div>
        )}

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '24px',
          backgroundColor: '#e3e3e8',
          padding: '2px',
          borderRadius: '8px',
          width: 'fit-content',
          margin: '0 auto 24px auto'
        }}>
          <button 
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              background: !isShortMode ? '#fff' : 'transparent',
              boxShadow: !isShortMode ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
            onClick={() => setIsShortMode(false)}
          >
            Full (150)
          </button>
          <button 
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              background: isShortMode ? '#fff' : 'transparent',
              boxShadow: isShortMode ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
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
            <div key={sIndex} style={{ marginBottom: '24px' }}>
              {section.title && (
                <div style={{ 
                  padding: '0 12px 8px', 
                  fontSize: '13px', 
                  fontWeight: '600', 
                  color: '#8e8e93', 
                  textTransform: 'uppercase' 
                }}>
                  {section.title}
                </div>
              )}
              <div style={{ 
                backgroundColor: '#fff', 
                borderRadius: '12px', 
                overflow: 'hidden',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}>
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

        <div style={{ marginTop: '30px', marginBottom: '40px' }}>
          <button 
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#007aff',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '17px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,122,255,0.3)'
            }}
          >
            Calculate Score
          </button>
        </div>

        <SEOContent />
      </div>
      
      <div style={{ textAlign: 'center', padding: '0 24px 24px', color: '#8e8e93', fontSize: '13px' }}>
        Caution: This is the 1988 version. Definitions may vary.
      </div>
    </IOSLayout>
  );
}

export default App;
