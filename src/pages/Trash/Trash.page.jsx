import React from 'react';
import NoteList from '../../components/NoteList';
import { Container } from '../../GlobalStyles';

const Trash = () => {
  return (
    <Container>
      <NoteList type="trash" />
    </Container>
  );
};

export default Trash;
