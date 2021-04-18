import React from 'react';
import Icon from '../components/Icon'
import {Home, ArrowBack} from '@material-ui/icons/'


const HomeRow = () => {
  return (
    <div className="home-row">
      <Icon > <Home /></ Icon>
      <Icon />
      <Icon />
      <Icon />
   </div>
  )
}

export default HomeRow;