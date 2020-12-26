import { IRootReducer } from '../../types';
import { combineReducers } from 'redux';
import postReducer from './post.reducer';

const rootReducer = combineReducers<IRootReducer>({
  postReducer,
});

export default rootReducer;
