import React, { Component } from 'react'
import './WeatherForecastItemComponent.scss'
import { getLongWeekName } from '../../../helpers/WeekDaysHelper'
import { getIconClass } from '../../../helpers/YahooWeatherIconsHelper';

class WeatherForecastItemComponent extends Component {

    render() {

        const { day, date, low, high, text, code }  = this.props.forecast

        return(
            <li className="forecast-item">

                <div className="forecast-item__day">
                    <p> { getLongWeekName(day) } </p>
                    <i className="forecast-item__date"> { date } </i>
                </div>
                
                <div>
                    <p> <i className="wi wi-direction-up"></i> { high }°</p>
                    <p> <i className="wi wi-direction-down"></i> { low }°</p>
                </div>
                
                <div className="forecast-item__text ">{ text }</div>
                
                <div className="forecast-item__icon">
                    <i className={`wi ${getIconClass(code)}`}></i>
                </div>

          </li>
        )
    }
}

export default WeatherForecastItemComponent;