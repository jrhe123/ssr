import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { DemoPage } from '../shared/demo/DemoPage';
import renderer from 'react-test-renderer';

describe('Component: test message here', () => {

    it('does all the things', () => {
        
        expect(true).toEqual(true);
    })
})

describe('Component: test message here', () => {

    it('render page', () => {
        
        const wrapper = shallow(<DemoPage />);
        const countState = wrapper.state().count;
        expect(countState).toEqual(0);
    })

    it('render page', () => {
        
        const wrapper = shallow(<DemoPage />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual('Count: 0');
    })

    it('render page', () => {
        
        const wrapper = shallow(<DemoPage />);
        const incrementBtn = wrapper.find('button');
        incrementBtn.simulate('click');

        const text = wrapper.find('h1').text();
        expect(text).toEqual('Count: 1');
    })

    it('test snap shot', () => {
        
        const tree = renderer.create(<DemoPage />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('shallow vs mount', () => {
        
        const shallowWrapper = shallow(<DemoPage />);   // only one level of component
        const mountWrapper = mount(<DemoPage />);   // trees of components

        console.log('shallowWrapper: ', shallowWrapper.debug());
        console.log('mountWrapper: ', mountWrapper.debug());
    })

})