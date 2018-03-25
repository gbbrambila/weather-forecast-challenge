import React from 'react'
import { shallow } from 'enzyme'
import WeatherForecastListComponent from './WeatherForecastListComponent'

describe('Weather Forecast List Component', () => { 
    
    it('should display a element', () => {
        const render = shallow(<WeatherForecastListComponent forecast={ [] } />);
        expect(render.find('ul')).toHaveLength(1);
    });

})
