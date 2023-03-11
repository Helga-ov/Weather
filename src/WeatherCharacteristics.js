import React from "react";
import CurrentTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherApp.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <div className="row d-flex justify-content-between row-cols-2 mt-4">
        <div className="col-sm-7">
          <div className="description">{props.data.description}</div>
          {/* <button className="current">Current weather</button> */}
        </div>
        <div className="col-sm-5 justify-content-right">
          <p className="lc">{props.data.city}</p>
        </div>
      </div>
      <div className="row d-flex justify-content-between row-cols-2">
        <div className="col-sm-7">
          <WeatherIcon code={props.data.icon} className="icon" size={100} />
          <p className="temperature">
            <WeatherTemperature celsius={Math.round(props.data.temperature)} />
          </p>
        </div>

        <div className="col-sm-5">
          <p className="currentTime">
            <CurrentTime date={props.data.date} />
          </p>
          <p className="ffh">
            Feels like: {props.data.feelsLike}°C
            <br />
            Forecast: {props.data.min}°C/
            {props.data.max}°C
            <br />
            Humidity: {props.data.humidity} %
            <br />
            Wind: {Math.round(props.data.wind)} km/h
          </p>
        </div>
      </div>
      {/* <div className="row d-flex justify-content-start">
       <div className="description">{props.data.description}</div>
      </div> */}
    </div>
  );
}
