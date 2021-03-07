import React from 'react';
import { mount } from 'enzyme';
import Github from './Github';

describe('<Github />', () => {
  let props;
  let component;

  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve());
    props = {
      isMobile: true,
      getClass: jest.fn(),
    };
    component = mount(<Github {...props} />);
  });

  it('should render', () => {
    component.setState({
      loading: false,
      repos: [{
        name: 'name',
        language: 'language',
        description: 'desc',
        forks: 1,
        open_issues_count: 2,
        issues: 3,
        html_url: 'url',
        url: 'url',
        stargazers_count: 4,
      }],
    });
    expect(component.find('[test-id="github"]')).toHaveLength(1);
  });

  it('should render when loading', () => {
    component.setState({ loading: true });
    expect(component.find('[test-id="loading"]')).toHaveLength(1);
  });

  it('should render when no data', () => {
    component.setState({ loading: false, repos: null });
    expect(component.find('[test-id="no-data"]')).toHaveLength(1);
  });
});
