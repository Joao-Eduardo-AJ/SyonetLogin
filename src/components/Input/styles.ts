import styled, { css, DefaultTheme } from 'styled-components';

export interface WrapperProps {
  disabled?: boolean;
  error?: string;
}

const variantModifier = {
  error: (theme: DefaultTheme) => css`
    label {
      color: ${theme.colors.danger};
    }

    input {
      border-color: ${theme.colors.danger};
      color: ${theme.colors.danger};

      &::placeholder {
        color: ${theme.colors.danger};
      }
    }

    span {
      color: ${theme.colors.danger};
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    opacity: 0.6;

    label {
      color: ${theme.colors.gray600};
    }

    input {
      background-color: ${theme.colors.background};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces[2]};

    label {
      font-size: 1rem;
      font-weight: 500;
      color: ${theme.colors.gray700};
    }

    input {
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.gray600};
      border: 1px solid ${theme.colors.gray300};
      border-radius: 8px;
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      width: 100%;
      font-weight: 400;
      font-size: 0.875rem;
      transition: all 0.2s;

      :hover {
        background-color: ${theme.colors.gray200};
      }
    }

    ${disabled && variantModifier.disabled(theme)}
    ${error && variantModifier.error(theme)}
  `}
`;
