import {
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './SearchBar.styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
export default function SearchBar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const handleInputChange = event => {
    setSearchInput(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchInput.trim() === '') {
      Notiflix.Notify.warning('Search querry should not be empty!');
      return;
    }
    onSubmit(movieName);
    setSearchInput('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
          value={searchInput}
          onChange={event => {
            handleInputChange(event);
            setSearchParams({ query: event.target.value });
          }}
        />
        <SearchFormButton type="submit"></SearchFormButton>
      </SearchForm>
    </>
  );
}
