import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BiCoinStack } from 'react-icons/bi';
import Navbar from 'react-bootstrap/Navbar';
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
  }, [coinsArr.length, dispatch]);
  if (coinsArr.length > 0) {
    return (
      <div className="home-container">
        <Navbar bg="light" className="nav home-nav">
          <div className="brand">
            <BiCoinStack />
            <h2>
              HOME
            </h2>
          </div>

          <form>
            <FaSearch className="search-icon" />
            <input onChange={(e) => setSearch(e.target.value)} placeholder="Search coins" />
            {' '}

          </form>
        </Navbar>
        <div className="coins-container">
          {coinsArr.filter((coin) => (search.toLowerCase() === '' ? coin : coin.coinName.toLowerCase().includes(search))).map((coin) => (
            <Coin
              key={coin.id}
              coinId={coin.id}
              coinName={coin.coinName}
              symbol={coin.symbol}
              rank={coin.rank}
            />
          ))}
        </div>
      </div>
    );
  }
  return '';
};
export default HomePage;
