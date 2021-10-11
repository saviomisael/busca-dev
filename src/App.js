import { ThemeProvider } from 'styled-components';
import { StoreProvider } from './store/StoreProvider';
import { BaseStyles } from './styles/base';
import { theme } from './styles/theme';
import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <BaseStyles />
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
