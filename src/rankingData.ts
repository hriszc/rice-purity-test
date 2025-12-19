// Realistic Percentile and Probability Distribution data for Rice Purity Test (150-question)
// Based on Latent Variable Simulation with rho=0.85

export interface ScoreStat {
  score: number;
  percentile: number; // P(S <= score)
  prob: number;       // P(S == score)
}

export const rankingData: ScoreStat[] = [
  { score: 150, percentile: 1.00000, prob: 0.02662 },
  { score: 149, percentile: 0.97338, prob: 0.04283 },
  { score: 148, percentile: 0.93055, prob: 0.04521 },
  { score: 147, percentile: 0.88534, prob: 0.04590 },
  { score: 146, percentile: 0.83944, prob: 0.04497 },
  { score: 145, percentile: 0.79447, prob: 0.04252 },
  { score: 144, percentile: 0.75195, prob: 0.03982 },
  { score: 143, percentile: 0.71213, prob: 0.03701 },
  { score: 142, percentile: 0.67512, prob: 0.03458 },
  { score: 141, percentile: 0.64054, prob: 0.03154 },
  { score: 140, percentile: 0.60900, prob: 0.02886 },
  { score: 139, percentile: 0.58014, prob: 0.02763 },
  { score: 138, percentile: 0.55251, prob: 0.02547 },
  { score: 137, percentile: 0.52704, prob: 0.02338 },
  { score: 136, percentile: 0.50366, prob: 0.02257 },
  { score: 135, percentile: 0.48109, prob: 0.02134 },
  { score: 134, percentile: 0.45975, prob: 0.01965 },
  { score: 133, percentile: 0.44010, prob: 0.01863 },
  { score: 132, percentile: 0.42147, prob: 0.01785 },
  { score: 131, percentile: 0.40362, prob: 0.01675 },
  { score: 130, percentile: 0.38687, prob: 0.01639 },
  { score: 129, percentile: 0.37048, prob: 0.01559 },
  { score: 128, percentile: 0.35489, prob: 0.01463 },
  { score: 127, percentile: 0.34026, prob: 0.01355 },
  { score: 126, percentile: 0.32671, prob: 0.01296 },
  { score: 125, percentile: 0.31375, prob: 0.01208 },
  { score: 124, percentile: 0.30167, prob: 0.01213 },
  { score: 123, percentile: 0.28954, prob: 0.01148 },
  { score: 122, percentile: 0.27806, prob: 0.01111 },
  { score: 121, percentile: 0.26695, prob: 0.01031 },
  { score: 120, percentile: 0.25664, prob: 0.01003 },
  { score: 119, percentile: 0.24661, prob: 0.00954 },
  { score: 118, percentile: 0.23707, prob: 0.00895 },
  { score: 117, percentile: 0.22812, prob: 0.00833 },
  { score: 116, percentile: 0.21979, prob: 0.00847 },
  { score: 115, percentile: 0.21132, prob: 0.00820 },
  { score: 114, percentile: 0.20312, prob: 0.00749 },
  { score: 113, percentile: 0.19563, prob: 0.00741 },
  { score: 112, percentile: 0.18822, prob: 0.00695 },
  { score: 111, percentile: 0.18127, prob: 0.00702 },
  { score: 110, percentile: 0.17425, prob: 0.00662 },
  { score: 109, percentile: 0.16763, prob: 0.00637 },
  { score: 108, percentile: 0.16126, prob: 0.00611 },
  { score: 107, percentile: 0.15515, prob: 0.00612 },
  { score: 106, percentile: 0.14903, prob: 0.00563 },
  { score: 105, percentile: 0.14340, prob: 0.00548 },
  { score: 104, percentile: 0.13792, prob: 0.00540 },
  { score: 103, percentile: 0.13252, prob: 0.00532 },
  { score: 102, percentile: 0.12720, prob: 0.00538 },
  { score: 101, percentile: 0.12182, prob: 0.00486 },
  { score: 100, percentile: 0.11696, prob: 0.00485 },
  { score: 99, percentile: 0.11211, prob: 0.00494 },
  { score: 98, percentile: 0.10717, prob: 0.00465 },
  { score: 97, percentile: 0.10252, prob: 0.00445 },
  { score: 96, percentile: 0.09807, prob: 0.00418 },
  { score: 95, percentile: 0.09389, prob: 0.00438 },
  { score: 94, percentile: 0.08951, prob: 0.00424 },
  { score: 93, percentile: 0.08527, prob: 0.00407 },
  { score: 92, percentile: 0.08120, prob: 0.00423 },
  { score: 91, percentile: 0.07697, prob: 0.00395 },
  { score: 90, percentile: 0.07302, prob: 0.00397 },
  { score: 89, percentile: 0.06905, prob: 0.00394 },
  { score: 88, percentile: 0.06511, prob: 0.00388 },
  { score: 87, percentile: 0.06123, prob: 0.00382 },
  { score: 86, percentile: 0.05741, prob: 0.00385 },
  { score: 85, percentile: 0.05356, prob: 0.00354 },
  { score: 84, percentile: 0.05002, prob: 0.00336 },
  { score: 83, percentile: 0.04666, prob: 0.00329 },
  { score: 82, percentile: 0.04337, prob: 0.00329 },
  { score: 81, percentile: 0.04008, prob: 0.00322 },
  { score: 80, percentile: 0.03686, prob: 0.00304 },
  { score: 79, percentile: 0.03382, prob: 0.00298 },
  { score: 78, percentile: 0.03084, prob: 0.00276 },
  { score: 77, percentile: 0.02808, prob: 0.00271 },
  { score: 76, percentile: 0.02537, prob: 0.00257 },
  { score: 75, percentile: 0.02280, prob: 0.00242 },
  { score: 74, percentile: 0.02038, prob: 0.00244 },
  { score: 73, percentile: 0.01794, prob: 0.00223 },
  { score: 72, percentile: 0.01571, prob: 0.00213 },
  { score: 71, percentile: 0.01358, prob: 0.00199 },
  { score: 70, percentile: 0.01159, prob: 0.00185 },
  { score: 69, percentile: 0.00974, prob: 0.00180 },
  { score: 68, percentile: 0.00794, prob: 0.00160 },
  { score: 67, percentile: 0.00634, prob: 0.00155 },
  { score: 66, percentile: 0.00479, prob: 0.00138 },
  { score: 65, percentile: 0.00341, prob: 0.00133 },
  { score: 64, percentile: 0.00208, prob: 0.00115 },
  { score: 63, percentile: 0.00093, prob: 0.00095 },
  { score: 62, percentile: -0.00002, prob: 0.00078 }, // Values below 60 extrapolated from realistic.md
  { score: 61, percentile: 0.00001, prob: 0.00034 },
  { score: 60, percentile: 0.01210, prob: 0.000625 }, // From md: 1.21%
  { score: 55, percentile: 0.01500, prob: 0.000600 },
  { score: 50, percentile: 0.01210, prob: 0.000625 },
  { score: 45, percentile: 0.00890, prob: 0.000590 },
  { score: 40, percentile: 0.00650, prob: 0.000425 },
  { score: 35, percentile: 0.00450, prob: 0.000330 },
  { score: 30, percentile: 0.00280, prob: 0.000210 },
  { score: 25, percentile: 0.00170, prob: 0.000180 },
  { score: 20, percentile: 0.00090, prob: 0.000105 },
  { score: 15, percentile: 0.00050, prob: 0.000060 },
  { score: 10, percentile: 0.00020, prob: 0.000035 },
  { score: 5, percentile: 0.00005, prob: 0.000015 },
  { score: 0, percentile: 0.00001, prob: 0.000005 },
];

// Helper to interpolate data for missing scores
export const getFullRankingData = (): ScoreStat[] => {
  const fullData: ScoreStat[] = [];
  for (let s = 150; s >= 0; s--) {
    const exact = rankingData.find(d => d.score === s);
    if (exact) {
      fullData.push(exact);
    } else {
      // Find neighboring data points for linear interpolation
      const upper = rankingData.find(d => d.score > s);
      const lower = [...rankingData].reverse().find(d => d.score < s);
      if (upper && lower) {
        const ratio = (s - lower.score) / (upper.score - lower.score);
        fullData.push({
          score: s,
          percentile: lower.percentile + (upper.percentile - lower.percentile) * ratio,
          prob: lower.prob + (upper.prob - lower.prob) * ratio
        });
      }
    }
  }
  return fullData;
};