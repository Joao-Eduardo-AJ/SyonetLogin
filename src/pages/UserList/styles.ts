import styled, { css } from 'styled-components';

export const List = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    h1 {
      margin-bottom: ${theme.spaces[10]};
      font-size: 1.5rem;
    }
  `}
`;
