// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MovieList from './MovieList';
// import MovieDetail from './MovieDetail'; // Create this component separately
// import Filter from './Filter';

// const App = () => {
//   const [movies, setMovies] = useState([
//     {
//       title: 'Movie 1',
//       description: 'Description for Movie 1',
//       posterURL: 'https://example.com/movie1.jpg',
//       rating: 4.5,
//       trailerLink: 'https://www.youtube.com/embed/your-trailer-id',
//     },
//     // Add more movies as needed
//   ]);

//   // ... rest of your component code

//   return (
//     <Router>
//       <div className="app">
//         <h1>Movie Collection</h1>
//         <Filter onFilter={filterMovies} />
//         <Routes>
//           <Route path="/" element={<MovieList movies={movies} />} />
//           <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail'; // Ensure this component is created
import Filter from './Filter'; // Ensure this component is created

const App = () => {
  const initialMovies = [
    {
      title: 'Movie 1',
      description: 'Description for Movie 1',
      posterURL: 'https://example.com/movie1.jpg',
      rating: 4.5,
      trailerLink: 'https://www.youtube.com/embed/your-trailer-id',
    },
    // ... more movies
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const filterMovies = (filterCriteria) => {
    const filtered = movies.filter(movie => {
      return (filterCriteria.title ? movie.title.includes(filterCriteria.title) : true) &&
             (filterCriteria.rating ? movie.rating >= filterCriteria.rating : true);
    });
    setFilteredMovies(filtered);
  };

  // Rest of your component...

  return (
    <Router>
      <div className="app">
        <h1>Movie Collection</h1>
        <Filter onFilter={filterMovies} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movie/:title" element={<MovieDetail movies={filteredMovies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

