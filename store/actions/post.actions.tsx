import { IAction, IDispatch, IPost } from '../../types';

import { actionTypes } from './actionTypes';
import api from '../../api';

export const requestPosts = (): IAction => ({
  type: actionTypes.REQUEST_LATEST_POSTS,
});

export const createPost = (newPost: IPost) => async (dispatch: IDispatch): Promise<void> => {
  const data = JSON.stringify(newPost);

  try {
    const res = await api.post(`/posts`, data);

    dispatch({
      type: actionTypes.REQUEST_CREATE_POST,
      payload: res.data,
    });

    window.history.back();
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ERROR_REQUEST_POST,
      payload: 'Something went wrong while creating post',
    });
  }
};

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
