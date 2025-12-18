import React, { useEffect, useState } from 'react';
import './IOSLayout.css';

interface IOSLayoutProps {
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
  showLargeTitle?: boolean;
}

export const IOSLayout: React.FC<IOSLayoutProps> = ({ title, children, rightAction, showLargeTitle = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [titleOpacity, setTitleOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      
      // Calculate opacity for the header title (fades in as large title fades out)
      // Large title is usually at top 16px-ish and has height ~40px
      if (scrollY > 20) {
        const opacity = Math.min((scrollY - 20) / 40, 1);
        setTitleOpacity(opacity);
      } else {
        setTitleOpacity(0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ios-layout">
      <header className={`ios-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="sticky-header-title" style={{ opacity: showLargeTitle ? titleOpacity : 1 }}>{title}</div>
          {rightAction && <div className="header-right">{rightAction}</div>}
        </div>
      </header>
      <main className="ios-content">
        {showLargeTitle && (
          <div className="large-title-container">
            <h1 className="large-title">{title}</h1>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};
