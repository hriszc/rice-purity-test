import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IOSLayout } from './IOSLayout';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const canonicalUrl = "https://ricepurity.online/about/";
  return (
    <IOSLayout 
      title="About & Privacy" 
      showLargeTitle={true}
      leftAction={
        <Link to="/" className="back-button" style={{ textDecoration: 'none' }}>
          Back
        </Link>
      }
    >
      <Helmet title="About Us & Privacy Policy | ricepurity.online">
        <meta name="description" content="Learn about the team behind ricepurity.online and our commitment to your privacy. Our Rice Purity Test calculator is 100% private and runs locally." />
        <meta name="keywords" content="Rice Purity Test about, ricepurity.online privacy, Rice Purity Test developers, Rice Purity Test mission, Rice Purity Test contact, Rice Purity Test embed, Rice Purity Test iframe, Rice Purity Test security, is Rice Purity Test safe, Rice Purity Test anonymous, Rice Purity Test creator, Rice University purity test origin" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="app-container animate-fade-in" style={{ padding: '20px', lineHeight: '1.6' }}>
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-color)', fontWeight: '700' }}>Our Mission</h2>
          <p>
            ricepurity.online was created to provide a clean, modern, and privacy-focused version of the classic Rice Purity Test. 
            We aim to preserve the historical accuracy of the 1988 version while providing a user-friendly interface that 
            works seamlessly on mobile devices and desktops.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-color)', fontWeight: '700' }}>Privacy Policy (100% Private)</h2>
          <p style={{ backgroundColor: '#e8f5e9', padding: '16px', borderRadius: '12px', borderLeft: '4px solid #2e7d32', marginBottom: '16px' }}>
            <strong>Your data never leaves your device.</strong>
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>No Data Collection:</strong> We do not collect, store, or share any of your answers. The calculation happens entirely within your web browser.</li>
            <li><strong>No Account Required:</strong> You don't need to sign up or provide any personal information to take the test.</li>
            <li><strong>Analytics:</strong> We use Google Analytics to monitor site traffic at an aggregate level, but this does not include any individual test responses.</li>
            <li><strong>Local Storage:</strong> If you leave the page, your progress might be saved in your browser's local storage for your convenience, which you can clear at any time.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-color)', fontWeight: '700' }}>Disclaimer</h2>
          <p>
            The Rice Purity Test is for entertainment purposes only. It should not be used as a measure of character or worth. 
            The test originated as a way for students to bond and share life experiences. We encourage all users to 
            approach the test with a sense of fun and to respect others' boundaries and life choices.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--label)', fontWeight: '700' }}>Contact Us</h2>
          <p>
            If you have any questions or feedback regarding the site, feel free to reach out to us at 
            <a href="mailto:hello@ricepurity.online" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}> hello@ricepurity.online</a>.
          </p>
        </section>

        <section id="embed" style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--label)', fontWeight: '700' }}>Embed on your Website</h2>
          <p>
            Want to share the Rice Purity Test with your audience? Copy the code below to embed the complete interactive test directly on your website or blog.
          </p>

          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--label)', fontWeight: '600' }}>Preview</h3>
            <div style={{ 
              width: '100%', 
              height: '400px', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid var(--separator)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              backgroundColor: 'var(--system-background)',
              marginBottom: '24px'
            }}>
              <iframe 
                src={`${window.location.origin}/?embed=true`} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Rice Purity Test Preview"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--label)', fontWeight: '600' }}>Embed Code</h3>
            <div style={{ 
              backgroundColor: 'var(--tertiary-system-background)', 
              padding: '16px', 
              borderRadius: '12px', 
              border: '1px solid var(--separator)'
            }}>
              <code style={{ 
                fontSize: '0.85rem', 
                display: 'block', 
                wordBreak: 'break-all', 
                color: 'var(--label)',
                backgroundColor: 'rgba(0,0,0,0.05)',
                padding: '8px',
                borderRadius: '6px',
                marginBottom: '12px',
                fontFamily: 'monospace'
              }}>
                {`<iframe src="https://ricepurity.online/?embed=true" width="100%" height="800" frameborder="0" style="border:none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></iframe>
<p style="text-align: center; font-size: 12px; margin-top: 8px;">Powered by <a href="https://ricepurity.online/">Rice Purity Test Official</a></p>`}
              </code>
              <button 
                onClick={() => {
                  const code = `<iframe src="https://ricepurity.online/?embed=true" width="100%" height="800" frameborder="0" style="border:none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"></iframe>\n<p style="text-align: center; font-size: 12px; margin-top: 8px;">Powered by <a href="https://ricepurity.online/">Rice Purity Test Official</a></p>`;
                  navigator.clipboard.writeText(code);
                  alert('Embed code copied to clipboard!');
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Copy Embed Code
              </button>
            </div>
          </div>
        </section>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link to="/" className="button-primary-large" style={{ textDecoration: 'none', display: 'inline-block', width: '100%', maxWidth: '300px' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </IOSLayout>
  );
};
