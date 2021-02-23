import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

/**
 * Single line link with optional icon and hint text.
 */
function ListItem(props) {
  const { title, link } = props;

  const icon = (props.icon)
    ? <div className="list-item__icon"><img src={props.icon} /></div>
    : null;

  const hint = (props.hint)
    ? <span className="list-item__hint">{props.hint}</span>
    : null;

  return (
    <div className="list-item">
      {icon}
      <a className="list-item__link" href={link}>
        <p className="list-item__title">{title}</p>
      </a>
      {hint}
    </div>
  )
}

ListItem.propTypes = {
  /* Main content text or element */
  title: PropTypes.node.isRequired,
  /* Link target */
  link: PropTypes.string.isRequired,
  /* Optional icon image */
  icon: PropTypes.string,
  /* Optional light text at the end of line */
  hint: PropTypes.string,
};

ListItem.defaultProps = {
  icon: null,
  hint: null,
};

export default ListItem;
