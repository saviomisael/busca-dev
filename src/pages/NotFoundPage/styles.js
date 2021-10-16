import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.black + 'dd'}, ${theme.colors.first});
  `}
`;
