import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'api';
import MovieImage from './MovieImage';
import Loader from 'components/Loader/Loader';
import { MovieImageWrapper } from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    setIsLoading(true);
    const fetchMovieById = async () => {
      try {
        const data = await getMovieById(movieId);
        setIsLoading(false);
        setMovie(data);
      } catch (error) {}
    };
    fetchMovieById();

    //
  }, [movieId]);

  return (
    <>
      <MovieImageWrapper>
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <MovieImage movie={movie}></MovieImage>
        )}
      </MovieImageWrapper>
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
