import * as React from 'react';
import { ProfileBuilder } from '../';
import { shallow } from 'enzyme';

describe('ProfileBuilder', () => {
  let wrapper: any;
  let classes: object;

  beforeEach(() => {
    wrapper = shallow(
      <ProfileBuilder 
        classes={classes}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
