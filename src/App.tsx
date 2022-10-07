import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { Card } from './layout/Card/index';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Card>
            <Router />
          </Card>
        </UserProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
