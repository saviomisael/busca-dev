import { ThemeProvider } from 'styled-components';
import { StoreProvider } from './store/StoreProvider';
import { BaseStyles } from './styles/base';
import { theme } from './styles/theme';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <BaseStyles />
        <h1>Oi</h1>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
