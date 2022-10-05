import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    ${({ theme }) => css`
      body {
        width: 100vw;
        height: 100vh;
        background: ${theme.colors.background};
      }
    `};
`;
