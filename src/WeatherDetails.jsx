import React, {Component} from 'react';
import './index.css';

class WeatherDetails extends Component{

    render(){
        const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`
        

        return(
            <div>
               
<h1>Weather in {this.props.cityName}</h1>
<h1 className="temp">{this.props.temp}°C</h1>
<h2>High: {this.props.high} - Low: {this.props.low}</h2>

<div className="weather-description">
<h1>{this.props.weather}</h1>
<img className="weather-icon-img" src={iconUrl} alt="icon"></img>
</div>
<h2>Humidity: {this.props.humidity} %</h2>
<h2>Wind Speed:{this.props.windSpeed} m/s</h2>


            </div>

        )
    }
}

export default WeatherDetails;