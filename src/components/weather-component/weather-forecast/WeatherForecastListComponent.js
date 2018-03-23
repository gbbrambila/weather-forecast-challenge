import React, { Component } from 'react'
import WeatherForecastItemComponent from './WeatherForecastItemComponent';

class WeatherForecastListComponent extends Component {

    render() {
        return(
            <ul className="weather-forecast">
                
                <WeatherForecastItemComponent />
                
                <WeatherForecastItemComponent />
                
                <WeatherForecastItemComponent />

                <WeatherForecastItemComponent />
                
            </ul>
        )
    }
}

export default WeatherForecastListComponent;