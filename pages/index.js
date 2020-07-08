import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import Footer from '../components/footer';
import { getMovies } from '../actions';

const Home = ({ movies, images }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <SideMenu />
      </div>
      <div className="col-lg-9">
        <Carousel images={images} />
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  </div>
);

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name,
  }));

  return { movies, images };
};

export default Home;
