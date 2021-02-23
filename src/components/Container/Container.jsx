import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.css';

/**
 * Common container
 * Append user class names and wraps specified child elements
 */
function Container(props) {
  return (
    <div className={classNames(['container', props.className])}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  /* User classes, appended to the default 'container' */
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
