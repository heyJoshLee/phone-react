import React from 'react';
import {Home, ArrowBack} from '@material-ui/icons/'
import jQuery from 'jquery';


const HomeButtons = () => {

  const handleClick = () => {
    jQuery("#window").toggle('slow');
  }

  return (
    <div onClick={handleClick} className="home-buttons">
      <ArrowBack /> <Home />
    </div>
  )
}

export default HomeButtons;