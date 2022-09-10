import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Weather">
      <App />
      <Weather city="New York" temperature={18} />
      <Weather city="Tokyo" temperature={32} />
      <Weather city="Sydney" temperature={29} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
