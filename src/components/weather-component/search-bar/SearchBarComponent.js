import React, { Component } from 'react'
import YahooWeatherApi from '../../../services/YahooWeatherApi'
import IpInfoApi from '../../../services/IpInfoApi'
import './SearchBarComponent.scss'
import locationIcon from './location-icon.png'

const yahooWeatherApi = new YahooWeatherApi()
const ipInfoApi = new IpInfoApi()

class SearchBarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            resultsBased: ''
        }
    }

    componentDidMount() {
        this.getMyLocationByIp()
    }

    getWeather(cityName) {

        if(cityName === null || cityName === '') {
            this.props.handlerAppState({
                error: { message: "Please type the name of a city so we can get you nice results ;)"  }
            })
            return;
        }

        this.fetchWeatherByCity(cityName, 'Results based on your search')

    }

    async getMyLocationByIp() {

        try {

            this.setState({ resultsBased: '' })

            this.props.handlerAppState( { loading: true } )

            const response = await ipInfoApi.getMyIp()

            const cityName = response.data.city

            this.setState({ cityName: '' })

            this.fetchWeatherByCity(cityName, 'Results based on your IP location')

        } catch(e) {

            this.props.handlerAppState({
                loading: false,
                error: { message: "It wasn't possible to get your current location. Could you try the search?"  }
            })

        }

    }

    async fetchWeatherByCity(cityName, resultsBased) {

        try {

            this.setState({ resultsBased: '' })

            this.props.handlerAppState( { loading: true } )

            const results = await yahooWeatherApi.getWeatherByCity(cityName);

            if(results.error) {

                this.props.handlerAppState({
                    error: { message: results.error.message }
                })
    
            } else {

                this.setState({
                    resultsBased: resultsBased
                })

                this.props.handlerAppState({
                    loading: false, 
                    loaded: true,
                    error: null,
                    currentLocation: results.currentLocation,
                    currentWeather: results.currentWeather,
                    forecast: results.forecast,
                })
            }

        }catch(e) {

            this.props.handlerAppState({
                error: { message: `Weather for ${cityName} it's not available at the moment. Could you try again?`  }
            })

        }

    }

    render() {
        return(
            <div className="search-bar">

                <a className="location-button" onClick={ () => this.getMyLocationByIp() }>
                    <img src={ locationIcon } alt="Icon my current location" />
                </a>

                <input className="search-city" type="text" placeholder="Type the name of a city" maxLength="50"
                    value={ this.state.cityName }
                    onChange={ (e) => { this.setState({ cityName: e.target.value }) } } /> 
                
                <button  className="search-button" 
                    onClick={ () => this.getWeather(this.state.cityName) }>
                    Search
                </button>

                <span className="results-based"> { this.state.resultsBased } </span>

            </div>
        )
    }
}

export default SearchBarComponent;