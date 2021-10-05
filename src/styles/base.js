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
  }

  html,
  body {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.notoSans};
  }
`;
