import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import { Link } from 'react-router-dom';
export default function Home() {
  const [popularFilms, setPopularFilms] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setPopularFilms(data.results);
        console.log(data.results);
      } catch (error) {}
    };
    fetchMovies();

    //
  }, []);
  return (
    <ul>
      {popularFilms.map(({ title, name, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{name ? name : title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
