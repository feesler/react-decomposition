import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

/**
 * Renders link with image inside.
 * This is the most important component, please recheck twice
 */
function Banner(props) {
  const { link, image } = props;

  return (
    <div className="banner">
      <a href={link}>
        <img src={image} />
      </a>
    </div>
  )
}

Banner.propTypes = {
  /* Link to the advertisers page */
  link: PropTypes.string.isRequired,
  /* Banner image */
  image: PropTypes.string.isRequired,
};

export default Banner;
