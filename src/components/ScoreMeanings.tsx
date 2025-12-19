import React from 'react';
import { IOSLayout } from './IOSLayout';
import { scoringCategories } from '../data';
import './ToggleRow.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const ScoreMeanings: React.FC = () => {
  const generalMeanings = [
    { range: "100 - 98", label: "Angelic", desc: "You are exceptionally pure. You've likely avoided almost all 'scandalous' activities listed. This score is common for younger teenagers or those with strict upbringings." },
    { range: "97 - 94", label: "Very Pure", desc: "Still very innocent, perhaps a few minor experiences (like dating or mild partying) but overall a very high purity score." },
    { range: "93 - 77", label: "Pure", desc: "You have some life experience, but you're still well within the 'good kid' territory. A common range for high school seniors." },
    { range: "76 - 45", label: "Average", desc: "The typical college experience. You've had your share of fun, relationships, and rebellion. Most university students fall in this range." },
    { range: "44 - 9", label: "Low Purity", desc: "You've lived a very adventurous life. You're definitely not an angel anymore. This score implies significant life experiences." },
    { range: "8 - 0", label: "Not Pure", desc: "You've done almost everything on the list. A true veteran of life's experiences, often associated with wilder college years." },
  ];

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a good Rice Purity Test score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no 'good' or 'bad' score. A high score (90-100) indicates innocence, while a lower score indicates more life experience. Most college students score between 45 and 75."
      }
    }, {
      "@type": "Question",
      "name": "What is the average Rice Purity score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average score varies by age. For high schoolers, it's often 80-95. For college students, the average typically drops to the 50-70 range as they gain more life experiences."
      }
    }, {
      "@type": "Question",
      "name": "Does the Rice Purity Test score matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, it's purely for entertainment and bonding. It originated at Rice University as a way for students to compare experiences, not as a moral judgment."
      }
    }]
  };

  return (
    <IOSLayout 
      title="Rice Purity Test Score Meanings" 
      leftAction={<Link to="/" className="back-button" style={{ textDecoration: 'none' }}>Back</Link>}
    >
      <Helmet title="Rice Purity Test Score Meanings - Complete Guide">
        <meta name="description" content="Understand your Rice Purity Test score. Detailed breakdown of score ranges, average scores by age, and the 1988 original scale meanings." />
        <meta name="keywords" content="Rice Purity Test score meanings, Rice Purity Test average score, Rice Purity Test results meaning, Rice Purity Test 100 point scale, Rice Purity Test 150 point scale, Rice Purity Test angelic score, Rice Purity Test wild score, Rice Purity Test score guide, what does my rice purity score mean, Rice University purity test categories, purity test score interpretation, high school purity test average, college purity test average" />
        {origin && <link rel="canonical" href={origin + "/rice-purity-test-score-meanings"} />}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="app-container animate-fade-in">
        <div className="intro-card" style={{ marginBottom: '24px' }}>
          <h2 className="intro-title">Understanding Your Score</h2>
          <p className="intro-desc" style={{ marginBottom: '0' }}>
            The Rice Purity Test is a checklist of 100 life experiences. Your score represents your percentage of "innocence" remaining. A score of 100 means you have done none of the activities, while a score of 0 means you have done them all. Below is a detailed breakdown of what different score ranges typically represent in modern culture.
          </p>
        </div>

        <div className="section-container">
          <div className="section-title">General Meanings (100-Point Scale)</div>
          <div className="questions-group">
            {generalMeanings.map((m, i) => (
              <div key={i} className="toggle-row" style={{ padding: '12px 16px', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', color: 'var(--accent-color)' }}>{m.range}</span>
                  <span style={{ fontWeight: '600' }}>{m.label}</span>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--secondary-label)' }}>
                  {m.desc}
                </div>
                {i !== generalMeanings.length - 1 && <div className="separator" style={{ marginTop: '12px' }} />}
              </div>
            ))}
          </div>
        </div>

        <div className="section-container">
          <div className="section-title">1988 Rice Thresher Meanings (150-Point Scale)</div>
          <p className="intro-desc" style={{ padding: '0 16px', marginBottom: '12px' }}>
            This application uses the 1988 version which originally had a 150-point scale. Here are the original humorous categories:
          </p>
          <div className="questions-group">
            {scoringCategories.map((c, i) => (
              <div key={i} className="toggle-row" style={{ padding: '12px 16px', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', color: 'var(--accent-color)' }}>{c.min} - {c.max}</span>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--label)' }}>
                  {c.text}
                </div>
                {i !== scoringCategories.length - 1 && <div className="separator" style={{ marginTop: '12px' }} />}
              </div>
            ))}
          </div>
        </div>

        <div className="section-container">
          <div className="section-title">Common Questions</div>
          <div className="intro-card">
            <div className="intro-section">
              <h4 className="intro-subtitle">What is a good Rice Purity Test score?</h4>
              <p className="intro-text-small">There is no "good" or "bad" score. A high score (90-100) indicates innocence, while a lower score indicates more life experience. Most college students score between 45 and 75.</p>
            </div>
            <div className="intro-section">
              <h4 className="intro-subtitle">What is the average Rice Purity score?</h4>
              <p className="intro-text-small">The average score varies by age. For high schoolers, it's often 80-95. For college students, the average typically drops to the 50-70 range as they gain more life experiences.</p>
            </div>
            <div className="intro-section" style={{ marginBottom: 0 }}>
              <h4 className="intro-subtitle">Does the score matter?</h4>
              <p className="intro-text-small">No, it's purely for entertainment and bonding. It originated at Rice University as a way for students to compare experiences, not as a moral judgment.</p>
            </div>
          </div>
        </div>

        <div className="seo-content" style={{ marginTop: '24px', padding: '0 16px', fontSize: '14px', color: 'var(--secondary-label)', lineHeight: '1.5' }}>
          <p>
            The Rice Purity Test score meanings have evolved over decades. While the original 1924 test was quite different, the modern 100-question version is the most common today.
          </p>
        </div>
      </div>
    </IOSLayout>
  );
};
