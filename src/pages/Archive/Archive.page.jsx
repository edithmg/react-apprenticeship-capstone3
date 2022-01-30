import React from 'react';
import NoteList from '../../components/NoteList';
import { Container } from '../../GlobalStyles';

const Archive = () => {
  return (
    <Container>
      <NoteList type="archive" />
    </Container>
  );
};

export default Archive;
