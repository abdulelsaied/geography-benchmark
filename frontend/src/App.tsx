import './styles/output.css';
import './styles/tailwind.css';
import './styles/global.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlagMemoryPage from './pages/FlagMemoryPage';
import MoreOrLessPage from './pages/MoreOrLessPage';
import { ScoresProvider } from './context/ScoresProvider';
import { preloadImages } from './utils/imageUtils';

function App() {

  useEffect(() => {
    preloadImages();
    console.log("preloaded images");
  }, []);
  return (
    <ScoresProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flag-memory" element={<FlagMemoryPage />} />
          <Route path="/more-or-less" element={<MoreOrLessPage />} />
        </Routes>
      </Router>
    </ScoresProvider>
  );
}

export default App;