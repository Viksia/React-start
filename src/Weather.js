import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Tuersday 10:00",
    description: "Sunny",
    temperature: "19",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "80",
    wind: "30",
    pressure: "78",
  };

  return (
    <div className="weather-app-wrapper">
      <div className="Weather">
        <div className="row">
          <form className="form col-12">
            <div className="col-5">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                aria-label="city"
              />
            </div>
            <div className="col-3 d-grid">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>

            <div className="col-3 d-grid">
              <button type="submit" className="btn btn-success">
                Current
              </button>
            </div>
          </form>

          <div className="col-4">
            <h3>{weatherData.city}</h3>

            <h4>Last updated: {weatherData.date}</h4>
            <h4>{weatherData.description}</h4>
          </div>
          <div className="col-8">
            <div className="weather-forecast"></div>
          </div>

          <h1 className="col-7">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <strong>{weatherData.temperature}</strong>
            <span className="units">℃</span>
          </h1>

          <div className="dopinformation col-4">
            <ul>
              <li>
                <b>Pressure: </b>
                <span>{weatherData.pressure}</span>p
              </li>
              <li>
                <b>Wind: </b>
                <span>{weatherData.wind}</span>km/h
              </li>
              <li>
                <b>Humidity: </b> <span>{weatherData.humidity}</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Viksia/My-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Viksy
      </small>
    </div>
  );
}
