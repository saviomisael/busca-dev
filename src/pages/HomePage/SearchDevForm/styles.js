import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  border: none;
  border-radius: 0.6rem;
  width: 100%;

  ${({ theme }) => css`
    background: ${theme.colors.gray};
  `}

  & > * {
    background-color: transparent;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem 1rem;
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    ${({ theme }) => css`
      color: ${theme.colors.black + 'CC'};
      font-size: ${theme.fonts.sizes.small};
    `}
  }
`;

export const ButtonSubmit = styled.button.attrs(() => ({ type: 'submit' }))`
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.gray};
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(1.08);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
