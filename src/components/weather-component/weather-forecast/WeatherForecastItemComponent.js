import React, { Component } from 'react'

class WeatherForecastItemComponent extends Component {

    render() {
        return(
            <li class="forecast-item">
                
                <div> Friday </div>
                
                <div>23/03/2018</div>
                
                <div>Low: 74</div>
                
                <div>High: 74</div>
                
                <div>Mostly Cloudy</div>

                <img src="http://openweathermap.org/img/w/10d.png" alt="" />

          </li>
        )
    }
}

export default WeatherForecastItemComponent;