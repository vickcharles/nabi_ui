import * as React from 'react';
import NameLocationBio from '../components/BasicInfo/NameLocationBio';
import { shallow } from 'enzyme';

describe('NameLocationBio', () => {
  let wrapper: any;
  const changeBio: () => {} = jest.fn();
  const blurBio: () => {} = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <NameLocationBio 
        firstName="foo"
        lastName="bar"
        zipCode="02920"
        changeBio={changeBio}
        blurBio={blurBio}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
