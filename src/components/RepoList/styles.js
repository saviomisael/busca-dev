import styled, { css } from 'styled-components';
import * as TextComponentStyled from '../TextComponent/styles';

export const List = styled.ul`
  padding: 1rem;
  border-radius: 0.6rem;

  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.gray + 'BB'}, ${theme.colors.black + 'CC'});
  `}
`;

export const Item = styled.li``;

export const ListEmptyMessage = styled(TextComponentStyled.Text)`
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;

  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;
