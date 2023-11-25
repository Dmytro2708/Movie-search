import {
  Outlet,
  useLocation,
  useParams,
  Link,
  NavLink,
} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails } from 'Api';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa6';

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinckRef = useRef(location);
  const param = useParams();

  const goBack = backLinckRef.current.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true);
      try {
        const fetchedMovie = await fetchMovieDetails(param.movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [param.movieId]);

  return (
    <>
      {isLoading && <div>LOADING...</div>}

      <div>
        <Link to={goBack}>
          <FaArrowLeft />
          Go Back
        </Link>
      </div>

      <div>
        {movie && (
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://www.colorbook.io/imagecreator.php?width=400&height=600&hex=%23cecece'
              }
              alt={movie.original_title}
            />
            <div>
              <h1>{movie.original_title}</h1>
              <p>User score: {movie.vote_average}</p>
              <div>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h2>Genres</h2>
                <ul>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
