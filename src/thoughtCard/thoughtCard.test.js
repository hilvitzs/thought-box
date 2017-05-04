import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const wrapper = shallow(<ThoughtCard />);

    expect(wrapper.find('.thoughtCard')).toHaveLength(1);
  });

  it('has a title and body', () => {
    const wrapper = shallow(<ThoughtCard />);

    expect(wrapper.find('.title')).toHaveLength(1);
    expect(wrapper.find('.body')).toHaveLength(1);
  });
});
