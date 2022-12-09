import React from 'react';
import PropTypes from 'prop-types';
import '../styles/coin.css';
import { Link } from 'react-router-dom';
import { FcRight } from 'react-icons/fc';

const Coin = (props) => {
  const {
    coinId, coinName, symbol, rank,
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
      <FcRight />
    </Link>
  );
};
Coin.propTypes = {
  coinId: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default Coin;
