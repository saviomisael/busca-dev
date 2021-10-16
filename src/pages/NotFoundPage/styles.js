import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  padding: 50% 0;

  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.black + 'dd'}, ${theme.colors.first});

    @media (${theme.media.ipadPro}) {
      padding: 25% 0;
    }
  `}
`;
