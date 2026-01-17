import { Routes, Route } from 'react-router-dom';
import './App.css';
import { TestPage } from './components/TestPage';
import { ScoreMeanings } from './components/ScoreMeanings';
import { WhatIsFrenchKissing } from './components/WhatIsFrenchKissing';
import { RiceThresherPage } from './components/RiceThresherPage';
import { AboutPage } from './components/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/rice-purity-test-score-meanings" element={<ScoreMeanings />} />
      <Route path="/what-is-french-kissing" element={<WhatIsFrenchKissing />} />
      <Route path="/rice-test" element={<RiceThresherPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
