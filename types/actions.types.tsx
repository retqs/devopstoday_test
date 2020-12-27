import { ThunkDispatch } from 'redux-thunk';

import { IRootReducer } from './';

export interface IAction<P = unknown> {
  type: string;
  payload?: P;
}

export type IDispatch = ThunkDispatch<IRootReducer, undefined, any>;
