import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinsData } from '../redux/coins';
import Coin from './Coin';
import '../styles/home.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const coinsArr = useSelector((state) => state.coins);
  const shouldFetch = useRef(false);
  useEffect(() => {
    if (shouldFetch.current) {
      if (coinsArr.length === 0) {
        dispatch(fetchCoinsData());
      }
    }
    shouldFetch.current = true;
  }, []);
  if (coinsArr.length > 0) {
    return (
      <div className="home-container">
        <div className="nav">
          <h4>Home</h4>
          <form>
            <input onChange={(e) => setSearch(e.target.value)} placeholder="Search coins" />
          </form>
        </div>
        <div className="coins-container">
          {coinsArr.filter((coin) => (search.toLowerCase() === '' ? coin : coin.coinName.toLowerCase().includes(search))).map((coin) => (
            <Coin
              key={coin.id}
              coinId={coin.id}
              coinName={coin.coinName}
              symbol={coin.symbol}
              rank={coin.rank}
              coinPrice={coin.priceUsd}
            />
          ))}
        </div>
      </div>
    );
  }
  return '';
};
export default HomePage;
