import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'api';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchForm, SearchFormInput, SearchFormButton } from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName');

  const handleSubmit = event => {
    event.preventDefault();
    if (movieName.trim() === '') {
      Notiflix.Notify.warning('Search querry should not be empty!');
      return;
    }
    onSubmit(searchInput);
    setSearchInput('');
  };
  };
  return (
    <>
      <SearchForm>
        <SearchFormButton type="submit"></SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
          value={movieName}
          onChange={event => setSearchParams({ movieName: event.target.value })}
        />
      </SearchForm>
    </>
  );
}
