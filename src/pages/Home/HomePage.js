import { Link, useLocation } from 'react-router-dom';
import { fetchTrend } from 'Api';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

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
      <h1>Trending today</h1>
      {isLoading && <div>LOADING...</div>}
      <ul>
        {trendings.map(({ id, original_title, poster_path }) => {
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
    </>
  );
};
