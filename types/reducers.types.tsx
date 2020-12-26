import * as postTypes from './post.types';

export interface IPostsReducer {
  isLoading: boolean;
  data: postTypes.IPost[];
  error: null | string;
}

export interface IRootReducer {
  postReducer: IPostsReducer;
}
