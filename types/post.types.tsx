import { Id } from './';

export interface IComment {
  id: Id;
  postId: Id;
  body: string;
}

export interface IPost {
  id?: Id;
  title: string;
  body: string;
  comments?: IComment[];
}
