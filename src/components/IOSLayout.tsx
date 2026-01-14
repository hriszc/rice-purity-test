import React, { Suspense, lazy, useEffect, useState } from 'react';
import './IOSLayout.css';

const DanmakuBackground = lazy(() =>
  import('./DanmakuBackground').then((m) => ({ default: m.DanmakuBackground }))
);

interface IOSLayoutProps {
  title: string;
  children: React.ReactNode;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  showLargeTitle?: boolean;
}

export const IOSLayout: React.FC<IOSLayoutProps> = ({ title, children, leftAction, rightAction, showLargeTitle = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [titleOpacity, setTitleOpacity] = useState(0);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [showDanmaku, setShowDanmaku] = useState(false);

  useEffect(() => {
    // Detect if embedded via iframe or query param
    const checkEmbed = () => {
      const isIframe = window.self !== window.top;
      const hasEmbedParam = new URLSearchParams(window.location.search).get('embed') === 'true';
      setIsEmbedded(isIframe || hasEmbedParam);
    };
    checkEmbed();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 40);
          
          if (scrollY > 20) {
            const opacity = Math.min((scrollY - 20) / 40, 1);
            setTitleOpacity(opacity);
          } else {
            setTitleOpacity(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowDanmaku(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`ios-layout ${isEmbedded ? 'is-embedded' : ''}`}>
      {!isEmbedded && showDanmaku && (
        <Suspense fallback={null}>
          <DanmakuBackground />
        </Suspense>
      )}
      <header className={`ios-header ${(!showLargeTitle || scrolled) ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="header-left">{leftAction}</div>
          <div className="sticky-header-title" style={{ opacity: showLargeTitle ? titleOpacity : 1 }}>{title}</div>
          <div className="header-right" style={{ 
            opacity: showLargeTitle ? titleOpacity : 1,
            pointerEvents: (showLargeTitle && titleOpacity < 0.5) ? 'none' : 'auto'
          }}>{rightAction}</div>
        </div>
      </header>
      <main className="ios-content">
        {showLargeTitle && (
          <div className="large-title-container">
            <h1 className="large-title">{title}</h1>
            {rightAction && (
              <div className="large-title-right-action" style={{ 
                opacity: isEmbedded ? 1 : 1 - titleOpacity,
                pointerEvents: (isEmbedded || 1 - titleOpacity > 0.5) ? 'auto' : 'none'
              }}>
                {rightAction}
              </div>
            )}
          </div>
        )}
        {children}
      </main>
    </div>
  );
};
