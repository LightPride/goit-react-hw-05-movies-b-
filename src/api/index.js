const BASE_URL = 'https://api.themoviedb.org/';

const API_KEY = 'ec3ca0e4403710b7fc1497b1dbf32c54';

export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}3/trending/all/day?api_key=${API_KEY}&language=en-US`
  );
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }
  return response.json();
};