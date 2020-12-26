import { IRootReducer } from './';
import { ThunkDispatch } from 'redux-thunk';

export interface IAction<P = unknown> {
  type: string;
  http?: string;
  payload?: P;
}

export type IDispatch = ThunkDispatch<IRootReducer, undefined, any>;
