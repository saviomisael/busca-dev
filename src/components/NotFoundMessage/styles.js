import styled, { css, keyframes } from 'styled-components';

export const MessageWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  filter: brightness(0.8);

  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.fonts.sizes.hugest};
    font-family: ${theme.fonts.family.ubuntu};
  `}
`;

const glow = keyframes`
    from {
    text-shadow: 0 0 10px #F5F5F5, 0 0 20px #F5F5F5, 0 0 30px #284B63, 0 0 40px #284B63, 0 0 50px #284B63, 0 0 60px #284B63, 0 0 70px #284B63;
  }
  to {
    text-shadow: 0 0 20px #F5F5F5, 0 0 30px #284B6377, 0 0 40px #284B6377, 0 0 50px #284B6377, 0 0 60px #284B6377, 0 0 70px #284B6377, 0 0 80px #284B6377;
  }
`;

export const TextGlow = styled.span`
  color: ${({ theme }) => theme.colors.white};
  filter: brightness(1.1);
`;

export const MessageFlicked = styled.p`
  & > ${TextGlow} {
    animation: ${glow} 1s ease-in-out infinite alternate;
  }
`;

export const MessageSubtitle = styled(MessageFlicked)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
  `}
`;
