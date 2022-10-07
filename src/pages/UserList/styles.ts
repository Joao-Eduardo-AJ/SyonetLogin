import styled, { css } from 'styled-components';

export const List = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    .listContainer {
      max-height: 360px;
      overflow-y: auto;
      box-shadow: 0px 4px 8px ${theme.colors.gray300};
    }

    .buttonContainer {
      margin-top: ${theme.spaces[20]};
    }

    h1 {
      margin-bottom: ${theme.spaces[10]};
      font-size: 1.5rem;
    }
  `}
`;
