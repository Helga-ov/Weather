import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(null);
  let [characteristic, setCharacteristic] = useState(null);

  function NewCity(props) {
    setCity(props.target.value);
  }
  function temperature(props) {
    let temperature = props.data.main.temp;
    let description = props.data.weather[0].description;
    let humidity = props.data.main.humidity;
    let wind = props.data.wind.speed;
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    setCharacteristic(
      <ul className="Properties">
        <li>Temperature: {Math.round(temperature)}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {Math.round(wind)}km/h</li>
        <li>
          <img src={icon} alt={description} />
        </li>
      </ul>
    );
  }
  function handleSubmit(props) {
    props.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2f8357c65447d4cec2a7942b9dfdd3d&units=metric`;
    axios.get(apiUrl).then(temperature);
  }

  return (
    <div className="Show">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search city" onChange={NewCity} />
        <input type="submit" value="Search" />
      </form>
      {characteristic}
    </div>
  );
}
