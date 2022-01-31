import React from 'react';
import { render, screen } from '@testing-library/react';
import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyles from '../GlobalStyles';
import GlobalContext from '../context/GlobalContext';
import Login from '../pages/Login';
import Header from '../components/Layout/Header';

//mocking authorization
jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  // eslint-disable-next-line
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: 'foobar' },
      isAuthenticated: false,
      loginWithRedirect: jest.fn(),
    };
  },
}));

//mocking items
const items = [
  {
    id: '3j9VAikHsPQt4Nqwmp6Xa',
    title: 'Buy cat food',
    content: 'Petco order',
    archive: false,
    trash: false,
  },
];

const renderSearch = () => {
  render(
    <GlobalContext.Provider value={{ items }}>
      <Auth0Provider>
        <GlobalStyles />
        <Header></Header>
        <Login />
      </Auth0Provider>
    </GlobalContext.Provider>
  );
};

describe('Renders Login page', () => {
  test('shows login instructions', () => {
    renderSearch();
    const appElement = screen.getByText(
      /Login to Tidy Notes with your Google account:/i
    );
    expect(appElement).toBeInTheDocument();
  });
});
