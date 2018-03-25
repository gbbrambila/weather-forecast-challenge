import React from 'react';
import { shallow } from 'enzyme';
import SearchBarComponent from './SearchBarComponent'

describe('Search Bar Component', () => {
    const handlerAppState = () => { }

    describe('location button', () => {
        it('should display a element', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            expect(render.find('a')).toHaveLength(1);
        });
    })

    describe('search input', () => {
        it('should display input element', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            expect(render.find('input')).toHaveLength(1);
        });
        it('should have city initial state', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            expect(render.state().cityName).toBe('');
        });
        it('should have results based initial state', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            expect(render.state().resultsBased).toBe('');
        });
        it('should update state when input change', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            render.find('input').simulate('change', { target: {value: 'New city name' }});
            expect(render.state().cityName).toBe('New city name');
        });
    });

    describe('search button', () => {
        it('should display a button', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            expect(render.find('button')).toHaveLength(1);
            expect(render.find('button').text()).toBe('Search');
        });
    });

    describe('results based', () => {
        it('should display a element', () => {
            const render = shallow(<SearchBarComponent handlerAppState={ handlerAppState } />);
            expect(render.find('span')).toHaveLength(1);
        });
    })

})