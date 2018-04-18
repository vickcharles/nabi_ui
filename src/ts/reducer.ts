import { combineReducers } from 'redux';
import userReducer from './Registration';
import instructorReducer from './ProfileBuilder';

import { State } from './store';

const rootReducer = combineReducers<State>({
  users: userReducer,
  instructors: instructorReducer
});

export default rootReducer;
