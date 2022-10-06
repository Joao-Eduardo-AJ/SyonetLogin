import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { Card } from './layout/Card/index';
import { Register } from './pages/Registrer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Card>
          <Register>
            <Router />
          </Register>
        </Card>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
