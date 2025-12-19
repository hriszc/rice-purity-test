import { useTestFlow } from '../hooks/useTestFlow';
import { TestView } from './TestFlow/TestView';
import { ResultsView } from './TestFlow/ResultsView';
import './TestPage.css';

export function TestPage() {
  const {
    view,
    setView,
    progress,
    displayScore,
    rankingDetails,
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

  if (view === 'results' && rankingDetails) {
    return (
      <ResultsView
        displayScore={displayScore}
        rankingDetails={rankingDetails}
        categoryScores={categoryScores}
        handleRetake={handleRetake}
        handleReset={handleReset}
        setView={setView}
      />
    );
  }

  return (
    <TestView
      progress={progress}
      displayScore={displayScore}
      currentCategory={rankingDetails?.currentCategory}
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
