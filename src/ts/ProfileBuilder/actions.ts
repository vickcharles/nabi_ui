import { Action } from 'redux';
import { ProfileBuilderActions } from './constants/ActionTypes';
import { UserState } from '../Registration/model';

interface CreateBio extends Action {
  user: UserState;
}

// Change bio
export function changeBio(user: UserState): CreateBio {
  return {
    user,
    type: ProfileBuilderActions.CHANGE_BIO
  };
}
