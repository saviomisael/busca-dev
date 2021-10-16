import styled, { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 5rem;

  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.black + 'dd'}, ${theme.colors.first});
  `}
`;
