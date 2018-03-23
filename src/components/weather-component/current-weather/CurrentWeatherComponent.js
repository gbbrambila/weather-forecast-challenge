import React, { Component } from 'react'

class CurrentWeatherComponent extends Component {
    render() {
        return(
            <div class="current-weather">
                <h3 class="current-weather__date"> Friday, 23 Mar 2018 06:00PM </h3>
                <h2 class="current-weather__temp"> 25 </h2>
            </div>
        )
    }
}

export default CurrentWeatherComponent;