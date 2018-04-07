import * as React from 'react';
import { Registration } from '../';
import { shallow } from 'enzyme';

describe('Registration', () => {
  let wrapper: any;
  
  beforeEach(() => {
      wrapper = shallow(
        <Registration/>
      );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});