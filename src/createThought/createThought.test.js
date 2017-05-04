import React from 'react';
import { shallow, mount } from 'enzyme';

import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it('has two input fields', () => {
    const wrapper = shallow(<CreateThought />);

    expect(wrapper.find('input').length).toBe(2);
  });

  it('has a default state containing a body and title both starting with empty string', () => {
    const wrapper = mount(<CreateThought />);
    const expectedState ={
      title: '',
      body: '',
    }

    expect(wrapper.state()).toEqual(expectedState)
  });

  it('fires an onChange event on user input which should update both state & the input field of title', () => {
    const wrapper = mount(<CreateThought />);
    const input = wrapper.find('input').first();
    const expectedState = {
      title: 'abc',
      body: '',
    };

    input.simulate('change', { target: { value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('fires onChange on second input which should update both state & the input field of body', () => {
    const wrapper = mount(<CreateThought />);
    const input = wrapper.find('input').last();
    const expectedState = {
      title: '',
      body: 'abc',
    };

    input.simulate('change', { target: {value: 'abc' } });

    expect(input.node.value).toEqual('abc');
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('has a submit button', () => {
    const wrapper = shallow(<CreateThought />);

    expect(wrapper.find('button').length).toBe(1);
  });

  it('fires submitIdea function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = mount(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };
    const input = wrapper.find('input').last();
    input.simulate('change', { target: { value: 'abc' } });
    wrapper.find('button').simulate('click');

    expect(wrapper.state()).toEqual(expectedState);
    expect(input.node.value).toEqual('');
    expect(mockedSubmit).toHaveBeenCalledTimes(1);
    expect(mockedSubmit).toHaveBeenCalledWith({title: '', body: 'abc'})
    // What input field are we trying to target? What is the action we want to simulate?

    // Find the DOM element you want to click on and click on that thing

    // Expect that the value of the input node equals a string
  });



});
