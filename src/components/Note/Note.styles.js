import styled from 'styled-components';

export const NoteContainer = styled.form`
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  width: auto;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
`;

export const NoteTitle = styled.input`
  border: none;
  display: block;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  outline: none;
  &::placeholder {
    opacity: 1;
  }
`;

export const NoteContent = styled.textarea`
  border: none;
  display: block;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  resize: none;
  overflow: hidden;
  min-height: 10px;
  &::placeholder {
    opacity: 1;
  }
`;

export const NoteControls = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const NoteBtn = styled.button`
  margin-left: 10px;
  size: 1.5em;
  cursor: pointer;
  padding: 0.5em;
`;
