import React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';
import Instructions from '../Instructions';
import Resources from '../Resources';
import App from './App';

const props = {};

let wrapper;
describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  it('should render the instructions section', () => {
    expect(wrapper.find(Instructions).length).toBe(1);
  });

  it('should render the form section', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });

  it('should render the resources section', () => {
    expect(wrapper.find(Resources).length).toBe(1);
  });
});
