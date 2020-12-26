import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }    
`;

export const purple = '#6E1BFD';
export const lPurple = '#9169FF';
export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
`;
export const Container = styled.div`
  width: 1180px;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1180px) {
    width: 90vw;
  }
`;
