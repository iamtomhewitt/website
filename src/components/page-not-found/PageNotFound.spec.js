import React from 'react';
import { mount } from 'enzyme';
import PageNotFound from './PageNotFound';

describe('<PageNotFound />', () => {
  it('should render', () => {
    const component = mount(<PageNotFound />);
    expect(component.find('[test-id="page-not-found"]')).toHaveLength(1);
  });
});
