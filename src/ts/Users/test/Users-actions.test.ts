import * as actions from '../actions';

import { UserActions } from '../constants/ActionTypes';
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
      displayName: 'foo bar'
    };

    const expectedAction = {
      user,
      type: UserActions.CREATE_USER
    };

    expect(actions.createUser(user)).toEqual(expectedAction);
  });

  it('Creates an action to chnage avatar', () => {
    const expectedAction = {
      id: 'foo',
      avatar: 'caracas',
      type: UserActions.CHANGE_AVATAR
    };

    expect(actions.changeAvatar('foo', 'caracas')).toEqual(expectedAction);
  });

  it('Creates an action to update User', () => {
    const user: UserState = {
      id: 'foo',
      firstName: 'yix',
      lastName: 'eut',
      email: 'di',
      password: 'et',
      zipCode: 'barfoo',
      role: Role.student,
      hearAboutUs: 'fon',
      displayName: 'ber'
    };

    const expectedAction = {
      user,
      type: UserActions.UPDATE_USER
    };

    expect(actions.updateUser(user)).toEqual(expectedAction);
  });
});
