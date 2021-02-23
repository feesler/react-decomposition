import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WidgetHeader from '../WidgetHeader/WidgetHeader.jsx';
import './Widget.css';

/**
 * Container with header and optional top image
 * If 'title' is specified renders WidgetHeader('title', 'link') as header
 * Append user class names and wraps specified child elements
 */
function Widget(props) {
  const { className } = props;

  const title = (props.title)
    ? <WidgetHeader title={props.title} link={props.link} />
    : null;

  const image = (props.image)
    ? <div className="widget__top-image"><img src={props.image} /></div>
    : null;

  return (
    <div className={classNames(['widget', className])}>
      {image}
      {title}
      <div className="widget__content">
        {props.children}
      </div>
    </div>
  )
}

Widget.propTypes = {
  /* Text or element of title */
  title: PropTypes.node,
  /* Header link target */
  link: PropTypes.string,
  /* Address of top image */
  image: PropTypes.string,
  /* User classes, appended to the default 'widget' */
  className: PropTypes.string,
};

export default Widget;

