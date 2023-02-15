import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = 'f4ab05a4495544c3ddb1a6a0996ec43d';
// Get Popular Movies
export const getPopularMovies = async () => {
  const resp = await axios(`${apiURL}/movie/popular?api_key=${apiKey}`);
  return resp.data.results;
};

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios(`${apiURL}/movie/upcoming?api_key=${apiKey}`);
  return resp.data.results;
};

// Get Popular TV
export const getPopularTV = async () => {
  const resp = await axios(`${apiURL}/tv/popular?api_key=${apiKey}`);
  return resp.data.results;
};

// Get Family TV
export const getFamilyTV = async () => {
  const resp = await axios(
    `${apiURL}/discover/tv?api_key=${apiKey}&with_genres=10751`,
  );
  return resp.data.results;
};

//Get Movie Details
export const getMovie = async id => {
  const resp = await axios(`${apiURL}/movie/${id}?api_key=${apiKey}`);
  return resp.data;
};

//Search Movie or Tv
export const searchMovieTv = async (query, type) => {
  const resp = await axios(
    `${apiURL}/search/${type}?api_key=${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
