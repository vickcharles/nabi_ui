import * as React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import { shallow } from 'enzyme';

describe('BackgroundImage', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <BackgroundImage />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
