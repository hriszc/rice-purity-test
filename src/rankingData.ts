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
  { score: 100, percentile: 0.11790, prob: 0.004635 },
  { score: 90, percentile: 0.07910, prob: 0.00321 },
  { score: 80, percentile: 0.05220, prob: 0.002335 },
  { score: 70, percentile: 0.03370, prob: 0.001515 },
  { score: 65, percentile: 0.02680, prob: 0.00127 },
  { score: 63, percentile: 0.02430, prob: 0.001225 },
  { score: 62, percentile: 0.02310, prob: 0.00112 },
  { score: 61, percentile: 0.02190, prob: 0.00119 },
  { score: 60, percentile: 0.02070, prob: 0.000965 },
  { score: 55, percentile: 0.01610, prob: 0.00095 },
  { score: 50, percentile: 0.01210, prob: 0.000625 },
  { score: 45, percentile: 0.00890, prob: 0.00059 },
  { score: 40, percentile: 0.00650, prob: 0.000425 },
  { score: 35, percentile: 0.00450, prob: 0.00033 },
  { score: 30, percentile: 0.00280, prob: 0.00021 },
  { score: 25, percentile: 0.00170, prob: 0.00018 },
  { score: 20, percentile: 0.00090, prob: 0.000105 },
  { score: 15, percentile: 0.00050, prob: 0.00006 },
  { score: 10, percentile: 0.00020, prob: 0.000035 },
  { score: 5, percentile: 0.00005, prob: 0.000015 },
  { score: 0, percentile: 0.00001, prob: 0.000005 },
];

// Helper to interpolate data for missing scores
export const getFullRankingData = (): ScoreStat[] => {
  const fullData: ScoreStat[] = [];
  // Sort ascending for reliable neighbor finding
  const sorted = [...rankingData].sort((a, b) => a.score - b.score);
  
  for (let s = 150; s >= 0; s--) {
    const exact = sorted.find(d => d.score === s);
    if (exact) {
      fullData.push(exact);
    } else {
      // Find nearest neighboring data points for linear interpolation
      const upper = sorted.find(d => d.score > s);
      const lower = [...sorted].reverse().find(d => d.score < s);
      
      if (upper && lower) {
        const ratio = (s - lower.score) / (upper.score - lower.score);
        fullData.push({
          score: s,
          percentile: lower.percentile + (upper.percentile - lower.percentile) * ratio,
          prob: lower.prob + (upper.prob - lower.prob) * ratio
        });
      } else if (upper) {
        fullData.push({ ...upper, score: s });
      } else if (lower) {
        fullData.push({ ...lower, score: s });
      }
    }
  }
  return fullData;
};
