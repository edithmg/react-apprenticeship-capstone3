import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Note from '../Note';
import { SectionNotes } from './NoteList.styles';

const NoteList = ({ type }) => {
  const { items, setItems } = useContext(GlobalContext);
  let archiveItems,
    trashItems = [];

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
    if (items.length > 0) {
      archiveItems = items.filter((item) => item.archive === true);
    }

    return (
      <>
        <SectionNotes>
          {archiveItems.length > 0 ? (
            archiveItems
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
    if (items.length > 0) {
      trashItems = items.filter((item) => item.trash === true);
    }
    return (
      <>
        <SectionNotes>
          {trashItems.length > 0 ? (
            trashItems
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
