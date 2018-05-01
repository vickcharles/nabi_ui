import { Action } from 'redux';
import { RegistrationActions } from './constants/ActionTypes';
import { UserState } from './model';

interface CreateUser extends Action {
  user: UserState;
}

interface ChangeAvatar extends Action {
  id: string;
  avatar: string;
}

interface UpdateUser extends Action {
  user: UserState;
}

// Create user
export function createUser(user: UserState): CreateUser {
  return {
    user,
    type: RegistrationActions.CREATE_USER
  };
}

/**
 * Action to change avatar
 * 
 * @param {string} id - The id of the user
 * @param {string} avatar - The avatar of the user
 */
export function changeAvatar(id: string, avatar: string): ChangeAvatar {
  return {
    id: id,
    avatar: avatar ,
    type: RegistrationActions.CHANGE_AVATAR
  };
}

/**
 * Action to update user
 * 
 * @param {string} user - The new user
 */
export function updateUser(user: UserState): UpdateUser {
  return {
    user: user,
    type: RegistrationActions.UPDATE_USER
  };
}