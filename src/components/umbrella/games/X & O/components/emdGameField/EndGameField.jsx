import React from "react";
import "../../assets/css/endGameField.css";
import { connect } from "react-redux";
import noWinner from "../../assets/images/noWinner.png";
import white from "../../assets/images/white.ico";
import black from "../../assets/images/black.png";

const EndGameField = (props) => {
  return (
    <div
      className={`endGame d-flex flex-column align-items-center justify-content-center  p-4 ${
        !props.state.toggle ? "visible" : "hidden"
      }`}
    >
      <h3 className="text-danger">{props.state.winnerText}</h3>

      <div className="winnerImage">
        {props.state.noWinner ? (
          <img src={noWinner} alt="game result" className="w-100" />
        ) : props.state.xIsNext ? (
          <img src={white} alt="game result" className="w-100" />
        ) : (
          <img src={black} alt="game result" className="w-100" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(EndGameField);
