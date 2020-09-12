import React, { useEffect, useRef } from "react";
import white from "../../assets/images/white.ico";
import black from "../../assets/images/black.png";
import "../../assets/css/rightField.css";

import { connect } from "react-redux";
import { startNewGameAction } from "../../actions/Actions";

const RightField = (props) => {
  const startNewGame = () => {
    props.dispatch(startNewGameAction);
  };
  const startNewGameRef = useRef();
  useEffect(() => {
    if (props.state.toggle) {
      startNewGameRef.current.setAttribute("disabled", "disabled");
    } else {
      startNewGameRef.current.removeAttribute("disabled", "disabled");
    }
  });

  return (
    <div className="rightField d-flex flex-wrap">
      <div>
        <img src={white} alt="score <O>" />
        <span>{props.state.oScore}</span>
      </div>
      <div>
        <img src={black} alt="score <X>" />
        <span>{props.state.xScore}</span>
      </div>

      <button
        ref={startNewGameRef}
        className="startNewGame btn btn-danger"
        onClick={startNewGame}
      >
        Start New Game
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(RightField);
