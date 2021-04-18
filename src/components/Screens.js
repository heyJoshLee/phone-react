import React from 'react';
import Icon from './Icon';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { fetchProjets } from "../actions"

class Screens extends React.Component {

  componentDidMount () {
    this.props.fetchProjets();
    console.log(this.props.projects)
  }

  renderIcons(start, end) {
    if (this.props.projects.length > 0 ) {
      return this.props.projects.slice(start, end).map(project => {
        return <Icon project={project} />
      });
    };
  }

  render() {

    return (
      <SwipeableViews enableMouseEvents>
        <div className="screen">
          {this.renderIcons(0, 10)}
        </div>
        <div className="screen">
          {this.renderIcons(0, 1)}

        </div>
        <div className="screen">
          {this.renderIcons(0, 1)}
        </div>
      </SwipeableViews>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps, {
  fetchProjets
})(Screens);