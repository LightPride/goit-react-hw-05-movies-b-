import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import { getMovieById } from 'api';
import MovieImage from './MovieImage';
import Loader from '../../Loader/Loader';
import {
  MovieImageWrapper,
  GoBackLink,
  MovieTitle,
  PageUl,
  PageLi,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
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
      <GoBackLink to={backLinkLocationRef.current}>Go back</GoBackLink>
      <MovieImageWrapper>
        {isLoading ? <Loader /> : <MovieImage movie={movie}></MovieImage>}
      </MovieImageWrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <p>
        Popularity:{' '}
        {movie.popularity ? movie.popularity : 'No information found'}
      </p>
      <p>
        Overview: {movie.overview ? movie.overview : 'No information found'}
      </p>
      {movie.genres && (
        <>
          <div>
            Genres:
            <PageUl>
              {movie.genres.map(({ name, id }) => {
                return <PageLi key={id}>{name}</PageLi>;
              })}
            </PageUl>
          </div>
        </>
      )}
      <PageUl>
        <PageLi>
          <Link to={'cast'}>Cast</Link>
        </PageLi>
        <PageLi>
          <Link to={'reviews'}>Reviews</Link>
        </PageLi>
      </PageUl>
      <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
    </>
  );
}
