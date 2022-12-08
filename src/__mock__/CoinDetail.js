import React from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BrowserRouter, Link } from 'react-router-dom';

const CoinDetail = () => {
  const coinData = [{
    id: "bitcoin",
    coinName: "Bitcoin",
    rank: "1",
    symbol: "BTC",
    priceUsd: "16954.3049792354269760",
  },
  {
    id: "ethereum",
    coinName: "Ethereum",
    rank: "2",
    symbol: "ETH",
    priceUsd: "1251.6039317426632165",
  },
]
  const id = "bitcoin";
  return (
    <BrowserRouter>
    
      <div>
      <Link to="/"><BsFillArrowLeftCircleFill /></Link>
        <h4>{id}</h4>
        {
      coinData.filter((coin) => coin.id === id).map((coin) => (
        <div key={coin.id}>
          <h4>{coin.coinName}</h4>
          <p>{coin.rank}</p>
          <p>{coin.priceUsd}</p>
        </div>
      ))
    }
      </div>
    
    </BrowserRouter>
  );
};

export default CoinDetail;