import { IPost, IPostsReducer, IRootReducer } from '../../types';

export const getLatestPosts = (state: IRootReducer): IPost[] => state.postReducer.data;
export const getPostsReducer = (state: IRootReducer): IPostsReducer => state.postReducer;
