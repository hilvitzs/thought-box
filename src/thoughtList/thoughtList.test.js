import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList thoughts={[]}/>);

    expect(wrapper.find('.thoughtList')).toHaveLength(1);
  });

  it('has multiple ThoughtCard class fields', () => {
    const thoughts = [{title: '', body: ''},{title: '', body: ''}]
    const wrapper = mount(<ThoughtList thoughts={thoughts} />);

    expect(wrapper.find('.thoughtCard')).toHaveLength(2);
  });

});
