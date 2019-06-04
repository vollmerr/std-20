import React from 'react';
import { shallow } from 'enzyme';

import Section6 from './Section6';

const props = {
  disabled: false,
};

let wrapper;
describe('Section6', () => {
  beforeEach(() => {
    wrapper = shallow(<Section6 {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set all fields as disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find({ disabled: true }).length).toBe(11);
  });
});
