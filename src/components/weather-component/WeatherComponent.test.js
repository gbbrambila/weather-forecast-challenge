import React from 'react';
import { shallow } from 'enzyme';
import WeatherComponent from './WeatherComponent';

describe('Weather Component ', () => {

    describe('Search Bar Component', () => {
        it('should render correctly', () => {
            expect(shallow(<WeatherComponent />).find('SearchBarComponent')).toHaveLength(1);    
        });
    });

});