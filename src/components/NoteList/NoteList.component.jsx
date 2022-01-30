import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Note from '../Note';
import { SectionNotes } from './NoteList.styles';

const NoteList = ({ type }) => {
  const { items, setItems } = useContext(GlobalContext);

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  if (type === 'full') {
    return (
      <>
        <SectionNotes>
          {items.length > 0 ? (
            items.map((item) => (
              <Note
                key={item.id}
                {...item}
                handleRemoveItem={handleRemoveItem}
              />
            ))
          ) : (
            <h4>No notes!, create a new one :) </h4>
          )}
        </SectionNotes>
      </>
    );
  }

  if (type === 'archive') {
    return (
      <>
        <SectionNotes>
          {items.length > 0 ? (
            items
              .filter((item) => item.archive === true)
              .map((item) => (
                <Note
                  key={item.id}
                  {...item}
                  handleRemoveItem={handleRemoveItem}
                />
              ))
          ) : (
            <h4>No notes archived </h4>
          )}
        </SectionNotes>
      </>
    );
  }

  if (type === 'trash') {
    return (
      <>
        <SectionNotes>
          {items.length > 0 ? (
            items
              .filter((item) => item.trash === true)
              .map((item) => (
                <Note
                  key={item.id}
                  {...item}
                  handleRemoveItem={handleRemoveItem}
                />
              ))
          ) : (
            <h4>No notes in trash </h4>
          )}
        </SectionNotes>
      </>
    );
  }
};

export default NoteList;
