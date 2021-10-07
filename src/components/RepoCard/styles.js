import styled, { css } from 'styled-components';
import * as StarsCounterStyled from './StarsCounter/styles';

export const Wrapper = styled.article`
  padding: 1.5rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  background-color: ${({ theme }) => theme.colors.gray};

  > * {
    ${({ theme }) => css`
      font-size: ${theme.fonts.sizes.medium};
      color: ${theme.colors.black};
    `}
  }

  > ${StarsCounterStyled.Wrapper} {
    margin-top: 1rem;
  }
`;

export const RepoName = styled.a`
  font-weight: 600;
`;

export const Description = styled.p`
  font-weight: 500;
`;
