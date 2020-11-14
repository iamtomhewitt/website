import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  it('should render', () => {
    const props = {
      isMobile: true,
      getClass: jest.fn(),
    };
    const component = mount(<Home {...props} />);
    expect(component.find('[test-id="home"]')).toHaveLength(1);
    expect(component.find('img')).toHaveLength(0);
  });

  it('should render image for desktop', () => {
    const props = {
      isMobile: false,
      getClass: jest.fn(),
    };
    const component = mount(<Home {...props} />);
    expect(component.find('[test-id="home"]')).toHaveLength(1);
    expect(component.find('img')).toHaveLength(1);
  });
});
