import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';
import Footer from '../components/footer';
import { getMovies } from '../actions';

const Home = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <SideMenu />
      </div>
      <div className="col-lg-9">
        <Carousel />
        <div className="row">
          <MovieList movies={props.movies} />
        </div>
      </div>
    </div>
  </div>
);

Home.getInitialProps = async () => {
  const movies = getMovies();
  return { movies };
};

export default Home;
