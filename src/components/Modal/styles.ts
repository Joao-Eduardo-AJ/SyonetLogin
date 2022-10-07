import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translatex(-50%);
    width: 300px;
    padding: ${theme.spaces[6]} ${theme.spaces[6]};
    background-color: ${theme.colors.gray100};
    border: 2px solid ${theme.colors.gray200};
    border-radius: 1rem;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.08);

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
  `}
`;
