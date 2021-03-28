import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { LoginPage } from "./pages/login-page/login-page";

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById("root")
);
