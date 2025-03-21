import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, SetData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "fcf8a03d511df42ea46e81895017dbb6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    getLocationAndCity();
  }, []);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          SetData(response.data);
        })
        .catch((error) => {
          console.error("City search error:", error);
          alert("The city was not found. Please try again.");
        })
        .finally(() => setLoading(false));
      setLocation("");
    }
  };

  const getLocationAndCity = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

          axios
            .get(geoUrl)
            .then((response) => {
              SetData(response.data);
            })
            .catch((error) => {
              console.error("Location fetch error:", error);
              alert("Could not fetch data based on your location.");
            })
            .finally(() => setLoading(false));
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Please allow location access.");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
          className="search-input"
        />
        <button
          onClick={getLocationAndCity}
          className="currentLocation"
          title="Use current location"
        >
          𖦏
        </button>
      </div>

      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading weather for current location...</p>
        </div>
      )}

      {!loading && (
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name !== undefined && (
            <div className="bottom">
              <div className="feels">
                {data.main ? (
                  <p className="bold">{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity} %</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? (
                  <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
