import React from "react";
import "./WeatherApp.css";
import axios from "axios";
// import Search from "./Search";

// import Time from "./Time";

export default function WeatherApp(props) {
  return (
    <div className="WeatherApp">
      <div className="fild">
        <div className="WeatherFild">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <form id="searchForm">
                <input
                  type="text"
                  className="city2"
                  id="city1"
                  required
                  placeholder="Enter your city"
                />
                <button type="submit" className="search" /*id="search1"*/>
                  Search
                </button>
              </form>
            </div>
            <div className="row d-flex justify-content-between mt-4">
              <div className="col-sm-7">
                <button className="current">Current weather</button>
              </div>
              <div className="col-sm-5 justify-content-left">
                <p className="lc" id="lc">
                  Vienna
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-sm-7">
                <img
                  src="https://em-content.zobj.net/thumbs/120/google/350/sun-behind-cloud_26c5.png"
                  alt=""
                  className="icon"
                  id="icon1"
                />
                <p className="temperature" id="temperature">
                  6°C
                </p>
              </div>
              <div className="col-sm-5">
                <p className="currentTime" /*id="currentTime"*/>
                  {/* <Time /> */}
                  Saturday 15:34
                </p>
                <p className="ffh">
                  Feels like: <span id="feelsLike">-4°C</span>
                  <br />
                  Forecast:
                  <span id="minTemp"> 1°C</span>/<span id="maxTemp">4°C</span>
                  <br />
                  Humidity:
                  <span id="humidity"> 60%</span>
                  <br />
                  Wind:
                  <span id="wind">0 km/h</span>
                </p>
              </div>
            </div>
            <div className="row d-flex justify-content-start">
              <div className="description" id="description-id">
                Few clouds
              </div>
            </div>
          </div>
        </div>
        <p className="owner">
          This website was coded by Olha Ovsii, and is{" "}
          <a href="https://github.com/Helga-ov/Weather" class="link">
            open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}
