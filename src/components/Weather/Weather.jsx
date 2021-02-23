import React from 'react';
import PropTypes from 'prop-types';
import mixedWeatherIcon from '../../assets/weather-mixed.png';
import './Weather.css';

/**
 * Renders content of weather widget
 */
function Weather(props) {
  const { now, next, later } = props;

  const formatTemperature = (value) => {
    let sign = '';
    if (value !== 0) {
      sign = (value > 0) ? '+' : '-';
    }

    return `${sign}${value.toFixed(0)}°`;
  };

  const iconsMap = {
    mixed: mixedWeatherIcon,
  };

  const icon = iconsMap[now.type];
  const tNow = formatTemperature(now.t);
  const tNext = formatTemperature(next.t);
  const tLater = formatTemperature(later.t);
  const nextFmt = `${next.title} ${tNext},`;
  const laterFmt = `${later.title} ${tLater}`;

  return (
    <div className="weather">
      <div className="weather-now">
        <img className="weather-icon" src={icon} />
        <span className="weather-temp">{tNow}</span>
      </div>
      <div className="weather-next">
        <span>{nextFmt}</span>
        <span>{laterFmt}</span>
      </div>
    </div>
  );
}

Weather.propTypes = {
  now: PropTypes.shape({
    /* Type of weather for icon; currently supported: 'mixed' */
    type: PropTypes.string.isRequired,
    /* Current temperature */
    t: PropTypes.number.isRequired,
  }).isRequired,
  /* Closest period of prediction, usualy after 6 hours */
  next: PropTypes.shape({
    /* Predicted temperature for period */
    t: PropTypes.number.isRequired,
    /* Name of period */
    title: PropTypes.string.isRequired,
  }).isRequired,
  /* Late period of prediction, usualy after 12 hours */
  later: PropTypes.shape({
    /* Predicted temperature for period */
    t: PropTypes.number.isRequired,
    /* Name of period */
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Weather;
