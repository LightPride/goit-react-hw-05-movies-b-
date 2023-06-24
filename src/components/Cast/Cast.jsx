import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'api';
import { CreditsImage } from './Cast.styled';

export default function Cast() {
  const [credits, setCredits] = useState({});
  const params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCredits(data);
      } catch (error) {}
    };
    fetchMovieCredits();

    //
  }, [movieId]);
  return (
    <>
      {credits.cast && (
        <ul>
          {credits.cast.map(
            ({
              name,
              id,
              character,
              profile_path = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
            }) => {
              return (
                <li key={id}>
                  {profile_path ? (
                    <CreditsImage
                      src={`https://image.tmdb.org/t/p/original${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <CreditsImage
                      src={
                        'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                      }
                      alt={name}
                    />
                  )}
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            }
          )}
        </ul>
      )}
      {credits.crew && (
        <ul>
          {credits.crew.map(
            ({
              name,
              id,
              job,
              profile_path = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
            }) => {
              return (
                <li key={id}>
                  {profile_path ? (
                    <CreditsImage
                      src={`https://image.tmdb.org/t/p/original${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <CreditsImage
                      src={
                        'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                      }
                      alt={name}
                    />
                  )}

                  <p>{name}</p>
                  <p>{job}</p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
}
