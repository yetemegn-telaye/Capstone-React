import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinsData } from '../redux/coins';
import Coin from './Coin';

const HomePage = () => {
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
  console.log(coinsArr);
  if (coinsArr.length > 0) {
    return (
      <div>
        HomePage
        {coinsArr.map((coin) => (
          <div key={coin.id}>
            <h3>
              {coin.coinName}
              {' '}
              (
              {coin.symbol}
              )
              {' '}
            </h3>
            <p>
              Rank:
              {coin.rank}
            </p>
            <p>
              Price($):
              {coin.priceUsd}
            </p>
          </div>
        ))}
        <Coin />
        <Coin />

      </div>
    );
  }
  return '';
};
export default HomePage;
