import React from "react";
import xoGame from "../../../assets/images/xoGame.jpg";
import calculator from "../../../assets/images/calculator.jpg";
import hangGame from "../../../assets/images/hangGame.png";
import toDoListImage from "../../../assets/images/toDoListImage.jpg";
import "../../../assets/sass/carousel.css";
import { Link } from "react-router-dom";

export const Carousel = () => {
  return (
    <section className="w-100 carousel">
      <div
        id="carousel-div"
        className="carousel slide d-flex"
        data-ride="carousel"
        data-interval="3000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-div"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carousel-div" data-slide-to="1" />
          <li data-target="#carousel-div" data-slide-to="2" />
          <li data-target="#carousel-div" data-slide-to="3" />
        </ol>

        <div id="imgContainer" className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/umbrella/X&O">
              <img className="d-block w-100" src={xoGame} alt="Second slide" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/umbrella/Calculator">
              <img
                className="d-block w-100 "
                src={calculator}
                alt="Second slide"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/umbrella/HangDev">
              <img className="d-block w-100" src={hangGame} alt="Third slide" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/umbrella/ToDoList">
              <img
                className="d-block w-100"
                src={toDoListImage}
                alt="Fourth slide"
              />
            </Link>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-div"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-div"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};
