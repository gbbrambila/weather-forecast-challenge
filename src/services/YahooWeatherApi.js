import axios from 'axios';

class YahooWeatherApi {

     getWeatherByCity(cityName) {

        return new Promise( (resolve, reject) => {

            axios.get('http://query.yahooapis.com/v1/public/yql', {
                params: {
                    q: `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${cityName}')`,
                    format: "json"
                }
            }).then( (response) => {

                console.log(response.data.query.results.channel.item.forecast)

                const data = {
                    currentLocation: response.data.query.results.channel.location,
                    //currentLocation: '',
                    currentWeather: response.data.query.results.channel.item.condition,
                    forecast: response.data.query.results.channel.item.forecast
                }
                
                resolve(data)

            }).catch( (error) => {

                console.log(error);
                reject(error)

            });

        });

    }

}

export default YahooWeatherApi;