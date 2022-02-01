import styled from 'styled-components';

export const SearchSection = styled.section`
  margin: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  width: 600px;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
`;

export const SearchLabel = styled.label`
  width: 20px;
  span {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const SearchBox = styled.input`
  border: none;
  display: block;
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  outline: none;
  &::placeholder {
    opacity: 1;
  }
`;

export const SearchControls = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SearchBtn = styled.button`
  margin-left: 10px;
  size: 1.5em;
  cursor: pointer;
  padding: 0.5em;
`;

export const SearchResults = styled.div`
  margin: 1.5rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
