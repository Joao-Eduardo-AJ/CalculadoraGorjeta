import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Card } from './layout/card/index';
import { Main } from './pages/Main/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Main />
      </Card>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
