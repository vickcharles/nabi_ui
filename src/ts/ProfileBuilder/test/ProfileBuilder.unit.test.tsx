import * as React from 'react';
import { ProfileBuilder } from '../';
import { shallow } from 'enzyme';
import { Role, UserState } from '../../Registration/model';

describe('ProfileBuilder', () => {
  let wrapper: any;
  let classes: object;
  let theme: object;

  const mockUser: UserState = {
    id: '',
    firstName: 'foo',
    lastName: 'bar',
    email: 'oreo',
    password: '',
    zipCode: '',
    role: Role.instructor,
    hearAboutUs: ''
  };

  const mockMatch = {
    isExact: true,
    path: '/profile-builder/:id',
    url: '/profile-builder/qux',
    params: {
      id: 'qux'
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <ProfileBuilder 
        classes={classes}
        theme={theme}
        users={[mockUser]}
        match={mockMatch}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
