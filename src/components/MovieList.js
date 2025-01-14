import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie, index) => (
          <Movie key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
