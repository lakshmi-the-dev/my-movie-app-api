import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

const movies = [
  {
    title: "Inception",
    image: "https://example.com/inception.jpg",
    description: "A mind-bending thriller by Christopher Nolan."
  },
  {
    title: "The Dark Knight",
    image: "https://example.com/dark_knight.jpg",
    description: "A gripping tale of Batman and Joker."
  },
  {
    title: "Interstellar",
    image: "https://example.com/interstellar.jpg",
    description: "A space exploration epic."
  }
];

function MoviesPage() {
  return (
    <>
      <Header />
      <MovieList movies={movies} />
    </>
  );
}

export default MoviesPage;
