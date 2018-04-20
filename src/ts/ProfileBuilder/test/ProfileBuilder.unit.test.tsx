import * as React from 'react';
import { ProfileBuilder } from '../';
import { shallow } from 'enzyme';
import { Role, UserState } from '../../Registration/model';

describe('ProfileBuilder', () => {
  let wrapper: any;
  let classes: object;
  let theme: object;
  let changeAvatar: any;

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

  beforeEach(() => {
    changeAvatar = (id: string, avatar: string): void => { console.log( avatar ); };
    wrapper = shallow(
      <ProfileBuilder
        classes={classes}
        theme={theme}
        users={[mockUser]}
        changeAvatar={changeAvatar}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
