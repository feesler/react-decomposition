import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget/Widget.jsx';
import WidgetHeader from '../WidgetHeader/WidgetHeader.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import TitleItem from '../TitleItem/TitleItem.jsx';
import './NewsWidget.css';

/**
 * Renders news list widget with custom header and user footer
 */
function NewsWidget(props) {
  const { tabs, news } = props;

  return (
    <Widget className="news-widget">
      <WidgetHeader>
        {tabs.map((item) => <TitleItem key={item.id} {...item} />)}
        <div className="title-hint">время московское</div>
      </WidgetHeader>
      <div className="news-list">
        {news.map((item) => <ListItem key={item.id} {...item} />)}
      </div>
      {props.children}
    </Widget>
  )
}

NewsWidget.propTypes = {
  /* List of header tabs */
  tabs: PropTypes.array.isRequired,
  /* News list */
  news: PropTypes.array.isRequired,
};

export default NewsWidget;
