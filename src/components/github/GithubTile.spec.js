import React from 'react';
import { mount } from 'enzyme';
import GithubTile from './GithubTile';

describe('<GithubTile />', () => {
  it('should render for mobile', () => {
    const props = {
      isMobile: true,
      getClass: jest.fn(),
      repo: {
        name: 'name',
        language: 'language',
        description: 'desc',
        forks: 1,
        open_issues_count: 2,
        issues: 3,
        html_url: 'url',
        url: 'url',
        stargazers_count: 4,
      },
    };
    const component = mount(<GithubTile {...props} />);
    expect(component.find('[test-id="github-tile"]')).toHaveLength(1);
    expect(component.find('BugMobile')).toHaveLength(1);
    expect(component.find('StarMobile')).toHaveLength(1);
    expect(component.find('ForkMobile')).toHaveLength(1);
  });

  it('should render for desktop', () => {
    const props = {
      isMobile: false,
      getClass: jest.fn(),
      repo: {
        name: 'name',
        language: 'language',
        description: 'desc',
        forks: 1,
        open_issues_count: 2,
        issues: 3,
        html_url: 'url',
        url: 'url',
        stargazers_count: 4,
      },
    };
    const component = mount(<GithubTile {...props} />);
    expect(component.find('[test-id="github-tile"]')).toHaveLength(1);
    expect(component.find('Bug')).toHaveLength(1);
    expect(component.find('Star')).toHaveLength(1);
    expect(component.find('Fork')).toHaveLength(1);
  });
});
