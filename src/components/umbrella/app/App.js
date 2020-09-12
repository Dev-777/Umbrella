import React from "react";
import { Header } from "../root/header/Header";
import Main from "../root/main/Main";
import { Footer } from "../root/footer/Footer";

export const App = () => {
  return (
    <div className="d-flex flex-column">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
