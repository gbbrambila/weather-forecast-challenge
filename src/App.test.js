import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

    describe('Weather Component', () => {
        it('should render correctly', () => {
            expect(shallow(<App />).find('WeatherComponent')).toHaveLength(1);    
        });
    });

});