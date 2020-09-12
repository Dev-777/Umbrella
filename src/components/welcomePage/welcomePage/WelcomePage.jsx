import React, { useEffect, useState } from "react";
import "../assets/css/wlcomePage.css";
import Typewriter from "typewriter-effect";
import UmbrellaBlack from "../../umbrella/assets/images/umbrellaHeaderBottomLogo.png";
import Project1Image from "../assets/images/project1Image.jpg";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  const initialState = {
    isVisible: " cont-field",
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    let id = setTimeout(() => {
      setState({ ...state, isVisible: " cont-field-visible" });
    }, 3800);
    return () => clearInterval(id);
  });

  return (
    <div className="welcomePage d-flex align-items-center justify-content-center flex-column">
      <div
        className={
          `d-flex flex-row col-4 justify-content-between` + state.isVisible
        }
      >
        <Link to="/umbrella">
          <div className="d-flex flex-column">
            <img src={UmbrellaBlack} alt="Umbrella App" />
            <h2>Umbrella</h2>
          </div>
        </Link>

        <Link to="/project1">
          <div className="d-flex flex-column">
            <img src={Project1Image} alt="project1" />
            <h2>Project1</h2>
          </div>
        </Link>
      </div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Select application!").start();
        }}
      />
    </div>
  );
};
