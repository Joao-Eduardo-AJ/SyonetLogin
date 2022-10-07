import styled, { css } from 'styled-components';

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${theme.colors.gray100};
    border: 1px solid ${theme.colors.gray200};
    margin: ${theme.spaces[6]} ${theme.spaces[1]};
    padding: ${theme.spaces[4]} ${theme.spaces[8]};
    border-radius: 0.5rem;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.08);

    span {
      font-size: 1.125rem;
    }
  `}
`;
