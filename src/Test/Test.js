import React, { Component } from "react";
import "./test.css";

export default class Test extends Component {
  render() {
    return (
      <div className="test border border-dark d-flex w-100 align-items-center ">
        <div id="one">One</div>
        <div id="two">Two</div>
      </div>
    );
  }
}
