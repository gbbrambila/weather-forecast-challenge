import React from 'react'
import { shallow } from 'enzyme'
import CurrentLocationComponent from './CurrentLocationComponent'

describe('Current Location Component', () => { 

    describe('current temperature', () => {
        it('should display a element', () => {
            const currentLocation = { city: '', country: '', region: '' }
            const render = shallow(<CurrentLocationComponent currentLocation={ currentLocation } />);
            expect(render.find('h1')).toHaveLength(1);
        });
    })

})