import React, { Component } from 'react'
import './WeatherForecastItemComponent.scss'

class WeatherForecastItemComponent extends Component {

    render() {

        const { day, date, low, high, text, code }  = this.props.forecast

        return(
            <li className="forecast-item">

                <div>{ day }</div>
                
                {/* <div>{ date }</div> */}
                
                <div>Low: { low }</div>
                
                <div>Hight: { high }</div>
                
                <div>{ text }</div>

                <img src="http://openweathermap.org/img/w/10d.png" alt="" />

          </li>
        )
    }
}

export default WeatherForecastItemComponent;