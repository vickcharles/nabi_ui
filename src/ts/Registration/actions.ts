import { Action } from 'redux';
import { RegistrationActions } from './constants/ActionTypes';
import { UserState } from './model';

interface CreateUser extends Action {
  user: UserState;
}

// Create user
export function addEndpoint(user: UserState): CreateUser {
  return {
    user,
    type: RegistrationActions.CREATE_USER
  };
}
