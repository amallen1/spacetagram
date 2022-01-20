import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
