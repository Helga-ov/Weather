// import React, { useState } from "react";
// import axios from "axios";

// export default function Search() {
//   let [city, setCity] = useState(null);

//   function NewCity(props) {
//     setCity(props.target.value);
//   }

//   function temperature(props) {
//     let curTemp = document.querySelector("#temperature");
//     curTemp.innerHTML = `${Math.round(props.data.main.temp)}°C`;

//     let curLocation = document.querySelector("#lc");
//     curLocation.innerHTML = props.data.name;

//     let humidity = document.querySelector("#humidity");
//     humidity.innerHTML = ` ${props.data.main.humidity}%`;

//     let minTemperature = document.querySelector("#minTemp");
//     minTemperature.innerHTML = ` ${Math.round(props.data.main.temp_min)}°C`;

//     let maxTemperature = document.querySelector("#maxTemp");
//     maxTemperature.innerHTML = `${Math.round(props.data.main.temp_max)}°C`;

//     let feelLike = document.querySelector("#feelsLike");
//     feelLike.innerHTML = `${Math.round(props.data.main.feels_like)}°C`;

//     let descriptionWeather = document.querySelector("#description-id");
//     descriptionWeather.innerHTML = props.data.weather[0].description;

//     let windSpeed = document.querySelector("#wind");
//     windSpeed.innerHTML = ` ${props.data.wind.speed} km/h`;

//     let iconElement = document.querySelector("#icon1");
//     iconElement.setAttribute(
//       "src",
//       `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
//     );
//   }
//   function handleSubmit(props) {
//     props.preventDefault();
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2f8357c65447d4cec2a7942b9dfdd3d&units=metric`;
//     axios.get(apiUrl).then(temperature);
//   }

//   return (
//     <div className="Show">
//       <form onSubmit={handleSubmit} id="searchForm">
//         <input
//           type="search"
//           className="city2"
//           placeholder="Search city"
//           onChange={NewCity}
//         />
//         <input type="submit" className="search" value="Search" />
//       </form>
//     </div>
//   );
// }
