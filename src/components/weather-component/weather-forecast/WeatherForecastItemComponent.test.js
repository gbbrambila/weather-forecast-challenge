import React from 'react'
import { shallow } from 'enzyme'
import WeatherForecastItemComponent from './WeatherForecastItemComponent'

describe('Weather Forecast Item Component', () => { 
    
    it('should display a element', () => {
        const forecast = { day: '', date: '', low: '', high: '', text: '', code: '' }
        const render = shallow(<WeatherForecastItemComponent forecast={ forecast } />);
        expect(render.find('li')).toHaveLength(1);
    });

})