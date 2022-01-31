import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import {
  NoteBtn,
  NoteContent,
  NoteControls,
  NoteTitle,
  NoteContainer,
} from './Note.styles';

const Note = ({ id, title, content, color, handleRemoveItem }) => {
  /*
  const [showControls, setShowControls] = useState(false);

  const toggleControls = () => {
    setShowControls(true);
  };
*/
  const [showTitle, setShowTitle] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => setIsEditable(!isEditable);
  const onFocusNote = () => {
    setShowTitle(true);
  };

  return (
    <NoteContainer caseStudyColor={color}>
      {showTitle && (
        <NoteTitle
          type="text"
          name="title"
          defaultValue={title}
          caseStudyColor={color}
        />
      )}

      <NoteContent
        type="text"
        name="content"
        defaultValue={content}
        onClick={toggleEdit}
        onFocus={onFocusNote}
        onBlur={onFocusNote}
        caseStudyColor={color}
      />
      {showTitle && (
        <NoteControls caseStudyColor={color}>
          <NoteBtn onClick={() => handleRemoveItem(id)}>
            <MdDeleteForever title="Delete note" />{' '}
          </NoteBtn>
        </NoteControls>
      )}
    </NoteContainer>
  );
};

export default Note;
