import { useState, useMemo, useCallback, useEffect } from 'react';
import { sections } from '../data';
import { calculateScores, getRankingDetails, getProcessedSections } from '../utils/scoring';

export type View = 'test' | 'results';

export function useTestFlow() {
  const allQuestions = useMemo(() => sections.flatMap((s) => s.questions), []);
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(allQuestions.length).fill(false)
  );

  const [isShortMode, setIsShortMode] = useState(false);
  const [view, setView] = useState<View>('test');
  const [showIntro, setShowIntro] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [showBanner, setShowBanner] = useState(true);
  const [bannerAnimate, setBannerAnimate] = useState(false);
  const [bannerClosing, setBannerClosing] = useState(false);

  const processedSections = useMemo(() => getProcessedSections(isShortMode), [isShortMode]);

  // Banner logic
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

  useEffect(() => {
    if (bannerAnimate && !bannerClosing) {
      const timer = setTimeout(() => {
        setBannerClosing(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [bannerAnimate, bannerClosing]);

  useEffect(() => {
    if (bannerClosing) {
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [bannerClosing]);

  const handleToggle = useCallback((index: number, checked: boolean) => {
    setCheckedState((prev) => {
      const newState = [...prev];
      newState[index] = checked;
      return newState;
    });
    setShowHint(false);
  }, []);

  const handleReset = useCallback(() => {
    if (confirm('Are you sure you want to clear all checks?')) {
      setCheckedState(new Array(allQuestions.length).fill(false));
      setView('test');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [allQuestions.length]);

  const isQuestionIncluded = useCallback(
    (index: number) => {
      if (!isShortMode) return true;
      return index % 5 === 0;
    },
    [isShortMode]
  );

  const { displayScore, progress, categoryScores } = useMemo(
    () => calculateScores(checkedState, allQuestions, isShortMode),
    [checkedState, allQuestions, isShortMode]
  );

  const rankingDetails = useMemo(
    () => (view === 'results' ? getRankingDetails(displayScore) : null),
    [view, displayScore]
  );

  const handleSubmit = useCallback(() => {
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRetake = useCallback(() => {
    setView('test');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    checkedState,
    isShortMode,
    setIsShortMode,
    view,
    setView,
    showIntro,
    setShowIntro,
    showHint,
    showBanner,
    bannerAnimate,
    bannerClosing,
    setBannerClosing,
    setShowBanner,
    handleToggle,
    handleReset,
    isQuestionIncluded,
    displayScore,
    progress,
    categoryScores,
    rankingDetails,
    handleSubmit,
    handleRetake,
    processedSections,
  };
}
