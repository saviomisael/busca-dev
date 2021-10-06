import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme, smallText }) => css`
    font-size: ${smallText ? theme.fonts.sizes.default : theme.fonts.sizes.medium};
    color: ${theme.colors.white};
  `}
`;
