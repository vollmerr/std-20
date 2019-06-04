import React from 'react';
import { shallow } from 'enzyme';

import Section4 from './Section4';

const props = {};

let wrapper;
describe('Section4', () => {
  beforeEach(() => {
    wrapper = shallow(<Section4 {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
