import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import { Link, useLocation } from 'react-router-dom';
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
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {name ? name : title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
