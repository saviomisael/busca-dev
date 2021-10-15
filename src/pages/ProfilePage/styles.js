import styled, { css } from 'styled-components';
import * as MainContentStyled from './MainContent/styles';

export const Container = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  ${({ theme }) =>
    css`
      background: linear-gradient(${theme.colors.black}, ${theme.colors.first});
    `}
`;

export const Content = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.5rem;

  ${({ theme }) => css`
    @media (${theme.media.ipadPro}) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: start;
      row-gap: none;
      column-gap: 3rem;
      padding-right: 3.5rem;

      & > ${MainContentStyled.Main} {
        grid-column: 2 / span 2;
      }
    }
  `}
`;
