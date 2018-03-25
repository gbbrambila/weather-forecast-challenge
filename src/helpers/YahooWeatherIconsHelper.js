export const getIconClass = (code) => {

    let icons = {
        3 : 'wi-thunderstorm',
        4 : 'wi-thunderstorm',
        5 : 'wi-rain-mix',
        11 : 'wi-showers',
        12 : 'wi-showers',
        24 : 'wi-windy',
        26 : 'wi-cloudy',
        27 : 'wi-night-cloudy',
        28 : 'wi-day-cloudy',
        29 : 'wi-night-cloudy',
        30 : 'wi-day-cloudy', 
        31 : 'wi-night-clear',
        32 : 'wi-day-sunny',
        33 : 'wi-night-clear',
        34 : 'wi-day-sunny',
        47 : 'wi-thunderstorm'
    };

    return icons[code] ? icons[code] : 'wi-thunderstorm';

}