import React from 'react'
import { shallow } from 'enzyme'
import LoadingComponent from './LoadingComponent'

describe('Loading Component', () => { 

    it('should display a element', () => {
        const render = shallow(<LoadingComponent  />);
        expect(render.find('ul')).toHaveLength(1);
    });

})