import React from 'react';
import PropTypes from 'prop-types';
import './WidgetHeader.css';
import TitleItem from '../TitleItem/TitleItem.jsx';

/**
 * Header container of widget
 * If 'title' is specified includes single TitleItem with ('title', 'link') props
 */
function WidgetHeader(props) {
  const title = (props.title)
    ? <TitleItem title={props.title} link={props.link}/>
    : null;

  return (
    <div className="widget-title">
      {title}
      {props.children}
    </div>
  )
}

WidgetHeader.propTypes = {
  /* Text or element of title */
  title: PropTypes.node,
  /* Link target */
  link: PropTypes.string,
};

export default WidgetHeader;

