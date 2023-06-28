import { useState } from 'react';
import { getMoviesBySearch } from 'api';
import { Link, useLocation } from 'react-router-dom';

import SearchBar from '../../SearchBar/SearchBar';
import Notiflix from 'notiflix';
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  // useEffect(() => {
  //   if (searchName !== '' || null || undefined) {
  //     fetchMovies(searchName);
  //   }
  // }, [searchName]);
  const handleFormSubmit = movieName => {
    fetchMovies(movieName);
  };

  const fetchMovies = async movieName => {
    try {
      const data = await getMoviesBySearch(movieName);
      setMovies(data.results);

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
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {name ? name : title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
