import React, { Component } from 'react'
import SearchBarComponent from './search-bar/SearchBarComponent'
import CurrentLocationComponent from './current-location/CurrentLocationComponent'
import CurrentWeatherComponent from './current-weather/CurrentWeatherComponent';

class WeatherComponent extends Component {
    render() {
        return(
            <div class="weather-component">
                
                weather-component

                <SearchBarComponent />

                <CurrentLocationComponent />

                <CurrentWeatherComponent />            

            </div>
        )
    }
}

export default WeatherComponent;