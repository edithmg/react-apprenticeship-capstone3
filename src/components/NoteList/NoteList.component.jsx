import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Note from '../Note';
import { SectionNotes } from './NoteList.styles';

const NoteList = () => {
  const { items, setItems } = useContext(GlobalContext);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <SectionNotes>
        {items.length > 0 ? (
          items.map((item) => (
            <Note key={item.id} {...item} handleRemoveItem={handleRemoveItem} />
          ))
        ) : (
          <h4>No notes!, create a new one :) </h4>
        )}
      </SectionNotes>
    </>
  );
};

export default NoteList;
