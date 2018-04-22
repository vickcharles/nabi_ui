import { AnyAction } from 'redux';
import { UserState, IState } from './model';
import { RegistrationActions } from './constants/ActionTypes';

const initialState: UserState[] = [];

export default function usersReducer(state: IState = initialState, action: AnyAction): IState {
  switch (action.type) {
    case RegistrationActions.CREATE_USER:
      return [...state, action.user];
    
    case RegistrationActions.CHANGE_AVATAR:
      return <IState> state.map(user =>
        user.id === action.id
          ? { 
            ...user, 
            avatar: action.avatar
          }
          : user
      );
    default:
      return state;
  }
}
