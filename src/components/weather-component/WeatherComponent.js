import React, { Component } from 'react'
import SearchBarComponent from './search-bar/SearchBarComponent'
import CurrentLocationComponent from './current-location/CurrentLocationComponent'
import CurrentWeatherComponent from './current-weather/CurrentWeatherComponent'
import WeatherForecastListComponent from './weather-forecast/WeatherForecastListComponent'
import './WeatherComponent.scss'

class WeatherComponent extends Component {
    render() {
        return(
            <div className="weather-component">

                <SearchBarComponent />

                <CurrentLocationComponent />

                <CurrentWeatherComponent />   

                <WeatherForecastListComponent />

            </div>
        )
    }
}

export default WeatherComponent;