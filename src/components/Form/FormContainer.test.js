import React from 'react';
import { shallow } from 'enzyme';

import * as storage from '../../utils/storage';
import Form from './Form';
import FormContainer from './FormContainer';

const props = {};

let wrapper;
let instance;
describe('FormContainer', () => {
  beforeEach(() => {
    wrapper = shallow(<FormContainer {...props} />);
    instance = wrapper.instance();
  });

  describe('componentDidMount', () => {
    it('should load the initial values', () => {
      instance.setInitialValues = jest.fn();
      instance.componentDidMount();
      expect(instance.setInitialValues).toBeCalled();
    });
  });

  describe('setInitialValues', () => {
    it('should load the initial values from storage', () => {
      const initialValues = { test: '123' };
      storage.save(initialValues);
      instance.setInitialValues();
      expect(wrapper.state('initialValues')).toEqual(initialValues);
    });
  });

  it('should render the form', () => {
    expect(wrapper.find(Form).length).toBe(1);
  });
});
