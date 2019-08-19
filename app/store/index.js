import { createStore, applyMiddleware } from 'redux'
import appReducer from '../reducer';
import promiseMiddleware from 'redux-promise-middleware';


const middlewares = [promiseMiddleware];

const store = createStore(appReducer, applyMiddleware(...middlewares));

export default function configureStore() {
  return store
}