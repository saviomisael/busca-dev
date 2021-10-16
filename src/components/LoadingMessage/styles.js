import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  filter: blur(1rem);
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  word-spacing: 1rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.huge};
  `}
`;
