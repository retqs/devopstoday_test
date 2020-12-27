import { IAction } from '../types';

export const createAction = (type: string) => (payload: unknown): IAction => ({
  type,
  payload,
});
