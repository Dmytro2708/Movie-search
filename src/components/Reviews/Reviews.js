import { fetchMovieReviews } from 'Api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { ReviewsLi, Author } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    setIsLoading(true);
    try {
      async function getReviewsDetails() {
        const reviews = await fetchMovieReviews(param.movieId);
        setReviews(reviews);
      }
      getReviewsDetails();
    } catch (error) {
      toast.error('Sorry, there is no results');
    } finally {
      setIsLoading(false);
    }
  }, [param.movieId]);

  return (
    <>
      {isLoading && <div>LOADING...</div>}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, id, content }) => (
            <ReviewsLi key={id}>
              <Author>Author: {author}</Author>
              <p>{content}</p>
            </ReviewsLi>
          ))}
        </ul>
      ) : (
        <p>There is no reviews yet</p>
      )}
    </>
  );
};