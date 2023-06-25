import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'api';
export default function Reviews() {
  const [reviews, setReviews] = useState({});
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);

        console.log(data);
      } catch (error) {}
    };
    fetchMovieReviews();

    //
  }, [movieId]);
  return (
    <>
      {reviews.results > 0 ? (
        <ul>
          {reviews.results.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>
                  {' '}
                  <b>Author:</b> {author}
                </p>
                <p>
                  {' '}
                  <b>Review:</b> {content}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}

// (

//     {reviews ? (<ul>{reviews.results.map(({ author, content, id }) => {
//             return (
//               <li key={id}>
//                 <p>Author: {author}</p>
//                 <p>Review: {content}</p>
//               </li>)}) : (<p>We don't have any reviews for this movie</p>)}

//   )
