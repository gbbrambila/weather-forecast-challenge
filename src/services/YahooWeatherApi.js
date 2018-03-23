class YahooWeatherApi {

    getWeatherByCity(cityName) {

        return new Promise(resolve => {

            const data = {
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

            setTimeout(() => {
    
              resolve(data);
    
            }, 3000);

        });

    }

}

export default YahooWeatherApi;