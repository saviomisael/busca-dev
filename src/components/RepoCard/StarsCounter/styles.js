import styled, { css } from 'styled-components';
import StarEmpty from '../../../assets/images/star_empty.svg';
import StarFilled from '../../../assets/images/star_fill.svg';

export const StarsCounter = styled.p`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  column-gap: 0.7rem;

  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.default};
    color: ${theme.colors.first};
  `}

  &::before {
    filter: invert(23%) sepia(6%) saturate(4839%) hue-rotate(162deg) brightness(93%) contrast(82%);

    ${({ hasStars }) => css`
      content: url(${hasStars ? StarFilled : StarEmpty});
    `}
  }
`;
