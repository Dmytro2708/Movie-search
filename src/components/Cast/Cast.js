import { fetchMovieCredits } from 'Api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { CastUl, CastLi, Img, Text } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    async function getCastDetails() {
      setIsLoading(true)
      try {
        const castData = await fetchMovieCredits(param.movieId);
        setCast(castData);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    getCastDetails();
  }, [param.movieId]);

  return (
    <>{isLoading && <div>LOADING...</div>}
      {cast && cast.length > 0 ? (
        <CastUl>
          {cast.map(({ id, character, name, profile_path }) => (
            <CastLi key={id}>
              <Img
                src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : 'https://www.colorbook.io/imagecreator.php?width=200&height=300&hex=%23cecece'
                  }
                alt={name}
              />
              <Text>Name: {name}</Text>
              <Text>Character: {character}</Text>
            </CastLi>
          ))}
        </CastUl>
      ) : (
        <Text>We do not know thees Actors</Text>
      )}
    </>
  );
};