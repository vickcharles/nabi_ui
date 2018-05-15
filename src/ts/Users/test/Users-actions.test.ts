import * as actions from '../actions';

import { UserActions, ZipCodeActions } from '../constants/ActionTypes';
import { Role, UserState } from '../model';

// Import configureMockStore from 'redux-mock-store';
const configureMockStore = require('redux-mock-store'); // Library Error
import thunk from 'redux-thunk';
const moxios = require('moxios'); // Same ES5 Typescript Import Error

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Users actions', () => {
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install();
  });

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });

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

  it('Creates an action to get state and city', () => {
    moxios.wait(function () {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          'results': [
            {
              'formatted_address': 'Oklahoma City, OK 73170, USA'
            }
          ]
        }
      });
    });
    const user: UserState = {
      id: 'foo',
      firstName: 'yix',
      lastName: 'eut',
      email: 'di',
      password: 'et',
      zipCode : '73170',
      role: Role.student,
      hearAboutUs: 'fon',
      displayName: 'ber',
      city: '',
      state: ''
    };
    const store = mockStore({});
    const expectedActions = [
        ZipCodeActions.FETCH_ZIPADDRESS_START,
        ZipCodeActions.FETCH_ZIPADDRES_DONE
    ];
    return store.dispatch(actions.fetchZipCodeAddress(user))
      .then(() => {
        const actualActions = store.getActions().map( 
          (action: any) => action.type 
        );
        expect(actualActions).toEqual(expectedActions);
      });
  });
});
