import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { BASE_URL } from '../api';
import { IPost } from '../types';
import Post from '../components/posts/Post.component';
import { WithLoaderContainer } from '../hocs';
import { getPostsReducer } from '../store/selectors';
import { requestPosts } from '../store/actions';
import { useFetch } from '../hooks';

function LatestPosts(): JSX.Element {
  const { data } = useSelector(getPostsReducer);

  const { isLoading, error } = useFetch(`${BASE_URL}/posts`, requestPosts);

  const renderPostsList = (posts: IPost[]) => {
    if (posts.length === 0) return <h2>No Available Posts at the moment</h2>;

    return posts.map((post: IPost) => <Post key={post.id} data={post} />);
  };

  if (error) return <h2>{error}</h2>;

  return (
    <WithLoaderContainer isLoading={isLoading}>
      <PostList>{renderPostsList(data)}</PostList>
    </WithLoaderContainer>
  );
}

const PostList = styled.ul`
  list-style: none;
  margin: 10vh 0;
`;

export default LatestPosts;

// in order to have ctx dispatch prop we'd need to make this
// page as SSG, so I decided to create helper function getReduxApi
// in order to save static generation

//import {getReduxApi} from '../store';
//useDispatch
//requestLatestPosts

// export async function getStaticProps() {
//   const {state, dispatch} = getReduxApi();

//   const {data, isLoading, error} = getPostsReducer(state);
//
//   // @ts-ignore
//   dispatch(requestLatestPosts(`${BASE_URL}/posts`));
//
//   return {
//     props: {
//       data,
//       isLoading,
//       error,
//     },
//   };
// }

// {data, isLoading, error}
