import React from 'react';
import PropTypes from 'prop-types';
import '../styles/coin.css';
import { Link } from 'react-router-dom';

const Coin = (props) => {
  const {
    coinId, coinName, symbol, rank, coinPrice,
  } = props;
  return (
    <div className="coin-container">
      <h4>
        {coinName}
        {' '}
        (
        {symbol}
        )
      </h4>
      <p>
        Rank:
        {rank}
      </p>
      <p>
        Price:
        {parseFloat(coinPrice).toFixed(3)}
      </p>
      <Link to={`/coin-details/${coinId}`}>View</Link>
    </div>
  );
};
Coin.propTypes = {
  coinId: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  coinPrice: PropTypes.string.isRequired,
};

export default Coin;
