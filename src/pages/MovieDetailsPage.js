import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from 'Api';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { id } = useParams();
  const goBack = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={goBack.current}>go back</Link>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.overview}
      />
      <div>
        {movie.genres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
      <p>{movie.overview}</p>
      <div>
        <Link to={`/movieDetails/${id}/cast`}>Cast</Link>
        <Link to={`/movieDetails/${id}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
}
