import React, { Component } from 'react'
import './WeatherForecastItemComponent.scss'
import { getLongWeekName } from '../../../helpers/WeekDaysHelper'

class WeatherForecastItemComponent extends Component {

    render() {

        const { day, date, low, high, text, code }  = this.props.forecast

        return(
            <li className="forecast-item">

                <div>
                    <p> { getLongWeekName(day) } </p>
                    <i className="forecast-item__date"> { date } </i>
                </div>
                
                <div>
                    <span>Low: { low }</span>
                    <span> High: { high }</span>
                </div>
                
                <div className="forecast-item__text ">{ text }</div>

                <img src="http://openweathermap.org/img/w/10d.png" alt="" />

          </li>
        )
    }
}

export default WeatherForecastItemComponent;