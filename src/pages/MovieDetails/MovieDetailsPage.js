import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieDetails } from 'Api';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa6';
import {
  GoBackWrapp,
  GoBackLink,
  Wrapper,
  Img,
  InfoWrapp,
  MovieTitle,
  Title,
  GenresUl,
  GenreLi,
  AddInfoTitle,
  List,
  ListItem,
  StyledNavLink
} from './MovieDetailsPage.styled';

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

      <GoBackWrapp>
        <GoBackLink to={goBack}>
          <FaArrowLeft />
          Go Back
        </GoBackLink>
      </GoBackWrapp>

      <div>
        {movie && (
          <Wrapper>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : 'https://www.colorbook.io/imagecreator.php?width=400&height=600&hex=%23cecece'
              }
              alt={movie.original_title}
            />
            <InfoWrapp>
              <MovieTitle>{movie.original_title}</MovieTitle>
              <p>User score: {movie.vote_average}</p>
              <div>
                <Title>Overview</Title>
                <p>{movie.overview}</p>
              </div>
              <div>
                <Title>Genres</Title>
                <GenresUl>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <GenreLi key={genre.id}>{genre.name}</GenreLi>
                    ))}
                </GenresUl>
              </div>
            </InfoWrapp>
          </Wrapper>
        )}
      </div>
      <div>
        <AddInfoTitle>Additional information</AddInfoTitle>
        <List>
          <ListItem>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </ListItem>
        </List>
      </div>
      <Outlet />
    </>
  );
}
