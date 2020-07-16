import React, { useEffect, useState } from 'react';
import MovieCreateForm from '../../../components/movieCreateForm';
import { getMovieById } from '../../../actions';

const EditMovie = ({ query }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const { id } = query;
    getMovieById(id).then((movie) => {
      setMovie(movie);
    });
  }, []);

  return (
    <div className="container">
      <h1>Edit the Movie</h1>
      {JSON.stringify(movie)}
      <MovieCreateForm />
    </div>
  );
};

EditMovie.getInitialProps = ({ query }) => {
  return { query };
};

export default EditMovie;
