import { useEffect, useState } from 'react';
import { fetchTrend } from 'Api';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieTrend = async () => {
      try {
        const response = await fetchTrend();
        setMovies(response.results);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };

    fetchMovieTrend();
  }, []);

  return ( 
  <ul>
     {movies.map(movie => (
        <li key={movie.id}>
          <Link
                  to={`/movieDetails/${movie.id}`}
            state={{ from: location }}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
  </ul>)
}
