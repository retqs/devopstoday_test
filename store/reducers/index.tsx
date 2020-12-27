import { combineReducers } from 'redux';

import { IRootReducer } from '../../types';
import postReducer from './post.reducer';

const rootReducer = combineReducers<IRootReducer>({
  postReducer,
});

export default rootReducer;
