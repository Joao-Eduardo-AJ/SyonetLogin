import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    width: 300px;
    padding: ${theme.spaces[6]} ${theme.spaces[6]};
    background-color: ${theme.colors.gray100};
    border: 2px solid ${theme.colors.gray200};
    border-radius: 1rem;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.08);
    animation: animation 300ms cubic-bezier(0.16, 1, 0.3, 1);

    > header {
      display: flex;
      justify-content: center;
      margin-bottom: ${theme.spaces[5]};
    }

    > h1 {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: ${theme.spaces[5]};
    }

    @keyframes animation {
      from {
        opacity: 0;
        transform: scale(0.96);
      }

      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `}
`;
