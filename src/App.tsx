import { Routes, Route } from 'react-router-dom';
import './App.css';
import { TestPage } from './components/TestPage';
import { ScoreMeanings } from './components/ScoreMeanings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/rice-purity-test-score-meanings" element={<ScoreMeanings />} />
    </Routes>
  );
}

export default App;