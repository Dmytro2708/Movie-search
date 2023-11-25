import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f1614a9cad52a59723a17c6a53b1596c';


export const fetchTrend = async () => {
  
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return response.data.results;
};

export const fetchMovies = async query => {
  
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );

  return response.data.results;
};


export const fetchMovieDetails = async movieId => {

  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};



export const fetchMovieCredits = async movieId => {
 
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data.cast;
};


export const fetchMovieReviews = async movieId => {
  
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return response.data.results;
};
