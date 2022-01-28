import React from 'react';
import NewNote from '../../components/NewNote';
import NoteList from '../../components/NoteList';
import { Container } from '../../GlobalStyles';

const Home = () => {
  return (
    <Container>
      <NewNote />
      <NoteList />
    </Container>
  );
};

export default Home;
