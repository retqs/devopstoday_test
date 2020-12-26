import styled, { keyframes } from 'styled-components';

export function Loader(): JSX.Element {
  return (
    <LoaderBox>
      <h2>Loading</h2>
    </LoaderBox>
  );
}

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
`;

const LoaderBox = styled.div`
  height: 200px;
  width: 200px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    animation: ${rotate} 1s linear infinite;
  }
`;
