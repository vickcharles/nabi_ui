import { combineReducers } from 'redux';
import userReducer from './Users';
import instructorReducer from './Instructors';

import { State } from './store';

/** 
 * Combines Redux Reducers
 */
const rootReducer = combineReducers<State>({
  users: userReducer,
  instructors: instructorReducer
});

export default rootReducer;
