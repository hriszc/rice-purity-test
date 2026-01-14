import { scoringCategories, type ScoringCategory } from '../data';
import { getFullRankingData, type ScoreStat } from '../rankingData';

export interface RankingDetails {
  rankingLabel: string;
  fullVerdict: string;
  shareText: string;
  isFlipped: boolean;
  pPurerOrEqual: number;
  pLessPureOrEqual: number;
  currentCategory?: ScoringCategory;
}

let memoizedRankingData: ScoreStat[] | null = null;
const getCachedRankingData = () => {
  if (!memoizedRankingData) {
    memoizedRankingData = getFullRankingData();
  }
  return memoizedRankingData;
};

export const getRankingDetails = (displayScore: number): RankingDetails => {
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
