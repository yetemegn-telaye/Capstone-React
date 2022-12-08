import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoinDetail from './components/CoinDetail';
import Coin from './components/Coin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coin-details/:id" element={<CoinDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
