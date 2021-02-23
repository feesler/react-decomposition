import React from 'react'
import PropTypes from 'prop-types';
import './IconButton.css';

/**
 * Renders button(link) with icon on custom background
 */
function IconButton(props) {
  const { title, icon, link } = props;

  return (
    <a className="icon-btn" href={link}><img src={icon} />{title}</a>
  )
}

IconButton.propTypes = {
  /* Text or other element to render inside of the button */
  title: PropTypes.node.isRequired,
  /* Icon on the left side */
  icon: PropTypes.string.isRequired,
  /* Link of the button */
  link: PropTypes.string.isRequired,
};

export default IconButton;
