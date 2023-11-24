import { useState, useEffect } from 'react';
import { fetchMovies } from 'Api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetchMovies(searchParams.get('name'));

        if (Array.isArray(response?.data?.results)) {
          setMovies(response.data.results);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log('Error fetching movies:', error);
        setMovies([]);
      }
    };

    if (searchParams.has('name')) {
      searchMovies();
    }
  }, [searchParams]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: inputValue });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder=""
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movieDetails/${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No movies found</h3>
      )}
    </>
  );
}
