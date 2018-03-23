import React, { Component } from 'react'
import './CurrentWeatherComponent.scss'

class CurrentWeatherComponent extends Component {
    render() {
        return(
            <div className="current-weather">
                <h3 className="current-weather__date"> Friday, 23 Mar 2018 06:00PM </h3>
                <h2 className="current-weather__temp"> 25 </h2>
            </div>
        )
    }
}

export default CurrentWeatherComponent;