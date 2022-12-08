import React from 'react';
import PropTypes from 'prop-types';
import '../styles/coin.css';
import { Link } from 'react-router-dom';
import { FcRight } from 'react-icons/fc';

const Coin = (props) => {
  const {
    coinId, coinName, symbol, rank, coinPrice,
  } = props;
  return (
    <Link to={`/coin-details/${coinId}`} className="coin-container">
      <h3>
        {coinName}
        {' '}
        (
        {symbol}
        )
      </h3>
      <p>
        RANK:
        {rank}
      </p>
      <p>
        PRICE($):
        {' '}
        {' '}
        {parseFloat(coinPrice).toFixed(3)}
      </p>
      <Link to={`/coin-details/${coinId}`}><FcRight /></Link>
    </Link>
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
