import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LinksPage from './pages/LinksPage';
import AchievementsPage from './pages/AchievementsPage';
import ScrollProgress from './components/ui/ScrollProgress';
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    <Router>
      <Analytics />
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

