import React from 'react';
import { shallow } from 'enzyme';
import { A } from 'state-template';

import Instructions from './Instructions';

const props = {};

let wrapper;
describe('Instructions', () => {
  beforeEach(() => {
    wrapper = shallow(<Instructions {...props} />);
  });

  it('should render a header', () => {
    expect(wrapper.find('h2').length).toBe(1);
  });

  it('should render a list of instructions', () => {
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });

  it('should render a link to the instructions', () => {
    expect(wrapper.find(A).length).toBe(1);
  });
});
