import './styles/output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlagMemoryPage from './pages/FlagMemoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flag-memory" element={<FlagMemoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;