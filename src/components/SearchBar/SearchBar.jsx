import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

/**
 * Search form with custom logo
 */
function SearchBar(props) {
  const { logo } = props;

  const logoStyle = {
    backgroundImage: `url(${logo})`
  };

  return (
    <div className="search-bar">
      <div className="search-bar__logo" style={logoStyle}></div>
      <form className="search-bar__form">
        <input className="search-bar__form-input" type="text" />
        <button className="search-bar__form-btn" type="submit">Искать</button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  /* Address of the logo image */
  logo: PropTypes.string.isRequired,
};

export default SearchBar;
