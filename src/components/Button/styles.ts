import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './Index';

const variantModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.function};
    color: ${theme.colors.gray100};
  `,
  outline: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray100};
    color: ${theme.colors.function};
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

    ${variant && variantModifier[variant](theme)}
  `};
`;
