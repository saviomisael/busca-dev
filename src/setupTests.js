// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { storeMock } from './store/store-mock';

global.renderTheme = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

global.renderStoreProviderWithTheme = (children) =>
  render(
    <Provider store={storeMock}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>,
  );
