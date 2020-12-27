import { IAction, IDispatch, IPost } from '../../types';
import { actionTypes } from './actionTypes';
import api from '../../api';
import { createAction } from '../../utils';

export const requestPosts = (): IAction => ({
  type: actionTypes.REQUEST_LATEST_POSTS,
});

export const createPost = (newPost: IPost) => async (dispatch: IDispatch): Promise<void> => {
  const data = JSON.stringify(newPost);

  try {
    const result = await api.post(`/posts`, data);
    const createPost = createAction(actionTypes.REQUEST_CREATE_POST);
    const requestCreatePost = createPost(result.data);

    dispatch(requestCreatePost);
    window.history.back();
  } catch {
    const createError = createAction(actionTypes.REQUEST_CREATE_POST);
    const requestError = createError('Something went wrong while creating post');
    dispatch(requestError);
  }
};

// below is the code that was used before
// export const requestLatestPosts = (url: string) => async (dispatch: IDispatch) => {
//   try {
//     const res = await api.get(url);

//     dispatch({
//       type: actionTypes.REQUEST_LATEST_POSTS,
//     });

//     dispatch({
//       type: actionTypes.SET_LATEST_POSTS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.SET_ERROR_REQUEST_POST,
//       payload: 'Error while getting data',
//     });
//   } finally {
//     dispatch({
//       type: actionTypes.SET_LOADED_POSTS,
//     });
//   }
// };
