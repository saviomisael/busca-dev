import styled, { css } from 'styled-components';
import LinkIcon from '../../assets/images/link_white.svg';

export const Container = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const ProfileContent = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const Avatar = styled.img`
  width: 14.8rem;
  height: 14.8rem;
`;

export const Blog = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes.medium};
  `}
  display: flex;
  align-items: center;
  column-gap: 2rem;

  &::before {
    content: url(${LinkIcon});
    transform: translateY(0.2rem);
  }
`;
