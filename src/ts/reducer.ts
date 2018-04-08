import { combineReducers } from 'redux';
import userReducer from './Registration';
import { State } from './store';

const rootReducer = combineReducers<State>({
  userReducer
});

export default rootReducer;
