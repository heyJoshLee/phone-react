import React from 'react';
import jQuery from 'jquery';
import {Home, ArrowBack} from '@material-ui/icons/'


class Window extends React.Component {
  
  componentDidMount() {
    jQuery("#window").hide();
  }

  handleClick() {
    jQuery("#window").toggle('slow');
  }

  render() {
    return (
  <div className="window" id="window">
    <div className="ui card">
      <div className="content">
        <ArrowBack className="arrow cursor" onClick={this.handleClick}/>
        <div className="header">Project name</div>
      </div>
    </div>     
    <div className="window-body"> 
    <div className="icon red">N </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mi elementum, congue elit quis, auctor massa. Mauris at lacus id lacus aliquet condimentum. Morbi turpis metus, fermentum eget lacus ut, fermentum aliquam lectus. Cras varius nisl ac varius accumsan. Vestibulum auctor elit ut lorem tincidunt iaculis. Aliquam erat volutpat. Nullam euismod vulputate turpis, a gravida justo scelerisque ut. Praesent blandit mi sit amet lacinia ornare. Ut dignissim bibendum aliquam.</p>
      <button className="btn large">Live Code</button> <br />
      <button className="btn large margin-top">Github</button>
    </div>


  </div>
    )
  }

}

export default Window;