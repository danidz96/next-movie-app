import axios from 'axios';

const MOVIE_DATA = [];

const BASE_URL = 'http://localhost:3000';

const CATEGORY_DATA = [
  { id: 'c-1', name: 'drama' },
  { id: 'c-2', name: 'action' },
  { id: 'c-3', name: 'adventure' },
  { id: 'c-4', name: 'historical' },
];

export const getMovies = () => {
  return axios
    .get(`${BASE_URL}/api/v1/movies`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getMovieById = (id) => {
  return axios
    .get(`${BASE_URL}/api/v1/movies/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  });
};

export const createMovie = (movie) => {
  const id = Math.random().toString(36).substr(2, 5);
  const newMovie = { ...movie, id };
  return axios
    .post(`${BASE_URL}/api/v1/movies`, newMovie)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then((res) => res.data);
};
