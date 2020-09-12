import React from "react";

import { Provider } from "react-redux";
import { store } from "../Store/Store";
import Calculator from "../calculator/Calculator";

export const App = () => {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
};
