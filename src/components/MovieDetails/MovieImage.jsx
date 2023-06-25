import { MovieImageWrap } from './MovieDetails.styled';

export default function MovieImage({ movie }) {
  return (
    <>
      {movie.poster_path ? (
        <MovieImageWrap
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <MovieImageWrap
          src={
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
          }
          alt={movie.title}
        />
      )}
    </>
  );
}
