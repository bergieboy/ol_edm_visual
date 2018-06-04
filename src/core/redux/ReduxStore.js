// /*
//  * @flow
//  */
//
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduxReducer from './ReduxReducer';

const initializeReduxStore = () => (
  createStore(
    reduxReducer,
    applyMiddleware(thunk)
  )
);

export default initializeReduxStore;
