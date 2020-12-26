import { IComment } from '../../types';
import styled from 'styled-components';

interface IProps {
  data: IComment;
}

const Comment: React.FC<IProps> = ({ data }): JSX.Element => {
  return <CommentBox>{data.body}</CommentBox>;
};

const CommentBox = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;

export default Comment;
