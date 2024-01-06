import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';




const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'inception_poster.jpg',
      rating: 4.8,
    },
    // Add more movies as needed
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState('');

  const handleFilterChange = (type, value) => {
    if (type === 'title') {
      setFilterTitle(value);
    } else if (type === 'rate') {
      setFilterRate(value);
    }
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRate === '' || movie.rating >= filterRate)
  );

  return (
    <div className="app">
      <h1>Movie List</h1>
      <Filter
        filterTitle={filterTitle}
        filterRate={filterRate}
        onFilterChange={handleFilterChange}
      />
      <MovieList movies={filteredMovies} />
      <div>
        <h2>Add a New Movie</h2>
        {/* You can add a form to input new movie details */}
        {/* For simplicity, let's assume a function handleAddMovie exists */}
        {/* Example: <button onClick={() => handleAddMovie(newMovie)}>Add Movie</button> */}
      </div>
    </div>
  );
};

export default App;
