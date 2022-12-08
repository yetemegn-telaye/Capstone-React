import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const HomePage = () => {
  const coinsArr = [{
    id: 'bitcoin',
    coinName: 'Bitcoin',
    rank: '1',
    symbol: 'BTC',
    priceUsd: '16954.3049792354269760',
  }];
  return (
    <BrowserRouter>

      <h4>Home</h4>

      {coinsArr.map((coin) => (
        <div key={coin.id} className="coin-container">
          <h4>
            {coin.coinName}

            {coin.symbol}

          </h4>
          <p>
            Rank:
            {coin.rank}
          </p>
          <p>
            Price:
            {parseFloat(coin.priceUsd).toFixed(3)}
          </p>
          <Link to={`/coin-details/${coin.id}`}>View</Link>
        </div>
      ))}
    </BrowserRouter>
  );
};
export default HomePage;
