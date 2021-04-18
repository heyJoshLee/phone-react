import React from 'react';
import { setProject } from '../actions';
import { connect } from 'react-redux';
import jQuery from 'jquery';

const Icon = (props) => {

  const handleClick = () => {
    props.setProject(props.project);
    jQuery("#window").toggle('slow');

  }

  const renderBody = () => {
    if (props.project) {
      return props.project["iconLetter"]
    }
  }

  return (
      <div onClick={handleClick} class="pointer icon red">
        {renderBody()}
      </div>  
      )
}



export default connect(null, {
  setProject
})(Icon);