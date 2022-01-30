import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import {
  NoteBtn,
  NoteContent,
  NoteControls,
  NoteTitle,
  NoteForm,
} from './Note.styles';

const Note = ({ id, title, content, handleRemoveItem }) => {
  return (
    <NoteForm>
      <NoteTitle type="text" name="title" defaultValue={title} />
      <NoteContent type="text" name="content" defaultValue={content} />
      <NoteControls>
        <NoteBtn onClick={() => handleRemoveItem(id)}>
          <MdDeleteForever title="Delete note" />{' '}
        </NoteBtn>
      </NoteControls>
    </NoteForm>
  );
};

export default Note;
