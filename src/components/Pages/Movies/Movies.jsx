import { useState, useEffect } from 'react';
import { getMoviesBySearch } from 'api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieLink, PageLi } from './Movies.styled';
import SearchBar from '../../SearchBar/SearchBar';
import Notiflix from 'notiflix';
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const previousSearch = searchParams.get('query');
  //
  useEffect(() => {
    if (previousSearch) {
      fetchMovies(previousSearch);
    }
  }, [previousSearch]);
  const handleFormSubmit = movieName => {
    fetchMovies(movieName);
  };

  const fetchMovies = async movieName => {
    try {
      const data = await getMoviesBySearch(movieName);
      setMovies(data.results);
      localStorage.setItem('movies', JSON.stringify(data.results));

      if (data.results.length === 0) {
        Notiflix.Notify.warning('There are no films found');
      }
    } catch (error) {}
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>
      <ul>
        {movies.map(({ title, name, id }) => {
          return (
            <PageLi key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                {name ? name : title}
              </MovieLink>
            </PageLi>
          );
        })}
      </ul>
    </>
  );
}
