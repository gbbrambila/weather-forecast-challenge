import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeatherComponent from './CurrentWeatherComponent'

describe('Current Weather Component', () => {


    describe('current temperature', () => {
        it('should display a element', () => {
            const render = shallow(<CurrentWeatherComponent currentWeather={ { temp: '' } } />);
            expect(render.find('h2')).toHaveLength(1);
        });
    })


    describe('current date', () => {
        it('should display a element', () => {
            const render = shallow(<CurrentWeatherComponent currentWeather={ { date: '' } } />);
            expect(render.find('h3')).toHaveLength(1);
        });
    })


})