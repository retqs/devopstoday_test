import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { IDispatch, IRootReducer } from '../types';
import rootReducer from './reducers';

interface IReduxApi {
  state: IRootReducer;
  dispatch: IDispatch;
}

const middlewares = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

export const getReduxApi = (): IReduxApi => ({
  state: store.getState(),
  dispatch: store.dispatch,
});

export default store;
