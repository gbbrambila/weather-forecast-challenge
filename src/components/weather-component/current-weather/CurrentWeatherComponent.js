import React, { Component } from 'react'
import './CurrentWeatherComponent.scss'

class CurrentWeatherComponent extends Component {
    render() {
        return(
            <div className="current-weather">
                <h2 className="current-weather__temp"> { this.props.currentWeather.temp } </h2>
                <h3 className="current-weather__date"> { this.props.currentWeather.date } </h3>
            </div>
        )
    }
}

export default CurrentWeatherComponent;