import React from "react";
import ReactDOM from "react-dom";
 
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>d, {this.props.name}!</p>
    );
  }
});
 
ReactDOM.render(
  <div>
    <HelloWorld name="jono"/>
    <HelloWorld name="Stack Overflow" />
  </div>,
  document.querySelector("#container")
);  
