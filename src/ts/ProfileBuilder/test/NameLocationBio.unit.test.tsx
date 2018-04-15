import * as React from 'react';
import NameLocationBio from '../components/BasicInfo/NameLocationBio';
import { shallow } from 'enzyme';

describe('NameLocationBio', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <NameLocationBio 
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
