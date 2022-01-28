import React from 'react';
import { Nav, LogoWrap, Logo } from './Header.styles';
import Tidy from '../../../images/organizer.png';

const Header = () => {
  return (
    <Nav>
      <p>Tidy</p>
      <LogoWrap>
        <Logo alt="Google keep logo" src={Tidy} />
      </LogoWrap>
    </Nav>
  );
};

export default Header;
