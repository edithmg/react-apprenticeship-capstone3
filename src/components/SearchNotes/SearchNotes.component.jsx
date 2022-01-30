import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import GlobalContext from '../../context/GlobalContext';
import Note from '../Note';
import {
  SearchSection,
  SearchBox,
  SearchForm,
  SearchLabel,
  SearchResults,
} from './SearchNotes.styles';

const SearchNotes = () => {
  const { items, setItems } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState('');
  let filterNotes = items;

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    filterNotes = items.filter((item) => item.title.includes(searchTerm));
    console.log(filterNotes);
  };

  return (
    <>
      <SearchSection>
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchLabel htmlFor="searchbox">
            <span className="visually-hidden">Search notes</span>
          </SearchLabel>
          <SearchBox
            type="text"
            placeholder="Search notes"
            name="searchbox"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchForm>

        <SearchResults>
          {items
            .filter((item) => {
              if (searchTerm === '') {
                return item;
              } else if (item.title.includes(searchTerm)) {
                return item;
              }
            })
            .map((item) => (
              <Note
                key={item.id}
                {...item}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
        </SearchResults>
      </SearchSection>
    </>
  );
};

export default SearchNotes;
