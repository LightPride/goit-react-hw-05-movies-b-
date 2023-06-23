import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'api';
import { MovieImage } from './MovieDetails.styled';
export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getMovieById(movieId);
        // setMovie(data.results);
        setMovie(data);
        console.log(data);
      } catch (error) {}
    };
    fetchImages();

    //
  }, [movieId]);

  return (
    <>
      <MovieImage
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>Popularity: {movie.popularity}</p>
      <p>Overview: {movie.overview}</p>
      {/* <p>Genres: {movie.genres}</p> */}
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
