import React from 'react';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Input } from './components/Input/Index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Input label="Email" placeholder="Digite seu email" />
    </ThemeProvider>
  );
}

export default App;
