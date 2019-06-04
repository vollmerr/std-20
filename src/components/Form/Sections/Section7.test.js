import React from 'react';
import { shallow } from 'enzyme';

import Section7 from './Section7';

const props = {};

let wrapper;
let instance;
describe('Section7', () => {
  beforeEach(() => {
    wrapper = shallow(<Section7 {...props} />);
    instance = wrapper.instance();
  });

  describe('withNamePrefix', () => {
    it('should prefix the `name` with the detail key', () => {
      const detail = 'detailKey';
      const values = { id: '123', name: 'test-name' };
      const prefixedName = instance.withNamePrefix(detail, values);
      expect(prefixedName).toEqual({ id: '123', name: 'detailKey.test-name' });
    });
  });

  describe('renderDetails', () => {
    it('should render a empty detail if none provided', () => {
      const Details = shallow(instance.renderDetails({ fields: [] }));
      expect(Details.find('[data-testid^="detail-"]').length).toBe(1);
    });

    it('should render the provided details', () => {
      const Details = shallow(instance.renderDetails({ fields: ['detail-1', 'detail-2'] }));
      expect(Details.find('[data-testid^="detail-"]').length).toBe(2);
    });

    it('should render correctly', () => {
      const Details = shallow(instance.renderDetails({ fields: ['detail-1', 'detail-2'] }));
      expect(Details).toMatchSnapshot();
    });
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
