import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
`;

export const StarsCounter = styled.p`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.default};
    color: ${theme.colors.first};
  `}
`;

export const Icon = styled.img`
  filter: invert(23%) sepia(6%) saturate(4839%) hue-rotate(162deg) brightness(93%) contrast(82%);
`;
