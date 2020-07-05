import React, { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MovieList;
