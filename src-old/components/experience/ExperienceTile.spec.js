import React from 'react';
import { mount } from 'enzyme';
import ExperienceTile from './ExperienceTile';
import data from '../../data/experience.json';

describe('<ExperienceTile />', () => {
  it('should render for mobile', () => {
    const props = {
      isMobile: true,
      getClass: jest.fn(),
      jobTitle: data[0].jobTitle,
      company: data[0].company,
      description: data[0].description,
      time: data[0].time,
    };
    const component = mount(<ExperienceTile {...props} />);
    expect(component.find('[test-id="experience-tile-mobile"]')).toHaveLength(1);
  });

  it('should render for desktop', () => {
    const props = {
      isMobile: false,
      getClass: jest.fn(),
      jobTitle: data[0].jobTitle,
      company: data[0].company,
      description: data[0].description,
      time: data[0].time,
    };
    const component = mount(<ExperienceTile {...props} />);
    expect(component.find('[test-id="experience-tile-desktop"]')).toHaveLength(1);
  });
});
