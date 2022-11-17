import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Card } from './layout/card/index';
import { Home } from './pages/Home/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Home />
      </Card>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
