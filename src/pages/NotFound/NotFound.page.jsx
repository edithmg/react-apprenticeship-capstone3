import React from 'react';
import { Section } from '../../GlobalStyles';
import { Gif } from './NotFound.styles';
import Ooops from '../../images/404.gif';

const NotFound = () => {
  return (
    <Section>
      <Gif src={Ooops} title="Page not found" />
    </Section>
  );
};

export default NotFound;
