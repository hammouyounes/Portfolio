import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LinksPage from './pages/LinksPage';
import AchievementsPage from './pages/AchievementsPage';
import ScrollProgress from './components/ui/ScrollProgress';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

