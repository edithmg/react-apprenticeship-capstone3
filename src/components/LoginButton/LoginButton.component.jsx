import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogBtn } from './LoginButton.styles';
import { BiUserPlus } from 'react-icons/bi';

const LoginButton = () => {
  //auth
  const { loginWithRedirect } = useAuth0();
  return (
    <LogBtn primary onClick={() => loginWithRedirect()}>
      <BiUserPlus title="Login" />
    </LogBtn>
  );
};

export default LoginButton;
