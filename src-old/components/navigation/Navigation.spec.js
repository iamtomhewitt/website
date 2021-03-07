import React from 'react';
import { mount } from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  it('should render', () => {
    const props = {
      isMobile: true,
      getClass: jest.fn(),
    };
    const component = mount(<Navigation {...props} />);
    expect(component.find('[test-id="navigation-mobile"]')).toHaveLength(1);
    expect(component.find('img')).toHaveLength(0);
  });

  it('should render image for desktop', () => {
    const props = {
      isMobile: false,
      getClass: jest.fn(),
    };
    const component = mount(<Navigation {...props} />);
    expect(component.find('[test-id="navigation-desktop"]')).toHaveLength(1);
    expect(component.find('img')).toHaveLength(1);
  });
});
