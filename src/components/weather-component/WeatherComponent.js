import React, { Component } from 'react'
import SearchBarComponent from './search-bar/SearchBarComponent'
import CurrentLocationComponent from './current-location/CurrentLocationComponent'
import CurrentWeatherComponent from './current-weather/CurrentWeatherComponent'
import WeatherForecastListComponent from './weather-forecast/WeatherForecastListComponent'
import './WeatherComponent.scss'

class WeatherComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentLocation: 'Sydney Australia Nsw',
            currentWeather: { date: 'Friday, 24 Mar 2018 06:00PM', temp: '19' },
            forecast: [ 
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 },
                { day: 'Fri', date: '23/03/2018', low: '55', high: 74, text: 'Mostly Cloudy', code: 27 } 
            ]
        }
    }

    render() {
        return(
            <div className="weather-component">

                <SearchBarComponent />

                <CurrentLocationComponent currentLocation={ this.state.currentLocation } />

                <CurrentWeatherComponent currentWeather= { this.state.currentWeather } />   

                <WeatherForecastListComponent forecast={ this.state.forecast } />

            </div>
        )
    }
}

export default WeatherComponent;