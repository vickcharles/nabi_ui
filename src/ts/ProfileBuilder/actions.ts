import { Action } from 'redux';
import { ProfileBuilderActions } from './constants/ActionTypes';
// import { UserState } from '../Registration/model';

interface ChangeBio extends Action {
  bio: string;
  id: string;
}

// Change bio
export function changeBio(bio: string, id: string): ChangeBio {
  return {
    bio,
    id,
    type: ProfileBuilderActions.CHANGE_BIO
  };
}
