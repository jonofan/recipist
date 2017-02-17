import React from "react";
import ReactDOM from "react-dom";
//import style from 'styles/main';
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p className='person-text'>Hello {this.props.name}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld name="jono"/>
    <HelloWorld name="Stack Overflow" />
    <HelloWorld name="Chavez" />
    
  </div>,
  document.querySelector("#container")
);  
