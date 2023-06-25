import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'api';
import MovieImage from './MovieImage';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const data = await getMovieById(movieId);

        setMovie(data);
      } catch (error) {}
    };
    fetchMovieById();

    //
  }, [movieId]);

  return (
    <>
      <MovieImage movie={movie}></MovieImage>

      <h1>{movie.title}</h1>
      <p>
        Popularity:{' '}
        {movie.popularity ? movie.popularity : 'No information found'}
      </p>
      <p>
        Overview: {movie.overview ? movie.overview : 'No information found'}
      </p>
      {movie.genres && (
        <ul>
          {movie.genres.map(({ name, id }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      )}
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
