import styled from 'styled-components';
import Link from 'next/link';

import { IPost } from '../../types';
import { purple } from '../../public/styles';

interface IProps {
  data: IPost;
}

const Post: React.FC<IProps> = ({ data }): JSX.Element => (
  <PostComponent>
    <PostTitle>
      <Link href="/posts/[postId]" as={`/posts/${data.id}`}>
        <a>{data.title}</a>
      </Link>
    </PostTitle>
    <PostDescription>{data.body}</PostDescription>
  </PostComponent>
);

const PostComponent = styled.li`
  min-width: 320px;
  border-radius: 10px;
  background: #f2f2f2;
  padding: 20px;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const PostTitle = styled.h2`
  position: relative;
  padding: 0 0 0 10px;
  margin-bottom: 20px;
  font-weight: 400;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${purple};
    height: 100%;
    width: 2px;
  }

  a {
    text-decoration: none;
    color: #212121;
  }
`;

const PostDescription = styled.p`
  word-break: break-all;
`;

export default Post;
