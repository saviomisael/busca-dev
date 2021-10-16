import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './store/StoreProvider';
import { BaseStyles } from './styles/base';
import { theme } from './styles/theme';
import { AppRouter } from './routes/AppRouter';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <BaseStyles />
          <AppRouter />
        </HelmetProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
