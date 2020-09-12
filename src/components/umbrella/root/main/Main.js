import React from "react";
import "../../assets/sass/mainCss/main.css";
import { Route } from "react-router-dom";
import HangDev from "../../games/HangDev";
import ToDoListApp from "../../toDoList/App/App";
import { Cards } from "./cards/Cards";
import { Carousel } from "./carousel/Carousel";
import { App as Calculator } from "../../calculator/App/App";
import { App as ReactJsQuiz } from "../../quiz/reactJsQuiz/app/App";
import Xo from "../../games/X & O/app/App";

const Main = () => {
  return (
    <main className="d-flex flex-column pb-5 w-100">
      <Route exact path="/umbrella">
        <Carousel />
        {/*<Cards />*/}
      </Route>
      <Route exact path="/umbrella/HangDev">
        <HangDev />
      </Route>
      <Route exact path="/umbrella/X&O">
        <Xo />
      </Route>
      <Route exact path="/umbrella/Calculator">
        <Calculator />
      </Route>
      <Route exact path="/umbrella/ToDoList">
        <ToDoListApp />
      </Route>
      <Route exact path="/umbrella/ReactJsQuiz">
        <ReactJsQuiz />
      </Route>
    </main>
  );
};

export default Main;
