import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  padding: 50% 0;

  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.black}, ${theme.colors.second});

    @media (${theme.media.ipadPro}) {
      padding: 20% 0;
    }
  `}
`;

export const Main = styled.main`
  width: 95%;
  margin: 0 auto;

  ${({ theme }) => css`
    @media (${theme.media.ipadPro}) {
      width: 38vw;
    }
  `}
`;
