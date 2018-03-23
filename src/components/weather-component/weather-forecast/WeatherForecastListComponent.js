import React, { Component } from 'react'
import WeatherForecastItemComponent from './WeatherForecastItemComponent';
import './WeatherForecastListComponent.scss'

class WeatherForecastListComponent extends Component {

    render() {

        const forecastItens = this.props.forecast.map((forecast, index) => {
            return <WeatherForecastItemComponent 
                    key={ index } 
                    day={ forecast.day } 
                    date={ forecast.date }
                    low={ forecast.low } 
                    high={ forecast.high } 
                    text={ forecast.text }
                    code={ forecast.code } /> 
        })

        return(
            <ul className="weather-forecast">
                { forecastItens }
            </ul>
        )
    }
}

export default WeatherForecastListComponent;