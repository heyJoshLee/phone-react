import React from 'react';
const Icon = (props) => {

  const renderBody = () => {
    if (props.children) {
      return <div className="large-icon"> {props.children} </div>
    } else {
      return <div>F</div>
    }
  }

  return (
      <div onClick={() => console.log("CLICKED")} class="pointer icon red">
        {renderBody()}      
      </div>  
      )
}

export default Icon;