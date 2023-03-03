import React from "react";
import ReactDOM from "react-dom/client";
import "./WeatherApp.css";
import WeatherApp from "./WeatherApp";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherApp defaultCity="Vienna" />
  </React.StrictMode>
);
