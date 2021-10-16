import styled, { css, keyframes } from 'styled-components';

const wave = keyframes`
  0% {transform: translateY(0.2rem);}
  1% {transform: translateY(0.4rem);}
  2% {transform: translateY(0.6rem);}
  3% {transform: translateY(0.8rem);}
  4% {transform: translateY(1rem);}
  5% {transform: translateY(1.2rem); opacity: 1;}
  6% {transform: translateY(-0.2rem); opacity: 1;}
  7% {transform: translateY(-0.4rem); opacity: 1;}
  8% {transform: translateY(-0.6rem); opacity: 1;}
  9% {transform: translateY(-0.8rem); opacity: 1;}
  10% {transform: translateY(-1rem); opacity: 1;}
  11% {transform: translateY(-1.2rem); opacity: 1;}
  12% {transform: translateY(0); opacity: .5;}
  100% {transform: translateY(0); opacity: .5;}
`;

export const Dot = styled.span`
  display: inline-block;

  ${({ theme }) => css`
    background: linear-gradient(${theme.colors.white}, ${theme.colors.first});
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: ${theme.fonts.sizes.hugest};
  `}

  &:first-child {
    animation: ${wave} 2s ease-in-out infinite;
  }

  &:nth-child(2) {
    animation: ${wave} 2s 0.1s ease-in-out infinite;
  }

  &:nth-child(3) {
    animation: ${wave} 2s 0.2s ease-in-out infinite;
  }
`;
