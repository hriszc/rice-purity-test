import { describe, it, expect } from 'vitest';
import { calculateScores, getProcessedSections } from './scoring';
import { getRankingDetails } from './rankingDetails';
import { sections } from '../data';

const allQuestions = sections.flatMap(s => s.questions);

describe('scoring utils', () => {
  describe('calculateScores', () => {
    it('should calculate perfect score (150) when no items are checked', () => {
      const checkedState = new Array(150).fill(false);
      const result = calculateScores(checkedState, allQuestions, false);
      expect(result.displayScore).toBe(150);
      expect(result.progress).toBe(0);
    });

    it('should calculate zero score (0) when all items are checked', () => {
      const checkedState = new Array(150).fill(true);
      const result = calculateScores(checkedState, allQuestions, false);
      expect(result.displayScore).toBe(0);
      expect(result.progress).toBe(100);
    });

    it('should calculate short mode score correctly', () => {
      const checkedState = new Array(150).fill(false);
      checkedState[0] = true;
      const result = calculateScores(checkedState, allQuestions, true);
      expect(result.displayScore).toBe(145);
    });
  });

  describe('getRankingDetails', () => {
    it('should return ranking details for a given score', () => {
      const result = getRankingDetails(100);
      expect(result).toHaveProperty('rankingLabel');
      expect(result).toHaveProperty('fullVerdict');
      expect(result).toHaveProperty('shareText');
    });

    it('should handle extreme scores', () => {
      const perfect = getRankingDetails(150);
      expect(perfect.rankingLabel).toContain('purest');

      const zero = getRankingDetails(0);
      expect(zero.rankingLabel).toContain('most experienced');
    });
  });

  describe('getProcessedSections', () => {
    it('should return all sections in full mode', () => {
      const sections = getProcessedSections(false);
      const totalQuestions = sections.reduce((acc, s) => acc + s.questionsToRender.length, 0);
      expect(totalQuestions).toBe(150);
    });

    it('should return 30 questions in short mode', () => {
      const sections = getProcessedSections(true);
      const totalQuestions = sections.reduce((acc, s) => acc + s.questionsToRender.length, 0);
      expect(totalQuestions).toBe(30);
    });
  });
});
