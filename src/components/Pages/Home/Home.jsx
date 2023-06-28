import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import { useLocation } from 'react-router-dom';
import { MovieLink, PageLi } from './Home.styled';
export default function Home() {
  const [popularFilms, setPopularFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setPopularFilms(data.results);
      } catch (error) {}
    };
    fetchMovies();
  }, []);
  return (
    <ul>
      {popularFilms.map(({ title, name, id }) => {
        return (
          <PageLi key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {name ? name : title}
            </MovieLink>
          </PageLi>
        );
      })}
    </ul>
  );
}
