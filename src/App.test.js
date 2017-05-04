import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.app')).toHaveLength(1);
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.thoughtList')).toHaveLength(0);
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App />);
  wrapper.setState({thoughts: [{title: '', body: ''}, {title: '', body: ''}]})

  expect(wrapper.find('.thoughtCard')).toHaveLength(2);
});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const mockedSubmit = jest.fn();
  const wrapper = mount(<App createThought={mockedSubmit}/>);
  const expectedState = {
    thoughts: [
      {title: 'hey',
       id: 0,
       body: 'yo'
      }
    ]
  }
  const titleInput = wrapper.find('input').first();
  titleInput.simulate('change', { target: {value: 'hey'} });

  const bodyInput = wrapper.find('input').last();
  bodyInput.simulate('change', { target: {value: 'yo'} })

  wrapper.find('button').simulate('click');

  expect(wrapper.state()).toEqual(expectedState)
  expect(wrapper.find('.thoughtCard')).toHaveLength(1);
});
