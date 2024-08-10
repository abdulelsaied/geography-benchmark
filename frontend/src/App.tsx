import './styles/output.css';
import './styles/tailwind.css';
import './styles/global.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlagMemoryPage from './pages/FlagMemoryPage';
import MoreOrLessPage from './pages/MoreOrLessPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flag-memory" element={<FlagMemoryPage />} />
          <Route path="/more-or-less" element={<MoreOrLessPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;