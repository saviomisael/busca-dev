import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

export const BaseStyles = createGlobalStyle`
  ${normalize}

  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html,
  body {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.notoSans};
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.huge};
  }

  h5 {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
