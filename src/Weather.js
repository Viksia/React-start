import React from "react";

function Weather(props) {
  function fahrenheitTemperature() {
    let temperature = (props.temperature * 9) / 5 + 32;
    return Math.round(temperature);
  }

  return (
    <h2>
      The weather in {props.city} is {props.temperature}°C and{" "}
      {fahrenheitTemperature()}°F
    </h2>
  );
}

export default Weather;
