import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import { Link } from 'react-router-dom';
export default function Home() {
  const [popularFilms, setPopularFilms] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getTrendingMovies();
        setPopularFilms(data.results);
        console.log(data);
      } catch (error) {}
    };
    fetchImages();

    //
  }, []);
  return (
    <ul>
      {popularFilms.map(({ name, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
