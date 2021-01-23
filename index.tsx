import React from "react";
import ReactDOM from "react-dom";

class InitComponent extends React.Component {
  render() {
    return <h1>this is component</h1>;
  }
}

ReactDOM.render(<InitComponent />, document.getElementById("app"));
