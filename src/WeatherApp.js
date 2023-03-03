import React, { useState } from "react";
import axios from "axios";
import WeatherCharacteristics from "./WeatherCharacteristics";
import "./WeatherApp.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      min: Math.round(response.data.main.temp_min),
      max: Math.round(response.data.main.temp_max),
      feelsLike: Math.round(response.data.main.feels_like),
    });
  }

  function search() {
    const apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <div className="fild">
          <div className="WeatherFild">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="city2"
                    required
                    placeholder="Enter your city"
                    onChange={handleCityChange}
                  />
                  <button type="submit" className="search">
                    Search
                  </button>
                </form>
              </div>
              <WeatherCharacteristics data={weatherData} />
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
  } else {
    search();
    return "Loading...";
  }
}
