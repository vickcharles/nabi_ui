import * as React from 'react';
import BackgroundImageSection from '../components/BackgroundImageSection';
import { shallow } from 'enzyme';

describe('BackgroundImageSection', () => {
  let wrapper: any = null;

  beforeEach(() => {
    wrapper = shallow(
      <BackgroundImageSection />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
