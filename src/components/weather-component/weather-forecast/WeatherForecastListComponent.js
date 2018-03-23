import React, { Component } from 'react'
import WeatherForecastItemComponent from './WeatherForecastItemComponent';
import './WeatherForecastListComponent.scss'

class WeatherForecastListComponent extends Component {

    render() {

        const forecastItens = this.props.forecast.slice(0, 6).map((forecast, index) => {
            return <WeatherForecastItemComponent key={ index } forecast={ forecast } /> 
        })

        return(
            <ul className="weather-forecast">
                { forecastItens }
            </ul>
        )
    }
}

export default WeatherForecastListComponent;