import { IOSLayout } from './IOSLayout';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function RiceThresherPage() {
  const publishDate = "1988-04-01";
  const pageUrl = "https://ricepurity.online/rice-test/";
  
  // Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "headline": "The Rice Thresher (April 1, 1988) - Original Rice Purity Test Source",
    "description": "The definitive original source of the 1988 Rice Purity Test, published in The Rice Thresher. View the historical archive and original PDF.",
    "image": "https://ricepurity.online/rice.svg", 
    "datePublished": publishDate,
    "dateModified": "2025-12-19",
    "author": {
      "@type": "Organization",
      "name": "The Rice Thresher",
      "url": "https://digitalcollections.rice.edu/Documents/Detail/the-rice-thresher-houston-tex.-vol.-75-no.-24.5-ed.-1-friday-april-1-1988/18427?item=34406"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rice University Digital Collections",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ricepurity.online/rice.svg"
      }
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the original source of the 1988 Rice Purity Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 1988 version of the Rice Purity Test was originally published in The Rice Thresher, Rice University's student newspaper, on April 1, 1988 (Volume 75, No. 24.5)."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find the archive of the original Rice Purity Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The original document is preserved in the Rice University Digital Collections. You can view the original PDF and archival details on our dedicated 'Rice Test' source page."
        }
      }
    ]
  };

  return (
    <IOSLayout 
      title="Rice Test Source" 
      showLargeTitle={false} 
      leftAction={
        <Link to="/" className="back-button" style={{ textDecoration: 'none' }}>
          Back
        </Link>
      }
    >
      <Helmet title="The Rice Thresher (April 1, 1988) - Original Rice Purity Test">
        <meta name="description" content="Access the verified original source of the 1988 Rice Purity Test from The Rice Thresher archive. View the original PDF and historical context." />
        <meta name="keywords" content="Rice Purity Test 1988, The Rice Thresher April 1 1988, original purity test, Rice University history, purity test archive, Rice Purity Test 1988 meaning, Rice Purity Test 1988 questions, Rice Purity Test 1988 score, Rice Purity Test 1988 calculator, Rice Purity Test 1988 official, Rice University student life 1980s, Rice University culture, Thresher archive, Rice Thresher archive, old Rice Purity Test, historical purity test, classic Rice Purity Test" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="The Rice Thresher (April 1, 1988) - Original Rice Purity Test" />
        <meta property="og:description" content="Access the verified original source of the 1988 Rice Purity Test from The Rice Thresher archive." />
        <meta property="og:image" content="https://ricepurity.online/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="The Rice Thresher (April 1, 1988) - Original Rice Purity Test" />
        <meta name="twitter:description" content="Access the verified original source of the 1988 Rice Purity Test from The Rice Thresher archive." />
        <meta name="twitter:image" content="https://ricepurity.online/og-image.png" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="app-container animate-fade-in" style={{ padding: '20px' }}>
        <article itemScope itemType="https://schema.org/Article">
          <header>
            <h1 className="intro-title" style={{ fontSize: '28px', marginBottom: '16px', fontWeight: '800', lineHeight: '1.2' }} itemProp="headline">
              Rice Test: Original 1988 Source
            </h1>
            <div style={{ color: 'var(--secondary-label)', fontSize: '14px', marginBottom: '24px' }}>
              Published on <time dateTime={publishDate} itemProp="datePublished">Friday, April 1, 1988</time>
            </div>
          </header>

          <div className="intro-card" style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--label)' }}>Historical Context</h2>
            <p className="intro-desc" style={{ marginBottom: '20px', lineHeight: '1.6' }} itemProp="description">
              This version of the <strong>Rice Purity Test</strong> is widely considered the definitive 1988 update. It was first printed in <em>The Rice Thresher</em> (Volume 75, Number 24.5), serving as a cultural snapshot of student life at Rice University during the late 80s.
            </p>
            
            <section className="intro-section" style={{ background: 'rgba(0,0,0,0.03)', padding: '20px', borderRadius: '14px', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', color: 'var(--label)', marginBottom: '12px', fontWeight: '600' }}>Archival Metadata</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', color: 'var(--secondary-label)' }}>
                <li style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Publication:</strong> <span>The Rice Thresher</span>
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Volume / Issue:</strong> <span>Vol. 75, No. 24.5</span>
                </li>
                <li style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Source Institution:</strong> <span>Rice University</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>Collection:</strong> <span>Digital Collections</span>
                </li>
              </ul>
            </section>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a 
                href="/doc/thr19880401-8.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-primary-large"
                style={{ textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <span role="img" aria-label="pdf">📄</span> View Original PDF Archive
              </a>
              
              <a 
                href="https://digitalcollections.rice.edu/Documents/Detail/the-rice-thresher-houston-tex.-vol.-75-no.-24.5-ed.-1-friday-april-1-1988/18427?item=34406" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-secondary"
                style={{ textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <span role="img" aria-label="link">🌐</span> Digital Collections Page
              </a>
            </div>
          </div>

          <section className="seo-content" style={{ fontSize: '15px', color: 'var(--secondary-label)', lineHeight: '1.7' }}>
            <h2 style={{ fontSize: '20px', color: 'var(--label)', marginBottom: '12px' }}>Why This Version Matters</h2>
            <p>
              The "New and Improved 1988 Rice Thresher Purity Test" was created to modernize the original test first printed years earlier. While many versions exist online, this 150-question version is the most cited historical variant, capturing the transition from the "old" traditions to the more contemporary university experience.
            </p>
            <p style={{ marginTop: '16px' }}>
              By accessing the original archive, users can verify the authenticity of the questions and understand the context in which they were written—as a humorous yet telling reflection of collegiate social norms.
            </p>
            <p style={{ marginTop: '16px', fontSize: '13px', fontStyle: 'italic' }}>
              Document preserved and digitized by Rice University Digital Collections. All rights reserved by the original publishers.
            </p>
          </section>
        </article>
      </div>
    </IOSLayout>
  );
}
