import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CoinDetail from './components/CoinDetail';
import Coin from './components/Coin';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/coin-details" element={<CoinDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
