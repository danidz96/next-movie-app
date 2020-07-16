import React from 'react';
import Router from 'next/router';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById, updateMovie } from '../../../actions';

const EditMovie = ({ movie }) => {
  const handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updatedMovie) => {
      Router.push(`/movies/${movie.id}`);
    });
  };

  return (
    <div className="container">
      <h1>Edit the Movie</h1>
      {JSON.stringify(movie)}
      <MovieCreateForm submitButton="Update" initialData={movie} handleFormSubmit={handleUpdateMovie} />
    </div>
  );
};

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default EditMovie;
