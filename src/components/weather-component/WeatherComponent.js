import React, { Component } from 'react'
import SearchBarComponent from './search-bar/SearchBarComponent'
import CurrentLocationComponent from './current-location/CurrentLocationComponent'

class WeatherComponent extends Component {
    render() {
        return(
            <div class="weather-component">
                
                weather-component

                <SearchBarComponent />

                <CurrentLocationComponent />

            </div>
        )
    }
}

export default WeatherComponent;