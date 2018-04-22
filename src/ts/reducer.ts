import { combineReducers } from 'redux';
import userReducer from './Users';
import instructorReducer from './Instructors';

import { State } from './store';

const rootReducer = combineReducers<State>({
  users: userReducer,
  instructors: instructorReducer
});

export default rootReducer;
