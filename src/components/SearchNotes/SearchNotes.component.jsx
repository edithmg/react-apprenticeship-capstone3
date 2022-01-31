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
  const [showResults, setShowResults] = useState(false);
  //let filterNotes = items;

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
    //filterNotes = items.filter((item) => item.title.includes(searchTerm));
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
            placeholder="Search notes and hit enter"
            name="searchbox"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchForm>
        {showResults && (
          <SearchResults>
            {items.length > 0 ? (
              items
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
                ))
            ) : (
              <h4>No notes</h4>
            )}
          </SearchResults>
        )}
      </SearchSection>
    </>
  );
};

export default SearchNotes;
