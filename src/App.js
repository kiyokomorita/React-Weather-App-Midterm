import React, { Component } from "react";

import WeatherDetails from "./WeatherDetails";
import { Title } from "./components/Title";
import {BrowserRouter}from "react-router-dom";





class App extends Component {
  state = {
    temp: "",
    cityName: "",
    weather: "",
    high: "",
    low: "",
    icon: "",
    windSpeed: "",
    humidity:"",
    isRaining: "",
  };



  searchCity = (event) => {
    event.preventDefault();
    const city = document.querySelector("#city").value;
    this.getCityWeather(city);
    
    
  };

  getCityWeather = (city) => {
    
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
    )
    .then((response) => response.json())
    .then((result) => {
        this.setState({
          temp: result.main.temp,
          weather: result.weather[0].description,
          high: result.main.temp_max,
          low: result.main.temp_min,
          cityName: result.name,
          windSpeed: result.wind.speed,
          icon: result.weather[0].icon,
          humidity:result.main.humidity,
          
        });
        
    });
    
  };
 

 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Title/>
      
        <div className="search-area">
          
         
          <div>
            <form onSubmit={this.searchCity}>
              <input className="input-bar"
                type="text"
                name="city"
                id="city"
                placeholder="Enter a City Name"
              />
              <button>
              <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        

        

        
        {this.state.cityName && (
          <WeatherDetails
            cityName={this.state.cityName}
            temp={this.state.temp}
            high={this.state.high}
            low={this.state.low}
            weather={this.state.weather}
            humidity={this.state.humidity}
            windSpeed={this.state.windSpeed}
            icon={this.state.icon}
          />
        )}
        </div>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
