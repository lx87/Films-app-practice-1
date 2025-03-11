import Movie from './Movie';

const Movies = ({ movies, hasSearched }) => {
  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <div className="row cards">
        {movies.length ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Movie movie={movie} />
            </div>
          ))
        ) : ( 
          hasSearched && (
            <div className='v-stack align-items-center justify-content-center not-found' id='error'>
                <i className="bi bi-4-square me-2 fs-1"></i>
                <i className="bi bi-0-square me-2 fs-1"></i>
                <i className="bi bi-4-square fs-1"></i>
                <h1 className='mt-2'>Not found!</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Movies;
