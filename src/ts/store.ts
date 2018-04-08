import { createBrowserHistory, History } from 'history';
import { createStore, applyMiddleware, Store } from 'redux';
import rootRouter from './reducer';
import reduxThunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface State {
    
}

const initialState: State = {

};

let history: History;
let store: Store<State>;

export const getStore = () => {
    if (store) {
      return store;
    }
  
    const middleware = [reduxThunk, routerMiddleware(history)];
  
    store = createStore<State>(
      rootRouter,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    );
  
    return store;
  };