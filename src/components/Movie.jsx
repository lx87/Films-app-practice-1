const Movie = ({ movie }) => {
  return (
    <div className="card">
      {
        movie.Poster === 'N/A' ? ( <img src={`https://placehold.co/600x600?text=${movie.Title}`}/>) 
        : 
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      }

      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
