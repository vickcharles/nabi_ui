import * as actions from '../actions';

import { RegistrationActions } from '../constants/ActionTypes';
import { Role, UserState } from '../model';

describe('Configurations actions', () => {
  it('Creates an action to add configuration', () => {
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
});
