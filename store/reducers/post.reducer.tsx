import { IAction, IPostsReducer } from '../../types';

import { actionTypes } from '../actions';

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default function postReducer(
  state: IPostsReducer = initialState,
  { type, payload }: IAction<any>,
): IPostsReducer {
  switch (type) {
    case actionTypes.REQUEST_LATEST_POSTS:
      return {
        ...state,
        // isLoading: true,
        data: payload,
      };

    case actionTypes.REQUEST_CREATE_POST:
      return {
        ...state,
        data: [...state.data, payload],
      };

    default:
      return state;
  }
}

// case actionTypes.SET_LATEST_POSTS:
//   return {
//     ...state,
//     data: payload,
//   };

// case actionTypes.SET_LOADED_POSTS:
//   return {
//     ...state,
//     isLoading: false,
//   };

// case actionTypes.SET_ERROR_REQUEST_POST:
//   return {
//     ...state,
//     error: payload,
//   };
