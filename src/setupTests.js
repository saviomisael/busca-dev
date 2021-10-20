// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter, Route, Switch } from 'react-router';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { storeMock } from './store/store-mock';
import { HelmetProvider } from 'react-helmet-async';

global.renderTheme = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

global.renderStoreProviderWithTheme = (children) =>
  render(
    <Provider store={storeMock}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>,
  );

global.withRoutes = (children, options) => {
  const initialRoutes = options && options.initialRoutes ? options.initialRoutes : ['/'];

  return render(
    <Provider store={storeMock}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <MemoryRouter initialEntries={initialRoutes}>
            <Switch>
              <Route path={options.pathname} render={() => children} />
            </Switch>
          </MemoryRouter>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>,
  );
};
