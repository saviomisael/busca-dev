import { ThemeProvider } from 'styled-components';
import { BaseStyles } from './styles/base';
import { theme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <h1>Oi</h1>
    </ThemeProvider>
  );
};

export default App;
