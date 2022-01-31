import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../LoginButton';
import LogoutButton from '../../LogoutButton';
import Tidy from '../../../images/organizer.png';
import {
  Nav,
  NavContainer,
  Logo,
  NavLogo,
  Hamburger,
  Menu,
  MenuLink,
} from './Header.styles';

const Header = ({ children }) => {
  //auth
  const { isAuthenticated } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Nav>
        <NavContainer>
          <Logo href="/">
            <NavLogo src={Tidy} title="Tidy Notes logo" />
            Tidy Notes
          </Logo>
          <Menu isOpen={isOpen}>
            <MenuLink> {children}</MenuLink>
            {isAuthenticated && <MenuLink href="/search">Search</MenuLink>}
            {isAuthenticated && <MenuLink href="/archive">Archive</MenuLink>}
            {isAuthenticated && <MenuLink href="/trash">Trash</MenuLink>}
            <MenuLink>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </MenuLink>
          </Menu>

          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
        </NavContainer>
      </Nav>
    </header>
  );
};

export default Header;
