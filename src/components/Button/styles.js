import styled, { css } from 'styled-components';

const buttonSizes = {
  large: css`
    width: 100%;
  `,
  medium: css`
    width: 85%;
  `,
};

export const Button = styled.button`
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;
  border-radius: 0.8rem;
  transition: transform 0.3s ease-in-out;

  ${({ theme, size }) => css`
    font-size: ${theme.fonts.sizes.medium};
    background: ${theme.colors.black};
    color: ${theme.colors.white};

    ${buttonSizes[size]};
  `}

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: translateY(0.8rem);
  }
`;
