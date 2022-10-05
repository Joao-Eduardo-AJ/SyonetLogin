import React from 'react';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Button } from './components/Button/Index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button variant="outline">Já sou usuário</Button>
      <Button variant="primary">Criar conta</Button>
    </ThemeProvider>
  );
}

export default App;
