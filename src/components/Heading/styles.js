import styled, { css } from 'styled-components';

const gradientBackground = css`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const gradientsTitle = {
  blue: (theme) => css`
    background: linear-gradient(${theme.colors.white}, ${theme.colors.first});
    ${gradientBackground}
  `,
  green: (theme) => css`
    background: linear-gradient(${theme.colors.white}, ${theme.colors.second});
    ${gradientBackground}
  `,
};

export const Title = styled.h1`
  margin-top: 0;
  ${({ theme, gradient }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
    font-family: ${theme.fonts.family.ubuntu};

    ${gradient && gradientsTitle[gradient](theme)}
  `}
`;
