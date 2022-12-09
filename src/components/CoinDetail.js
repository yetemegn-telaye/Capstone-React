import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import '../styles/coindetail.css';

const CoinDetail = () => {
  const coinData = useSelector((state) => state.coins);
  const { id } = useParams();
  return (
    <div>
      <div className="nav detail-nav">
        <Link to="/"><FaChevronLeft /></Link>
        <h2>{id.toUpperCase()}</h2>
      </div>
      <div className="detail-container">
        {
      coinData.filter((coin) => coin.id === id).map((coin) => (
        <div key={coin.id} className="desc-cont">
          <div className="title-coin">
            <span>
              COIN NAME:
              {' '}
              {coin.coinName}
            </span>
          </div>
          <div className="desc">
            <p>
              RANK:
              {' '}
              {coin.rank}
            </p>
            <p>
              COIN PRICE($):
              {' '}
              {parseFloat(coin.priceUsd).toFixed(3)}
            </p>
          </div>
        </div>
      ))
    }
      </div>
    </div>
  );
};

export default CoinDetail;
