import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget/Widget.jsx';
import WidgetHeader from '../WidgetHeader/WidgetHeader.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import IconButton from '../IconButton/IconButton.jsx';
import playIconNoBg from '../../assets/play.png';

/**
 * TV widget with exclusive button on extended header
 */
function TvWidget(props) {
  const { items } = props;

  return (
    <Widget>
      <WidgetHeader title="Телепрограмма" link="#">
        <IconButton icon={playIconNoBg} title="Эфiръ" link="#" />
      </WidgetHeader>
      {items.map((item) => <ListItem key={item.id} {...item} />)}
    </Widget>
  )
};

TvWidget.propTypes = {
  /* List of currently actual TV programs */
  items: PropTypes.array,
};

export default TvWidget;
