import React from 'react';
import { render, screen } from '@testing-library/react';
import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyles from '../GlobalStyles';
import GlobalContext from '../context/GlobalContext';
import Search from '../pages/Search';
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
      isAuthenticated: true,
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
        <Search />
      </Auth0Provider>
    </GlobalContext.Provider>
  );
};

describe('Renders Search page', () => {
  test('shows search box', () => {
    renderSearch();
    const appElement = screen.getByRole('button');
    expect(appElement).toBeInTheDocument();
  });
});
