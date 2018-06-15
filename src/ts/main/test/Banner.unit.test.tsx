import * as React from 'react';
import Banner from '../components/Homepage/Banner';
import { shallow } from 'enzyme';

describe('Banner', () => {
  let wrapper: any = null;

  beforeEach(() => {
    wrapper = shallow(
      <Banner />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
