import { scoringCategories, sections, type Question } from '../data';
import { getFullRankingData } from '../rankingData';

let memoizedRankingData: any[] | null = null;
const getCachedRankingData = () => {
  if (!memoizedRankingData) {
    memoizedRankingData = getFullRankingData();
  }
  return memoizedRankingData;
};

export const calculateScores = (
  checkedState: boolean[],
  allQuestions: Question[],
  isShortMode: boolean
) => {
  let count = 0;
  const catCounts: Record<string, { checked: number; total: number }> = {
    romance: { checked: 0, total: 0 },
    boldness: { checked: 0, total: 0 },
    curiosity: { checked: 0, total: 0 },
    rebellion: { checked: 0, total: 0 },
    experience: { checked: 0, total: 0 },
  };

  allQuestions.forEach((q, index) => {
    const included = !isShortMode || index % 5 === 0;
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
    value: val.total > 0 ? (val.checked / val.total) * 100 : 0,
  }));

  const totalIncluded = isShortMode ? 30 : 150;
  const scoreValue = isShortMode ? (30 - count) * 5 : (150 - count);

  return {
    displayScore: scoreValue,
    progress: (count / totalIncluded) * 100,
    categoryScores: radarData,
  };
};

export const getRankingDetails = (displayScore: number) => {
  const allRankingData = getCachedRankingData();
  const currentCategory = scoringCategories.find(
    (c) => displayScore >= c.min && displayScore <= c.max
  );

  const stat = allRankingData.find((d) => d.score === displayScore);
  const userPercentile = stat?.percentile || 0;
  const userProb = stat?.prob || 0;

  const pPurer = 1 - userPercentile + userProb;
  const pLessPure = userPercentile;

  const flipped = pPurer > 0.5;
  const finalPercentage = (flipped ? pLessPure : pPurer) * 100;

  const displayPercentage = Math.max(finalPercentage, 0.01);
  const topPercentageStr = displayPercentage.toFixed(2);
  const label = `top ${topPercentageStr}% ${flipped ? 'most experienced' : 'purest'}`;

  const verdictTemplate = currentCategory?.verdict || '';
  const verdict = verdictTemplate.replace('{{ranking}}', label);

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

  const shareText = `I scored ${displayScore}/150 on the Rice Purity Test! 🏆 ${shareVerdict} ✨ Check yours here:`;

  return {
    rankingLabel: label,
    fullVerdict: verdict,
    shareText,
    isFlipped: flipped,
    pPurerOrEqual: pPurer,
    pLessPureOrEqual: pLessPure,
    currentCategory,
  };
};

export const getProcessedSections = (isShortMode: boolean) => {
  let globalIndexCounter = 0;
  let displayedQuestionCounter = 1;

  return sections.map((section) => {
    const questionsToRender: {
      text: string;
      emoji: string;
      originalIndex: number;
      displayIndex: number;
      probability?: number;
    }[] = [];

    section.questions.forEach((q) => {
      const currentOriginalIndex = globalIndexCounter;
      const included = !isShortMode || currentOriginalIndex % 5 === 0;

      if (included) {
        questionsToRender.push({
          text: q.text,
          emoji: q.emoji,
          originalIndex: currentOriginalIndex,
          displayIndex: displayedQuestionCounter,
          probability: q.probability,
        });
        displayedQuestionCounter++;
      }
      globalIndexCounter++;
    });

    return {
      ...section,
      questionsToRender,
    };
  }).filter(s => s.questionsToRender.length > 0);
};
