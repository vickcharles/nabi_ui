import { AnyAction } from 'redux';
import { InstructorType, IState } from './model';
import { InstructorActions } from './constants/ActionTypes';

const initialState: InstructorType[] = [];

export default function instructorsReducer(state: IState = initialState, action: AnyAction): IState {
  switch (action.type) {
    case InstructorActions.CREATE_INSTUCTOR:
      return [...state, action.instructor];

    case InstructorActions.UPDATE_INSTRUCTOR:
    return <IState> state.map(instructor =>
      instructor.userId === action.instructor.userId
        ? { 
            ...instructor, 
            ...action.instructor
        }
        : instructor
    );

    default:
      return state;
  }
}
