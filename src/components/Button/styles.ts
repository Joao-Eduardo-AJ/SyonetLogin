import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Index';

const variantModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.function};
    color: ${theme.colors.gray100};
    :hover {
      background-color: ${theme.colors.functionLight};
      box-shadow: 0px 0px 10px ${theme.colors.gray400};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray100};
    color: ${theme.colors.function};
    :hover {
      background-color: ${theme.colors.functionLight};
      color: ${theme.colors.gray100};
      box-shadow: 0px 0px 10px ${theme.colors.gray400};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    padding: ${theme.spaces[3]} ${theme.spaces[9]};
    border: 0;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 1rem;
    width: 100%;
    max-height: 2.81rem;
    cursor: pointer;
    transition: all 0.2s;

    ${variant && variantModifier[variant](theme)}
  `};
`;
