import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 439px;
    padding: ${theme.spaces[12]} ${theme.spaces[8]};
    background-color: ${theme.colors.gray100};
    border: 2px solid ${theme.colors.gray200};
    border-radius: 1rem;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.08);

    > header {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: ${theme.spaces[20]};
    }
  `}
`;
