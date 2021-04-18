import React from 'react';
import jQuery from 'jquery';
import {Home, ArrowBack} from '@material-ui/icons/'
import { connect } from 'react-redux';

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
        <div className="header">{this.props.project.name}</div>
      </div>
    </div>     
    <div className="window-body"> 
    <div className="icon red">{this.props.project.iconLetter} </div>
      <p>{this.props.project.description}</p>
      <button className="btn large">Live Code</button> <br />
      <button className="btn large margin-top">Github</button>
    </div>


  </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    project: state.project
  }
}

export default connect(mapStateToProps)(Window);