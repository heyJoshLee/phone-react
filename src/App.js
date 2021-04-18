import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './App.css';
import Icon from './components/Icon';
import Balls from './components/Balls';
import Screens from './components/Screens';
import Window from './components/Window';
import HomeButtons from './components/HomeButtons';
import HomeRow from './components/HomeRow';

function App() {

  return (
    <div className="phone">
      <Window />
      <Screens />
      <Balls />
      <HomeRow />
      <HomeButtons />
    </div>
  );
}

export default App;
