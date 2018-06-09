import * as React from 'react';
import BackgroundImageSection from '../components/BackgroundImageSection';
import { shallow } from 'enzyme';

describe('BackgroundImageSection', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <BackgroundImageSection />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
