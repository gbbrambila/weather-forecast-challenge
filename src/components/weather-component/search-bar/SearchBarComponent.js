import React, { Component } from 'react'
import './SearchBarComponent.scss'
import YahooWeatherApi from '../../../services/YahooWeatherApi'

const yahooWeatherApi = new YahooWeatherApi();

class SearchBarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }

    async getWeatherByCity(cityName, handlerAppState) {

        handlerAppState( { loading: true } )

        const result = await yahooWeatherApi.getWeatherByCity(cityName);

        console.log(result.currentLocation)

        handlerAppState({
            loading: false, 
            loaded: true,
            error: false,
            currentLocation: result.currentLocation,
            currentWeather: result.currentWeather,
            forecast: result.forecast,
        })

    }

    render() {

        const { handlerAppState } = this.props

        return(
            <div className="search-bar">
                
                <input 
                    className="search-city" 
                    type="text" 
                    placeholder="Search a city"
                    onChange={ (e) => { this.setState({ cityName: e.target.value }) } } />
                
                <button 
                    className="search-button" 
                    onClick={ () => this.getWeatherByCity(this.state.cityName, handlerAppState) }>
                    Search
                </button>

            </div>
        )
    }
}

export default SearchBarComponent;