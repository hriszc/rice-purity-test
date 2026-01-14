import { lazy, Suspense } from 'react';
import { useTestFlow } from '../hooks/useTestFlow';
import { TestView } from './TestFlow/TestView';
import './TestPage.css';

const ResultsView = lazy(() => import('./TestFlow/ResultsView').then(m => ({ default: m.ResultsView })));

export function TestPage() {
  const {
    view,
    setView,
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
    handleRetake,
    categoryScores,
    showBanner,
    bannerAnimate,
    bannerClosing,
    setShowBanner,
    setBannerClosing,
    isQuestionIncluded,
    processedSections,
  } = useTestFlow();

  if (view === 'results') {
    return (
      <Suspense fallback={<div className="loading-fallback" />}>
        <ResultsView
          displayScore={displayScore}
          categoryScores={categoryScores}
          handleRetake={handleRetake}
          handleReset={handleReset}
          setView={setView}
        />
      </Suspense>
    );
  }

  return (
    <TestView
      progress={progress}
      displayScore={displayScore}
      currentCategory={currentCategory}
      showIntro={showIntro}
      setShowIntro={setShowIntro}
      isShortMode={isShortMode}
      setIsShortMode={setIsShortMode}
      showHint={showHint}
      checkedState={checkedState}
      handleToggle={handleToggle}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      showBanner={showBanner}
      bannerAnimate={bannerAnimate}
      bannerClosing={bannerClosing}
      setShowBanner={setShowBanner}
      setBannerClosing={setBannerClosing}
      isQuestionIncluded={isQuestionIncluded}
      processedSections={processedSections}
    />
  );
}
