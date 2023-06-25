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

export const getMovieById = async id => {
  const response = await fetch(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }

  return response.json();
};

export const getMovieCredits = async id => {
  const response = await fetch(
    `${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }

  return response.json();
};

export const getMovieReviews = async id => {
  const response = await fetch(
    `${BASE_URL}3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }

  return response.json();
};

export const getMoviesBySearch = async searchQuery => {
  const response = await fetch(
    `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}`
  );
  if (!response.ok) {
    throw new Error('Oops... something went wrong...');
  }

  return response.json();
};
