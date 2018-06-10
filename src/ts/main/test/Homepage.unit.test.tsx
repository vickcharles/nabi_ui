import * as React from 'react';
import Homepage from '../components/Homepage';
import { shallow } from 'enzyme';

describe('Homepage', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Homepage />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
