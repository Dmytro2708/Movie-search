import axios from 'axios';
const API_KEY = 'f1614a9cad52a59723a17c6a53b1596c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrend = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovies = async searchMovies => {
  try {
    const response = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&query=${searchMovies}`
    );
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovieCredits = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};

export const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільмів:', error);
    return null;
  }
};
