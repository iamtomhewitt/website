import React from 'react';
import { mount } from 'enzyme';
import Contact from './Contact';

describe('<Contact />', () => {
  it('should render for mobile', () => {
    const props = {
      isMobile: true,
      getClass: jest.fn(),
    };
    const component = mount(<Contact {...props} />);
    expect(component.find('[test-id="contact-mobile"]')).toHaveLength(1);
    expect(component.find('[test-id="contact-desktop"]')).toHaveLength(0);
  });

  it('should render for desktop', () => {
    const props = {
      isMobile: false,
      getClass: jest.fn(),
    };
    const component = mount(<Contact {...props} />);
    expect(component.find('[test-id="contact-mobile"]')).toHaveLength(0);
    expect(component.find('[test-id="contact-desktop"]')).toHaveLength(1);
  });
});
