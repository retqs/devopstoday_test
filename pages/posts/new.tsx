import { Button, lPurple } from '../../public/styles';
import { Input, Textarea } from '../../components/shared';

import { IPost } from '../../types';
import { WithLoaderContainer } from '../../hocs';
import { createPost } from '../../store/actions';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useEdit } from '../../hooks';

function CreateNewPostPage(): JSX.Element {
  const dispatch = useDispatch();

  const { data, handleChange } = useEdit<IPost>({
    title: '',
    body: '',
  });

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      dispatch(createPost(data));
    },
    [data],
  );

  return (
    <WithLoaderContainer isLoading={false}>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="title">Title:</Label>
          <Input id="title" name="title" value={data.title} onChange={handleChange}></Input>
        </FormField>
        <FormField>
          <Label htmlFor="body">Body:</Label>
          <Textarea id="body" name="body" value={data.body} onChange={handleChange}></Textarea>
        </FormField>
        <SubmitBtn type="submit">Add New Post</SubmitBtn>
      </Form>
    </WithLoaderContainer>
  );
}

const Form = styled.form`
  margin: 10vh 0;
`;

const FormField = styled.fieldset`
  border: none;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const Label = styled.label``;

const SubmitBtn = styled(Button)`
  color: #fff;
  background: ${lPurple};
  float: right;
  margin-top: 20px;
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 18px;
`;

export default CreateNewPostPage;
