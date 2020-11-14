import React from 'react';
import { mount } from 'enzyme';
import Experience from './Experience';

describe('<Experience />', () => {
  it('should render', () => {
    const props = {
      isMobile: true,
      getClass: jest.fn(),
    };
    const component = mount(<Experience {...props} />);
    expect(component.find('[test-id="experience"]')).toHaveLength(1);
  });
});
