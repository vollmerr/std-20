import React from 'react';
import { shallow } from 'enzyme';

import Section1to3 from './Section1to3';

const props = {};

let wrapper;
describe('Section1to3', () => {
  beforeEach(() => {
    wrapper = shallow(<Section1to3 {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
