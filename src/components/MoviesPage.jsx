import { useEffect, useState } from 'react'

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=57c79ce10e23ef791ba21f414f13068f')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);
    

  return (
    <div className="app">
      <h1>Popular Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
              <p>Rating: {movie.vote_average}</p>
            </div>
         ))}  </div>
      )}
    </div> 
  );
  
}

export default MoviesPage