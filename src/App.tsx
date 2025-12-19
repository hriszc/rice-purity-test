import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import { TestPage } from './components/TestPage';

const ScoreMeanings = lazy(() => import('./components/ScoreMeanings').then(m => ({ default: m.ScoreMeanings })));
const WhatIsFrenchKissing = lazy(() => import('./components/WhatIsFrenchKissing').then(m => ({ default: m.WhatIsFrenchKissing })));
const RiceThresherPage = lazy(() => import('./components/RiceThresherPage').then(m => ({ default: m.RiceThresherPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));

function App() {
  return (
    <Suspense fallback={<div className="loading-fallback" />}>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/rice-purity-test-score-meanings" element={<ScoreMeanings />} />
        <Route path="/what-is-french-kissing" element={<WhatIsFrenchKissing />} />
        <Route path="/rice-test" element={<RiceThresherPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;