import React from 'react';
import PropTypes from 'prop-types';
import TitleItem from '../TitleItem/TitleItem.jsx';
import './ServiceTabBar.css';

/**
 * List of all active TitleItem
 */
function ServiceTabBar(props) {
  const { items } = props;

  return (
    <div className="service-tab-bar" >
      {items.map((item) => <TitleItem key={item.id} {...item} />)}
    </div>
  )
}

ServiceTabBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ...TitleItem.propTypes
    }),
  ),
};

export default ServiceTabBar

