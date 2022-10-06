import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { Card } from './layout/Card/index';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Card>
          <Router />
        </Card>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
