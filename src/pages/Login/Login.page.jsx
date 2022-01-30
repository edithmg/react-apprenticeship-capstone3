import React from 'react';
import LoginButton from '../../components/LoginButton';
import { Container } from '../../GlobalStyles';
import { LoginSection } from './Login.styles';

const Login = () => {
  return (
    <Container>
      <LoginSection>
        <h2>Login to Tidy Notes with your Google account:</h2>
        <LoginButton />
      </LoginSection>
    </Container>
  );
};

export default Login;
