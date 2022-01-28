import React, { useContext } from 'react';
import NoteForm from '../NoteForm';
import GlobalContext from '../../context/GlobalContext';

const NewNote = () => {
  const { items, setItems } = useContext(GlobalContext);

  const handleOnSubmit = (item) => {
    setItems([item, ...items]);
  };

  return <NoteForm handleOnSubmit={handleOnSubmit} />;
};

export default NewNote;
