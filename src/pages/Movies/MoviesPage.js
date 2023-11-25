import { fetchMovies } from 'Api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovieByQuery() {
      setIsLoading(true);
      try {
        const fetchedMovies = await fetchMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieByQuery();
  }, [query]);

  const searchHandler = evt => {
    evt.preventDefault();

    const searchQuery = evt.currentTarget.query.value;

    searchParams.set('query', searchQuery.toLowerCase().trim());
    setSearchParams(searchParams);
  };

  return (
    <>
      <div>
        <form onSubmit={searchHandler}>
          <div>
            <input type="text" name="query" autoComplete="off" placeholder="" />
            <label>Search movies</label>
            <button type="submit">
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
      {isLoading && <div>LOADING...</div>}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title, poster_path }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : 'https://www.colorbook.io/imagecreator.php?width=200&height=300&hex=%23cecece'
                    }
                    alt={original_title}
                  />
                  <p>{original_title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
