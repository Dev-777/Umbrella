import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../assets/css/app.css";
import { App as Umbrella } from "../components/umbrella/app/App";
import { App as Project1 } from "../components/projcet_1/app/App";
import { WelcomePage } from "../components/welcomePage/welcomePage/WelcomePage";

export const App = () => {
  return (
    <div className="w-100 h-100">
      <Router>
        <Route path="/umbrella">
          <Umbrella />
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/project1">
          <Project1 />
        </Route>
      </Router>
    </div>
  );
};
