import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from './utils/hooks/useLocalStorage';
import { useDarkTheme } from './utils/hooks/useDarkTheme';
import GlobalStyles from './GlobalStyles';
import Header from './components/Layout/Header';
import Private from './components/Private';
import { lightTheme, darkTheme } from './components/Themes';
import ThemeToggler from './components/ThemeToggler';
import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test';

const App = () => {
  const [items, setItems] = useLocalStorage('notes', []);
  //theme settings
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <GlobalContext.Provider value={{ items, setItems }}>
        <ThemeProvider theme={selectedTheme}>
          <BrowserRouter>
            <GlobalStyles />
            <Header>
              <ThemeToggler themeToggler={themeToggler} selectedTheme={theme} />
            </Header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Private exact path="/test">
                <Test />
              </Private>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </GlobalContext.Provider>
    </Auth0Provider>
  );
};

export default App;
