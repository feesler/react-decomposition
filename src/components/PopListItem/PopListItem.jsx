import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem.jsx';

/**
 * Renders bold title, dash and brief description over standard ListItem features
 */
function PopListItem(props) {
  const { title, descr, ...remain } = props;

  const popTitle = <><b>{title}</b> &mdash; {descr}</>;

  return (
    <ListItem title={popTitle} {...remain} />
  )
}

PopListItem.propTypes = {
  ...ListItem.propTypes,
  descr: PropTypes.node.isRequired,
};

export default PopListItem;
