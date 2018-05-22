import { AnyAction } from 'redux';
import { UserState, IState } from './model';
import { UserActions, ZipCodeActions } from './constants/ActionTypes';

const initialState: UserState[] = [];

export default function usersReducer(state: IState = initialState, action: AnyAction): IState {
  switch (action.type) {
    case UserActions.CREATE_USER:
      return [...state, action.user];
    
    case UserActions.CHANGE_AVATAR:
      return <IState> state.map(user =>
        user.id === action.id
          ? { 
            ...user, 
            avatar: action.avatar
          }
          : user
      );

    case UserActions.UPDATE_USER:
      return <IState> state.map(user =>
      user.id === action.user.id
        ? { 
            ...user, 
            ...action.user
        }
        : user
      );

    case ZipCodeActions.FETCH_ZIPADDRES_DONE:
      return <IState> state.map(user =>
        user.id === action.zipcodedata.id
          ? {
            ...user,
            city : action.zipcodedata.city,
            state : action.zipcodedata.state
          }
          : user
      );

    default:
      return state;
  }
}
