import React from 'react';
import PropTypes from 'prop-types';
import PopListItem from '../PopListItem/PopListItem.jsx';

/**
 * Renders list of popular items (see PopListItem)
 */
function PopularList(props) {
  const { items } = props;

  return (
    <div>
      {items.map((item) => <PopListItem key={item.id} {...item} />)}
    </div>
  )
}

PopularList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      ...PopListItem.propTypes,
    }),
  ),
};

export default PopularList;
