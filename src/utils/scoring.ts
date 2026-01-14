import { sections, type Question } from '../data';

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
