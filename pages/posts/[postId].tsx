import { IComment, IPost } from '../../types';

import Comment from '../../components/posts/Comment.component';
import { GetServerSideProps } from 'next';
import { WithLoaderContainer } from '../../hocs';
import api from '../../api';
import styled from 'styled-components';

interface IPostProps {
  post: IPost;
  error?: string | null;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const postId = query.postId;

  try {
    const res = await api.get(`posts/${postId}?_embed=comments`);

    return {
      props: {
        post: res.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Something went wrong while loading data',
      },
    };
  }
};

function PostDetail({ post, error }: IPostProps): JSX.Element {
  const renderCommentsList = (comments: IComment[]) => {
    if (comments.length === 0) return <h2>No Comments at the moment</h2>;

    return comments.map((comment: IComment) => <Comment key={comment.id} data={comment}></Comment>);
  };

  if (error) return <h2>{error}</h2>;

  return (
    <WithLoaderContainer isLoading={false}>
      <PostDetailContainer>
        <PostContent>
          <PostTitle>{post.title}</PostTitle>
          <PostDescription>{post.body}</PostDescription>
        </PostContent>
        <PostComments>
          <CommentsSectionTitle>Comments</CommentsSectionTitle>
          {renderCommentsList(post.comments)}
        </PostComments>
      </PostDetailContainer>
    </WithLoaderContainer>
  );
}

const PostDetailContainer = styled.div`
  margin: 10vh 0;
`;

const PostTitle = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const PostDescription = styled.p`
  word-break: break-all;
`;

const PostContent = styled.article`
  margin-bottom: 20px;
  min-height: 50vh;
`;

const PostComments = styled.ul`
  list-style: none;

  display: flex;
  flex-flow: column wrap;
`;

const CommentsSectionTitle = styled.h3`
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export default PostDetail;
