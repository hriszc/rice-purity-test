import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IOSLayout } from './IOSLayout';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
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
      <Helmet>
        <title>About Us & Privacy Policy | ricepurity.online</title>
        <meta name="description" content="Learn about the team behind ricepurity.online and our commitment to your privacy. Our Rice Purity Test calculator is 100% private and runs locally." />
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
          <h2 style={{ fontSize: '1.4rem', marginBottom: '12px', color: 'var(--text-color)', fontWeight: '700' }}>Contact Us</h2>
          <p>
            If you have any questions or feedback regarding the site, feel free to reach out to us at 
            <a href="mailto:hello@ricepurity.online" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}> hello@ricepurity.online</a>.
          </p>
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
