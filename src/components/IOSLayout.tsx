import React, { useEffect, useState } from 'react';
import './IOSLayout.css';

interface IOSLayoutProps {
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
}

export const IOSLayout: React.FC<IOSLayoutProps> = ({ title, children, rightAction }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="ios-layout">
      <header className={`ios-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1>{title}</h1>
          {rightAction && <div className="header-right">{rightAction}</div>}
        </div>
      </header>
      <main className="ios-content">
        {children}
      </main>
    </div>
  );
};
