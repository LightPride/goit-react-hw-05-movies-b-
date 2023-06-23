import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
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
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
}
