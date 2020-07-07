import { useRouter } from 'next/router';

const Movie = () => {
  const { query } = useRouter();
  return (
    <div className="container">
      <h1>movie with id: {query.id}</h1>
    </div>
  );
};

export default Movie;
