import React, { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';
import { getMovies } from '../actions';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
