import { ThunkDispatch } from 'redux-thunk';

import { IRootReducer } from './';

export interface IAction<P = unknown> {
  type: string;
  http?: string;
  payload?: P;
}

export type IDispatch = ThunkDispatch<IRootReducer, undefined, any>;
