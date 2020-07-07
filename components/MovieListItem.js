const MovieListItem = ({ movie }) => {
  const shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }

    return text;
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <a href="#">
          <img className="card-img-top" src={movie.image} alt="" />
        </a>
        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{movie.name}</a>
          </h4>
          <h5>$24.99</h5>
          <p className="card-text">{shorten(movie.description, 100)}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{movie.rating}</small>
        </div>
      </div>
    </div>
  );
};

export default MovieListItem;
