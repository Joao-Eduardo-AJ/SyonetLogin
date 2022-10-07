import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;

    h1 {
      margin-bottom: ${theme.spaces[10]};
      font-size: 1.5rem;
    }

    .inputContainer {
      display: flex;
      flex-direction: column;
      gap: ${theme.spaces[8]};
    }

    .buttonContainer {
      display: flex;
      flex-direction: row;
      margin-top: 4.5rem;
    }
  `}
`;
