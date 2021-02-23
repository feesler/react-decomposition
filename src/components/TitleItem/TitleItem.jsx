import React from 'react';
import PropTypes from 'prop-types';
import './TitleItem.css';
import classNames from 'classnames';

/**
 * Common blue header title.
 * Several of these could be combined into tabs header.
 */
function TitleItem(props) {
  const { link, active } = props;

  const titleClass = classNames(['title', { 'title_active': active }]);

  const title = (props.title)
    ? <h2 className={titleClass}><a className="title-item__link" href={link}>{props.title}</a></h2>
    : null;

  return (
    <div className="title-item">
      {title}
      {props.children}
    </div>
  )
}

TitleItem.propTypes = {
  /* Text of title */
  title: PropTypes.node.isRequired,
  /* Link of title */
  link: PropTypes.string.isRequired,
  /* Active flag; inactive items renders dimmed */
  active: PropTypes.bool,
};

TitleItem.defaultProps = {
  active: true
};

export default TitleItem;
