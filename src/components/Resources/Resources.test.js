import React from 'react';
import { shallow } from 'enzyme';
import { A } from 'state-template';

import Resources from './Resources';

const props = {};

let wrapper;
describe('Resources', () => {
  beforeEach(() => {
    wrapper = shallow(<Resources {...props} />);
  });

  it('should render a header', () => {
    expect(wrapper.find('h2').length).toBe(1);
  });

  it('should render a list of resources', () => {
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });

  it('should render a links to the resources', () => {
    expect(wrapper.find(A).length).toBeGreaterThan(0);
  });
});
