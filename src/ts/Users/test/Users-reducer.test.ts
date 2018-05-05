import reducer from '../';
import { UserActions } from '../constants/ActionTypes';
import { Role, UserState, IState } from '../model';

describe('Users reducer', () => {
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
        hearAboutUs: 'afufaki',
        displayName: 'foo bar'
      }
    ];
  });

  it('Handles CREATE_USER', () => {
    expect(
      reducer(state, {
        type: UserActions.CREATE_USER,
        user: {
          id: 'hello',
          firstName: 'something',
          lastName: 'baz',
          email: 'cookie',
          password: 'foobar',
          zipCode: 'bread',
          role: Role.instructor,
          hearAboutUs: 'fal',
          displayName: 'hello something'
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
        hearAboutUs: 'afufaki',
        displayName: 'foo bar'
      },
      {
        id: 'hello',
        firstName: 'something',
        lastName: 'baz',
        email: 'cookie',
        password: 'foobar',
        zipCode: 'bread',
        role: Role.instructor,
        hearAboutUs: 'fal',
        displayName: 'hello something'
      }
    ]);
  });

  describe('Handles CHANGE_AVATAR', () => {
    it('when all values are set in payload', () => {
      expect(
        reducer(state, {
          type: UserActions.CHANGE_AVATAR,
          id: 'foo',
          avatar: 'something'
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
          hearAboutUs: 'afufaki',
          avatar: 'something',
          displayName: 'foo bar'
        }
      ]);
    });
  });
});
