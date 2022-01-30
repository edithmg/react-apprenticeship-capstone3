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
  /*
  const [showControls, setShowControls] = useState(false);

  const toggleControls = () => {
    setShowControls(true);
  };
*/
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
