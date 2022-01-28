import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { MdOutlineArchive, MdOutlinePalette } from 'react-icons/md';
import {
  NoteBtn,
  NoteContent,
  NoteControls,
  NoteTitle,
  NoteContainer,
} from './NoteForm.styles';

const NoteForm = (props) => {
  const initialState = {
    title: props.item ? props.item.title : '',
    content: props.item ? props.item.content : '',
  };
  const [item, setItem] = useState(initialState);
  const [showTitle, setShowTitle] = useState(false);
  const [clearForm, setClearForm] = useState(false);

  const { title, content } = item;

  const onFocusNote = () => {
    setShowTitle(true);
  };

  const onChangeValues = (e) => {
    const { name, value } = e.target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onFocusNote();
    const values = [title, content];

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value;
    });

    if (allFieldsFilled) {
      const item = {
        id: nanoid(),
        title,
        content,
      };
      setClearForm(true);
      props.handleOnSubmit(item);
    }
  };

  return (
    <NoteContainer onSubmit={handleOnSubmit}>
      {showTitle && (
        <NoteTitle
          type="text"
          name="title"
          defaultValue={!clearForm ? title : ''}
          placeholder="Title"
          onChange={onChangeValues}
        />
      )}
      <NoteContent
        type="text"
        name="content"
        defaultValue={!clearForm ? content : ''}
        placeholder="Write a note"
        onChange={onChangeValues}
        onFocus={onFocusNote}
        onBlur={onFocusNote}
      />
      {showTitle && (
        <NoteControls>
          <NoteBtn>
            <MdOutlinePalette />
          </NoteBtn>
          <NoteBtn>
            <MdOutlineArchive />{' '}
          </NoteBtn>
          <NoteBtn type="submit">CLOSE</NoteBtn>
        </NoteControls>
      )}
    </NoteContainer>
  );
};

export default NoteForm;
