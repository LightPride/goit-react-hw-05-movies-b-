import { useState } from 'react';
import { getMoviesBySearch } from 'api';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';
import Notiflix from 'notiflix';
export default function Movies() {
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = movieName => {
    const fetchMovies = async () => {
      try {
        const data = await getMoviesBySearch(movieName);
        setMovies(data.results);

        if (data.results.length === 0) {
          Notiflix.Notify.warning('There are no films found');
        }
      } catch (error) {}
    };
    fetchMovies();
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>
      <ul>
        {movies.map(({ title, name, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{name ? name : title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
