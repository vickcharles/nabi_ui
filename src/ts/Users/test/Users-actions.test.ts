import * as actions from '../actions';

import { RegistrationActions } from '../constants/ActionTypes';
import { Role, UserState } from '../model';

describe('Users actions', () => {
  it('Creates an action to add user', () => {
    const user: UserState = {
      id: 'foo',
      firstName: 'bar',
      lastName: 'col',
      email: 'qux',
      password: 'foobar',
      zipCode: 'barfoo',
      role: Role.student,
      hearAboutUs: 'afufaki',
    };

    const expectedAction = {
      user,
      type: RegistrationActions.CREATE_USER
    };

    expect(actions.createUser(user)).toEqual(expectedAction);
  });

  it('Creates an action to chnage avatar', () => {
    const expectedAction = {
      id: 'foo',
      avatar: 'caracas',
      type: RegistrationActions.CHANGE_AVATAR
    };

    expect(actions.changeAvatar('foo', 'caracas')).toEqual(expectedAction);
  });
});
