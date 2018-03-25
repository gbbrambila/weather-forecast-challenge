import React, { Component } from 'react'
import './WeatherComponent.scss'
import SearchBarComponent from './search-bar/SearchBarComponent'
import CurrentLocationComponent from './current-location/CurrentLocationComponent'
import CurrentWeatherComponent from './current-weather/CurrentWeatherComponent'
import WeatherForecastListComponent from './weather-forecast/WeatherForecastListComponent'
import LoadingComponent from '../loading-component/LoadingComponent';

class WeatherComponent extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            loading: false,
            loaded: false,
            error: null,
            currentLocation: null,
            currentWeather: null,
            forecast: [ ]
        }
    }

    handlerAppState(newState) {

        const { loading, loaded, error, currentLocation, currentWeather, forecast } = newState;

        this.setState({
            loading,
            loaded,
            error,
            currentLocation,
            currentWeather,
            forecast
        })

    }

    renderLoading() {
        if(this.state.loading) {
            return (
                <div>
                    <LoadingComponent />
                </div>
            )
        }
    }

    renderResult() {
        if(this.state.loaded) {
            return (
                <div>
                    <CurrentLocationComponent currentLocation={ this.state.currentLocation } />

                    <CurrentWeatherComponent currentWeather= { this.state.currentWeather } />   

                    <WeatherForecastListComponent forecast={ this.state.forecast } />
                </div>
            )
        } 
    }

    renderError() {
        if(this.state.error != null) {
            return (
                <div className="weather-error">
                    { this.state.error.message }
                </div>
            )
        }
    }
    
    render() {
        return(
            <div className="weather-component">

                <SearchBarComponent handlerAppState= { this.handlerAppState.bind(this) } />
                
                { this.renderLoading() }

                { this.renderResult() }

                { this.renderError() }

            </div>
        )
    }
}

export default WeatherComponent;