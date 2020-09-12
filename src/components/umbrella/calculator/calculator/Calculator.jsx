import React, { useEffect } from "react";
import "../assets/css/calculator.css";
import { connect } from "react-redux";
import { ac } from "../Actions/Actions";

const Calculator = (props) => {
  const clickEvent = (event) => {
    props.dispatch({ type: event.target.id });
  };
  //componentWillUnmount
  useEffect(() => {
    return () => {
      props.dispatch(ac);
    };
  }, []);

  return (
    <div className="calculator d-flex flex-column">
      <div id="historyField">{props.state.history}</div>
      <div id="resultField">{props.state.typingLine}</div>

      <div onClick={clickEvent} className="buttonsField">
        <button id="ac">{props.state.buttons.ac}</button>
        <button id="del">{props.state.buttons.del}</button>
        <button className="percent" id="%">
          {props.state.buttons["%"]}
        </button>
        <button className="divide" id="/">
          {props.state.buttons["/"]}
        </button>
        <button id="7">{props.state.buttons["7"]}</button>
        <button id="8">{props.state.buttons["8"]}</button>
        <button id="9">{props.state.buttons["9"]}</button>
        <button id="x">{props.state.buttons["x"]}</button>
        <button id="4">{props.state.buttons["4"]}</button>
        <button id="5">{props.state.buttons["5"]}</button>
        <button id="6">{props.state.buttons["6"]}</button>
        <button className="minus" id="-">
          {props.state.buttons["-"]}
        </button>
        <button id="1">{props.state.buttons["1"]}</button>
        <button id="2">{props.state.buttons["2"]}</button>
        <button id="3">{props.state.buttons["3"]}</button>
        <button className="plus" id="+">
          {props.state.buttons["+"]}
        </button>
        <button id="e">E</button>
        <button id="0">{props.state.buttons["0"]}</button>
        <button id=".">{props.state.buttons["."]}</button>
        <button className="equal" id="=">
          {props.state.buttons["="]}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(Calculator);
