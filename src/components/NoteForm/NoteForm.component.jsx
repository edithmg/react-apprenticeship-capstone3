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
    archive: props.item ? props.item.archive : false,
    trash: props.item ? props.item.trash : false,
  };
  const [item, setItem] = useState(initialState);
  const [showTitle, setShowTitle] = useState(false);
  const [clearForm, setClearForm] = useState(false);

  const { title, content, archive, trash } = item;

  const onFocusNote = () => {
    setShowTitle(true);
  };

  const onChangeValues = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case 'archive':
        console.log(name, value);
        setItem((prevState) => ({
          ...prevState,
          [name]: true,
        }));
        break;
      case 'trash':
        setItem((prevState) => ({
          ...prevState,
          [name]: true,
        }));
        break;
      default:
        setItem((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onFocusNote();
    const values = [title, content, archive, trash];

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value;
    });

    if (allFieldsFilled) {
      const item = {
        id: nanoid(),
        title,
        content,
        archive,
        trash,
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
            <MdOutlinePalette title="Change note color" />
          </NoteBtn>
          <NoteBtn>
            <MdOutlineArchive
              name="archive"
              value={archive}
              onClick={onChangeValues}
              title="Archive note"
            />{' '}
          </NoteBtn>
          <NoteBtn type="submit">CLOSE</NoteBtn>
        </NoteControls>
      )}
    </NoteContainer>
  );
};

export default NoteForm;
