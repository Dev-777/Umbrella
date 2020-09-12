import React from "react";

import { Provider } from "react-redux";

import ReactJsQuiz from "../reactJsQuiz/ReactJsQuiz";
import { store } from "../store/Store";

export const App = () => {
  return (
    <Provider store={store}>
      <ReactJsQuiz />
    </Provider>
  );
};
