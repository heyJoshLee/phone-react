import React from 'react';
import Icon from './Icon';
import SwipeableViews from 'react-swipeable-views';


const Screens = () => {
  return (
    <SwipeableViews enableMouseEvents>
      <div className="screen">
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
 
    </div>
    <div className="screen">
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </div>
    <div className="screen">
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </div>
    </SwipeableViews>
  )
}

export default Screens;