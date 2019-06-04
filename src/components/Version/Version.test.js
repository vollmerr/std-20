import React from 'react';
import { shallow } from 'enzyme';

import Version from './Version';

const props = {};

let wrapper;
describe('Version', () => {
  beforeEach(() => {
    wrapper = shallow(<Version {...props} />);
  });

  it('should have a value sematic version number set from the package.json', () => {
    expect(process.env.REACT_APP_VERSION).toMatch(/\d\.\d\.\d/);
  });

  it('should render the version', () => {
    expect(wrapper.text()).toMatch(process.env.REACT_APP_VERSION);
  });
});
