import React from 'react';
import { shallow } from 'enzyme';
import StateTemplate from 'state-template';

import App from './App';

const props = {};

let wrapper;
describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  it('should render the state template', () => {
    expect(wrapper.find(StateTemplate).length).toBe(1);
  });
});
