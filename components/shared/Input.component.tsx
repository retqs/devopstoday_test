import styled from 'styled-components';

import { IInputProps } from '../../types';
import { lPurple } from '../../public/styles';

export const Input: React.FC<IInputProps> = (props): JSX.Element => (
  <CustomInput spellCheck="false" autoComplete="off" {...props} />
);

const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: #f2f2f2;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.2s ease;
  outline: none;
  font-size: 20px;
  margin-top: 10px;

  &:focus {
    box-shadow: ${lPurple} 0px 0px 5px;
  }
`;
