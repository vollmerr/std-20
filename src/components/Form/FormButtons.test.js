import React from 'react';
import { shallow } from 'enzyme';

import FormButtons from './FormButtons';

const props = {
  onSave: jest.fn(),
  onReset: jest.fn(),
};

let wrapper;
describe('FormButtons', () => {
  beforeEach(() => {
    wrapper = shallow(<FormButtons {...props} />);
  });

  it('should render a button for saving', () => {
    const saveButton = wrapper.find({ text: 'Save' });
    expect(saveButton.length).toBe(1);

    saveButton.simulate('click');
    expect(props.onSave).toBeCalled();
  });

  it('should render a button for resetting', () => {
    const resetButton = wrapper.find({ text: 'Reset' });
    expect(resetButton.length).toBe(1);

    resetButton.simulate('click');
    expect(props.onReset).toBeCalled();
  });

  it('should render a button for printing', () => {
    const printButton = wrapper.find({ text: 'Print' });
    expect(printButton.length).toBe(1);
  });
});
