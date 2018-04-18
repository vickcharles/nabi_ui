import reducer from '../';
import { RegistrationActions } from '../constants/ActionTypes';
import { Role, UserState, IState } from '../model';

describe('Configurations reducer', () => {
  let state: IState;

  beforeEach(() => {
    state = [
      {
        id: 'foo',
        firstName: 'bar',
        lastName: 'col',
        email: 'qux',
        password: 'foobar',
        zipCode: 'barfoo',
        role: Role.student,
        hearAboutUs: 'afufaki'
      }
    ];
  });

  it('Handles CREATE_USER', () => {
    expect(
      reducer(state, {
        type: RegistrationActions.CREATE_USER,
        user: {
          id: 'hello',
          firstName: 'something',
          lastName: 'baz',
          email: 'cookie',
          password: 'foobar',
          zipCode: 'bread',
          role: Role.instructor,
          hearAboutUs: 'fal'
        } as UserState
      })
    ).toEqual([
      {
        id: 'foo',
        firstName: 'bar',
        lastName: 'col',
        email: 'qux',
        password: 'foobar',
        zipCode: 'barfoo',
        role: Role.student,
        hearAboutUs: 'afufaki'
      },
      {
        id: 'hello',
        firstName: 'something',
        lastName: 'baz',
        email: 'cookie',
        password: 'foobar',
        zipCode: 'bread',
        role: Role.instructor,
        hearAboutUs: 'fal'
      }
    ]);
  });
});
