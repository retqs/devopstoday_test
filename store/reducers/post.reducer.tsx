import { IAction, IPostsReducer } from '../../types';
import { actionTypes } from '../actions';

// isLoading,error relates to the previous solution
// now only data is being used
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

// prev solution
// isLoading: true,
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
