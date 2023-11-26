import { useLocation } from 'react-router-dom';
import { fetchTrend } from 'Api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Title, MovieUl, MovieLi, Link, Img, MovieTitle } from './HomePage.styled';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [trendings, setTrendings] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const data = await fetchTrend();
        setTrendings(data);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <div>LOADING...</div>}
      <MovieUl>
        {trendings.map(({ id, original_title, poster_path }) => {
          return (
            <MovieLi key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
         src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : 'https://www.colorbook.io/imagecreator.php?width=200&height=300&hex=%23cecece'
        }
          alt={original_title}
        />
                <MovieTitle>{original_title}</MovieTitle>
              </Link>
            </MovieLi>
          );
        })}
      </MovieUl>
    </>
  );
};
