import React from 'react';
import { shallow } from 'enzyme';

import Section5 from './Section5';

const props = {};

let wrapper;
describe('Section5', () => {
  beforeEach(() => {
    wrapper = shallow(<Section5 {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
