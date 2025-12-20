import React from 'react';

export const SEOContent: React.FC = () => {
  return (
    <div style={{ padding: '24px 16px', color: '#1c1c1e', maxWidth: '600px', margin: '0 auto' }}>
      
      {/* Privacy Guarantee Section */}
      <section style={{ marginBottom: '32px', padding: '16px', backgroundColor: '#e8f5e9', borderRadius: '12px', border: '1px solid #c8e6c9' }}>
        <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#2e7d32' }}>Privacy & Security</h2>
        <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#1b5e20', margin: 0, fontWeight: 500 }}>
          This test runs entirely locally, ensuring your privacy is always protected. Your answers never leave your device.
        </p>
      </section>

      {/* Methodology Section */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Methodology & Scoring</h2>
        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3c3c43', marginBottom: '16px' }}>
          This digital version faithfully recreates the 1988 Rice Purity Test (150-question extended edition) as documented in Rice University archives.
          The scoring logic is transparent:
        </p>
        <ul style={{ fontSize: '15px', lineHeight: '1.6', color: '#3c3c43', paddingLeft: '20px', marginBottom: '16px' }}>
          <li>You start with a perfect score of 100 (or 150).</li>
          <li>Each "Yes" answer deducts 1 point.</li>
          <li>Your final score represents your remaining percentage of "purity" or innocence.</li>
        </ul>
        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3c3c43' }}>
          We utilize local browser storage to save your progress temporarily so you don't lose your spot, but no data is ever transmitted to us or third parties.
        </p>
      </section>

      {/* History Section */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>History of the Rice Purity Test</h2>
        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3c3c43', marginBottom: '16px' }}>
          The Rice Purity Test is a famous 100-question survey that originated at Rice University in Houston, Texas. 
          First published in 1924, it was designed to help students bond and track their life experiences throughout college.
          Over the decades, it has evolved into a viral internet phenomenon, serving as a rite of passage for high school 
          and college students worldwide. The "1988 version" featured here is considered one of the most classic and standard iterations, widely cited in student culture and online communities.
        </p>
      </section>

      {/* Score Meaning Section */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>What Does Your Rice Purity Score Mean?</h2>
        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#3c3c43', marginBottom: '16px' }}>
          Your score is calculated by subtracting the number of "yes" answers from 100 (or 150 in the extended version).
          A score of 100 implies absolute innocence (having done nothing on the list), while a lower score indicates more life experiences.
          It is important to remember that this test is for entertainment purposes only. There is no "good" or "bad" score—everyone's 
          journey and comfort level with life experiences is unique.
        </p>
      </section>

      {/* Score Breakdown */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Score Breakdown & Interpretation</h2>
        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>121 - 150: The Innocent</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>You have done very few items on the list. This range usually means you are newer to the social scene or choose to stay cautious.</p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>91 - 120: The Typical Student</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>You've explored some parties and relationships but still keep plenty of boundaries. Many college students land here.</p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>61 - 90: The Experienced</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>You have a solid list of stories and have tried a wide variety of items. You are comfortable experimenting.</p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>31 - 60: The Adventurous</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>You have gone well beyond the basics and probably have plenty of wild memories to share.</p>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px' }}>0 - 30: The Wild One</h3>
            <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Almost everything on the checklist is familiar territory. Few boundaries exist for you.</p>
          </div>
          <div style={{ borderTop: '1px solid #eee', paddingTop: '12px', marginTop: '12px' }}>
            <a href="/rice-purity-test-score-meanings/" style={{ color: '#007aff', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>View Full Score Meanings Guide →</a>
          </div>
        </div>
      </section>

      {/* Internal Linking / Resources Section */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Resources & Guides</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          <a href="/about/#embed" style={{ display: 'block', padding: '12px', backgroundColor: '#f2f2f7', borderRadius: '10px', color: '#1c1c1e', textDecoration: 'none', fontWeight: '500' }}>
            🛠️ Embed Rice Purity Test on your Site
          </a>
          <a href="/what-is-french-kissing/" style={{ display: 'block', padding: '12px', backgroundColor: '#f2f2f7', borderRadius: '10px', color: '#1c1c1e', textDecoration: 'none', fontWeight: '500' }}>
            👄 What is French Kissing? Meaning & Tips
          </a>
          <a href="/rice-test/" style={{ display: 'block', padding: '12px', backgroundColor: '#f2f2f7', borderRadius: '10px', color: '#1c1c1e', textDecoration: 'none', fontWeight: '500' }}>
            📜 Original 1988 Rice Thresher Source
          </a>
          <a href="/about/" style={{ display: 'block', padding: '12px', backgroundColor: '#f2f2f7', borderRadius: '10px', color: '#1c1c1e', textDecoration: 'none', fontWeight: '500' }}>
            🔒 About & Privacy Policy
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Frequently Asked Questions (FAQ)</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '6px' }}>Is the Rice Purity Test anonymous?</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#3c3c43' }}>
            Yes, this calculator is purely client-side. Your answers are processed in your browser and are never sent to any server. Your privacy is guaranteed.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '6px' }}>What is a "good" Rice Purity Score?</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#3c3c43' }}>
            There is no objective "good" score. A high score means you are more innocent, while a low score means you are more experienced. Most college students score between 40 and 70.
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '6px' }}>How many questions are there?</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.5', color: '#3c3c43' }}>
            The classic version has 100 questions. However, the 1988 version presented here includes 150 questions for a more comprehensive checklist. We also offer a "Short Mode" with 30 questions for a quick check.
          </p>
        </div>
      </section>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Is the Rice Purity Test anonymous?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, this calculator is purely client-side. Your answers are processed in your browser and are never sent to any server. Your privacy is guaranteed."
            }
          }, {
            "@type": "Question",
            "name": "What is a 'good' Rice Purity Score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no objective 'good' score. A high score means you are more innocent, while a low score means you are more experienced. Most college students score between 40 and 70."
            }
          }, {
            "@type": "Question",
            "name": "How many questions are there?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The classic version has 100 questions. However, the 1988 version presented here includes 150 questions for a more comprehensive checklist. We also offer a 'Short Mode' with 30 questions for a quick check."
            }
          }]
        })}
      </script>
    </div>
  );
};
