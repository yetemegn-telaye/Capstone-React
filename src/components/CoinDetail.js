import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const CoinDetail = () => {
  const coinData = useSelector((state) => state.coins);
  const { id } = useParams();
  return (
    <div>
      <div className="nav detail-nav">
        <Link to="/"><BsFillArrowLeftCircleFill /></Link>
        <h4>{id}</h4>
      </div>
      <div>
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
    </div>
  );
};

export default CoinDetail;
