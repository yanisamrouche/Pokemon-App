import React, { useState } from 'react';

const api = {
    key: "44c33647a399e526b47321baa80e2e10",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const search = evt => {
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                });
        }
    }


    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May",
        "June","July","August","September","October","November","December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday","Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    }
  return (
    <div className="app">
      <main>
          <div className="search-box">
              <h1> Weather App </h1>
              <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                  onChange={e => setQuery(e.target.value)}
                  value={query}
                  onKeyPress={search}
              />


          </div>

          <div className="location-box">
              <div className="location">{weather.name} </div>
              <div className="date">{dateBuilder(new Date())}</div>
          </div>

          <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].description}</div>
          </div>
      </main>
    </div>
  );
}
export default App;
