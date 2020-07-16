import Modal from './modal';
import MovieCreateForm from './MovieCreateForm';
import { createMovie } from '../actions';
import { useRouter } from 'next/router';

const SideMenu = ({ categories }) => {
  const router = useRouter();
  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
      router.push('/');
    });
  };

  return (
    <div>
      <Modal hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">Shop Name</h1>
      <div className="list-group">
        {categories.map((category) => (
          <a key={category.id} href="#" className="list-group-item">
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
