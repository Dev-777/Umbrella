import React from "react";
import { Provider } from "react-redux";
import { store } from "../Store/Store";
import Xo from "../components/xo/Xo";

export default function App() {
  return (
    <Provider store={store}>
      <Xo />
    </Provider>
  );
}
