import React from 'react';
import { render } from '@testing-library/react';
import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyles from './GlobalStyles';
import GlobalContext from './context/GlobalContext';
import App from './App';
import Header from './components/Layout/Header';

//mocking authorization
jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  // eslint-disable-next-line
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: 'foobar' },
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

//mocking items
const initialState = {
  id: '3j9VAikHsPQt4Nqwmp6Xa',
  title: 'Buy cat food',
  content: 'Petco order',
  archive: false,
  trash: false,
};

const renderApp = () => {
  render(
    <GlobalContext.Provider value={initialState}>
      <Auth0Provider>
        <GlobalStyles />
        <Header></Header>
        <App />
      </Auth0Provider>
    </GlobalContext.Provider>
  );
};

test('Renders app title', () => {
  renderApp();
});
