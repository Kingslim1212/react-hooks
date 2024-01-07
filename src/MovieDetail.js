import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  let { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <div>Loading...</div>; // Or handle the non-existing movie scenario
  }

  return (
    <div className="movie-detail">
      {/* Movie detail content */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
