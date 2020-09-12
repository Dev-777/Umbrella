import React from "react";
import "../../assets/sass/headerSass/header.sass";
import "../../assets/sass/headerSass/headerMedia.sass";
import logo from "../../assets/images/umbrellaHeaderBottomLogo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="umbrellaLogo">
        <Link to="/umbrella">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <nav>
        <ul>
          <li className="home">
            <Link to="/umbrella">HOME</Link>
          </li>
          <li className="quiz">
            <Link to="/umbrella/quiz">QUIZ</Link>
            <ul className="quiz-dropdown">
              <li>
                <Link to="/umbrella/quiz/html">HTML</Link>
              </li>
              <li>
                <Link to="/umbrella/quiz/css">CSS</Link>
              </li>
              <li>
                <Link to="/umbrella/quiz/bootstrap4">BOOTSTRAP4</Link>
              </li>
              <li>
                <Link to="/umbrella/quiz/javascript">JAVASCRIPT</Link>
              </li>
              <li>
                <Link to="/umbrella/quiz/reactjs">REACT.JS</Link>
              </li>
              <li>
                <Link to="/umbrella/quiz/reduxjs">REDUX.JS</Link>
              </li>
            </ul>
          </li>

          <li className="games">
            <Link to="/umbrella/games">GAMES</Link>
            <ul className="games-dropdown">
              <li>
                <Link to="/umbrella/X&O">X & O</Link>
              </li>
              <li>
                <Link to="/umbrella/hangDev">Hang Dev</Link>
              </li>
            </ul>
          </li>

          <li className="other">
            <Link to="/umbrella/other">OTHER</Link>
            <ul className="other-dropdown">
              <li>
                <Link to="/umbrella/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/umbrella/todolist">To Do List</Link>
              </li>
            </ul>
          </li>
          <li className="contact">
            <Link to="/umbrella/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
