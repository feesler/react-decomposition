import React from 'react';
import PropTypes from 'prop-types';
import StockQuote from '../StockQuote/StockQuote.jsx';
import './StocksBar.css';

/**
 * List of stock quotes
 */
function StocksBar(props) {
  const { quotes } = props;

  return (
    <div className="stock-bar">
      {quotes.map((item) => <StockQuote key={item.id} {...item} />)}
    </div>
  )
}

StocksBar.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape(StockQuote.propTypes),
  ).isRequired,
};

export default StocksBar;

