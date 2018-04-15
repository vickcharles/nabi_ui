import * as React from 'react';
import NameAndLocation from '../components/BasicInfo/NameAndLocation';
import { shallow } from 'enzyme';

describe('NameAndLocation', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <NameAndLocation 
        firstName="foo"
        lastName="bar"
        zipCode="02920"
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
