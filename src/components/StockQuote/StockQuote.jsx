import React from 'react';
import PropTypes from 'prop-types';
import './StockQuote.css';

/**
 * Renders instrument name, current price and change
 */
function StockQuote(props) {
  const { link, title, price, change, units } = props;

  const formatPrice = (value, units = '') => {
    let sign = '';
    if (value !== 0) {
      sign = (value > 0) ? '+' : '-';
    }

    return `${sign}${value.toFixed(2)}${units}`;
  }

  return (
    <div className="stock-quote">
      <a className="stock-quote__title" href={link}>{title}</a>
      <span className="stock-quote__price">{formatPrice(price)}</span>
      <span className="stock-quote__change">{formatPrice(change, units)}</span>
    </div>
  )
}

StockQuote.propTypes = {
  /* Link to the detailed instrument chart */
  link: PropTypes.string.isRequired,
  /* Instrument name */
  title: PropTypes.string.isRequired,
  /* Current price value */
  price: PropTypes.number.isRequired,
  /* Price change from last period */
  change: PropTypes.number.isRequired,
  /* Optional units for price change */
  units: PropTypes.string,
};

StockQuote.defaultProps = {
  units: ''
};

export default StockQuote;
