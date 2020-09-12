import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import "../../assets/css/xo.css";
import { closeApp, oIsNext, xIsNext } from "../../actions/Actions";
import EndGameField from "../emdGameField/EndGameField";
import RightField from "../rightField/RightField";

const Xo = (props) => {
  let xoRef = useRef();

  const clickEvent = (event) => {
    if (
      event.target.id !== "buttonsParentDiv" &&
      !event.target.style.backgroundImage
    ) {
      if (props.state.xIsNext) {
        event.target.style.backgroundImage =
          "url(" + require("../../assets/images/black.png") + ")";
        oIsNext.id = event.target.id;
        props.dispatch(oIsNext);
      } else {
        event.target.style.backgroundImage =
          "url(" + require("../../assets/images/white.ico") + ")";
        xIsNext.id = event.target.id;
        props.dispatch(xIsNext);
      }
    }
  };

  useEffect(() => {
    if (!props.state.toggle) {
      xoRef.current.querySelectorAll("button").forEach((item) => {
        item.style.backgroundImage = "";
      });
    }

    props.dispatch({ type: "gameResult" });
  });

  useEffect(() => {
    return () => {
      props.dispatch(closeApp);
    };
  }, []);

  return (
    <div className="xo-container-parent w-100 d-flex align-items-center justify-content-center ">
      <div className="xo-container  flex-wrap d-flex justify-content-between">
        <div
          className="xo d-flex flex-wrap justify-content-between"
          id="buttonsParentDiv"
          onClick={clickEvent}
          ref={xoRef}
        >
          <button id="box_0" value={props.state.box_0} />
          <button id="box_1" value={props.state.box_1} />
          <button id="box_2" value={props.state.box_2} />
          <button id="box_3" value={props.state.box_3} />
          <button id="box_4" value={props.state.box_4} />
          <button id="box_5" value={props.state.box_5} />
          <button id="box_6" value={props.state.box_6} />
          <button id="box_7" value={props.state.box_7} />
          <button id="box_8" value={props.state.box_8} />
        </div>

        <EndGameField />
        <RightField />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(Xo);
